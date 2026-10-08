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

Create/select a demo employee number and add a demo customer, clock in, reload, clock out and reload again. Change month
and customer to inspect completed totals. Export regularly; import validates the
whole backup and asks before replacing existing data. Browser-cleared storage is
not recoverable without a backup. Use one browser tab and device; no shared state.
Times use device wall clock and local timezone; totals display whole minutes.

Completed work sessions now have a plain-text comment field (up to 2,000
characters) and a Save comment button. Comments follow the existing local save
and JSON backup paths. Earlier backups without comments remain importable.

Use “Lägg till tid i efterhand” for a missed clock-in: select the employee number and customer, enter
local start/end dates and times and optionally a comment. Save adds one completed
pass to calendar/totals/backups. End must follow start; overlapping passes for
the same employee are rejected, even across customers. Existing browser-only storage limits apply.
Time entry uses explicit 24-hour text fields, `HH:MM` (for example `09:00` or
`17:30`), with separate dates. AM/PM is not used. Saved pass/pause timestamps
also display with an explicit 24-hour clock. Numeric entry accepts 930/0930 as 09:30 and 9 as 09:00 (normalized when leaving the field). Invalid times are rejected.

On a completed session, add a pause with its own local start/end date and time.
Pauses must stay inside that session and cannot overlap. The session, day and
month totals show net worked time; a pause across midnight is split between days.
Use “Ta bort paus” to correct an entry. Pauses are retained in JSON backups;
older backups without pauses remain valid. Pauses on a currently running session
can be entered after clocking out.

Use “Ta bort arbetspass” on a completed session to correct a mistaken entry.
Confirm the displayed customer/start/end before deletion; cancelling preserves
everything. Its comment and pauses are removed with it and totals update. Export
a JSON backup first if you may need to restore it. Active work is unaffected.

Run `node test.cjs`: syntax, backup validation/round trip, duplicate IDs, invalid
timestamps/customer references and cross-midnight interval accounting. Desktop
browser checks cover customer creation, active-pass reload and completed-pass
reload. iPhone-width layout is a responsive check, not Safari/device compatibility
certification. Real iPhone Safari acceptance and customer feedback remain pending.

Task: https://trello.com/c/WspYgj1Y
Portfolio: https://trello.com/c/KtjimVD8
Repository not yet chosen. Keep this prototype separate from AUTOPRODUCER code.

Employee numbers are local numeric identifiers (1–20 digits), not authentication. Leading zeros are retained. New passes require a selected number; calendar totals filter by number and customer. Older unassigned passes remain accessible through the legacy selector option and are never silently reassigned. Backups preserve the registry and assignments.

Flow: employee number → timer/customer → calendar (expand saved passes) → manual time → backup. Browser checks at 320 and 390 pixels complement, but do not replace, real iPhone Safari acceptance.

JSON export includes comments, pauses and employee assignments, plus exportedAt
(UTC), with a timestamped filename. Saved data uses localStorage; it survives normal
reloads but can be lost when website data is cleared. Optional Google Drive backup
is a future milestone. You can manually keep downloaded JSON files in Drive today.

“Radera kund” expands an otherwise hidden warning. Type exact DELETE to enable
removal of the customer and all its completed sessions/comments/pauses across
employee numbers. Cancel closes it without changes. Clock out before deletion;
export first to make recovery possible. The downloaded backup restores deleted data.
