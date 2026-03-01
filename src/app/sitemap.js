// Auto-generates /sitemap.xml — submit this URL in Google Search Console
// after deploying to get indexed faster.

export default function sitemap() {
  const baseUrl = "https://technirmaan.vercel.app"; // ← update to your real domain

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/core`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/compiler`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
