import "./globals.css";

// ============================================================
// SEO CONFIG — Edit this block to update all metadata at once
// ============================================================
const SEO = {
  siteName: "TechNirmaan",
  // TITLE: Under 60 chars. Include your most important search terms.
  // Targets: "TechNirmaan", "TIMSCDR coding committee", "coding club"
  title: "TechNirmaan | TIMSCDR Coding Committee, Thakur Institute",
  // DESCRIPTION: 150–160 chars. Natural, not keyword-stuffed.
  description:
    "TechNirmaan — the official coding committee of TIMSCDR, Thakur Institute Kandivali East. Join 16+ developers building AI, robotics & open-source projects in Mumbai.",
  keywords: [
    // Primary brand terms — what people search when they know you
    "TechNirmaan",
    "technirmaan coding club",
    "technirmaan TIMSCDR",
    // Institution terms
    "TIMSCDR",
    "TIMSCDR Coding Committee",
    "Thakur Institute coding club",
    "Thakur Institute Kandivali",
    // Generic discovery terms — what people search when they don't know you yet
    "coding club Mumbai",
    "college coding committee Mumbai",
    "programming club Kandivali",
    "tech club Thakur Institute",
    "AI club Mumbai college",
    "robotics club Mumbai",
    "coding committee TIMS",
    "web development club Mumbai",
  ],
  // ← UPDATE THIS once your domain is confirmed
  url: "https://technirmaan.vercel.app",
  // Put a real 1200×630px OG image in /public/og-image.png
  // This shows when someone shares your link on WhatsApp/LinkedIn
  ogImage: "/og-image.png",
};
// ============================================================

export const metadata = {
  metadataBase: new URL(SEO.url),
  title: {
    default: SEO.title,
    // Inner pages show: "Core Team | TechNirmaan"
    template: `%s | ${SEO.siteName}`,
  },
  description: SEO.description,
  keywords: SEO.keywords,
  authors: [{ name: SEO.siteName, url: SEO.url }],
  creator: SEO.siteName,
  publisher: SEO.siteName,

  // Open Graph — WhatsApp, Facebook, LinkedIn previews
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SEO.url,
    siteName: SEO.siteName,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.ogImage,
        width: 1200,
        height: 630,
        alt: "TechNirmaan — TIMSCDR Coding Committee",
      },
    ],
  },

  // Twitter/X card
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: [SEO.ogImage],
    // creator: "@technirmaan", // ← add your handle if you have one
  },

  // Tell Google to index and follow everything
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SEO.url,
  },

  // ← Uncomment and paste token from Google Search Console once deployed
  // verification: {
  //   google: "paste-your-verification-token-here",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/*
          JSON-LD Structured Data
          Tells Google this is an Organisation with a physical address.
          Test at: https://search.google.com/test/rich-results
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechNirmaan — TIMSCDR Coding Committee",
              alternateName: ["TIMSCDR Coding Committee", "TechNirmaan"],
              url: SEO.url,
              logo: `${SEO.url}/logo.png`,
              description: SEO.description,
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Thakur Institute of Management Studies, Career Development & Research",
                addressLocality: "Kandivali East",
                addressRegion: "Maharashtra",
                postalCode: "400101",
                addressCountry: "IN",
              },
              sameAs: [
                // ← Add your real social URLs here. These directly help Google
                // associate your site with your social presence.
                // "https://github.com/technirmaan",
                // "https://instagram.com/technirmaan",
                // "https://linkedin.com/company/technirmaan",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
