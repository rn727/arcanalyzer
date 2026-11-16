# Test Cases: Hamza Akbari

**Team number:** 2
**My area:** Rating/review API and persistence

---

**Test ID:** HA-01
**From Part 6:** TC-1
**Written by:** Hamza Akbari
**Title:** Submitting a rating and review appends the review and returns the updated arc
**Traces to:** REQ-HA-01
**Test type:** Integration
**Preconditions:** The server is running with the default `yourname` arc loaded.
**Test data:** Arc `yourname`; rating `5`; text `Arc Example`.

**Steps:**
1. Send `POST /rate/yourname?rating=5&text=Arc%20Example`.
2. Read the JSON response.
3. Check the last review and the returned average rating.

**Expected result:** The response is HTTP 200. The returned arc contains a final review with rating `5` and text `Arc Example`, and its average rating is `7.5`.
**Actual result:** The response was HTTP 200. The final review was `{rating: 5, text: "Arc Example"}` and the average rating was `7.5`.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A

---

**Test ID:** HA-02
**From Part 6:** New
**Written by:** Hamza Akbari
**Title:** Rating boundaries are enforced at 0 and 10
**Traces to:** REQ-HA-02
**Test type:** Boundary Value
**Preconditions:** The server is running with a fresh in-memory `yourname` arc containing one review.
**Test data:** Ratings `-1`, `0`, `10`, and `11`; text `Boundary test`.

**Steps:**
1. Submit one request for each rating value.
2. Record the HTTP status for each request.
3. Check whether rejected values were appended to the arc.

**Expected result:** Ratings `0` and `10` return HTTP 200. Ratings `-1` and `11` are rejected with a client-error response, and neither invalid rating is appended.
**Actual result:** Rating `-1` returned HTTP 200, rating `0` returned HTTP 200, rating `10` returned HTTP 200, and rating `11` returned HTTP 200. The invalid ratings were appended instead of rejected.
**Status:** Fail
**Severity:** Major
**V or V:** Verification
**GitHub Issue:** To open: `[HA-02] API accepts ratings outside the 0-10 range`

---

**Test ID:** HA-03
**From Part 6:** New
**Written by:** Hamza Akbari
**Title:** Submitting a rating for an unknown arc is rejected without changing stored data
**Traces to:** REQ-HA-03
**Test type:** Negative
**Preconditions:** The server is running with `yourname` as the only stored arc.
**Test data:** Arc `nope`; rating `5`; text `Unknown arc`.

**Steps:**
1. Send `POST /rate/nope?rating=5&text=Unknown%20arc`.
2. Read the response status and JSON body.
3. Confirm that the stored `yourname` arc is unchanged.

**Expected result:** The response is HTTP 404 with detail `Arc not found`, and no stored arc is modified.
**Actual result:** The response was HTTP 404 with detail `Arc not found`; the stored arc was unchanged.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A

---

**Test ID:** HA-04
**From Part 6:** New
**Written by:** Hamza Akbari
**Title:** A viewer can submit a review that is immediately returned for other viewers
**Traces to:** G-HA-01
**Test type:** Acceptance
**Preconditions:** The server is running and the viewer is on the arc review flow.
**Test data:** Arc `yourname`; rating `5`; text `Arc Example`.

**Steps:**
1. Submit the rating and review for the named arc.
2. Read the updated arc returned by the server.
3. Look for the submitted review in the returned review list.

**Expected result:** The viewer's review appears in the updated arc with the submitted rating and text, so the review is available to the review display for other viewers.
**Actual result:** The updated arc contained the submitted review with rating `5` and text `Arc Example`.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A

---

**Test ID:** HA-05
**From Part 6:** New
**Written by:** Hamza Akbari
**Title:** Rating submission remains responsive with 50 existing reviews
**Traces to:** NFR-HA-01
**Test type:** Integration
**Preconditions:** The server is running with an arc containing 50 existing reviews.
**Test data:** Arc `yourname`; rating `5`; text `Performance test`.

**Steps:**
1. Send one rating submission for the arc.
2. Measure the time from request start until the HTTP response is received.
3. Confirm the response status and JSON body.

**Expected result:** The response is HTTP 200 with the updated arc JSON and completes in under 2 seconds.
**Actual result:** The response was HTTP 200 with updated arc JSON and completed in under 2 seconds.
**Status:** Pass
**Severity:** N/A
**V or V:** N/A
