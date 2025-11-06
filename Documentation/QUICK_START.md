# Quick Start - CI/CD Pipeline

## What's Been Added

✅ **Prettier** - Code formatting
✅ **Enhanced linting** - Code quality checks
✅ **Type checking** - JavaScript type safety
✅ **GitHub Actions** - Automated CI/CD
✅ **Smart deployments** - Only deploy when CI passes

## Immediate Next Steps

### Step 1: Install New Dependencies

```bash
cd /Users/ashiqur/Desktop/Projects/next/my_website/portfolio
npm install
```

This installs Prettier and TypeScript.

### Step 2: Format Your Code

```bash
npm run format
```

This will format all your code according to Prettier rules.

### Step 3: Verify Everything Works

```bash
npm run ci
```

This runs all checks that will run in CI. Fix any errors before pushing.

### Step 4: Commit These Changes to a Feature Branch

```bash
# Create a feature branch
git checkout -b feature/setup-ci-cd

# Stage all changes
git add .

# Commit
git commit -m "feat: add CI/CD pipeline with GitHub Actions"

# Push to GitHub
git push origin feature/setup-ci-cd
```

### Step 5: Watch CI Run

1. Go to your GitHub repository
2. Click on the "Actions" tab
3. You should see your workflow running
4. It will check: linting, formatting, type checking, and build

### Step 6: Configure Vercel & GitHub (CRITICAL!)

**Read the full setup guide:** `CI-CD-SETUP.md`

Key actions:
1. ⚠️ **Disable auto-deployments in Vercel** (Settings → Git)
2. 🔑 **Add GitHub Secrets** (VERCEL_TOKEN, VERCEL_ORG_ID, VERCEL_PROJECT_ID)
3. 🔒 **Set up branch protection** (for development and main branches)

Without these, deployments won't work through CI/CD!

## Your New Workflow

### Making Changes

```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make your changes
# ... code code code ...

# 3. Test locally
npm run ci

# 4. Commit and push
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature

# 5. Create PR to development
# CI will run automatically

# 6. If CI passes, merge to development
# Auto-deploys to test.ashiqur-rahman.de

# 7. Test on staging site

# 8. Create PR from development to main
# CI runs again

# 9. Merge to main
# Auto-deploys to ashiqur-rahman.de (production)
```

## Available Commands

```bash
npm run dev          # Development server
npm run build        # Build for production
npm run lint         # Check for code issues
npm run lint:fix     # Auto-fix linting issues
npm run format       # Format all code
npm run format:check # Check if code is formatted
npm run type-check   # Type check JavaScript
npm run test         # Run tests (placeholder)
npm run ci           # Run all CI checks locally
```

## What Happens Now

### ✅ On Feature Branch Push
- CI checks run (lint, format, type-check, test, build)
- No deployment
- Fast feedback on code quality

### ✅ On PR to Development
- CI checks run
- **PR is blocked if CI fails**
- Can only merge if all checks pass

### ✅ On Merge to Development
- CI checks run
- **Auto-deploys to test.ashiqur-rahman.de**
- Test your changes on staging

### ✅ On PR to Main
- CI checks run
- **PR is blocked if CI fails**
- Requires review (once branch protection is set)

### ✅ On Merge to Main
- CI checks run
- **Auto-deploys to ashiqur-rahman.de (production)**
- Your changes are live!

## Important Notes

1. **Never commit directly to main or development** - Always use PRs
2. **Always run `npm run ci` locally first** - Catch issues early
3. **Test on staging before going to production** - Safety first
4. **Set up branch protection ASAP** - Prevents accidental direct pushes

## Troubleshooting

**CI fails?**
- Run `npm run ci` locally to see the exact error
- Fix the issue
- Commit and push again

**Deployment fails?**
- Check GitHub Secrets are configured
- Verify Vercel integration is set up
- See full troubleshooting in `CI-CD-SETUP.md`

**Need help?**
- Read the full guide: `CI-CD-SETUP.md`
- Check GitHub Actions logs for detailed error messages

---

**Next:** Read `CI-CD-SETUP.md` for complete setup instructions!

