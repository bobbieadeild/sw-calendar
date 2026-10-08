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
- [ ] Apply agreed SW visual theme (exact visual reference needed)
- [x] SW-002: comments on completed work sessions — draft implementation
- [ ] Backend login and customer hosting
- [ ] Server saves every five minutes and daily/weekly/monthly/yearly backups
- [ ] Validate the requested 3-2-1 backup arrangement; retention/restore policy
- [ ] Retrospective entry of work times and breaks

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
