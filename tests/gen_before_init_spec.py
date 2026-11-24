#!/usr/bin/env python3
"""Generate tests/gametest/before_init_all_async.json from spec.gmidl and the native sources.

Every async function (one whose native implementation guards with STEAM_ASYNC_GUARD) is called before
steam_init with placeholder arguments, and the spec asserts that each one's callback runs with
result == SteamApiResult.Fail. Run from the repository root; --check exits 1 if the committed file is stale.
"""
import json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "source/Steamworks_gml/extensions/Steamworks/source")
OUT = os.path.join(ROOT, "tests/gametest/before_init_all_async.json")


def read(path):
    with open(path, encoding="utf-8-sig") as f:
        return f.read()


def async_functions():
    names = []
    for f in sorted(os.listdir(os.path.join(SRC, "src"))):
        if not f.endswith(".cpp"):
            continue
        text = read(os.path.join(SRC, "src", f))
        for m in re.finditer(r"STEAM_ASYNC_GUARD(?:_RET)?\(", text):
            head = text[: m.start()]
            sig = list(re.finditer(r"\n[\w:<>]+\s+(steam_\w+)\s*\(", head))[-1]
            names.append(sig.group(1))
    return names


def parse_params(spec, name):
    m = re.search(r"function\s+" + name + r"\s*\((.*?)\)\s*:", spec, re.S)
    if not m:
        raise SystemExit("not in spec.gmidl: " + name)
    params, depth, cur = [], 0, ""
    for ch in m.group(1):
        if ch in "[(<":
            depth += 1
        elif ch in "])>":
            depth -= 1
        if ch == "," and depth == 0:
            params.append(cur.strip())
            cur = ""
        else:
            cur += ch
    if cur.strip():
        params.append(cur.strip())
    out = []
    for p in params:
        hint = re.search(r"type_hint\s*=\s*(?:`([^`]+)`|([^\],]+))", p)
        pm = re.search(r"(\w+)\s*:\s*([\w?]+)\s*$", re.sub(r"\[.*?\]", "", p, flags=re.S).strip())
        out.append((pm.group(1), pm.group(2), (hint.group(1) or hint.group(2)).strip() if hint else None))
    return out


def placeholder(ptype, hint):
    if ptype == "func":
        return "__cb"
    if hint and hint.endswith("?"):
        return "undefined"
    if ptype == "string":
        return '""'
    if ptype == "bool":
        return "false"
    if hint == "buffer":
        return "__buf"
    if hint and (hint.startswith("array") or hint.endswith("[]")):
        return "[]"
    return "0"


def main():
    spec = read(os.path.join(SRC, "spec.gmidl"))
    chunks, timeline = [], []
    setup = [
        "global.__before_init_buffer = buffer_create(16, buffer_grow, 1);",
    ]
    names = async_functions()
    for i, name in enumerate(names):
        args = [placeholder(t, h) for (_, t, h) in parse_params(spec, name)]
        # a chunk can't define a function literal: the callback comes from the demo's scr_gametest_support
        call = (
            "var __buf = global.__before_init_buffer;\n"
            "var __cb = gametest_async_recorder(\"%s\");\n"
            "%s(%s);\nreturn 1;" % (name, name, ", ".join(args))
        )
        chunks.append({"id": "call_%d" % i, "src": call})
        chunks.append({"id": "check_%d" % i,
                       "src": "var r = gametest_async_result(\"%s\"); return is_undefined(r) ? -1 : r;" % name})
        timeline.append({"frame": 2, "assert": {"id": "call_%d" % i, "name": name + " can be called before steam_init", "expect": 1}})
        timeline.append({"frame": 5, "assert": {"id": "check_%d" % i, "name": name + " calls back with SteamApiResult.Fail", "expect": 2}})
    chunks.insert(0, {"id": "setup", "src": "\n".join(setup) + "\nreturn steam_api_is_initialized() ? 1 : 0;"})
    timeline.insert(0, {"frame": 1, "assert": {"id": "setup", "name": "Steam is not initialised", "expect": 0}})
    result = {
        "version": 1, "seed": 1, "total_frames": 8, "fps": 60, "stop_on_error": False,
        "chunks": chunks, "timeline": timeline,
    }
    text = json.dumps(result, indent=1) + "\n"
    if "--check" in sys.argv:
        current = open(OUT).read() if os.path.exists(OUT) else ""
        if current != text:
            print("tests/gametest/before_init_all_async.json is out of date: run tests/gen_before_init_spec.py")
            sys.exit(1)
        print("up to date (%d async functions)" % len(names))
        return
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    open(OUT, "w").write(text)
    print("wrote %s (%d async functions)" % (os.path.relpath(OUT, ROOT), len(names)))


if __name__ == "__main__":
    main()
