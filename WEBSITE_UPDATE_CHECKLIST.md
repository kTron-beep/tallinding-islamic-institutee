# Website Update Checklist for Tallinding Islamic Institute

This document lists all items that need to be updated with actual school information and content.

---

## 🔴 CRITICAL UPDATES (Must Complete Before Launch)

### 1. Contact Information
- [ ] **Phone Number**: Replace `+220 XXX-XXXX` with actual phone number
  - Location: `index.html` (line 418), `about.html`, `academics.html`, `admissions.html`, `staff.html`, `gallery.html`
- [ ] **Email Address**: Verify/Update `info@tallindingislamic.edu`
  - Location: `index.html` (line 419)
  - Note: Ensure email domain is active and monitored
- [ ] **Physical Address**: Update if more specific than "Tallinding, The Gambia"
  - Location: `index.html` (line 417)
- [ ] **Operating Hours**: Verify "Monday - Friday: 8:00 AM - 4:00 PM" is accurate
  - Location: `index.html` (line 420)

### 2. Social Media Links
- [ ] **Facebook**: Replace `href="#"` with actual Facebook page URL
  - Location: `index.html` (lines 422, 480), footer on all pages
- [ ] **Twitter/X**: Replace `href="#"` with actual Twitter/X profile URL
  - Location: `index.html` (lines 423, 481), footer on all pages
- [ ] **Instagram**: Replace `href="#"` with actual Instagram profile URL
  - Location: `index.html` (lines 424, 482), footer on all pages
- [ ] **YouTube**: Replace `href="#"` with actual YouTube channel URL
  - Location: `index.html` (lines 425, 483), footer on all pages

### 3. Staff Information & Photos
- [ ] **Principal Photo**: Replace placeholder with actual photo
  - Location: `staff.html` (multiple instances)
  - File path: Save to `assets/assets/images/staff/principal.jpg`
- [ ] **Quran Teacher Photo**: Replace placeholder with actual photo
  - Location: `staff.html`
  - File path: Save to `assets/assets/images/staff/quran_teacher.jpg`
- [ ] **Arabic Teacher Photo**: Replace placeholder with actual photo
  - Location: `staff.html`
  - File path: Save to `assets/assets/images/staff/arabic_teacher.jpg`
- [ ] **Mathematics Teacher Photo**: Replace placeholder with actual photo
  - Location: `staff.html`
  - File path: Save to `assets/assets/images/staff/math_teacher.jpg`
- [ ] **English Teacher Photo**: Replace placeholder with actual photo
  - Location: `staff.html`
  - File path: Save to `assets/assets/images/staff/english_teacher.jpg`
- [ ] **Science Teacher Photo**: Replace placeholder with actual photo
  - Location: `staff.html`
  - File path: Save to `assets/assets/images/staff/science_teacher.jpg`
- [ ] **Staff Names & Bios**: Verify all staff names and biographies are accurate
  - Location: `staff.html` and `assets/js/translations.js`

---

## 🟡 IMPORTANT UPDATES (Should Complete Soon)

### 4. Gallery Images
Replace all placeholder images in `gallery.html` with actual school photos:

- [ ] **School Building** (9 instances)
  - File path: `assets/assets/images/gallery/school_building.jpg`
- [ ] **Classroom** (9 instances)
  - File path: `assets/assets/images/gallery/classroom.jpg`
- [ ] **Students Learning** (9 instances)
  - File path: `assets/assets/images/gallery/students_learning.jpg`
- [ ] **Quran Study** (9 instances)
  - File path: `assets/assets/images/gallery/quran_study.jpg`
- [ ] **School Event** (9 instances)
  - File path: `assets/assets/images/gallery/school_event.jpg`
- [ ] **Prayer Hall** (9 instances)
  - File path: `assets/assets/images/gallery/prayer_hall.jpg`
- [ ] **Library** (9 instances)
  - File path: `assets/assets/images/gallery/library.jpg`
- [ ] **Sports Activity** (9 instances)
  - File path: `assets/assets/images/gallery/sports_activity.jpg`
- [ ] **Graduation** (9 instances)
  - File path: `assets/assets/images/gallery/graduation.jpg`

**Note**: There are multiple duplicate sections in `gallery.html` that need updating.

### 5. News & Events Content
- [ ] **Latest News Image**: Replace Unsplash image with actual graduation ceremony photo
  - Location: `index.html` (line 352)
  - File path: `assets/assets/images/news/graduation_2023.jpg`
- [ ] **News Date**: Update "May 28, 2023" with actual date
  - Location: `index.html` (line 355)
- [ ] **News Headline**: Verify/Update "Class of 2023 Graduation Ceremony"
  - Location: `index.html` (line 356)
- [ ] **News Content**: Update news excerpt with actual event details
  - Location: `index.html` (line 357-359)
- [ ] **Upcoming Events**: Add real upcoming events with dates, times, and descriptions
  - Location: `index.html` (Events section)

### 6. Student Life Images
- [ ] **Leadership Image**: Replace Unsplash image with actual school photo
  - Location: `index.html` (line 331)
  - File path: `assets/assets/images/student_life/leadership.jpg`

### 7. Footer Resource Links
- [ ] **Parent Portal**: Add actual link or remove if not available
  - Location: Footer on all pages (`index.html` line 471)
- [ ] **Student Resources**: Add actual link or remove if not available
  - Location: Footer on all pages (`index.html` line 472)
- [ ] **Faculty Directory**: Add actual link or remove if not available
  - Location: Footer on all pages (`index.html` line 473)
- [ ] **Library**: Add actual link or remove if not available
  - Location: Footer on all pages (`index.html` line 474)

---

## 🟢 OPTIONAL ENHANCEMENTS (Can Add Later)

### 8. Additional Content
- [ ] **About Page**: Add more detailed history, achievements, and milestones
- [ ] **Academics Page**: Add detailed curriculum descriptions, course syllabi
- [ ] **Admissions Page**: 
  - Add actual fee structure (currently shows placeholders)
  - Add downloadable application forms (PDF)
  - Add admission deadlines and important dates
- [ ] **Programs Section**: Add more detailed descriptions of each program
- [ ] **Mission & Vision**: Review and update if needed

### 9. Media & Documentation
- [ ] **School Brochure**: Add downloadable PDF brochure
- [ ] **Video Content**: Add school tour video or promotional video
- [ ] **Testimonials**: Add student/parent testimonials section
- [ ] **Achievements**: Add awards, certifications, or recognition section

### 10. Technical Updates
- [ ] **Contact Form**: Set up backend to receive form submissions
  - Currently form only shows alert, needs actual email/backend integration
- [ ] **Search Functionality**: Verify search works for all content
- [ ] **Analytics**: Add Google Analytics or similar tracking
- [ ] **SEO**: Add meta descriptions, Open Graph tags for social sharing
- [ ] **Sitemap**: Create XML sitemap for search engines
- [ ] **Robots.txt**: Create robots.txt file

---

## 📋 IMAGE REQUIREMENTS

### Recommended Image Specifications:
- **Hero Carousel Images**: 1920x1080px (16:9 ratio), JPG format, optimized for web
- **Gallery Images**: 1200x800px (3:2 ratio), JPG format
- **Staff Photos**: 500x600px (portrait), JPG format
- **News/Event Images**: 1200x800px (3:2 ratio), JPG format
- **All Images**: Compressed for web (under 500KB each recommended)

### Image Naming Convention:
- Use descriptive, lowercase names with underscores
- Example: `school_building.jpg`, `principal_ahmed_jallow.jpg`

---

## 🔍 WHERE TO FIND FILES TO UPDATE

### HTML Files:
- `index.html` - Homepage
- `about.html` - About page
- `academics.html` - Academics page
- `admissions.html` - Admissions page
- `gallery.html` - Gallery page
- `staff.html` - Staff page

### Translation Files:
- `assets/js/translations.js` - Update Arabic/English translations

### Image Locations:
- Save new images to: `assets/assets/images/`
- Create subfolders: `gallery/`, `staff/`, `news/`, `student_life/`

---

## ✅ PRE-LAUNCH CHECKLIST

Before going live, ensure:
- [ ] All placeholder images replaced
- [ ] All contact information verified
- [ ] All social media links working
- [ ] All staff information accurate
- [ ] Contact form tested and working
- [ ] All pages tested on mobile devices
- [ ] All links tested (no broken links)
- [ ] Content reviewed for accuracy
- [ ] Arabic translations verified
- [ ] Browser compatibility tested (Chrome, Firefox, Safari, Edge)
- [ ] Site speed optimized
- [ ] SSL certificate installed (if using HTTPS)

---

## 📝 NOTES

- **Placeholder Images**: Currently using `via.placeholder.com` and `unsplash.com` images
- **Multiple Instances**: Some content appears multiple times in `gallery.html` - update all instances
- **Translation Keys**: Check `assets/js/translations.js` for all translatable content
- **File Paths**: All image paths should be relative: `assets/assets/images/filename.jpg`

---

**Last Updated**: January 2025
**Status**: Ready for content updates

