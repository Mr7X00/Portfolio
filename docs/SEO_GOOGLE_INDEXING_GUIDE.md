# Google Search Console & Production Indexing Guide
**Portfolio of Lav Pandey — Full Stack Web Developer**

This guide outlines the complete workflow to deploy the portfolio, verify domain ownership in Google Search Console (GSC), submit the sitemap, and initiate indexing.

> **Important Disclaimer:** Search engine indexing timelines and keyword rankings are solely determined by Google's proprietary crawlers and algorithms. No automated tool or developer can guarantee immediate indexing or top rankings. Following these technical best practices ensures your site meets all quality guidelines for discovery.

---

## 1. Deploy Website to Vercel

1. Push your latest portfolio repository to your GitHub account (`https://github.com/Mr7X00`).
2. Log in to [Vercel](https://vercel.com/) with GitHub.
3. Click **"Add New Project"** and import the `Portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
6. Click **Deploy**. Your site will be live at `https://lavpandey.vercel.app` (or your assigned Vercel URL).

---

## 2. Connect Custom Domain (Optional)

1. In the Vercel Dashboard, navigate to **Project Settings > Domains**.
2. Add your custom domain (e.g., `lavpandey.com`).
3. Configure the DNS records at your domain registrar as instructed by Vercel:
   - **A Record:** `76.76.21.21`
   - **CNAME Record:** `cname.vercel-dns.com`
4. Once verified, update the canonical URL in `index.html`, `public/robots.txt`, and `public/sitemap.xml` if using a custom domain.

---

## 3. Verify Ownership in Google Search Console

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **"Add Property"**.
3. Choose property type:
   - **URL Prefix:** Enter `https://lavpandey.vercel.app/` (or your custom domain).
4. Choose a verification method:
   - **Option A — HTML Tag (Recommended):**
     1. Copy the verification meta tag provided by Google (e.g., `<meta name="google-site-verification" content="YOUR_TOKEN" />`).
     2. In `index.html`, find the placeholder:
        ```html
        <!-- <meta name="google-site-verification" content="GOOGLE_SEARCH_CONSOLE_VERIFICATION"> -->
        ```
     3. Uncomment it and replace `GOOGLE_SEARCH_CONSOLE_VERIFICATION` with your actual token.
     4. Commit, push, and redeploy to Vercel.
     5. Return to GSC and click **"Verify"**.
   - **Option B — DNS TXT Record (For custom domains):** Add the TXT record in your domain registrar's DNS settings.

---

## 4. Submit Sitemap

1. In Google Search Console, navigate to the left sidebar and click **Sitemaps**.
2. In the **"Add a new sitemap"** field, enter:
   ```text
   sitemap.xml
   ```
   (Full URL: `https://lavpandey.vercel.app/sitemap.xml`)
3. Click **Submit**.
4. GSC will show status as **"Success"** within a few minutes or hours.

---

## 5. Inspect Homepage URL & Request Indexing

1. At the top search bar of Google Search Console, paste your homepage URL:
   ```text
   https://lavpandey.vercel.app/
   ```
2. Press **Enter** to run the URL Inspection tool.
3. Click **"Test Live URL"** to confirm Googlebot can fetch the page without errors.
4. Once tested, click **"Request Indexing"**.
5. Google will add your URL to its priority crawl queue.

---

## 6. Monitor Indexing & Core Web Vitals Performance

1. **Pages / Coverage Report:** Check **Pages** tab to see indexed URLs and resolve any crawl warnings.
2. **Performance Report:** Track impressions, clicks, click-through rates (CTR), and search query rankings for keywords like *"Lav Pandey"*, *"Full Stack Web Developer"*, etc.
3. **Core Web Vitals:** Monitor real-world loading speed, Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP).

---

## Technical SEO File Checklist

| File | Path | Status |
| :--- | :--- | :--- |
| **Robots Rules** | `/robots.txt` | Production ready, allows search engine crawlers, points to sitemap |
| **XML Sitemap** | `/sitemap.xml` | Production ready, valid XML schema with priority & lastmod |
| **Favicon** | `/favicon.svg` | SVG vector icon served from public root |
| **JSON-LD Schema** | `index.html` | Person & WebSite schema graph validated |
| **Canonical URL** | `index.html` | Self-referencing canonical URL configured |
| **Open Graph & Twitter** | `index.html` | Full social card preview metadata configured |
