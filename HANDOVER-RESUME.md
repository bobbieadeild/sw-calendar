# 📋 SW Calendar — email feedback alpha

Updated 9 October 2026. Bobbie resumed development from the selected inbox email.
The same feedback is already recorded on the [Portfolio card](https://trello.com/c/KtjimVD8).
Use that public scope reference; keep the original email and sender data private.

## Existing MVP — reuse

- [x] Customer selection, clock in/out and monthly totals
- [x] Local browser persistence of active/completed sessions
- [x] Validated JSON backup export/import
- [x] Public customer-test prototype previously published
- [ ] Actual iPhone Safari close/reopen and backup acceptance

## Customer email scope

- [ ] Confirm Safari persistence and explain browser-cleared-data limitations
- [ ] Verify export/import on the actual target device
- [x] SW-003: red/black/white theme from Bobbie's supplied company reference — draft
- [x] SW-002: comments on completed work sessions — draft implementation
- [ ] Backend login and customer hosting
- [ ] Server saves every five minutes and daily/weekly/monthly/yearly backups
- [ ] Validate the requested 3-2-1 backup arrangement; retention/restore policy
- [x] SW-004: retrospective work time entry — draft
- [x] SW-005: add/remove retrospective pauses on completed sessions — draft
- [x] SW-006: explicit 24-hour input/display for work and pauses — draft
- [x] SW-007: remove a mistaken completed work session with confirmation — draft

## SW-002 receipt

Comments have a labelled text field and explicit save button for each completed
session. They use the existing validated local save path, conflict protection and
JSON export/import; older backups without comments remain valid. Comments are
plain text, limited to 2,000 characters. Active-pass comments and backend storage
are not added in this bounded step.

Validation: Node syntax and backup/data checks pass, including multiline comment
round trip, legacy data, empty/max-length comments and invalid comment rejection.
Existing malformed backups, timestamps and midnight accounting still pass.
Actual browser interaction and iPhone Safari acceptance remain pending.

Human review pending. Branch `sw-002/session-comments`, stacked from current
remote main `458e647`. No merge or publication of this change. Existing live
prototype remains the previous revision. No paid model call or email send.
This development was performed by the assistant from the read email; it does
not claim an unattended Mail Responder worker executed the project.

Next bounded customer criterion: retrospective work/break entry. Backend login,
server storage and backups need separate concrete implementation/hosting scope.
Customer-facing reply remains unsent until separately approved.

## SW-003 receipt — company color reference

Bobbie supplied the Södra Wättern Svets AB reference image. Its red, black and
white palette replaces the green prototype theme: red primary action/today
outline, dark text and stop button, white cards and neutral surfaces. Company
name appears in the header. The image is a visual color reference, not an exact
brand specification; the selected red is `#e71924`. No logo asset was extracted.

Validation: white text on the selected red has computed contrast 4.60:1;
existing Node syntax/data checks still pass. Device/visual acceptance remains
pending. No new behavior, merge, deployment, model call or email sending.
Human review of the theme draft is next; original public app is unchanged.

## SW-004 receipt — manual time entry

For the selected customer, enter local start/end date and time and an optional
comment, then save. The completed session appears in the existing calendar,
totals and JSON backups; the view moves to its start month. Previous sessions
are preserved. Invalid local dates, zero/reversed durations and overlap with
that customer's completed/active session reject before save. Adjacent sessions
and simultaneous entries for different customers remain allowed. Local storage
failure/conflict handling is reused. No server save is implied.

The neutral background is `#f5f5f5`; the palette remains red/black/white.
Validation: Node syntax/data checks pass, including manual entry/comment backup
round trip, unchanged previous data, customer-scoped overlap/active conflict,
adjacent intervals, invalid calendar dates and existing midnight accounting.
Actual browser form interaction and Safari/device acceptance remain pending.
Ambiguous autumn clock-change times use the browser's local Date interpretation;
no time-zone selection is added. Pauses remain the next bounded criterion.
No merge, deployment, model call or email sending. Human review pending.

## SW-005 receipt — manual pauses

Completed sessions accept multiple start/end pauses and allow removal to correct
an entry. Validation requires each pause inside its session, positive duration,
no overlaps and at most 100 pauses per session. Adjacent pauses are permitted.
Net worked time subtracts the actual pause interval in session/day/month totals,
including cross-midnight pauses. Existing manual-session overlap checks use the
whole pass, so another work entry cannot silently fill its recorded break.

Pauses follow existing local persistence/conflict handling and JSON backup
validation. Legacy backups without pauses and comments remain compatible.
Node syntax/data checks pass for pause round trip, preserved original data,
out-of-bounds/overlapping/duplicate/invalid pause rejection and cross-midnight
net accounting. A local browser review attempt timed out before loading the
preview, so actual form/UI/Safari acceptance is still unverified. The temporary
preview server was stopped. No deployment or customer storage was touched.

Human review pending. Backend login, server saves and backup/restore policies
remain in the original email scope; they are not replaced by this local alpha.

## SW-006 receipt — 24-hour clock

Replaced native datetime-local widgets, whose AM/PM presentation depends on the
browser/OS, with separate date and explicit `HH:MM` text fields for sessions and
pauses. Required patterns and existing parsing accept 00:00–23:59 and preserve
local-date validation. Saved timestamps explicitly use the h23 display cycle.
No stored timestamp/data schema change. Existing syntax/data checks pass;
actual browser/device acceptance remains pending. No merge or deployment.

## SW-007 receipt — remove a mistaken work session

Each completed session has a delete button. Confirmation identifies customer
and 24-hour start/end and explains that its comment/pauses are removed too;
cancellation performs no save. The existing validated local save path updates
calendar/totals only after successful persistence. Customers, other sessions and
an active clocked-in pass remain unchanged. No wider redesign.

Node syntax/data checks pass, including targeted removal with pauses, preserved
other/customer/active data, unchanged original snapshot and JSON round trip.
Actual confirmation/form interaction and Safari acceptance remain pending.
Deletion has no undo UI; restore requires a previous JSON backup. No real user
session was deleted by the agent. No merge, deployment, paid call or email send.

## SW-008 receipt — employee selection and mobile flow

- [x] Create/select local employee numbers; retain leading zeros and prevent duplicates
- [x] Associate new clock/manual passes with the selected number
- [x] Filter calendar/pass list by employee and customer; preserve unassigned legacy data
- [x] Numeric time entry: 930/0930 → 09:30, 9 → 09:00; invalid times stay rejected
- [x] Flow: employee → timer → calendar → manual entry → backup
- [x] Node syntax/data checks and interactive 320px/390px browser acceptance
- [ ] Real iPhone Safari acceptance and human review/integration

Browser fixture: employee 0012/customer Mobilprov, 09:30–17:00 saved from numeric
input; 12:00–12:30 pause gives 7h net. Employee 0013 shows no such pass. Reload
and reselect 0012 restores 7h. At 320px and 390px no horizontal overflow was detected; duplicate employee creation was rejected in the UI.
This is browser viewport validation, not physical Safari verification. Employee
numbers are identifiers, not login credentials. Existing JSON backups remain
valid and older sessions are not assigned automatically. No deployment, merge,
paid model call or email send. Stacked review branch: sw-008/employee-mobile-flow.

## SW-009 receipt — customer deletion and dated backups

- [x] Comments already persisted in localStorage and JSON; confirmed download/import round trip
- [x] exportedAt UTC timestamp inside JSON and timestamped filenames
- [x] Customer deletion panel normally hidden; warning expands only when invoked
- [x] Exact DELETE required; cancel preserves data; warning describes all employees' passes
- [x] Active work blocks deletion; other customers/active work preserved by data checks
- [x] Browser fixture deleted and restored from the downloaded backup, including comment and pause
- [ ] Real Safari acceptance and release integration
- [ ] Later: optional Google Drive app-folder backup on opening, OAuth, failure/retention/restore rules

Storage is persistent localStorage, not only cache; clearing website data can remove
it. Google Drive sync is deferred to keep this alpha bounded and requires a new
account authorization and service integration. No such authorization is requested
in this step. Dated JSON can be saved manually to Drive meanwhile.

Release preparation: SW-009 stacks all requested alpha changes through SW-008.
The existing Safari test address is https://bobbieadeild.github.io/sw-calendar/.
Git publication of this review branch is not a live update. Earlier explicit
no-merge instruction still requires approval for integrating these drafts.
Mail Responder currently has read-only Gmail transport and private unsent drafts;
actual sending is not implemented/authorized through that transport. User has
requested sending the update after the new version is available. Do not send an
old-version link or claim this module sent a message. Prepare delivery after
integration/publication, then implement/authorize the dedicated sending capability.
