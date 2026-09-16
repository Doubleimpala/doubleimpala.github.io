#!/usr/bin/env bash
set -euo pipefail

# Render the homepage locally in headless Chrome before deployment.
# Usage: ./scripts/verify-preview.sh [output.png] [page]
PREVIEW_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PREVIEW_OUTPUT="${1:-/tmp/doubleimpala-preview.png}"
PREVIEW_PAGE="${2:-Home.dc.html}"
PREVIEW_PORT="$(python3 -c 'import socket; s = socket.socket(); s.bind(("127.0.0.1", 0)); print(s.getsockname()[1]); s.close()')"
PREVIEW_TEMP_DIR="$(mktemp -d)"
PREVIEW_CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

cleanup() {
  if [[ -n "${PREVIEW_SERVER_PID:-}" ]]; then
    kill "$PREVIEW_SERVER_PID" 2>/dev/null || true
  fi
  rm -rf "$PREVIEW_TEMP_DIR"
}
trap cleanup EXIT

if [[ ! -x "$PREVIEW_CHROME" ]]; then
  echo "Google Chrome is required at: $PREVIEW_CHROME" >&2
  exit 1
fi

python3 -m http.server "$PREVIEW_PORT" --bind 127.0.0.1 --directory "$PREVIEW_ROOT" >"$PREVIEW_TEMP_DIR/server.log" 2>&1 &
PREVIEW_SERVER_PID=$!

for _ in {1..20}; do
  if curl -fsS "http://127.0.0.1:$PREVIEW_PORT/$PREVIEW_PAGE" >/dev/null; then
    break
  fi
  sleep 0.1
done

"$PREVIEW_CHROME" \
  --headless \
  --disable-gpu \
  --no-first-run \
  --no-default-browser-check \
  --hide-scrollbars \
  --user-data-dir="$PREVIEW_TEMP_DIR/chrome-profile" \
  --window-size=1440,1200 \
  --screenshot="$PREVIEW_OUTPUT" \
  "http://127.0.0.1:$PREVIEW_PORT/$PREVIEW_PAGE?preview=$(date +%s)" \
  >/dev/null 2>&1

if [[ ! -s "$PREVIEW_OUTPUT" ]]; then
  echo "Preview screenshot was not created. See $PREVIEW_TEMP_DIR/server.log" >&2
  exit 1
fi

echo "Preview verified: $PREVIEW_OUTPUT"
