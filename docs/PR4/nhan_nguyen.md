# Nhan Nguyen

## Issue #96: Review loading failure is not shown to the user

Issue: https://github.com/rn727/arcanalyzer/issues/96  
PR: https://github.com/rn727/arcanalyzer/pull/129

![Before fix] docs\PR4\screenshots\nhan_nguyen_issue96_before.png

This was a code bug. The frontend only logged a failed review request to the console and did not show an error message to the user.

![After fix] docs\PR4\screenshots\nhan_nguyen_issue_96_after.png

I added a error message and a regression test. The test passed after the fix.

## Issue #130: Arc page displays a placeholder instead of the loaded arc name

Issue: https://github.com/rn727/arcanalyzer/issues/130  
PR: https://github.com/rn727/arcanalyzer/pull/129

![Before fix] docs\PR4\screenshots\nhan_nguyen_issue130_before.png

This was a code bug because the backend returned the arc name, but the frontend ignored it and always displayed `Name of the Arc`.

![After fix] docs\PR4\screenshots\nhan_nguyen_issue130_after.png

I stored the returned arc name in React state and displayed it in the heading. I added a regression test that verifies the heading displays `Your Name` as that's the current sample inside the backend.

## Test Results

- Frontend tests: `8 passed`
- Backend tests: `8 passed`
- Frontend lint: `passed`
- Frontend build: `passed`