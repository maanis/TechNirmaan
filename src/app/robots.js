// Auto-generates /robots.txt
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://technirmaan.vercel.app/sitemap.xml", // ← update domain
  };
}
