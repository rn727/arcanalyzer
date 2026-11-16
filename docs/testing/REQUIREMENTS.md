# Testable Requirements: ArcAnalyzer
=======


**Team number:** [2]
**Inherited from:** Team [1]

## Who Owns What

| Area of the system | Owner | ID prefix |
|---|---|---|
| [example: Accounts and login] | [name] | [initials, like MG] |
| Frontend Review Display and Reporting |Nhan Nguyen | NN |
| Review Submission and Input Validation | Karan Hooda | KH |
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

## Section: Review Submission and Input Validation (Karan Hooda)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-KH-01 | ArcAnalyzer viewers | As a viewer, I want to submit a numerical rating and written review for a story arc and see my review appear on its page, so I can share my opinion with other viewers. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-KH-01 | The system shall accept reviews of up to and including 500 characters and reject any review longer than 500 characters without saving it. | Suspected bug (GitHub Issue #102) | CR-3: The system shall not allow reviews past a certain text limit to be saved in the backend. |
| REQ-KH-02 | When a user submits a nonempty written review and an integer rating from 0 to 10 for an existing story arc, the system shall save the review and rating to that arc. | Confirmed | CR-1: The system shall allow a user to submit a rating and review text for a named arc. |
| REQ-KH-03 | After a successful review submission, the system shall display the submitted review text and rating in the arc's review list without requiring a page refresh. | Confirmed | CR-2: The system shall allow a user to submit a textual review for a named arc. |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-KH-01 | The written-review textarea and numerical-rating input shall each have a programmatically associated text label so users and automated accessibility tools can identify both fields by their labels. | Confirmed | New |

---

## Section: Review Reporting and Backend Display (Sidharth Nair)

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-SN-01 | Viewer | A viewer should be able to report an inappropriate review and trust that the report identifies the intended review and reaches the system for moderation. |
| G-SN-02 | Moderator | A moderator should be able to act on inappropriate reviews so that reported content can be removed when necessary. |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-SN-01 | When a viewer submits a non-empty report reason for a review, the system shall send the selected review and report reason to the backend and make the report available for moderation. | Suspected bug (GitHub Issue #89) | CR-4: The system shall be able to receive a report of a comment. |
| REQ-SN-02 | When a viewer clicks the Report button beside a review, the system shall open a report form that clearly identifies the selected review before the report is submitted. | Confirmed | New |
| REQ-SN-03 | The system shall allow an inappropriate existing review to be removed by a moderator after it has been identified for moderation. | Suspected bug (GitHub Issue #33) | CR-5: The system shall possess the functionality of allowing deletion of existing reviews. |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-SN-01 | User-provided text entered into the report reason field shall be treated as text and shall not execute user-provided scripts or code in the browser. | Confirmed | New |