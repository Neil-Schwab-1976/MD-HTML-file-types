# PR: PWA scaffold: index, app.js, manifest, service worker, icons

What I changed

- Added a small PWA scaffold on branch `pwa/scaffold`:
  - `index.html` — app shell that embeds your existing `GAPS_Reaching_Out.html` and links to `app.js` and `manifest.json`
  - `app.js` — navigation + UI stubs (`go`, `setMode`, `openCover`, `startBreath`, `addDialogueNote`, `handleResumeFile`, `sosPressed`, `tfbSelect`, `dpaAcesChoice`, `addFlourishEntry`), clock, and service-worker registration
  - `manifest.json` — PWA metadata (start_url, display, icons, theme/background color)
  - `service-worker.js` — basic cache-on-install service worker (caches `index.html`, `GAPS_Reaching_Out.html`, `app.js`, `manifest.json`, icons)
  - `icons/icon-192.svg` and `icons/icon-512.svg` — placeholder icons used by the manifest
  - `package.json` — small dev script for local static serving

Why

- Makes the existing single HTML act like an installable, offline-capable app (PWA) with minimal changes.
- Provides safe JS stubs so the UI controls don’t throw errors while you iterate.
- Keeps the repo static-only (no backend changes); any uploads or persistent data remain local until you add a server.

How to preview locally

1. Serve the repo root (required for service worker behavior):
   - `npx http-server -c-1 .`
   - or `npx serve .`
   - or `python -m http.server 8080`
2. Open `http://localhost:8080/index.html` (or `/GAPS_Reaching_Out.html`).
3. DevTools → Application to inspect the manifest and (after SW registers) Service Worker.
4. On supported browsers you should see an Install prompt once manifest + SW are recognized.

Notes & next steps

- The service worker uses a simple cache-first install strategy. For production we should add cache-versioning and an update strategy.
- The `app.js` stubs intentionally do not send or persist user data. If you want persistent uploads, auth, or server-side features, we should design a secure backend (S3 + serverless or small Node/Express API).
- I can:
  - add a GitHub Actions workflow to publish to GitHub Pages automatically,
  - replace placeholder icons with final artwork,
  - implement additional client-side features or wire a backend.

One-click PR page

- Open to create the PR in your browser:
  https://github.com/Neil-Schwab-1976/MD-HTML-file-types/compare/main...pwa/scaffold?expand=1

If you want me to also add the GH Actions deploy workflow to this branch, reply “Add deploy workflow” and I’ll push it.