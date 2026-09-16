/** @type {import("next").MetadataRoute.Sitemap} */
export default function sitemap() {
  const baseUrl = "https://www.abhinav-shrestha.com.np";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
