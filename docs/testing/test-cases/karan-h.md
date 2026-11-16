# Test Cases: Karan Hooda

**Team number:** [02]
**My area:** Review Submission and Input Validation

<!--
HOW TO USE THIS FILE
1. Copy this file. Name the copy with your first name and last initial, like  maria-g.md
2. Leave TEMPLATE.md untouched for your teammates.
3. If a Part 6 test belongs to your area, upgrade it first and put it in the first block.
   Write at least 4 test cases using at least 3 test types. Include 1 Acceptance test that traces to your Stakeholder Goal.
   Run every test on the inherited system. Every Fail gets a GitHub Issue.
4. Copy the block between the lines for each new test case.
5. Test IDs: use your initials plus a number, like  MG-01, MG-02. This keeps IDs unique across your team.
   "Traces to" must name one of YOUR requirement IDs, like REQ-MG-02.
6. See docs/TESTING_FIELD_GUIDE.md for the sample test case TC-00.
-->

---

**Test ID:** KH-01
**From Part 6:** TC-02
**Written by:** Karan Hooda
**Title:** A written review exceeding the 500-character maximum is rejected
**Traces to:** REQ-KH-01
**Test type:** Boundary
**Preconditions:** Front and backend are running and submit a review page is open
**Test data:** Review text: boundary limit(500) + 1

**Steps:**
1. Open arcanalyzer page
2. Open submit a review page
3. Write into the textbox until you hit the boundary limit and go beyond
4. Submit review

**Expected result:** System rejects review due to it being over the character limit
**Actual result:** There is no character limit and the review goes through
**Status:** Fail
**Severity:** Critical 
**V or V:** Verification
**GitHub Issue:** #102

---

**Test ID:** KH-02
**From Part 6:** TC-3
**Written by:** Karan Hooda
**Title:** A written review of exactly 500 characters is accepted
**Traces to:** REQ-KH-01
**Test type:** Boundary
**Preconditions:** The backend is available and the existing arc yourname can accept reviews.
**Test data:** Rating: 5; review text: exactly 500 characters

**Steps:**
1. Open arcanalyzer page
2. Open submit a review page
3. Write into the textbox until you hit the boundary limit of 500 characters
4. Submit review

**Expected result:** The review is valid and gets saved and posted
**Actual result:** The review is valid and saved/posted
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** KH-03
**From Part 6:** New
**Written by:** Karan Hooda
**Title:** A viewer can publish a rating and opinion that appears on the arc page
**Traces to:** G-KH-01, REQ-KH-03
**Test type:** Acceptance
**Preconditions:** The frontend and backend are running, and yourname is an existing arc.
**Test data:** Review text: Ehh ok; rating: 4.

**Steps:**
1. Open ArcAnalyzer in a browser.
2. Click Create a Review.
3. Type Fun & surprising in the written-review field and 4 in the rating field.
4. Click Submit Review.
5. Verify that Fun & surprising and 4/10 appear in the list of reviews without a page refresh.

**Expected result:** The review appears with the exact text and a visible 4/10 rating without requiring a refresh.
**Actual result:** The review appears with the exact text and a visible 4/10 rating without requiring a refresh.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---

**Test ID:** KH-04
**From Part 6:** New
**Written by:** Karan Hooda
**Title:** Review and rating inputs can be found using their associated labels
**Traces to:** NFR-KH-01
**Test type:** Unit
**Preconditions:** The frontend testing dependencies are installed in client nad Form.jsx works.
**Test data:** Input labels: write here and Rating (0-10).

**Steps:**
1. Open client/src/Form.jsx and verify that the text area and rating input each have a matching label htmlFor and input id.
2. In client, run npm test -- --run.
3. 1. Verify that the existing React Testing Library test finds the fields with screen.getByLabelText('write here') and screen.getByLabelText('Rating (0-10)').

**Expected result:** Both input fields are found by their associated labels without errors, and the frontend test passes.
**Actual result:** Both input fields are indeed found by their associated labels without errors.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
**GitHub Issue:** N/A

---
