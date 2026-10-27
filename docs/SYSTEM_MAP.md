
# Role Table

**Team Name:** Group 2

**Inherited Project:** ArcAnalyzer

| Role | Owns | Specific Task | Name |
|---|---|---|---|
| Product Analyst | Part 1 and the questions in Part 4 | Runs the app, picks the user action, writes the purpose sentence, and collects the team's three questions for the original team. | Sidharth Nair |
| Architect | Part 2 and the mismatches in Part 4 | Draws the as-built diagram from the code, then compares it to the handoff UML and records every mismatch. | Karan Hooda |
| Frontend Tracer | Part 3, client side | Traces the action from the button click to the request leaving the client. Every row gets a file path. | Nhan Nguyen |
| Backend Tracer | Part 3, server side | Traces from the API route to the database and back to the response. Every row gets a file path. | Hamza Akbari |

# System Map

## Purpose

ArcAnalyzer lets television enthusiasts rate and review specific groups of episodes, known as story arcs, so other viewers can better understand the quality of individual parts of a show.

**User action being traced:** A user submits a review by selecting a numerical rating and entering a written comment for a story arc. The frontend sends this information to the backend, which stores the review and updates the arc's average rating.

## Architecture Diagram

[ArcAnalyzer System Diagram](./diagram.png)

## Trace Table

| Step | Layer | File and Function | Data In / Data Out | Notes or Surprises |
|---|---|---|---|---|
| 1 | Frontend | `client/src/Form.jsx` → `handleSubmit(event)` | Form fields → POST request | Form runs handleSubmit when Submit a review is clicked. |
| 2 | API route | `server/main.py` → POST `/rate/{arc_name}` → `addRating()` | Receives arc_name, rating and text | Frontend sends it specifically to /rate/yourname. |
| 3 | Backend logic | `server/main.py` → `addRating()` | Finds arc, calculates new user average, creates and adds Reviews | Returns 404 if the arc doesn’t exist |
| 4 | Database | `server/main.py` → `save_db()` → `arcdb.pkl` | Updated db_arcs and saved using pickle.dump() | Database is a pickle file |
| 5 | Response back | `server/main.py` → return arc | Updated Arc object → JSON response | Response contains updated avgRatings and reviews |
| 6 | Frontend | `client/src/Form.jsx` → `response.json()` / `setReviews()` | JSON response → data.reviews → React state | Review list updates immediately |
| 7 | Frontend display | `client/src/Form.jsx` → `reviews.map(...)` | Reviews state → review text and rating displayed | Users see their newly submitted review on the page |

## Reality Check

### What the Handoff Docs Got Wrong or Left Out

1. What is the difference between submit rating and submit review? There is one fixed functionality but multiple implemented/unimplemented functions.

2. The Set-ExecutionPolicy command for Windows’ intrinsic PowerShell script shield bypass is missing in the handoff.

### Mismatches

1. The handoff class diagram shows that `Form.jsx` should communicate with `StoryArc.js`, but that never happens and instead it directly communicates with the FastAPI backend.

2. The handoff class diagram also shows that `main.py` uses `models.py` for data models and to store data, but `models.py` is never used and `main.py` instead stores and uses the Pickle file.

### Questions for the Original Team

1. **Intent:** There are both addReview and submitRating; what is the difference, and what is the intent in functionality?

2. **Intent + Design:** Why use a pickle file as a temp backend? Was there a specific reason? What was the intent and advantage of using this method over something like Supabase?

3. **Intent:** How did you originally plan on implementing shows and the arcs of the shows themselves into the website UI?
