# Sidharth Nair

## Issue #89: Comment reporting needs to be implemented

Issue: [https://github.com/rn727/arcanalyzer/issues/89](https://github.com/rn727/arcanalyzer/issues/89)  
PR: [https://github.com/rn727/arcanalyzer/pull/132](https://github.com/rn727/arcanalyzer/pull/132)

![Before fix](screenshots/sidharth_nair_issue89_before.png)

This was a code bug because the backend did not have a report endpoint, so attempting to submit a report returned a 404 error.

![After fix](screenshots/sidharth_nair_issue89_after.png)

I added a backend report endpoint and a test that verifies the endpoint exists and accepts a valid report. The test passed after the fix.

## Test Results

- Backend tests: `8 passed`
- Issue #89 test: `passed`

## AI Disclosure

- Used ChatGPT in order to create test examples based on existing repo code. 