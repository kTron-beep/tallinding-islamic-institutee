# GitHub Deployment Guide

## Step 1: Initialize Git Repository

```bash
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Tallinding Islamic Institution website"
```

## Step 4: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `tallinding-islamic-institution` (or your preferred name)
4. Description: "Official website for Tallinding Islamic Institution"
5. Choose **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have files)
7. Click **"Create repository"**

## Step 5: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/tallinding-islamic-institution.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes for deployment
7. Your site will be live at: `https://YOUR_USERNAME.github.io/tallinding-islamic-institution/`

## Alternative: Using GitHub Desktop (No Terminal Required!)

**This is the easiest way if you don't want to use the terminal:**

1. **Download GitHub Desktop:**
   - Go to [desktop.github.com](https://desktop.github.com)
   - Download and install GitHub Desktop
   - Sign in with your GitHub account

2. **Add Your Repository:**
   - Open GitHub Desktop
   - Click **File** → **Add Local Repository**
   - Browse to: `C:\Users\Abubacarr\Desktop\Tallinding Islamic Institute`
   - Click **Add Repository**

3. **Publish to GitHub:**
   - You'll see all your files listed as changes
   - In the bottom left, type a commit message: "Initial commit: Tallinding Islamic Institute website"
   - Click **Commit to main**
   - Click **Publish repository** button (top right)
   - Repository name: `tallinding-islamic-institute`
   - Make sure **"Keep this code private"** is **UNCHECKED** (for free GitHub Pages)
   - Click **Publish Repository**

4. **Enable GitHub Pages** (same as Step 6 above):
   - Go to your repository on GitHub.com
   - Settings → Pages → Select **main** branch → **Save**

That's it! No terminal needed. 🎉

## Alternative: Using VS Code/Cursor Git Integration

If you're using VS Code or Cursor:

1. **Source Control Panel:**
   - Click the **Source Control** icon in the left sidebar (looks like a branch)
   - You'll see all your files listed

2. **Stage Changes:**
   - Click the **"+"** button next to each file to stage it, OR
   - Click **"Stage All Changes"** (or the "+" next to "Changes")

3. **Commit:**
   - Type a commit message at the top: "Update deployment guide" (or your message)
   - Click the **✓** (checkmark) button to commit

4. **Push to GitHub:**
   - **If remote is already set up** (like yours):
     - Look for a **"Push"** button or **"Sync Changes"** button (circular arrows) at the bottom
     - Or click the **"..."** menu (three dots) → **"Push"** or **"Push to..."**
     - Select `origin/main` when prompted
   - **If no remote exists yet:**
     - Click the **"..."** menu → **"Publish to GitHub"**
     - Choose **Public** repository
     - Repository name: `tallinding-islamic-institute`
     - Click **Publish**

5. **Enable GitHub Pages** (same as Step 6 above)

**Note:** Since your remote is already configured, you'll see "Push" options, not "Publish to GitHub".

## Alternative: Using GitHub CLI (if installed)

```bash
gh repo create tallinding-islamic-institution --public --source=. --remote=origin --push
```

## Troubleshooting

### If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or use GitHub Desktop app for easier authentication

### If files are too large:
- Check `.gitignore` is working
- Large images should be optimized before committing

## Quick Commands Summary

```bash
# Initialize
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/tallinding-islamic-institution.git
git branch -M main
git push -u origin main
```

## Future Updates

After making changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

