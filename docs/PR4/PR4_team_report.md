# PR4 Team Report

**Team number:** 2

**Team members:** Hamza Akbari, Karan Hooda, Nhan Nguyen, Sidharth Nair


## 1. Bug Triage Table

| Test name | Bucket | Issue link | Severity | Priority | Owner | Status |
|---|---|---|---|---|---|---|
| HA-02: Rating boundaries are enforced at 0 and 10 | Code bug | [Issue 95](https://github.com/rn727/arcanalyzer/issues/95) | Major | Major | Hamza Akbari | PR 120 merged |
| HA-03: Whitespace-only review text is rejected | Code bug | [Issue 121](https://github.com/rn727/arcanalyzer/issues/121) | Minor | Minor | Hamza Akbari | PR 125 merged |
| KH-01: Reviews longer than 500 characters are rejected | Code bug | [Issue 102](https://github.com/rn727/arcanalyzer/issues/102) | Low | High | Karan Hooda | PR 122 merged |
| KH-02: Failed review submissions display an error message | Code bug | [Issue 123](https://github.com/rn727/arcanalyzer/issues/123) | Low | Medium | Karan Hooda | PR 133 merged |
| test_report_endpoint_exists: Backend report endpoint does not exist | Code bug | [Issue 89](https://github.com/rn727/arcanalyzer/issues/89) | Major | High | Sidharth Nair | PR 132 merged |
| SN-01: Reports are not sent to the backend | Code bug | [Issue 115](https://github.com/rn727/arcanalyzer/issues/115) | Major | High | Sidharth Nair | PR 138 merged |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

## 2. Regression Log

No regressions found.

**Date full test suite was run:** 11/22/2026

## 3. Final Test Run

![Final Test Run](screenshots/final_test_run.png)

**Remaining failing tests:** None. All frontend and backend tests passed successfully.

## 4. Feature Decision

**Feature name:**  

**User story:** As a ___, I want ___, so that ___.

**Why we chose this feature:**  

**Who owns which part:**
- Karan Hooda:
- Sidharth Nair:
- Nhan Nguyen:
- Hamza Akbari:

**2 test cases:**
1. 
2. 

## 5. Board Snapshot

![Board Snapshot](screenshots/board.png)

## 6. Sprint Summary

Some items that are fixed are the boundaries for the ratings, whitespace only review test case, review char limit, and the report function. Some issues that remain broken or wonky include the episode range for arcs being limited to 1-12 and no easy way for a moderator to handle reports. As soon as the next sprint starts, our team needs to lock down on the communication and ensure every requirement is clear to every team member. On the technical side, taking a look at any remaining bugs as well as considering potential expansions of the original handoff scope both remain on the board.
