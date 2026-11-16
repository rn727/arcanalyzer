# Traceability Matrix

**Team number:** [2]
**Filled in by (captain):** [Nhan, Karan, Sidharth, Hamza]

Fill this in **after** everyone's work is merged. One row per requirement.

## Requirements to Tests

| Requirement ID | From Part 5 | Owner | Test case IDs | Result | GitHub Issue # |
|---|---|---|---|---|---|
| REQ-MG-01 *(example)* | CR-3 | Maria | MG-01, MG-02 | 1 Pass, 1 Fail | #12 |
| G-KH-01 | New | Karan Hooda | KH-03 | 1 Pass | N/A |
| REQ-KH-01 | CR-3 | Karan Hooda | KH-01, KH-02 | 1 Pass, 1 Fail | #102 |
| REQ-KH-02 | CR-1 | Karan Hooda | None | No test linked | N/A |
| REQ-KH-03 | CR-2 | Karan Hooda | KH-03 | 1 Pass | N/A |
| NFR-KH-01 | New | Karan Hooda | KH-04 | 1 Pass | N/A |
| G-NN-01 | New | Nhan Nguyen | NN-01, NN-02 | 1 Pass, 1 Fail | #96 |
| REQ-NN-01 | CR-1, CR-2 | Nhan Nguyen | NN-01 | 1 Pass | N/A |
| REQ-NN-02 | CR-4 | Nhan Nguyen | NN-03 | 1 Fail | #97 |
| REQ-NN-03 | New | Nhan Nguyen | NN-04 | 1 Pass | N/A |
| NFR-NN-01 | New | Nhan Nguyen | NN-02 | 1 Fail | #96 |
| G-HA-01 | New | Hamza Akbari | HA-04 | 1 Pass | N/A |
| REQ-HA-01 | CR-1 | Hamza Akbari | HA-01 | 1 Pass | N/A |
| REQ-HA-02 | New | Hamza Akbari | HA-02 | 1 Fail | #12 |
| REQ-HA-03 | New | Hamza Akbari | HA-03 | 1 Pass | N/A |
| NFR-HA-01 | New | Hamza Akbari | HA-05 | 1 Pass | N/A |
| G-SN-01 | New | Sidharth Nair | SN-01, SN-04 | 1 Pass, 1 Fail | #89 |
| REQ-SN-01 | CR-4 | Sidharth Nair | SN-01 | 1 Fail | #89 |
| REQ-SN-02 | New | Sidharth Nair | SN-03, SN-04 | 2 Pass | N/A |
| REQ-SN-03 | CR-5 | Sidharth Nair | None | No test linked | #33 |
| NFR-SN-01 | New | Sidharth Nair | SN-02 | 1 Pass | N/A |

## Gaps

- Requirements with no test: REQ-KH-02, G-SN-02, REQ-SN-03
- Tests with no requirement: None
- Part 5 requirements not brought over: None
- Part 6 tests not brought over: None

## Test Type Coverage

Put a Test ID next to each type. Team minimum: all 7.

| Test type | Test ID |
|---|---|
| Unit | KH-04 |
| Integration | SN-01, NN-03, HA-01, HA-05 |
| System (E2E) | SN-03 |
| Acceptance | SN-04, NN-01, KH-03, HA-04 |
| Boundary Value | NN-04, KH-01, KH-02, HA-02 |
| Negative | NN-02, HA-03 |
| Security | SN-02 |

## Validation Findings

A Validation finding means the system does what the requirement says, but the requirement does not serve the Stakeholder Goal. Remember the alphabetical leaderboard.

| Requirement ID | Goal it fails | Why | Issue # |
|---|---|---|---|
| None | N/A | No validation failures identified. | N/A |

**If you found none,** explain in 2 to 3 sentences why every requirement truly serves its Goal:
Every requirement met their goals and what was needed of them, the code itself was intended for the viewers correctly but there was errors within the code itself. It wasn't a flaw with the requirements and system as a whole but rather with how the code was written hence it was mainly a verification error.



## Summary

| | Count |
|---|---|
| Part 5 requirements carried over | 8 |
| New requirements added | 13 |
| Part 6 tests upgraded (out of 3) | 3 |
| Total requirements | 21 |
| Total test cases | 17 |
| Passed | 12 |
| Failed | 5 |
| Issues opened | 5 |
| Critical issues | 1 |

**In one sentence, would you ship this system today? Why or why not?**

No, I would not ship the system today because five tests failed, including important issues with rating validation, review character limits, and report submissions.