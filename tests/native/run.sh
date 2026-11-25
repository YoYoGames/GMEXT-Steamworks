#!/bin/sh
# Builds and runs the native unit tests (no Steam needed). Run from anywhere.
set -e
here=$(cd "$(dirname "$0")" && pwd)
src="$here/../../source/Steamworks_gml/extensions/Steamworks/source/src"
out=$(mktemp -d)
${CXX:-c++} -std=c++17 -Wall -Wextra -I"$src" "$here/receive_hold_back_test.cpp" -o "$out/receive_hold_back_test"
"$out/receive_hold_back_test"
rm -rf "$out"
