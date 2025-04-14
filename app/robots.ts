import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/"],
    },
    sitemap: "https://alpha-assurance.fr/sitemap.xml",
    host: "https://alpha-assurance.fr",
  }
}
