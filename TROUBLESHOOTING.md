# GitHub Pages Troubleshooting Guide

## Common Issues and Solutions

### Issue 1: "Site not found" or 404 Error

**Possible Causes:**

1. **Repository not connected to GitHub**
   - Check: `git remote -v` (should show your GitHub URL)
   - Solution: Connect your local repo to GitHub (see below)

2. **GitHub Pages not enabled**
   - Go to: Repository → Settings → Pages
   - Make sure Pages is enabled and source is set correctly

3. **Wrong branch name**
   - GitHub Pages works with `main` branch by default
   - Your current branch: `master`
   - Solution: Rename branch to `main` or configure Pages to use `master`

4. **Repository is Private**
   - GitHub Pages free tier requires Public repository
   - Solution: Make repository Public in Settings

5. **Wrong URL**
   - Correct format: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`
   - Make sure repository name matches exactly

### Issue 2: Files not pushed to GitHub

**Check if files are on GitHub:**
1. Go to your repository on GitHub
2. Check if files are visible (index.html, assets folder, etc.)

**If files are missing:**
```bash
git push -u origin main
```

### Issue 3: Branch name mismatch

**Current situation:** Your branch is `master`, GitHub Pages expects `main`

**Solution 1: Rename branch to main (Recommended)**
```bash
git branch -M main
git push -u origin main
```

**Solution 2: Configure Pages to use master branch**
1. Go to: Repository → Settings → Pages
2. Under Source, select `master` branch instead of `main`

## Step-by-Step Fix

### Step 1: Connect to GitHub (if not done)

```bash
# Replace YOUR_USERNAME and REPOSITORY_NAME
git remote add origin https://github.com/YOUR_USERNAME/REPOSITORY_NAME.git
```

### Step 2: Rename branch to main

```bash
git branch -M main
```

### Step 3: Push to GitHub

```bash
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**:
   - Branch: **main**
   - Folder: **/ (root)**
4. Click **Save**

### Step 5: Wait and Check

- Wait 1-2 minutes for deployment
- Check Actions tab for deployment status
- Visit: `https://YOUR_USERNAME.github.io/REPOSITORY_NAME/`

## Verify Your Setup

Run these commands to check:

```bash
# Check remote connection
git remote -v

# Check current branch
git branch

# Check if files are committed
git status

# Check commit history
git log --oneline
```

## Still Not Working?

1. **Check GitHub Actions**: Repository → Actions tab
   - Look for any failed deployments
   - Check error messages

2. **Verify Repository Name**: 
   - Must match exactly in URL
   - Case-sensitive

3. **Check File Structure**:
   - `index.html` must be in root directory
   - All paths must be relative (not absolute)

4. **Clear Browser Cache**:
   - Try incognito/private mode
   - Hard refresh (Ctrl+F5)

5. **Check Repository Visibility**:
   - Must be Public for free GitHub Pages

## Need Help?

Share these details:
- Your GitHub username
- Repository name
- Error message (if any)
- Output of `git remote -v`
- Output of `git branch`

