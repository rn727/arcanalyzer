# Testable Requirements: ArcAnalyzer

**Team number:** [2]
**Inherited from:** Team [1]

## Who Owns What

| Area of the system | Owner | ID prefix |
|---|---|---|
| [example: Accounts and login] | [name] | [initials, like MG] |
| Frontend Review Display and Reporting |Nhan Nguyen | NN |
| Rating/review API and persistence | Hamza Akbari | HA |
| | | |

<!--
RULES
- Only edit YOUR OWN section below. This keeps merge conflicts away.
- Categories: G = Stakeholder Goal, REQ = Functional, NFR = Non-Functional.
- "From Part 5": write the original CR ID and its text from SYSTEM_MAP.md. Write "New" if you added it this sprint.
- Status: Confirmed or Suspected bug. No Unconfirmed allowed. Every Suspected bug needs a GitHub Issue.
- The test: could a stranger write a Pass or Fail test without asking you a question?
-->

---

## Section: Rating/review API and persistence (Hamza Akbari)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-HA-01 | Viewer | Viewers need to rate an arc and leave a written review so other viewers can understand its quality. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-HA-01 | When a viewer submits a rating and written review for a named arc, the system shall save the review and show the updated arc. | Confirmed | CR-1: The system shall allow a user to submit a rating and review text for a named arc. |
| REQ-HA-02 | The system shall accept ratings from 0 to 10. It shall reject ratings below 0 or above 10 without saving them. | Suspected bug | New |
| REQ-HA-03 | If a viewer enters an arc name that does not exist, the system shall display "Arc not found" and leave the existing reviews unchanged. | Confirmed | New |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-HA-01 | When an arc already has 50 reviews, submitting another rating shall finish within 2 seconds and show the updated arc. | Confirmed | New |

---

## Section: Frontend Review Display and Reporting (Nhan Nguyen)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-NN-01 | Viewer | A viewer should be able to read trustworthy reviews and report inappropriate content for a story arc. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-NN-01 | When the backend returns reviews for an arc, the frontend shall display each review's text and rating in the review section. | Confirmed | CR-1 and CR-2, rewritten for the frontend |
| REQ-NN-02 | When a user enters a non-empty report reason and submits a report, the frontend shall send the reported review and reason to the backend. | Suspected bug | CR-4: The system shall be able to receive a report of a comment. |
| REQ-NN-03 | When a report reason is empty or contains only spaces, the frontend shall prevent submission and display a message asking the user to provide a reason. | Confirmed | New |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-NN-01 | When the review-loading request fails, the frontend shall display a visible error message explaining that the reviews could not be loaded. | Suspected bug | New |

---

## Section: [Your Area] ([Your Name])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |

---

## Section: [Your Area] ([Your Name])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
| | | | |
| | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| | | | |
