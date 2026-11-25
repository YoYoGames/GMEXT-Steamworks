#!/usr/bin/env python3
"""Generate tests/gametest/before_init_all_async.json from spec.gmidl and the native sources.

Every async function (one whose native implementation guards with STEAM_ASYNC_GUARD) is called before
steam_init with placeholder arguments, and the spec asserts that each one's callback runs with a failed result
(SteamApiResult.Fail, or false for a payload whose result is a success flag). Every spec.gmidl function that takes a
callback must use the guard or be listed in NOT_GUARDED with a reason. Run from the repository root; --check exits 1
if the committed file is stale.
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
        for m in re.finditer(r"STEAM_ASYNC_GUARD(?:_RET)?\(\s*gm_structs::(\w+)", text):
            head = text[: m.start()]
            sig = list(re.finditer(r"\n[\w:<>]+\s+(steam_\w+)\s*\(", head))[-1]
            names.append((sig.group(1), m.group(1)))
    return names


def failed_result(spec, payload):
    """What result the failed callback carries: SteamApiResult.Fail (2), or false for a bool success flag."""
    m = re.search(r"class `\[\[" + payload + r"\]\]`[^{]*\{(.*?)\n\}", spec, re.S)
    r = re.search(r"property\s+result\s*:\s*(\w+)", m.group(1)) if m else None
    if not r:
        raise SystemExit("payload has no result field: " + payload)
    return False if r.group(1) == "bool" else 2


# Functions that take a callback but report a failure before Steam is initialised by their return value instead (an
# invalid handle), or whose payload has no failure value. Every other function with a callback parameter must use
# STEAM_ASYNC_GUARD, or this script fails.
NOT_GUARDED = {
    "steam_utils_check_file_signature": "result is a SteamUtilsCheckFileSignature outcome, with no failure value",
    "steam_user_request_auth_ticket_for_web_api": "returns 0 (no ticket) before init",
}
for _name in ("add_promo_item", "add_promo_items", "consume_item", "exchange_items", "generate_items",
              "get_items_by_id", "submit_update_properties", "transfer_item_quantity", "trigger_item_drop",
              "grant_promo_items"):
    NOT_GUARDED["steam_inventory_" + _name] = "returns k_SteamInventoryResultInvalid before init"


def param_list(spec, start, name):
    """The text of a function's parameter list, from just after its "(" to the matching ")". A backtick value
    (type_hint, gml_default) can hold "(", ")" and ":", so it's skipped."""
    i, depth, tick = start, 1, False
    while depth:
        if i >= len(spec):
            raise SystemExit("unbalanced parameter list in spec.gmidl: " + name)
        ch = spec[i]
        if ch == "`":
            tick = not tick
        elif not tick and ch == "(":
            depth += 1
        elif not tick and ch == ")":
            depth -= 1
        i += 1
    return spec[start:i - 1]


def functions_with_callback(spec):
    names = []
    for m in re.finditer(r"function\s+(steam_\w+)\s*\(", spec):
        params = param_list(spec, m.end(), m.group(1))
        if re.search(r"\w+\s*:\s*func\b", params) and not re.match(r"steam_\w+_set_callback_", m.group(1)):
            names.append(m.group(1))
    return names


def parse_params(spec, name):
    m = re.search(r"function\s+" + name + r"\s*\(", spec)
    if not m:
        raise SystemExit("not in spec.gmidl: " + name)
    plist = param_list(spec, m.end(), name)
    params, depth, cur = [], 0, ""
    in_tick = False
    for ch in plist:
        # A backtick value (type_hint, gml_default) is opaque: its brackets and commas aren't the parameter list's
        if ch == "`":
            in_tick = not in_tick
        elif not in_tick and ch in "[(<":
            depth += 1
        elif not in_tick and ch in "])>":
            depth -= 1
        if ch == "," and depth == 0 and not in_tick:
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
    guarded = async_functions()
    names = [n for (n, _) in guarded]
    missing = [n for n in functions_with_callback(spec) if n not in names and n not in NOT_GUARDED]
    stale = [n for n in NOT_GUARDED if n in names]
    if missing or stale:
        for n in missing:
            print("takes a callback but doesn't use STEAM_ASYNC_GUARD and isn't in NOT_GUARDED: " + n)
        for n in stale:
            print("in NOT_GUARDED but uses STEAM_ASYNC_GUARD: " + n)
        sys.exit(1)
    for i, (name, payload) in enumerate(guarded):
        expect = failed_result(spec, payload)
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
        timeline.append({"frame": 5, "assert": {"id": "check_%d" % i,
                                                "name": name + (" calls back with SteamApiResult.Fail" if expect is not False else " calls back with result = false"),
                                                "expect": expect}})
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
