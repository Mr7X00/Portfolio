# Lav Pandey — Full Stack Developer Portfolio

Official portfolio and engineering showcase for **Lav Pandey**, Aspiring Full Stack Web Developer. Built with React 19 and Vite 8, featuring a dark tactical aesthetic with warm golden amber accents (`#c59b63`), an integrated SVG poster header, dedicated AI-generated project artwork, verified institutional credentials, and zero emojis.

---

## 1. Project Overview

This website serves as the central digital resume and software showcase for Lav Pandey:
- **Hero Section**: Centered glass canvas with embedded SVG poster artwork, personal introduction, and direct contact CTAs.
- **About Me**: Developer narrative, engineering philosophy, and architectural pillars.
- **Skills (Tech Stack)**: Structured categorization across Languages, Frontend, Backend, Databases, and Developer Tools with interactive watermarks.
- **Experience**: Industry training and internship engagements (Veltora IT Solutions, Managineers Educational Services) with accessible verification credentials.
- **Academic Milestones**: Bachelor of Vocational Studies in Software Development & E-Governance at National Post Graduate College, Lucknow.
- **Certificates Showcase**: Verified competition podium finishes and institutional credentials with modal overlays.
- **Projects Showcase**: Interactive browser-window mockups featuring AI-generated project artwork, live links, and real-time status indicators.
- **Direct Contact System**: Form submission with automated validation, WhatsApp direct dispatch, and quick contact cards.

---

## 2. Features

- **No Emojis**: Clean, professional typography and inline SVG iconography throughout.
- **No Navbar**: Natural page flow with semantic landmarks and jump links; no floating, hamburger, or circular menus.
- **Default Cursor**: Native browser cursor behavior without custom cursor lag or interference.
- **Poster Banner**: High-resolution SVG banner embedded directly in the hero card canvas with full responsive scaling.
- **Configurable Project Links**: Project card components gracefully adapt to real URLs or empty strings without broken links.
- **Full-Screen Modal Preview**: High-resolution credential inspection for all competition certificates.
- **Accessibility**: Global `:focus-visible` keyboard rings, screen-reader-only heading structures (`.sr-only`), and `prefers-reduced-motion` compliance.
- **Complete SEO**: Canonical URL, Open Graph social cards, JSON-LD Schema (`Person` & `WebSite`), `robots.txt`, and XML sitemap.

---

## 3. Technology Stack

- **Core Framework**: React 19 (`react`, `react-dom`)
- **Build Tool**: Vite 8 with `@vitejs/plugin-react`
- **Styling Architecture**: Pure Vanilla CSS with a centralized Design Token System (`tokens.css`, `index.css`)
- **Typography**: Google Fonts — *Exo 2* with `font-display: swap` for optimal Core Web Vitals
- **Design Tokens**: Dark theme (`#000000`, `#08090b`), glassmorphism backdrop filters, warm amber accents (`#c59b63`), tactical corner markers
- **Deployment Platform**: Vercel (Single Page Application configuration)

---

## 4. Project Structure

```text
Portfolio/
├── docs/                         # Detailed engineering documentation
│   ├── DEPLOYMENT.md             # Vercel deployment guide
│   ├── SEO.md                    # Technical SEO & Google Search Console guide
│   ├── SECURITY.md               # Security audit & hardening report
│   ├── TESTING.md                # QA matrix & accessibility testing
│   └── MAINTENANCE.md            # Content maintenance & future updates
│
├── public/                       # Static public assets served directly at root
│   ├── assets/
│   │   ├── images/               # Open Graph & social sharing imagery
│   │   ├── projects/             # Dedicated AI-generated project poster artwork
│   │   └── resume/               # Offline resume PDF downloads
│   ├── certificate/              # Verified credentials & event certificates
│   ├── banner.svg                # Master SVG poster artwork
│   ├── favicon.svg               # Vector SVG site favicon
│   ├── robots.txt                # Search crawler instructions
│   ├── sitemap.xml               # Canonical XML sitemap
│   └── _redirects                # SPA routing rules for static hosting
│
├── src/                          # Application source code
│   ├── assets/                   # Bundled assets (Vite optimized)
│   ├── components/               # Modular presentation components
│   │   ├── About/                # Developer narrative & engineering pillars
│   │   ├── Achievements/         # Key competition milestones
│   │   ├── CertificatesShowcase/ # Modal-enabled certificate gallery
│   │   ├── Certifications/       # Industry course credentials
│   │   ├── Contact/              # Email & WhatsApp contact interface
│   │   ├── Education/            # Academic background & institutional syllabus
│   │   ├── Experience/           # Internship & corporate history
│   │   ├── Footer/               # Terminal-style footer & copyright
│   │   ├── Hero/                 # Poster-integrated hero section
│   │   ├── Projects/             # Browser-mockup project cards
│   │   ├── TechStack/            # Skills matrix & tech category cards
│   │   ├── Training/             # Specialized technical training
│   │   └── Watermark/            # Subtle decorative background logos
│   ├── data/                     # Centralized static portfolio data
│   │   ├── certifications.js     # Certifications data
│   │   ├── education.js          # Academic history data
│   │   ├── experience.js         # Work experience & offer letters
│   │   ├── profile.js            # Core personal profile & bio data
│   │   ├── projects.js           # Centralized projects data & URLs
│   │   ├── showcaseCertificates.js # Certificate showcase gallery data
│   │   ├── technologies.js       # Technology skill tags & categories
│   │   ├── training.js           # Professional training modules
│   │   └── watermarks.js         # Deterministic section watermark sets
│   ├── styles/                   # CSS Design System
│   │   ├── index.css             # Global base styles, reset, and utilities
│   │   └── tokens.css            # Centralized design tokens (colors, spacing, typography)
│   ├── App.jsx                   # Master root layout & scroll observer
│   └── main.jsx                  # Application entry point
│
├── .env.example                  # Environment variable template
├── .gitignore                    # Git tracking ignore rules
├── index.html                    # HTML shell with Open Graph, JSON-LD, & meta tags
├── package.json                  # Lean dependency manifest
├── vercel.json                   # Vercel deployment configuration
└── vite.config.js                # Vite build configuration
```

---

## 5. Installation & Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm 9+

### Setup
```bash
# 1. Clone repository
git clone https://github.com/Mr7X00/Portfolio.git

# 2. Navigate to project root
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```
The local server will start at `http://localhost:3000` (or `http://localhost:5173`).

---

## 6. Production Build & Local Preview

```bash
# Compile optimized bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 7. Vercel Deployment

Deploying the portfolio to Vercel is streamlined via `vercel.json`:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Production release: Lav Pandey Portfolio"
   git push origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com](https://vercel.com) and click **Add New Project**.
   - Select your `Portfolio` repository.
3. **Confirm Build Settings**:
   - **Framework**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. **Deploy**:
   - Click **Deploy**. Vercel will build and launch the site.
5. **Connect Custom Domain**:
   - Add your custom domain under **Settings > Domains** (e.g., `lavpandey.vercel.app`).
   - Vercel automatically manages HTTPS certificates.

For complete deployment details, see [`docs/DEPLOYMENT.md`](file:///c:/Users/lavpa/Desktop/Portfolio/docs/DEPLOYMENT.md).

---

## 8. Environment Variables

Environment variables are templated in [`.env.example`](file:///c:/Users/lavpa/Desktop/Portfolio/.env.example):
```env
VITE_PUBLIC_SITE_URL=https://lavpandey.vercel.app
VITE_FORMSUBMIT_EMAIL=
```
- Real `.env` files are ignored by git via `.gitignore`.
- Never place private API keys, database credentials, or server secrets in client environment variables.

---

## 9. SEO & Google Search Console Setup

The portfolio is technically optimized for Google indexing:
- **Canonical URL**: `https://lavpandey.vercel.app/`
- **Robots Directives**: Served at `/robots.txt`
- **Sitemap Index**: Served at `/sitemap.xml`
- **Structured Data**: JSON-LD Person & WebSite schema embedded in `index.html`.

### Final Google Search Console Submission Procedure:
1. Deploy website to Vercel and verify `https://lavpandey.vercel.app/` resolves.
2. Open [Google Search Console](https://search.google.com/search-console).
3. Add the property using **URL Prefix**: `https://lavpandey.vercel.app/`.
4. Complete ownership verification using the HTML Tag method in `index.html`.
5. Under **Sitemaps**, submit `sitemap.xml`.
6. Use **URL Inspection** on `https://lavpandey.vercel.app/` and click **Request Indexing**.

For detailed instructions, see [`docs/SEO.md`](file:///c:/Users/lavpa/Desktop/Portfolio/docs/SEO.md).

---

## 10. Security Notes

- **Zero Hardcoded Secrets**: Static code analysis confirms no tokens, passwords, or credentials exist in the source code.
- **npm audit**: 0 vulnerabilities found across all dependencies.
- **XSS Protection**: All user input is sanitized; JSX escaping prevents script injection.
- **Link Isolation**: All external links opening in new tabs (`target="_blank"`) enforce `rel="noopener noreferrer"`.
- **Public Client Scope**: The frontend contains no private administrative interface.

For full security audit details, see [`docs/SECURITY.md`](file:///c:/Users/lavpa/Desktop/Portfolio/docs/SECURITY.md).

---

## 11. Testing & Quality Assurance

- **Functional Testing**: All section anchors, project previews, certificate modals, and contact form interactions verified.
- **Responsive Layout**: Tested across mobile (320px–640px), tablet (768px–1024px), and desktop (1200px+).
- **Accessibility**: Keyboard navigation enabled with visible focus rings (`:focus-visible`), ARIA landmarks, and reduced-motion compliance.

For QA matrix details, see [`docs/TESTING.md`](file:///c:/Users/lavpa/Desktop/Portfolio/docs/TESTING.md).

---

## 12. Maintenance & Future Updates

To update project links, certificates, skills, or profile information, see [`docs/MAINTENANCE.md`](file:///c:/Users/lavpa/Desktop/Portfolio/docs/MAINTENANCE.md).
