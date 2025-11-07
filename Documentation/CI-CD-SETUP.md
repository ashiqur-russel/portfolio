# CI/CD Setup Guide

This project uses GitHub Actions for CI/CD with automatic deployments to Vercel.

## Workflow Overview

We use **two separate workflows**:

- `ci.yml` - Code quality checks (runs on ALL branches)
- `cd.yml` - Deployment (runs ONLY on main/development after CI passes)

```
Feature Branch → CI checks only
    ↓ PR
Development → CI checks + Deploy to test.ashiqur-rahman.de
    ↓ PR
Main → CI checks + Deploy to ashiqur-rahman.de (Production)
```

**See `WORKFLOW_DIAGRAM.md` for detailed visual diagrams.**

## Setup Instructions

### 1. Install Dependencies

First, install the new dependencies (Prettier and TypeScript):

```bash
npm install
```

### 2. Configure Vercel (IMPORTANT)

#### A. Disable Automatic Deployments in Vercel

1. Go to your Vercel project settings
2. Navigate to **Git** section
3. **Disable** "Automatic deployments from Git"
4. This ensures deployments only happen through GitHub Actions after CI passes

#### B. Get Vercel Credentials

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel login`
3. Go to your project directory and run: `vercel link`
4. Get your Vercel Token:
   - Go to https://vercel.com/account/tokens
   - Click "Create Token"
   - Name it "GitHub Actions"
   - Copy the token

5. Get your Project details:
   ```bash
   cat .vercel/project.json
   ```
   Note down: `orgId` and `projectId`

#### C. Add GitHub Secrets

1. Go to your GitHub repository
2. Settings → Secrets and variables → Actions
3. Add these secrets:
   - `VERCEL_TOKEN`: The token you created
   - `VERCEL_ORG_ID`: Your orgId from project.json
   - `VERCEL_PROJECT_ID`: Your projectId from project.json

### 3. Set Up Branch Protection Rules

#### A. Protect Development Branch

1. Go to GitHub repository → Settings → Branches
2. Click "Add rule"
3. Branch name pattern: `development`
4. Enable:
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - Select required checks: `CI Checks`
   - ✅ Do not allow bypassing the above settings
5. Save changes

#### B. Protect Main Branch

1. Add another rule
2. Branch name pattern: `main`
3. Enable same settings as development
4. Additionally enable:
   - ✅ Require pull request reviews
   - ✅ Dismiss stale pull request approvals when new commits are pushed
5. Save changes

### 4. Create Required Branches

If you don't have them already:

```bash
# Create development branch
git checkout -b development
git push origin development

# Create a feature branch for testing
git checkout -b feature/test-ci-cd
git push origin feature/test-ci-cd
```

## How It Works

### CI Workflow (`ci.yml`)

**Triggers:** Every push and every PR to any branch

**Checks:**

- ✅ ESLint checks
- ✅ Prettier formatting checks
- ✅ TypeScript/JavaScript type checking
- ✅ Tests (when you add them)
- ✅ Build verification

**Purpose:** Validate code quality before merging or deploying

### CD Workflow (`cd.yml`)

**Triggers:** Only on push to `main` or `development` branches

**Steps:**

1. Wait for CI workflow to complete successfully
2. If CI passes → Proceed with deployment
3. If CI fails → Stop deployment
4. Deploy to appropriate environment:
   - `development` branch → `test.ashiqur-rahman.de`
   - `main` branch → `ashiqur-rahman.de`

**Purpose:** Automated deployment only after code quality is verified

### Feature Branches

- ✅ CI checks run automatically (via `ci.yml`)
- ❌ CD workflow doesn't trigger (no deployment)
- 🔒 Cannot merge to development unless CI passes

## Testing the Setup

### 1. Test Feature Branch CI

```bash
# Create a feature branch
git checkout -b feature/test-setup

# Make a change
echo "// Test CI" >> app/page.js

# Push and watch CI run
git add .
git commit -m "test: CI pipeline"
git push origin feature/test-setup
```

Go to GitHub Actions tab to see CI running.

### 2. Test PR to Development

1. Create a PR from `feature/test-setup` to `development`
2. CI will run automatically
3. PR will be blocked if CI fails
4. Merge only if CI passes
5. After merge, watch deployment to `test.ashiqur-rahman.de`

### 3. Test PR to Main

1. Create a PR from `development` to `main`
2. CI will run
3. After merge, watch deployment to `ashiqur-rahman.de`

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run format:check # Check formatting
npm run type-check   # Type check JavaScript files
npm run test         # Run tests
npm run ci           # Run all checks (what CI runs)
```

## Troubleshooting

### CI Fails on Formatting

Run locally to fix:

```bash
npm run format
```

### CI Fails on Linting

Run locally to fix:

```bash
npm run lint:fix
```

### CI Fails on Type Check

Check errors and fix:

```bash
npm run type-check
```

### Deployment Fails

1. Verify Vercel secrets are correct in GitHub
2. Check Vercel CLI is properly configured
3. Ensure `.vercel` folder exists and is committed

## Best Practices

1. **Always work in feature branches**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Test locally before pushing**

   ```bash
   npm run ci
   ```

3. **Create PR to development first**
   - Test on `test.ashiqur-rahman.de`
   - Get it reviewed

4. **Only merge to main when tested**
   - Create PR from development to main
   - This goes to production

5. **Never push directly to main or development**
   - Always use PRs
   - Let CI validate everything

## What's Blocked Now

❌ Cannot merge PR with failing CI
❌ Cannot push directly to protected branches
❌ Cannot deploy without passing all checks
✅ Only clean, tested code reaches production!
