# Search Engine Optimization & Google Search Console Guide

This guide details the technical SEO architecture implemented for the Lav Pandey Portfolio and provides the exact procedure to submit and verify the site in Google Search Console.

---

## 1. Technical SEO Architecture

### 1.1 Canonical & Heading Hierarchy
- **Canonical URL**: `https://lavpandey.vercel.app/` declared in `<link rel="canonical">`.
- **Single `<h1>`**: Defined semantically in `Hero.jsx` using the screen-reader-only utility (`.sr-only`), establishing primary page context:
  ```html
  <h1 class="sr-only">Lav Pandey — Full Stack Web Developer</h1>
  ```
- **Semantic Sections**: Structured `<section id="...">` blocks with descriptive `<h2>` headers across About, Skills, Experience, Education, Certifications, Projects, and Contact.

### 1.2 Open Graph & Social Cards
- Configured in `index.html`:
  - `og:title`: Lav Pandey | Full Stack Web Developer
  - `og:description`: Official portfolio and engineering showcase of Lav Pandey...
  - `og:image`: `https://lavpandey.vercel.app/assets/images/poster.png`
  - `twitter:card`: `summary_large_image`

### 1.3 JSON-LD Structured Data
Schema.org structured data graph embedded in `index.html`:
- **`Person` Schema**: Declares name, job title, canonical URL, location (`Lucknow, Uttar Pradesh, IN`), social links (`github`, `linkedin`, `instagram`), and skill competencies.
- **`WebSite` Schema**: Connects the site identity and publisher relationship to the developer.

### 1.4 Crawling Directives
- **`public/robots.txt`**:
  ```text
  User-agent: *
  Allow: /

  Sitemap: https://lavpandey.vercel.app/sitemap.xml
  ```
- **`public/sitemap.xml`**:
  XML sitemap indexed with canonical origin `https://lavpandey.vercel.app/`.

---

## 2. Google Search Console (GSC) Final Procedure

Follow this exact sequence to index the website in Google:

1. **Deploy Website**:
   Confirm your website is live and resolving at `https://lavpandey.vercel.app/`.
2. **Open Search Console**:
   Go to [search.google.com/search-console](https://search.google.com/search-console) and sign in with your Google Account.
3. **Add Property**:
   - Choose **URL Prefix**.
   - Enter `https://lavpandey.vercel.app/`.
   - Click **Continue**.
4. **Complete Ownership Verification**:
   - **Recommended Method**: HTML Tag. Copy the verification meta tag provided by Google:
     ```html
     <meta name="google-site-verification" content="YOUR_TOKEN_HERE" />
     ```
   - Paste this tag into `<head>` in `index.html`.
   - Run `npm run build`, push to GitHub, and let Vercel redeploy.
   - Return to GSC and click **Verify**.
5. **Submit Sitemap**:
   - In GSC left navigation, select **Sitemaps**.
   - Under *Add a new sitemap*, enter `sitemap.xml`.
   - Click **Submit**. Verify status changes to **Success**.
6. **URL Inspection & Indexing Request**:
   - In the top search bar in GSC, enter `https://lavpandey.vercel.app/` and hit Enter.
   - Click **Test Live URL** to confirm accessibility and schema validation.
   - Click **Request Indexing**.
7. **Monitor Coverage**:
   - Google typically crawls and indexes newly submitted sites within 3 to 14 days.
   - Check the **Pages** and **Performance** reports weekly to monitor organic search impressions and ranking queries.
