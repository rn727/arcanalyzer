# Test Cases: Sidharth Nair

**Team number:** [2]  
**My area:** [Review Reporting and Backend Display]

---

**Test ID:** SN-01  
**From Part 6:** New  
**Written by:** Sidharth Nair  
**Title:** Reports are not sent to backend  
**Traces to:** G-SN-01, REQ-SN-01  
**Test type:** Integration  
**Preconditions:** Review submission and display are operational, and at least one existing review is displayed.  
**Test data:** Existing review text: `Amazing`; rating: `5`; report reason: `Inappropriate content`

**Steps:**

1. Open ArcAnalyzer.
2. On an existing review, click the **Report** button.
3. Enter `Inappropriate content` in the report text box.
4. Click **Submit Report**.
5. Check whether a report request is sent to the backend.
6. Check whether the submitted report is stored or available for moderation.

**Expected result:** The submitted report is sent to and stored by the backend so that it can later be viewed for moderation.

**Actual result:** The frontend displays a successful submission message, but the report is not sent to or stored by the backend.

**Status:** Fail  
**Severity:** Major  
**V or V:** Verification  
**GitHub Issue:** #89

---

**Test ID:** SN-02  
**From Part 6:** New  
**Written by:** Sidharth Nair  
**Title:** Report reason does not execute user-provided code  
**Traces to:** NFR-SN-01  
**Test type:** Security  
**Preconditions:** The frontend is running and at least one review is displayed.  
**Test data:** Report reason: `<script>alert('XSS')</script>`

**Steps:**

1. Open ArcAnalyzer.
2. Click the **Report** button beside an existing review.
3. Enter `<script>alert('XSS')</script>` in the report reason field.
4. Click **Submit Report**.
5. Observe whether any script or alert executes in the browser.

**Expected result:** The entered text is treated only as report data. No JavaScript or other user-provided code executes in the browser.

**Actual result:** No script or alert executed. The application treated the entered value as text and displayed the normal report submission message.

**Status:** Pass  
**Severity:** N/A  
**V or V:** N/A  
**GitHub Issue:** N/A

---

**Test ID:** SN-03  
**From Part 6:** New  
**Written by:** Sidharth Nair  
**Title:** Canceling a report returns the application to the normal review state  
**Traces to:** REQ-SN-02  
**Test type:** System  
**Preconditions:** The frontend and backend are running and at least one review is displayed.  
**Test data:** Existing review text: `unbelievable.`; temporary report reason: `Test report`

**Steps:**

1. Open ArcAnalyzer.
2. Click the **Report** button beside the review containing `unbelievable.`
3. Enter `Test report` in the report reason field.
4. Click **Cancel**.
5. Verify that the report form closes and the original review remains displayed.
6. Open the report form for the same review again.

**Expected result:** Canceling the report closes the report form without changing or removing the review. When the report form is opened again, the previous report reason is cleared.

**Actual result:** The report form closed, the original review remained displayed, and the report reason field was empty when the form was reopened.

**Status:** Pass  
**Severity:** N/A  
**V or V:** N/A  
**GitHub Issue:** N/A

---

**Test ID:** SN-04  
**From Part 6:** New  
**Written by:** Sidharth Nair  
**Title:** Viewer can identify the review they are reporting  
**Traces to:** G-SN-01, REQ-SN-03  
**Test type:** Acceptance  
**Preconditions:** ArcAnalyzer is running and multiple reviews are visible on the page.  
**Test data:** Selected review text: `unbelievable.`

**Steps:**

1. Open ArcAnalyzer.
2. Locate the review containing `unbelievable.`
3. Click the **Report** button directly beside that review.
4. Observe the report form that opens.
5. Compare the review shown in the report form with the review selected in Step 2.

**Expected result:** The report form clearly identifies `unbelievable.` as the review being reported, allowing the viewer to confirm that they selected the intended review before submitting a report.

**Actual result:** The report form displayed `Reporting: unbelievable.`, correctly identifying the selected review.

**Status:** Pass  
**Severity:** N/A  
**V or V:** N/A  
**GitHub Issue:** N/A

---