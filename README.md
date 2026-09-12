# QA Testing Portfolio — My First Website

A manual QA testing project demonstrating end-to-end test planning, execution tracking, and defect reporting, managed in Jira and exported here for review.

## 📁 Structure

```
QA-Testing-Portfolio/
│
├── README.md
├── test-cases/
│   └── test-cases.csv        # 32 test cases (user stories + acceptance criteria)
├── test-results/
│   └── test-results.csv      # Execution status per test case
├── bug-reports/
│   └── bugs.csv               # 10 defects logged during testing
├── documentation/
│   └── test-summary.md       # Project overview, methodology, and results
└── screenshots/               # Supporting screenshots (add evidence here)
```

## 🔍 What's in here

- **`test-cases/`** — Functional test cases covering site navigation and 10+ UI components (inputs, buttons, checkboxes, select fields, drag-and-drop, iframes, pop-ups, alerts) plus a multi-field registration form, each written with clear acceptance criteria.
- **`test-results/`** — Pass/in-progress status for every test case, mapped from Jira execution status.
- **`bug-reports/`** — Structured defect reports (priority, severity, steps to reproduce, expected vs. actual result) for issues found during execution.
- **`documentation/`** — A summary of scope, methodology, and key metrics — the best starting point if you want the short version.

## 📊 Quick Stats

- **32** test cases across **12** feature areas
- **22** passed, **10** in progress
- **10** bugs logged, ranging from low-severity UI inconsistencies to a major file-upload validation gap

## 🛠 Tools

- **Jira** — test case and defect tracking
- Manual functional testing against a live web application

---
See [`documentation/test-summary.md`](documentation/test-summary.md) for the full breakdown.
