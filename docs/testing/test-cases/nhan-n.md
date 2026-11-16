# Test Cases: [Nhan N]

**Team number:** [2]
**My area:** [Frontend Review Display and Reporting]

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

**Test ID:** NN-01  
**From Part 6:** New  
**Written by:** Nhan Nguyen  
**Title:** Existing reviews appear on the arc page  
**Traces to:** G-NN-01, REQ-NN-01  
**Test type:** Acceptance  
**Preconditions:** The frontend is running, and the review request returns a valid review.  
**Test data:** Review text: `Fun & surprising`; rating: `4`

**Steps:**

1. Open the ArcAnalyzer page.
2. Open the review form.
3. Enter `Fun & surprising` in the review field.
4. Enter `4` in the rating field.
5. Submit the review.
6. Observe the review section.

**Expected result:** The submitted review text and rating appear in the review section.

**Actual result:** The review text `Fun & surprising` and rating `4/10` appeared in the review section.

**Status:** Pass  
**Severity:** N/A  
**V or V:** N/A  
**GitHub Issue:** N/A

---

**Test ID:** NN-02  
**From Part 6:** New  
**Written by:** Nhan Nguyen  
**Title:** Review loading failure displays a visible error  
**Traces to:** G-NN-01, NFR-NN-01  
**Test type:** Negative  
**Preconditions:** The frontend is running, but the backend cannot be reached.  
**Test data:** The review request fails with `backend offline`.

**Steps:**

1. Start the frontend while the backend is unavailable.
2. Open the ArcAnalyzer page.
3. Wait for the review-loading request to fail.
4. Observe the page.

**Expected result:** A visible error message tells the user that the reviews could not be loaded.

**Actual result:** The error was printed only to the browser console. No visible error message appeared on the page.

**Status:** Fail  
**Severity:** Minor  
**V or V:** Verification  
**GitHub Issue:** #96

---

**Test ID:** NN-03  
**From Part 6:** New  
**Written by:** Nhan Nguyen  
**Title:** Submitting a report sends it to the backend  
**Traces to:** REQ-NN-02  
**Test type:** Integration  
**Preconditions:** The frontend is running and at least one review is displayed.  
**Test data:** Report reason: `Inappropriate content`.

**Steps:**

1. Click the **Report** button beside a review.
2. Enter `Inappropriate content` in the report reason field.
3. Click **Submit Report**.
4. Check the network requests sent by the frontend.

**Expected result:** The frontend sends a request containing the reported review and the report reason.

**Actual result:** The frontend displayed a local success message, but it did not send a report request to the backend.

**Status:** Fail  
**Severity:** Major  
**V or V:** Verification  
**GitHub Issue:** #97

---

**Test ID:** NN-04  
**From Part 6:** New  
**Written by:** Nhan Nguyen  
**Title:** Empty report reasons are rejected  
**Traces to:** REQ-NN-03  
**Test type:** Boundary Value  
**Preconditions:** A review is displayed and the report form is open.  
**Test data:** Empty report reason.

**Steps:**

1. Click the **Report** button beside a review.
2. Leave the report reason field empty.
3. Click **Submit Report**.
4. Observe the report form.

**Expected result:** The report is not submitted, and the user is told to provide a reason.

**Actual result:** The message `please give a reason why it is inappropriate` appeared, and no additional request was sent.

**Status:** Pass  
**Severity:** N/A  
**V or V:** N/A  
**GitHub Issue:** N/A

---