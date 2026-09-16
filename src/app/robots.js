export default function robots() {
  const baseUrl = "https://www.abhinav-shrestha.com.np";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
