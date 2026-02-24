# POC Source App

A React + Vite + TypeScript calculator application used as the source repository for cross-repo CI/CD POC.

## Setup

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## GitHub Secrets Configuration

This repository requires the following GitHub secrets to be configured:

| Secret | Description | Example |
|--------|-------------|---------|
| `E2E_PAT` | Personal Access Token for triggering E2E repo | `ghp_xxxxxxxxxxxx` |
| `E2E_REPO` | Name of the E2E test repository | `your-username/poc-e2e-tests` |

### Creating the PAT

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate a new token with the following scopes:
   - `repo` (full control)
   - `workflow` (update and disable workflows)
3. Copy the token and add it as a secret named `E2E_PAT`

## CI/CD Flow

1. A PR is opened/updated in this repository
2. The `PR Check` workflow:
   - Builds the application
   - Uploads the build artifact
   - Creates pending statuses for E2E checks
   - Triggers the E2E test repository via `repository_dispatch`
3. The E2E repository:
   - Downloads the build artifact
   - Runs Playwright tests with coverage collection
   - Posts status back to this repository

## Status Checks

The PR will show two status checks from the E2E repository:

- `e2e/coverage` - Coverage analysis results
- `e2e/tests` - Test execution results

## Project Structure

```
src/
├── components/
│   ├── Calculator.tsx    # Main calculator component
│   └── Button.tsx        # Reusable button component
├── hooks/
│   └── useCalculator.ts  # Calculator logic hook
├── lib/
│   └── utils.ts          # Utility functions
├── App.tsx               # Root component
└── main.tsx              # Entry point
```
