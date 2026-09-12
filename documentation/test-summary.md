# Test Summary — My First Website

## Project Overview

**Project:** My First Website (Jira key: `MFW`)
**Type:** Manual QA / Functional Testing
**Scope:** UI component testing across navigation, single UI elements (inputs, buttons, checkboxes, select fields, tabs, text areas, alerts, drag-and-drop, iframes, pop-ups) and a multi-field registration form.

This project simulates a real-world QA workflow: features were broken into epics, test cases were written as user stories with acceptance criteria, executed, and any deviations from expected behavior were logged as bug reports — all tracked in Jira and exported here for portfolio purposes.

## Feature Areas Covered (Epics)

| Epic | Feature Area |
|---|---|
| MFW-1 | Navigation / Homepage |
| MFW-2 | Inputs |
| MFW-3 | Buttons |
| MFW-4 | Checkbox |
| MFW-5 | Select |
| MFW-6 | New Tab |
| MFW-7 | Text Area |
| MFW-8 | Alerts |
| MFW-9 | Drag and Drop |
| MFW-10 | Iframes |
| MFW-11 | Pop-Up |
| MFW-12 | Forms — Practice Form |

## Test Case Summary

| Metric | Count |
|---|---|
| Total test cases (Stories) | 32 |
| Passed (Done) | 22 |
| In Progress | 10 |
| Not yet executed | 0 |

## Bug Report Summary

| Metric | Count |
|---|---|
| Total bugs logged | 10 |
| Priority: Medium | 10 |
| Severity: Major | 2–3 |
| Severity: Minor | 2 |
| Severity: Low | 1 |

**Notable defects found:**
- Inconsistent page titles across navigation menu items (MFW-46)
- Generic/unhelpful error messaging on password validation failure (MFW-47)
- Text case auto-conversion bug in a Text Area field (MFW-48)
- Drag-and-drop widget allows invalid re-drag behavior before drop (MFW-50)
- Picture upload field accepts non-image files with no validation (MFW-55) — flagged as a core validation gap

## Methodology

1. **Test planning** — Features grouped into epics per UI component/page.
2. **Test case design** — Each testable behavior written as a user story with clear acceptance criteria (Given/When/Then style expectations).
3. **Execution** — Test cases run manually against the live application; status tracked as To Do → In Progress → Done.
4. **Defect logging** — Failures documented as bug reports with component, priority, severity, preconditions, steps to reproduce, expected result, and actual result.
5. **Traceability** — Bugs are linked back to the user story/acceptance criteria they violate, and to the relevant epic/feature area.

## Notes

Internal Jira metadata (account IDs, internal attachment links, watcher lists) has been removed from the exported data for this public portfolio. Full traceability (test case ↔ bug ↔ feature) is preserved via the Jira issue keys.
