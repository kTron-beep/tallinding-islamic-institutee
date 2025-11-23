# Testing Guide for Tallinding Islamic Institution Website

## Method 1: Direct File Opening (Quick Test)

1. **Open index.html directly:**
   - Navigate to the project folder
   - Double-click `index.html` to open in your default browser
   - Or right-click → "Open with" → Choose your browser

2. **Test all pages:**
   - Click through all navigation links
   - Test mobile menu (resize browser window or use browser dev tools)
   - Check all internal links work

## Method 2: Local Server (Recommended)

### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then open: http://localhost:8000

### Using Node.js (if installed):
```bash
# Install http-server globally (one time)
npm install -g http-server

# Run server
http-server -p 8000
```
Then open: http://localhost:8000

### Using PHP (if installed):
```bash
php -S localhost:8000
```
Then open: http://localhost:8000

## What to Test

### ✅ Navigation
- [ ] All navigation links work
- [ ] Mobile menu opens/closes
- [ ] Active page is highlighted in nav
- [ ] Smooth scrolling works

### ✅ Homepage (index.html)
- [ ] Hero section displays correctly
- [ ] All buttons link correctly
- [ ] Programs cards display
- [ ] Highlights section shows 4 items
- [ ] CTA button works

### ✅ About Page
- [ ] History section displays
- [ ] Mission & Vision cards side-by-side (desktop)
- [ ] Core values grid (6 items)
- [ ] Responsive on mobile

### ✅ Academics Page
- [ ] Islamic Studies section
- [ ] General Studies section
- [ ] Curriculum stages timeline
- [ ] All icons display

### ✅ Admissions Page
- [ ] Enrollment steps numbered correctly
- [ ] Requirements list displays
- [ ] Fees section shows placeholders
- [ ] Download form button works

### ✅ Gallery Page
- [ ] Images display in grid
- [ ] Click image opens lightbox
- [ ] Lightbox closes with X button
- [ ] Lightbox closes with Escape key
- [ ] Grid responsive (3 cols desktop, 2 tablet, 1 mobile)

### ✅ Staff Page
- [ ] All staff cards display
- [ ] Images show (placeholders)
- [ ] Cards hover effect works
- [ ] Responsive grid layout

### ✅ Contact Page
- [ ] Contact info displays
- [ ] Form fields work
- [ ] Form validation works
- [ ] Submit button shows alert
- [ ] Map placeholder displays

### ✅ Responsive Design
- [ ] Test on mobile (375px width)
- [ ] Test on tablet (768px width)
- [ ] Test on desktop (1920px width)
- [ ] No horizontal scrolling
- [ ] Text is readable
- [ ] Buttons are large enough to tap

### ✅ Browser Compatibility
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on Mac)
- [ ] Mobile browsers

## Browser Developer Tools Testing

1. **Open DevTools:** Press `F12` or `Ctrl+Shift+I` (Windows) / `Cmd+Option+I` (Mac)

2. **Test Mobile View:**
   - Click device toolbar icon (or `Ctrl+Shift+M`)
   - Select different device sizes
   - Test mobile menu functionality

3. **Check Console:**
   - Look for any JavaScript errors
   - Should see no red errors

4. **Test Performance:**
   - Network tab: Check loading times
   - Lighthouse: Run performance audit

## Common Issues to Check

- ✅ All images load (or show placeholders correctly)
- ✅ Fonts load (Poppins & Inter)
- ✅ Tailwind CSS loads from CDN
- ✅ JavaScript functions work (menu, lightbox, form)
- ✅ Colors match design (#A8D5A2, #4C7F4C, #FFFFFF)
- ✅ No broken links
- ✅ Footer displays on all pages

## After Testing Locally

Once everything works locally, you can:
1. Push to GitHub
2. Enable GitHub Pages
3. Test the live site

