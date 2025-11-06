# CI/CD Pipeline Documentation

Welcome to the CI/CD pipeline documentation for this project!

## 📚 Documentation Overview

This folder contains all documentation related to the CI/CD setup, workflows, and deployment process.

## 📖 Reading Guide

### 1. **Start Here: [README_CI_CD.md](./README_CI_CD.md)** ⭐
Main overview of the CI/CD pipeline
- What's included
- Quick overview
- Benefits
- Next steps

### 2. **Quick Setup: [QUICK_START.md](./QUICK_START.md)** ⚡
For immediate action
- Installation steps
- First commands to run
- Quick workflow overview
- Available commands

### 3. **Visual Guide: [WORKFLOW_DIAGRAM.md](./WORKFLOW_DIAGRAM.md)** 📊
Understand the flow
- Visual workflow diagrams
- Step-by-step flow charts
- Branch interaction diagrams
- Complete development flow

### 4. **Detailed Setup: [CI-CD-SETUP.md](./CI-CD-SETUP.md)** 🔧
Complete configuration guide
- Vercel configuration
- GitHub Secrets setup
- Branch protection rules
- Troubleshooting

## 🚀 Quick Links

### For First Time Setup
1. Read [README_CI_CD.md](./README_CI_CD.md)
2. Follow [QUICK_START.md](./QUICK_START.md)
3. Configure using [CI-CD-SETUP.md](./CI-CD-SETUP.md)

### For Understanding the Flow
- Check [WORKFLOW_DIAGRAM.md](./WORKFLOW_DIAGRAM.md)

### For Troubleshooting
- See [CI-CD-SETUP.md](./CI-CD-SETUP.md) → Troubleshooting section

## 🎯 What's in This Documentation

### Workflows
- **CI Workflow** (`ci.yml`) - Code quality checks
- **CD Workflow** (`cd.yml`) - Automated deployment

### Configuration
- Prettier setup
- ESLint configuration
- Type checking
- Vercel deployment

### Deployment Strategy
- Feature branches → CI only
- Development branch → CI + Deploy to staging
- Main branch → CI + Deploy to production

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       ├── ci.yml          # CI workflow
│       └── cd.yml          # CD workflow
├── Documentation/          # You are here!
│   ├── README.md          # This file
│   ├── README_CI_CD.md    # Main overview
│   ├── QUICK_START.md     # Quick setup
│   ├── CI-CD-SETUP.md     # Detailed setup
│   └── WORKFLOW_DIAGRAM.md # Visual diagrams
├── .prettierrc            # Code formatting
├── .prettierignore        # Formatting exclusions
├── .vercelignore          # Deployment exclusions
└── package.json           # Scripts and dependencies
```

## 💡 Key Features

✅ Separate CI and CD workflows
✅ Automated code quality checks
✅ Branch-based deployments
✅ PR protection
✅ Staging environment
✅ Production safety

## 🆘 Need Help?

1. Check the specific documentation file for your topic
2. Review [CI-CD-SETUP.md](./CI-CD-SETUP.md) troubleshooting section
3. Check GitHub Actions logs for detailed errors

## 🔄 Workflow Summary

```
Feature Branch
    ↓ (CI checks)
Create PR to Development
    ↓ (CI must pass)
Merge to Development
    ↓ (CI + Deploy to test.ashiqur-rahman.de)
Test on Staging
    ↓
Create PR to Main
    ↓ (CI must pass)
Merge to Main
    ↓ (CI + Deploy to ashiqur-rahman.de)
🎉 Live in Production!
```

---

**Start with [README_CI_CD.md](./README_CI_CD.md) for the complete overview!**

