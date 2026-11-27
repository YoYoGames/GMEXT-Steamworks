#!/bin/bash
# Builds libSteamworks.so in the Steam Linux Runtime 1.0 (scout) SDK, the way the shipped library is built.
# The result needs glibc 2.14 at most and no libstdc++ or libgcc_s (SteamRT's g++-9 links them in), so it loads
# in scout, soldier and sniper and on older distributions. Needs Docker and the Steam SDK in source/steamworks_sdk.
# CMakePresets.json needs a newer CMake than scout has (3.18), so this configures without a preset.
set -eu
SRC="$(cd "$(dirname "$0")/../.." && pwd)"
# Pinned to the scout SDK image the shipped 3.0.1 library was built with (BUILD_ID 1.0.20261021.266054), so the
# output matches it byte for byte. A newer image may change the output; set SCOUT_SDK_IMAGE to use another one.
IMAGE="${SCOUT_SDK_IMAGE:-registry.gitlab.steamos.cloud/steamrt/scout/sdk:1.0.20261021.266054@sha256:d721294557004228c91057292a61d108d9192aca0cd2623792b065e05c0babc7}"
REPO="$(cd "$SRC/../../../../.." && pwd)"
docker run --rm -u "$(id -u):$(id -g)" -e HOME=/tmp -v "$REPO:$REPO" -w "$SRC" "$IMAGE" bash -c '
  set -e
  CC=gcc-9 CXX=g++-9 cmake -G Ninja -S . -B out/build/linux-scout-release \
    -DCMAKE_BUILD_TYPE=Release -DCMAKE_POSITION_INDEPENDENT_CODE=ON -DEXT_OUTPUT_DIR=../
  cmake --build out/build/linux-scout-release'
SO="$SRC/../libSteamworks.so"
echo "Built $SO"
objdump -p "$SO" | grep NEEDED || true
echo "Highest glibc: $(objdump -T "$SO" | grep -o 'GLIBC_[0-9.]*' | sort -Vu | tail -1)"
if objdump -p "$SO" | grep -q 'libstdc++'; then echo "error: the library needs libstdc++" >&2; exit 1; fi
