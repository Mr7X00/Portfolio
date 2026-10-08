# Quality Assurance, Accessibility & Testing Report

This document records the verification results for functional behavior, responsive layout scaling, accessibility compliance, and performance audits.

---

## 1. Functional Testing Matrix

| Section / Component | Test Case | Expected Behavior | Result |
| :--- | :--- | :--- | :--- |
| **Hero** | Banner display | SVG poster scales responsively without cropping or overflow | **PASS** |
| **Hero CTAs** | "View My Work" | Smoothly navigates to `#projects` section | **PASS** |
| **Hero CTAs** | "Download Resume" | Points to `/assets/resume/Lav-Pandey-Resume.pdf` with download attribute | **PASS** |
| **Hero CTAs** | "Let's Connect" | Smoothly navigates to `#contact` section | **PASS** |
| **Experience** | Veltora Offer Letter | Opens verified PDF in new tab with `noopener noreferrer` | **PASS** |
| **Experience** | Managineers Offer Letter | Opens verified PDF in new tab with `noopener noreferrer` | **PASS** |
| **Certificates Showcase** | Card click | Opens full-resolution certificate image modal | **PASS** |
| **Certificates Showcase** | Modal dismissal | Closes via close button, overlay click, or `Escape` key | **PASS** |
| **Education** | NPGC College Website | Opens `https://www.npgc.in/` in new tab | **PASS** |
| **Education** | Syllabus Link | Opens official B.Voc syllabus PDF in new tab | **PASS** |
| **Education** | College Location | Opens Google Maps pin in new tab | **PASS** |
| **Education** | School Link | Anil Saraswati Vidya Mandir opens school site in new tab | **PASS** |
| **Projects Showcase** | Live & GitHub URLs | Configured URLs open in new tabs; empty URLs display "In Development" | **PASS** |
| **Contact Form** | Form Submission | Validates required fields, sends AJAX request, updates feedback state | **PASS** |
| **Contact Form** | WhatsApp Direct | Dispatches pre-formatted message directly to `+91 9005223813` | **PASS** |
| **Contact Form** | Copy to Clipboard | Copies email/phone and displays temporary "Copied" feedback | **PASS** |

---

## 2. Responsive Breakpoint Validation

The layout was verified across standard viewport tiers:
- **Mobile Small (320px – 375px)**:
  - Hero card padding scales cleanly (`0.75rem 0.5rem`).
  - Button stacks vertically; no horizontal overflow (`scrollWidth === clientWidth`).
- **Mobile Large (375px – 640px)**:
  - CTAs adjust to full width.
  - Project grid renders single column with preserved aspect ratio.
- **Tablet (641px – 1024px)**:
  - Grid auto-fits 2 columns comfortably (`minmax(300px, 1fr)`).
  - Ambient radial glow stays within bounds.
- **Desktop & Widescreen (1024px – 1920px+)**:
  - Max container width constrained to `var(--canvas-max-width)` (1200px) centered.
  - Text lines comfortably wrapped with `max-width: 680px`.

---

## 3. Accessibility & Usability (a11y)

- **Keyboard Navigation**:
  - Full tab order across all interactive elements (`a`, `button`, `input`, `textarea`).
  - High-visibility focus indicators via global `:focus-visible` styles (`outline: 2px solid var(--color-accent)`).
- **Reduced Motion Support**:
  - Respects user preference via `@media (prefers-reduced-motion: reduce)`.
  - Disables entrance keyframe animations, glow transitions, and intersection observer reveals.
- **Semantic Structure**:
  - Landmark elements: `<main class="portfolio-main-canvas">`, `<section id="...">`, `<article>`, `<header>`, `<footer>`.
  - Proper heading hierarchy from `<h1 class="sr-only">` down through `<h2>` and `<h3>`.
- **Screen Reader Support**:
  - Informative `aria-label` attributes on section landmarks, modal dialogs, and SVG buttons.
  - Decorative icons and watermark marks marked with `aria-hidden="true"`.
- **Zero Emojis**:
  - Eliminates screen-reader pronunciation confusion caused by unicode emoji characters.

---

## 4. Performance Audit

- **Production Bundle**:
  - JS: ~316 kB (~91 kB gzipped)
  - CSS: ~34 kB (~6.2 kB gzipped)
- **Asset Optimization**:
  - Web-optimized JPEG poster artwork with `loading="lazy"` attributes.
  - SVG vector assets with compact node structures.
- **Font Delivery**:
  - Google Fonts preconnect (`fonts.googleapis.com` and `fonts.gstatic.com`).
  - `font-display: swap` prevents Flash of Invisible Text (FOIT).
