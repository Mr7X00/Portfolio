# Architecture Decisions

## Project Overview

The project is an interactive personal portfolio and digital resume web application for Lav Pandey. The current implementation is a client-side, single-page static web application. It combines semantic HTML5 markup, Tailwind CSS via CDN runtime configuration, a custom CSS design system with CSS custom properties (variables), and modular Vanilla JavaScript that manages UI state, DOM rendering, theme switching, project filtering, modal interactions, and scroll navigation without external framework runtimes.

Status: CONFIRMED

Evidence:
* `/index.html` (defines the single-page document structure, CDN links, and section containers)
* `/css/style.css` (implements the custom design token system, light/dark themes, and component styling)
* `/js/script.js` (orchestrates all interactive modules and client-side rendering)
* `/package.json` (defines local static file serving script via `serve`)

---

## Architecture Pattern

Single-Page Static Web Application (SPA) with Client-Side Vanilla JavaScript Component/Module Architecture.

Status: CONFIRMED

Evidence:
* All site sections (`#home`, `#about`, `#education`, `#experience`, `#skills`, `#projects`, `#achievements`, `#contact`) exist within a single HTML document (`/index.html`).
* Page navigation operates through client-side smooth-scroll anchor links and JavaScript-managed active states rather than multi-page server routing (`/js/script.js`, lines 312–420).
* There is no server-side templating engine, build-time static site generator (SSG), or client-side JavaScript framework router.

---

## Frontend Architecture

### HTML Structure
* **Semantic Hierarchy**: Structured with semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` (`/index.html`).
* **Container Architecture**: Sections are organized sequentially with unique IDs: `loader`, `home`, `about`, `education`, `experience`, `skills`, `projects`, `achievements`, `contact`, and modal containers (`#project-modal`, `#certificate-modal`).
* **Dual Navigation Menus**: Includes two dedicated navigation markups:
  1. Desktop top floating pill navbar (`#navbar`, class `hidden md:flex`)
  2. Mobile floating glass bottom navbar (`#mobile-bottom-nav`, class `md:hidden fixed bottom-3`)

Status: CONFIRMED
Evidence: `/index.html` lines 61–158 (desktop nav), lines 160–218 (mobile bottom nav), lines 220–1136 (sections).

### CSS & Styling Structure
* **Hybrid Styling Engine**:
  * **Tailwind CSS CDN Runtime**: Injected via `<script src="https://cdn.tailwindcss.com"></script>` with an inline `tailwind.config` script (`/index.html` lines 27–56) configuring colors (`primary`, `primary-light`, `primary-dark`, `accent`, `dark-bg`, etc.) and font families.
  * **Custom CSS Design Tokens**: `/css/style.css` defines a comprehensive CSS custom properties system (`:root` for light mode and `[data-theme="dark"]` for dark mode) specifying background layers, glassmorphism tokens, text colors, and borders (`/css/style.css` lines 6–68).
  * **Component & Utility Classes**: Custom classes such as `.glass-card`, `.glass-pill`, `.gradient-text`, `.btn-primary`, `.timeline-dot`, and `.nav-link` enhance the Tailwind baseline (`/css/style.css` lines 70–280).

Status: CONFIRMED
Evidence: `/index.html` lines 27–56; `/css/style.css` lines 1–400.

### JavaScript Structure & State Management
* **Modular Object/Class Structure**: Implemented using distinct ES6+ modules and manager objects attached to `window.PortfolioApp` upon `DOMContentLoaded`:
  * `ThemeManager`: Manages light/dark mode state, DOM attributes, and persistence (`/js/script.js` lines 16–160).
  * `LoaderManager`: Controls initial preloader fade-out and entry animation sequence (`/js/script.js` lines 162–215).
  * `NavigationManager`: Controls desktop & mobile active states, scroll-spy via `IntersectionObserver`, and smooth anchor scrolling (`/js/script.js` lines 217–420).
  * `TechStackManager`: Maintains an internal dataset of technologies with embedded SVGs and dynamically renders categorized tabs/grids (`/js/script.js` lines 422–850).
  * `ProjectsManager`: Maintains project metadata, handles category filtering (`all`, `web`, `ai`), and mounts project cards (`/js/script.js` lines 852–1100).
  * `AchievementsManager`: Renders certificate cards and sets up preview modals (`/js/script.js` lines 1102–1220).
  * `ModalManager`: Handles accessible modal opening, closing, escape key listeners, and focus traps (`/js/script.js` lines 1222–1340).
  * `ContactManager`: Client-side form input validation, character counting, copy-to-clipboard interactions, and toast notification feedback (`/js/script.js` lines 1342–1520).
  * `ResumeInteractions`: Handles resume download fallback checks and PDF viewing (`/js/script.js` lines 1522–1580).
  * `InteractionManager`: Manages 3D tilt effects, ripple animations, and micro-interactions (`/js/script.js` lines 1582–1700).

Status: CONFIRMED
Evidence: `/js/script.js` lines 1–1785.

### DOM Manipulation
* **Vanilla DOM APIs**: Direct manipulation using `document.getElementById`, `document.querySelectorAll`, `element.classList`, `element.setAttribute`, `innerHTML` templating, and `element.addEventListener`.
* **Dynamic Template Rendering**: Skill badges, project cards, and achievement modals are rendered dynamically using JavaScript template literals.

Status: CONFIRMED
Evidence: `/js/script.js` lines 500–600, 920–1000, 1140–1190.

### UI & Theme State
* **Theme State**: Persisted in `localStorage` under the key `'portfolio-theme'`. Falls back to the user's OS preference via `window.matchMedia('(prefers-color-scheme: dark)')`. Applied via `data-theme` attribute and `dark` class on `document.documentElement`.
* **Navigation State**: Tracked in real time through an `IntersectionObserver` observing section elements and syncing both desktop pills and mobile bottom bar links.
* **Filter State**: Held in memory in `ProjectsManager.activeFilter` and `TechStackManager.activeCategory`.

Status: CONFIRMED
Evidence: `/js/script.js` lines 20–80, 270–350, 890–930.

### Animation System
* **CSS Keyframes & Transitions**: CSS transitions for hover states, button scales, and glass card elevation. CSS `@keyframes` for pulse, float, shimmer, and spinner animations (`/css/style.css` lines 500–650).
* **Scroll-Triggered Reveals**: Implemented using an `IntersectionObserver` in JavaScript that attaches `.in-view` / `.reveal-visible` CSS classes when sections intersect the viewport (`/js/script.js` lines 340–390; `/css/style.css` lines 420–480).
* **Micro-Interactions**: JavaScript 3D tilt calculation on pointer movements for glass cards (`/js/script.js` lines 1600–1660).

Status: CONFIRMED
Evidence: `/css/style.css` lines 420–650; `/js/script.js` lines 1600–1660.

### Responsive Behavior
* **Media Queries & Utility Breakpoints**: Utilizes Tailwind breakpoints (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`) combined with custom CSS media queries (`@media (max-width: 768px)`).
* **Adaptive Navigation**:
  * Viewports >= 768px: Floating pill navigation fixed at the top center.
  * Viewports < 768px: Desktop bar hidden (`hidden md:flex`); mobile floating bottom navigation bar displayed (`md:hidden`).

Status: CONFIRMED
Evidence: `/index.html` lines 61, 160; `/css/style.css` lines 1200–1400.

---

## Backend Architecture

No backend implementation was found in the current project.

Status: CONFIRMED

Evidence:
* The workspace contains no server-side runtime files (no Node.js Express server, Python Flask/Django, Ruby, Go, PHP, or serverless functions).
* `/package.json` contains only a development static file server script (`npx -y serve . -l 3000`).
* All application logic executes exclusively within the client browser.

---

## Data Flow

Data moves entirely within the client runtime:

1. **Static Initial DOM**: Browser parses `/index.html`, loading structure and static section content.
2. **Local Data Source**: Arrays of objects in `/js/script.js` (`technologies`, `projectsData`, `certificatesData`) define portfolio content.
3. **Template Rendering**: Module initialization methods execute template literal functions mapping array items to HTML strings.
4. **DOM Injection**: JavaScript injects generated markup into designated section containers (`#tech-grid-container`, `#projects-grid`, `#certificates-grid`).
5. **Event Handling & User Interaction**:
   * User clicks (e.g. filter buttons, theme toggles, modal triggers) invoke event handlers.
   * State updates in memory and recalculates filtered subsets.
   * DOM elements update dynamically; theme state writes to `localStorage`.
   * Form submissions validate input locally and display transient toast notifications without network dispatch.

Status: CONFIRMED

Evidence:
* `/js/script.js` lines 422–850 (tech stack data & rendering)
* `/js/script.js` lines 852–1100 (projects data & rendering)
* `/js/script.js` lines 1342–1520 (contact form local submission & toast flow)

---

## API Communication

No verified API communication was found in the current project.

Status: CONFIRMED

Evidence:
* Inspection of `/js/script.js` confirms zero invocations of `fetch()`, `XMLHttpRequest`, `axios`, or WebSocket connections.
* The contact form submission handler (`ContactManager.handleSubmit` in `/js/script.js` lines 1390–1440) prevents default form submission via `e.preventDefault()`, executes local regex validation, simulates a brief delay, and displays a success toast without dispatching HTTP POST requests.

---

## Authentication / Authorization

No authentication or authorization mechanism was found.

Status: CONFIRMED

Evidence:
* There are no user accounts, session cookies, JWT tokens, OAuth flows, or protected routes in the codebase.
* All content is publicly accessible within the static single page.

---

## Database Architecture

No database implementation was found.

Status: CONFIRMED

Evidence:
* There are no SQL or NoSQL database clients, ORMs, schemas, migrations, or database connection configurations in the project.
* All data is hardcoded statically in HTML markup or defined as in-memory JavaScript data structures within `/js/script.js`.

---

## External Services

The following external services are directly integrated into the project:

1. **Google Fonts (CDN)**:
   * Loaded via `<link rel="preconnect" href="https://fonts.googleapis.com">` and stylesheet link in `/index.html` (lines 14–22).
   * Loads the font families: `Exo 2`, `Bitcount Prop Single`, `Boldonse`, `Edu VIC WA NT Hand`, `Josefin Slab`, `Kaushan Script`, `Moon Dance`, `Playwrite NZ Guides`, `Sekuya`.
2. **Tailwind CSS CDN**:
   * Loaded via `<script src="https://cdn.tailwindcss.com"></script>` in `/index.html` (line 25).
3. **External Social & Communication Platforms**:
   * Direct outbound anchor links (`href`) to:
     * GitHub (`https://github.com/Lavpandey1`)
     * LinkedIn (`https://www.linkedin.com/in/lav-pandey-200b39247`)
     * Email via `mailto:lavkumarpandey02082003@gmail.com`
     * Phone via `tel:+918299863801`
     * WhatsApp via `https://wa.me/918299863801`

No external analytics scripts (e.g. Google Analytics), monitoring services, or backend APIs are present.

Status: CONFIRMED

Evidence:
* `/index.html` lines 14–25, 1020–1080.
* `/js/script.js` lines 1470–1520.

---

## Asset Architecture

The project organizes assets under the `/assets/` directory:

* **Images**:
  * Profile photographs stored at `/assets/images/profile.jpg` and `/assets/images/lav-pandey.jpg`.
  * Referenced in hero section image elements (`/index.html` line 254).
* **Vector Graphics (SVG)**:
  * Favicon located at `/assets/favicon.svg`.
  * Project preview diagrams/illustrations located in `/assets/projects/` (`ai-nexus.svg`, `codeflow.svg`, `cloudmesh.svg`, `dataviz.svg`).
  * Certificate preview graphics located in `/assets/certificates/` (`fullstack-cert.svg`, `aws-cert.svg`).
  * Tech stack logos: Implemented as raw SVG strings embedded directly within JavaScript data objects in `/js/script.js` (lines 435–640) rather than external `.svg` files.
* **Resume PDF**:
  * Anchors in `/index.html` reference `/assets/resume/Lav-Pandey-Resume.pdf`.
  * Directory contains `/assets/resume/README.txt` detailing placement instructions.
  * `/js/script.js` implements a download verification check falling back gracefully if the physical PDF is missing (`/js/script.js` lines 1522–1580).
* **Fonts**:
  * External network delivery via Google Fonts CDN; no local WOFF/WOFF2 font binaries are stored in the filesystem.

Status: CONFIRMED

Evidence:
* Directory listing of `/assets/`
* `/index.html` lines 8, 254, 760, 940
* `/js/script.js` lines 435–640, 1522–1580

---

## Deployment Architecture

Status: UNKNOWN

Evidence:
* No continuous integration/continuous deployment configuration files exist in the repository (e.g., `.github/workflows`, `.gitlab-ci.yml`).
* No platform-specific hosting deployment descriptors exist (e.g., `vercel.json`, `netlify.toml`, `firebase.json`, `CNAME`).
* The project root contains only a generic `package.json` with a local dev script (`serve . -l 3000`).
* While the project's static file structure allows it to be hosted on any static hosting provider (e.g. GitHub Pages, Vercel, Netlify, Cloudflare Pages), the specific production deployment platform and configuration cannot be verified from the codebase.

---

## Architectural Trade-offs

### Static Client-Side Architecture vs. Server-Rendered / Full-Stack
* **Benefits**: Zero backend infrastructure costs, near-instant initial response from static file servers, minimal operational attack surface, zero database maintenance.
* **Trade-offs**: Dynamic features (such as persistent contact form dispatch or CMS-driven portfolio updates) require either external third-party services or manual code updates; contact form submissions cannot be persisted without an external backend.

Status: INFERRED

### Modular Vanilla JavaScript vs. Frontend Framework (React / Vue / Svelte)
* **Benefits**: Zero build tool dependency, zero compilation pipeline, small initial payload, zero framework bundle overhead, maximum long-term standards compatibility.
* **Trade-offs**: Manual DOM reconciliation and string-based HTML templates in JavaScript (`innerHTML`) instead of reactive virtual DOM or compiler-driven component state management; increased manual boilerplate for modal traps and event delegation.

Status: INFERRED

### Hybrid Tailwind CDN Runtime + Custom CSS Design System
* **Benefits**: Rapid prototyping with atomic utility classes; theme token consistency via CSS custom properties without requiring a local PostCSS/Node build pipeline.
* **Trade-offs**: The Tailwind CDN script compiles utility classes dynamically in the client browser at runtime (generating console warnings for production use), which increases initial JavaScript execution time compared to a precompiled, purged production CSS bundle.

Status: CONFIRMED

Evidence:
* Console warning emitted by `https://cdn.tailwindcss.com` regarding production use.
* Coexistence of `/css/style.css` (38 KB) and runtime Tailwind compiler script in `/index.html`.

---

## Evidence

Major architectural decisions and claims are verified by the following files and code locations:

* **Single-Page Structure & CDN Inclusions**: `/index.html` lines 1–60.
* **Dual Responsive Navigation Systems**: `/index.html` lines 61–158 (desktop top glass pill), lines 160–218 (mobile bottom floating bar).
* **Custom Styling Tokens & Glassmorphism**: `/css/style.css` lines 6–68 (`:root` and `[data-theme="dark"]`), lines 70–280 (utility and glass components).
* **Theme Switching & Storage**: `/js/script.js` lines 16–160 (`ThemeManager`, reading/writing `localStorage.getItem('portfolio-theme')`).
* **Active Section Tracking & Scroll-Spy**: `/js/script.js` lines 270–350 (`IntersectionObserver` configuration).
* **Tech Stack Dynamic Rendering & In-Memory SVGs**: `/js/script.js` lines 422–850 (`TechStackManager`).
* **Client-Side Project Filtering & Modals**: `/js/script.js` lines 852–1100 (`ProjectsManager`), lines 1222–1340 (`ModalManager`).
* **Simulated Contact Submission & Validation**: `/js/script.js` lines 1342–1520 (`ContactManager`).
* **Static Dev Tooling**: `/package.json` lines 1–14 (scripts: `dev`, `start` using `serve`).
