#!/usr/bin/env bash
# Build a fully static copy of the site into ./out
# Used for the GitHub Pages preview deployment. Vercel should build normally
# (no NEXT_EXPORT), which enables server rendering and API routes.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "== building static export"
NEXT_EXPORT=1 npx next build

if [ -d out ]; then
  echo "== export ready: ./out ($(find out -type f | wc -l | tr -d ' ') files)"
else
  echo "!! export failed: no ./out directory" >&2
  exit 1
fi
