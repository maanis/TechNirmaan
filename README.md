# TIMSCDR Coding Committee — Next.js

A fully SSR'd, SEO-optimized landing page built with Next.js 14 App Router.

---

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve production build
```

---

## Project Structure

```
app/
  layout.js         ← Root layout + ALL SEO metadata lives here
  page.js           ← Home page (Server Component, SSR)
  sitemap.js        ← Auto-generates /sitemap.xml for Google
  robots.js         ← Auto-generates /robots.txt
  globals.css       ← Tailwind + CSS variables

components/
  Navigation.jsx    ← "use client" (mobile menu state)
  sections/
    HeroSection.jsx        ← Server Component
    OverviewSection.jsx    ← "use client" (framer motion)
    LogoStrip.jsx          ← Server Component (CSS marquee)
    FeaturesSection.jsx    ← "use client" (matrix rain hover)
    ProcessSection.jsx     ← Server Component
    CoreTeam.jsx           ← "use client" (framer motion)
    LeaderboardSection.jsx ← Server Component
    TestimonialsSection.jsx← Server Component (Review schema)
    CTASection.jsx         ← Server Component
    Footer.jsx             ← Server Component
```

---

## SEO — Where to Add Keywords

### 1. `app/layout.js` — The most important file
Open it and edit the `SEO` object at the top:
- **`title`** — Shows in Google search results. Keep under 60 characters.
- **`description`** — The text under your link in Google. Keep 150–160 chars.
- **`keywords`** — Less important for Google now, but still good practice.
- **`url`** — Change to your real deployed domain.
- **`ogImage`** — Put a 1200×630px image at `/public/og-image.png`.

### 2. `app/page.js` — Page-level metadata
Each page can export its own `metadata`. The home page already has one.
For new pages (e.g., `/events`), add their own `export const metadata = { ... }`.

### 3. H1 Tag in `HeroSection.jsx`
The single `<h1>` on the page is the most important on-page SEO signal.
Currently: *"Built for the era of AI-native development"*
The paragraph below it has `<strong>TIMSCDR, Thakur Institute Kandivali</strong>` — Google reads bold text as emphasis.

### 4. H2/H3 Tags in every section
Each section has an `<h2>` (e.g., "Platform Features", "Community Leaderboard").
These are indexed. Make sure they contain relevant terms naturally.

### 5. `app/sitemap.js` — Tell Google about your pages
Add new pages as you build them so Google finds them faster.

### 6. Image `alt` attributes
Every `<Image>` has descriptive `alt` text. Keep them accurate.
Avoid: `alt="image"`. Use: `alt="Manish Jha, Developer at TIMSCDR"`.

### 7. JSON-LD Structured Data in `layout.js`
Already included. Add your social media URLs in the `sameAs` array.
Test it at: https://search.google.com/test/rich-results

### 8. `TestimonialsSection.jsx` has Review Schema
`itemScope` + `itemProp` attributes on testimonial cards tell Google
these are reviews, which may show star ratings in search results.

---

## After Deploying

1. **Submit to Google Search Console** — paste your site URL, verify ownership
2. **Submit sitemap** — paste `https://yourdomain.com/sitemap.xml`
3. **Test Open Graph** — https://opengraph.xyz (checks WhatsApp/LinkedIn previews)
4. **Test Rich Results** — https://search.google.com/test/rich-results
5. **PageSpeed Insights** — https://pagespeed.web.dev (check mobile score)

---

## Deployment (Vercel — recommended)

```bash
npm install -g vercel
vercel
```

Or push to GitHub and connect to Vercel at https://vercel.com.
Remember to update the `url` in `app/layout.js` and `app/sitemap.js` to your real domain.
