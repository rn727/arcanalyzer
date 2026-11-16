# Testable Requirements: [Project Name]

**Team number:** [2]
**Inherited from:** Team [1]

## Who Owns What

| Area of the system | Owner | ID prefix |
|---|---|---|
| [example: Accounts and login] | [name] | [initials, like MG] |
| Frontend Review Display and Reporting |Nhan Nguyen | NN |
| | | |
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

## Section: [Your Area] ([Your Name])

### Stakeholder Goals

| ID | Stakeholder | Goal |
|---|---|---|
| G-XX-01 | | |

### Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-XX-01 | | | |
| REQ-XX-02 | | | |
| REQ-XX-03 | | | |

### Non-Functional Requirements

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| NFR-XX-01 | | | |

### Example of a Good Rewrite

| ID | Requirement | Status | From Part 5 |
|---|---|---|---|
| REQ-MG-01 | The system shall reject a profile bio longer than 280 characters with the error "Bio must be 280 characters or fewer." | Suspected bug | CR-3 (Unconfirmed): The system shall limit the bio to 280 characters. |
| NFR-MG-01 | The profile page loads in under 2 seconds with 100 profiles in the database. | Confirmed | New |

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
