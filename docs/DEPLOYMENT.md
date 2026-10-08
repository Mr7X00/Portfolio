# Vercel Production Deployment Guide

This guide details the procedure for building and deploying the Lav Pandey React + Vite portfolio to Vercel.

---

## 1. Prerequisites

- Node.js (v18+ or v20+)
- npm (v9+)
- A [Vercel](https://vercel.com) account
- A GitHub repository hosting the project code

---

## 2. Local Verification Before Deployment

Always verify that the production bundle builds without errors:

```bash
# 1. Install dependencies
npm install

# 2. Build production assets
npm run build

# 3. Preview production build locally
npm run preview
```

Ensure `dist/` is generated cleanly and all static assets (images, poster artwork, certificates, PDFs) load without console errors.

---

## 3. Vercel Configuration Details

The project includes a root `vercel.json` file:

```json
{
  "framework": "vite",
  "cleanUrls": true,
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

- **Framework**: `vite` (informs Vercel build pipeline)
- **Output Directory**: `dist`
- **Rewrites**: Ensures client-side routing and direct URLs resolve to `index.html` without 404s.

---

## 4. Deployment Steps via GitHub (Recommended)

1. **Commit and Push**:
   ```bash
   git add .
   git commit -m "Production release: Lav Pandey Portfolio"
   git push origin main
   ```
2. **Import into Vercel**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard) and click **Add New Project**.
   - Select your GitHub repository (`Portfolio` or `lav-pandey-portfolio`).
   - Confirm Project Preset is **Vite**.
   - Click **Deploy**.
3. **Environment Variables**:
   - In Vercel Project Settings > **Environment Variables**, add:
     - `VITE_PUBLIC_SITE_URL` = `https://lavpandey.vercel.app`

---

## 5. Custom Domain & HTTPS Setup

1. In Vercel Project Dashboard, navigate to **Settings > Domains**.
2. Add your custom domain (e.g. `lavpandey.vercel.app` or `lavpandey.com`).
3. Follow DNS instructions if using an apex or custom registrar (e.g., CNAME to `cname.vercel-dns.com` or A record to `76.76.21.21`).
4. Vercel will automatically provision and renew a free Let's Encrypt SSL/TLS certificate.

---

## 6. Post-Deployment Verification

Visit your production deployment and test:
- [ ] Direct homepage access: `https://lavpandey.vercel.app/`
- [ ] Search crawler directives: `https://lavpandey.vercel.app/robots.txt`
- [ ] Sitemap index: `https://lavpandey.vercel.app/sitemap.xml`
- [ ] Favicon loading: `https://lavpandey.vercel.app/favicon.svg`
- [ ] Certificate modal overlays and PDF links open in new tabs with `noopener noreferrer`.
