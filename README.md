# arcanalyzer

ArcAnalyzer is a web application designed to help users find reviews and ratings for specific story arcs within TV shows. Rather than relying only on an overall show or season rating, users can view information and opinions about individual parts of a show's story.

## Authors

- Eric
- Mason
- Russell Nguyen
- Seyar

## Features

- Search for TV shows by title
- View story arcs within a TV show
- Read reviews for specific story arcs
- Post reviews anonymously or under a pseudonym
- Rate episodes on a scale from 0 to 10
- Report inappropriate reviews

## Tech Stack

- Frontend: JavaScript, Vite, React
- Backend: Python, FastAPI
- Database: Pickle
- Testing: Pytest

## Project Goal

The goal of ArcAnalyzer is to give viewers a more specific way to find information about the parts of a TV show they are interested in. By focusing on individual story arcs, users can see what other viewers thought about a particular part of a show before deciding whether to watch it.

## Requirements

The following need to be installed before starting:

- [Node.js and npm](https://nodejs.org/en/download)
- [Python 3.14 or newer](https://www.python.org/downloads/)
- [uv](https://docs.astral.sh/uv/getting-started/installation/)

Check they are installed by running:

```bash
node --version
npm --version
python --version  # Windows: py --version
uv --version
```

## Setup

1. Clone the repo:

  ```bash
  git clone https://github.com/rn727/arcanalyzer.git
  cd arcanalyzer
  ```

2. Set up a virtual environment in the server folder.

  ```bash
  cd server
  uv venv
  source .venv/Scripts/activate # Windows: .venv/Scripts/activate
  ```

  If on Windows, you may come across an error when starting your virtual environment. For a quick fix, run:

  ```powershell
  Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
  .venv/Scripts/activate
  ```

3. Install dependencies using two terminals. Both terminals assume you start at the project root.

  - Terminal 1 (frontend):

    ```bash
    cd client
    npm install
    ```
  
  - Terminal 2 (backend):

    ```bash
    cd server
    uv sync
    ```

4. Run the application using both terminals. Both terminals assume you start at the project root.

  - Terminal 1 (frontend):

    ```bash
    cd client
    npm run dev
    ```

    This runs at `http://localhost:5173`

  - Terminal 2 (backend):

    ```bash
    cd server
    uv run fastapi dev
    ```

    This runs at `http://127.0.0.1:8000`

### Other Useful Commands

You can run tests for the backend using pytest through this command. We will assume you are at the project root.

```bash
cd server
uv run python -m pytest tests
```

You can also run tests for the frontend using vitest through this command, assuming you are at root

```bash
cd client
npm test
```
  
AI Disclosure: Used ChatGPT to help learn how to make a README, as well as learn how to use the different technologies within the stack by generating explanations, examples, and generics that were then finetuned to fit our project.
