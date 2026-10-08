# SW Calendar — local customer-test prototype

Current feedback scope and checkpoints: [Handover / Resume](HANDOVER-RESUME.md).
Development resumed on 9 October from Bobbie's selected email. Draft changes
require review; this branch does not update the previously published live app.
The theme uses red, black and white from the supplied company reference.

Single-file Swedish time clock for iPhone-sized screens. Customer selection,
clock in/out, persisted active/completed sessions, month calendar and JSON backups.
No dependencies, accounts, Google sync, deployment or external requests.

## Local review

Serve this directory with `python -m http.server 8765 --bind 127.0.0.1` and open
http://127.0.0.1:8765 on the computer. Keep the server running. This address is
local to the computer: it cannot be opened on an iPhone to reach this computer.
Do not use direct file opening for acceptance: storage/download behavior differs.
Public customer-test hosting is authorized on GitHub Pages. Open the published site in Safari; real iPhone acceptance remains pending.

Add a demo customer, clock in, reload, clock out and reload again. Change month
and customer to inspect completed totals. Export regularly; import validates the
whole backup and asks before replacing existing data. Browser-cleared storage is
not recoverable without a backup. Use one browser tab and device; no shared state.
Times use device wall clock and local timezone; totals display whole minutes.

Completed work sessions now have a plain-text comment field (up to 2,000
characters) and a Save comment button. Comments follow the existing local save
and JSON backup paths. Earlier backups without comments remain importable.

Use “Lägg till tid i efterhand” for a missed clock-in: select the customer, enter
local start/end dates and times and optionally a comment. Save adds one completed
pass to calendar/totals/backups. End must follow start; overlapping passes for
the same customer are rejected. Enter uninterrupted work only for now; pause
entry is a separate upcoming feature. Existing browser-only storage limits apply.

Run `node test.cjs`: syntax, backup validation/round trip, duplicate IDs, invalid
timestamps/customer references and cross-midnight interval accounting. Desktop
browser checks cover customer creation, active-pass reload and completed-pass
reload. iPhone-width layout is a responsive check, not Safari/device compatibility
certification. Real iPhone Safari acceptance and customer feedback remain pending.

Task: https://trello.com/c/WspYgj1Y
Portfolio: https://trello.com/c/KtjimVD8
Repository not yet chosen. Keep this prototype separate from AUTOPRODUCER code.
