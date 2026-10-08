# Technology Decisions

## Languages

### HTML5
* **Status**: CONFIRMED
* **Evidence**: `/index.html` (68 KB). Implements semantic HTML5 markup (`<!DOCTYPE html>`, `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).

### CSS3
* **Status**: CONFIRMED
* **Evidence**: `/css/style.css` (38 KB). Implements CSS custom properties (`var(--primary)`, `var(--bg-glass)`), `@media` queries, flexbox, CSS grid, backdrop-filter blur, CSS keyframes, and transitions.

### JavaScript (ECMAScript 2015+)
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` (59 KB). Written in modern ES6+ utilizing `const`/`let`, arrow functions, template literals, class/object module structures, destructuring, and standard Web APIs.

### JSON
* **Status**: CONFIRMED
* **Evidence**: `/package.json` (304 B). Used for project metadata and local dev script definitions.

---

## Frameworks

No frontend framework was found in the implementation.

* **Status**: CONFIRMED
* **Evidence**:
  * No runtime dependencies or script references for React, Vue.js, Angular, Svelte, Preact, Solid.js, or Next.js exist in `/package.json`, `/index.html`, or `/js/script.js`.
  * The application executes entirely using native browser DOM manipulation and custom JavaScript module singletons.

---

## Styling

### Tailwind CSS (CDN Runtime)
* **Status**: CONFIRMED
* **Evidence**:
  * Injected via `<script src="https://cdn.tailwindcss.com"></script>` in `/index.html` (line 25).
  * Inline configuration block in `/index.html` (lines 27–56) sets custom color palettes (`primary: '#1d4ed8'`, `accent: '#60a5fa'`, `dark-bg: '#0a0f1d'`, etc.), border radius, and font family mappings.
  * Tailwind utility classes (e.g., `flex`, `hidden`, `md:flex`, `grid`, `items-center`, `justify-between`, `py-20`, `px-4`, `transition-all`) are applied directly to HTML elements in `/index.html`.

### Custom Vanilla CSS Design System
* **Status**: CONFIRMED
* **Evidence**:
  * `/css/style.css` provides custom design tokens using CSS Custom Properties (`--primary`, `--primary-light`, `--bg-primary`, `--text-primary`, `--glass-bg`, `--glass-border`, etc.) scoped under `:root` and `[data-theme="dark"]`.
  * Custom glassmorphic utilities and component classes (`.glass-pill`, `.glass-card`, `.gradient-text`, `.btn-primary`, `.timeline-line`, `.toast`) layer on top of Tailwind.

---

## JavaScript

### Vanilla JavaScript DOM APIs
* **Status**: CONFIRMED
* **Evidence**: Direct DOM manipulation in `/js/script.js` via `document.getElementById`, `document.querySelectorAll`, `element.classList.add`/`remove`/`toggle`, `element.setAttribute`, `element.innerHTML`, and `element.getBoundingClientRect`.

### IntersectionObserver API
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 270–350 (`setupScrollSpy` observing sections for active navbar state updates) and lines 340–390 (`setupScrollAnimations` adding entrance animation classes when elements enter the viewport).

### Web Storage API (localStorage)
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 30–65 (`ThemeManager.getInitialTheme` and `ThemeManager.setTheme` reading and writing the `'portfolio-theme'` key).

### matchMedia API
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 34–38 (`window.matchMedia('(prefers-color-scheme: dark)')` used to detect operating system dark mode preference).

### Clipboard API
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 1450–1475 (`navigator.clipboard.writeText` used for copying email and phone number with visual feedback).

### requestAnimationFrame API
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 1620–1650 (used inside `InteractionManager` for 3D card tilt transformations).

### Fetch API
* **Status**: CONFIRMED (Implemented for PDF validation only, no backend API calls)
* **Evidence**: `/js/script.js` line 1538 (`fetch(resumeUrl, { method: 'HEAD' })` used in `ResumeInteractions.verifyResume` to test whether the local resume file exists before initiating download).

---

## Animation

### CSS Transitions & Transforms
* **Status**: CONFIRMED
* **Evidence**: Extensively defined in `/css/style.css` (e.g. `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`, `transform: translateY(-4px);`).

### CSS Keyframe Animations
* **Status**: CONFIRMED
* **Evidence**: Defined in `/css/style.css` lines 500–650 (`@keyframes float`, `@keyframes pulseGlow`, `@keyframes shimmer`, `@keyframes ripple`, `@keyframes spin`).

### JavaScript IntersectionObserver Scroll Animations
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 340–390 attaches `.in-view` classes to trigger CSS reveal transitions as elements scroll into view.

### JavaScript Interactive 3D Tilt
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 1600–1660 (`InteractionManager.setupCardTilt` computes mouse coordinates relative to card bounds and applies dynamic `perspective` and `rotateX`/`rotateY` transforms).

### External Animation Libraries
* **Status**: CONFIRMED (None used)
* **Evidence**: No references to GSAP, Framer Motion, Anime.js, or AOS found in `/package.json`, `/index.html`, or `/js/script.js`.

---

## Theme System

### Light / Dark Mode System
* **Status**: CONFIRMED
* **Evidence**:
  * **State Persistence**: Tracked via `localStorage.getItem('portfolio-theme')` / `localStorage.setItem('portfolio-theme', theme)`.
  * **System Preference Detection**: Evaluates `window.matchMedia('(prefers-color-scheme: dark)').matches` as fallback.
  * **DOM Application**: Toggles the `dark` class and `data-theme="dark"` / `data-theme="light"` attribute on `document.documentElement` (`/js/script.js` lines 40–80).
  * **CSS Variable Re-scoping**: `/css/style.css` lines 6–68 defines alternate color tokens under `[data-theme="dark"]` for background, text, card surfaces, and border opacities.
  * **Dual Trigger Controls**: Desktop toggle button in `#navbar` (`#theme-toggle`) and mobile toggle button in `#mobile-bottom-nav` (`#mobile-theme-toggle`).

---

## Navigation

### Desktop Sticky / Floating Pill Navigation
* **Status**: CONFIRMED
* **Evidence**: `/index.html` lines 61–158 (`#navbar`, classes `fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center`). Features glassmorphism, backdrop blur, rounded pill styling, and smooth-scrolling section links.

### Mobile Floating Glass Bottom Navigation
* **Status**: CONFIRMED
* **Evidence**: `/index.html` lines 160–218 (`#mobile-bottom-nav`, classes `fixed bottom-3 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center`). Compact glass pill layout displaying icon-only links for primary sections (`Home`, `About`, `Skills`, `Projects`, `Contact`) and a mobile theme switch button.

### Scroll-Spy & Active Section Highlighting
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 270–350 (`NavigationManager.setupScrollSpy`) observes all `<section>` elements via `IntersectionObserver` with a root margin and dynamically updates the `.active` CSS class on corresponding desktop and mobile anchor links.

---

## Fonts

### Google Fonts (CDN Delivery)
* **Status**: CONFIRMED
* **Evidence**:
  * Imported via `<link>` tags in `/index.html` lines 14–22 (`https://fonts.googleapis.com/css2?...`).
  * Families loaded: `Exo 2`, `Bitcount Prop Single`, `Boldonse`, `Edu VIC WA NT Hand`, `Josefin Slab`, `Kaushan Script`, `Moon Dance`, `Playwrite NZ Guides`, `Sekuya`.

### Active Font Application
* **Status**: CONFIRMED
* **Evidence**:
  * Primary interface typography is standardized on `'Exo 2', sans-serif` via `tailwind.config` (`fontFamily: { sans: ['"Exo 2"', 'sans-serif'] }` in `/index.html` line 46) and `body { font-family: 'Exo 2', sans-serif; }` in `/css/style.css` line 73.
  * Specialized display fonts are selectively mapped in Tailwind config (`bitcount`, `boldonse`, `edu`, `josefin`, `kaushan`, `moondance`, `playwrite`, `sekuya`) and used for specific headings or branding elements.

---

## Icons

### Inline SVG Elements
* **Status**: CONFIRMED
* **Evidence**:
  * Standard UI icons (sun/moon theme icons, chevron arrows, external link arrows, social media logos for GitHub, LinkedIn, mail, phone, WhatsApp) are written directly as inline `<svg>` elements in `/index.html`.

### JavaScript In-Memory SVG Strings
* **Status**: CONFIRMED
* **Evidence**:
  * Technology logos (HTML5, CSS3, JavaScript, React, Node.js, Python, Tailwind, Git, Docker, etc.) are embedded as raw SVG markup strings within the `TechStackManager.technologies` dataset in `/js/script.js` lines 435–640.

### External Icon Fonts / Libraries
* **Status**: CONFIRMED (None used)
* **Evidence**: No FontAwesome, Lucide, Feather, or Heroicons external font stylesheets or npm packages are loaded.

---

## Images and Media

### Profile Photographs
* **Status**: CONFIRMED
* **Evidence**: Local JPEG files located at `/assets/images/profile.jpg` and `/assets/images/lav-pandey.jpg`, loaded via standard `<img>` tag in `/index.html` line 254.

### Project & Certificate Diagrams
* **Status**: CONFIRMED
* **Evidence**: Vector graphics stored in `/assets/projects/` (`ai-nexus.svg`, `codeflow.svg`, `cloudmesh.svg`, `dataviz.svg`) and `/assets/certificates/` (`fullstack-cert.svg`, `aws-cert.svg`), loaded dynamically or statically via `<img>` tags.

### Resume Document
* **Status**: CONFIRMED
* **Evidence**: Anchors link to `/assets/resume/Lav-Pandey-Resume.pdf`. Informational guide `/assets/resume/README.txt` documents placement.

---

## Data Storage

### Client-Side LocalStorage
* **Status**: CONFIRMED
* **Evidence**: Used strictly for user theme persistence (`'portfolio-theme'`) in `/js/script.js` lines 30–65.

### In-Memory JavaScript Data Objects
* **Status**: CONFIRMED
* **Evidence**: Portfolio data is defined directly as JavaScript object arrays in `/js/script.js`:
  * `TechStackManager.technologies` (30+ skill objects with names, categories, SVG markup, levels)
  * `ProjectsManager.projectsData` (project entries with titles, tags, descriptions, links)
  * `AchievementsManager.certificatesData` (certification titles, issuers, dates, preview paths)

### SessionStorage / Cookies / IndexedDB / Database
* **Status**: CONFIRMED (None used)
* **Evidence**: No calls to `sessionStorage`, `document.cookie`, or `indexedDB` exist in `/js/script.js`.

---

## External Services

### Google Fonts CDN
* **Status**: CONFIRMED
* **Evidence**: `/index.html` lines 14–22.

### Tailwind CSS CDN
* **Status**: CONFIRMED
* **Evidence**: `/index.html` line 25.

### External Social / Communication Links
* **Status**: CONFIRMED
* **Evidence**: Outbound links in `/index.html` and `/js/script.js` to GitHub (`github.com/Lavpandey1`), LinkedIn (`linkedin.com/in/lav-pandey-200b39247`), WhatsApp Web API (`wa.me/918299863801`), `mailto:`, and `tel:`.

### Analytics & Tracking Services
* **Status**: CONFIRMED (None present)
* **Evidence**: No tracking scripts (Google Analytics, Mixpanel, Hotjar) exist in `/index.html`.

---

## Build Tools

### Local Static Server Tooling
* **Status**: CONFIRMED
* **Evidence**: `/package.json` contains:
  * `"dev": "npx -y serve . -l 3000"`
  * `"start": "npx -y serve . -l 3000"`

### Build Bundler / Transpiler / PostCSS Pipeline
* **Status**: CONFIRMED (None present)
* **Evidence**:
  * No `vite.config.js`, `webpack.config.js`, `rollup.config.js`, `postcss.config.js`, or standalone `tailwind.config.js` exists in the workspace.
  * No build script (`npm run build`) is declared in `/package.json`.
  * The project runs directly in the browser via native static file serving without compilation.

---

## Testing

No dedicated automated testing framework was found.

* **Status**: CONFIRMED
* **Evidence**:
  * No test runner dependencies (Jest, Vitest, Cypress, Playwright, Mocha) exist in `/package.json`.
  * No test configuration files or spec files (`*.test.js`, `*.spec.js`) exist in the project directory.

---

## Deployment

* **Status**: UNKNOWN
* **Evidence**:
  * The repository contains no deployment configuration files (such as `vercel.json`, `netlify.toml`, `.github/workflows/deploy.yml`, or `firebase.json`).
  * While the project is structurally ready for any static hosting provider, no specific production deployment target is documented or configured within the repository files.

---

## Technology Trade-offs

### Tailwind CSS via CDN vs. Tailwind CLI / PostCSS Build
* **Status**: CONFIRMED
* **Evidence**: The project loads `https://cdn.tailwindcss.com` at runtime.
* **Trade-off**: Fast setup without Node.js build dependencies, but produces a console warning for production use and downloads an in-browser JIT compiler (~300 KB) instead of a purged, minified production CSS stylesheet (~10–20 KB).

### Embedded SVG Strings in JavaScript vs. External Asset Files
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` embeds full SVG markup strings for tech icons inside `TechStackManager.technologies`.
* **Trade-off**: Eliminates additional HTTP roundtrips to fetch individual `.svg` files for skill badges, but increases `/js/script.js` file size to ~59 KB.

### Native Vanilla JS vs. Modern Frontend Frameworks
* **Status**: INFERRED
* **Trade-off**: Eliminates build-step dependency and framework runtime overhead; requires manual DOM synchronization, explicit event handler binding, and string template construction in JavaScript.

### Client-Side Form Validation vs. Connected Backend Endpoint
* **Status**: CONFIRMED
* **Evidence**: `/js/script.js` lines 1390–1440.
* **Trade-off**: Contact form gives instant UI feedback via toast notifications without requiring backend hosting, but messages submitted by visitors are not persisted to a database or forwarded via email.
