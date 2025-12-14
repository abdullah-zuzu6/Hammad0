import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calcjoy.com"

  // Static pages
  const staticPages = ["", "/about", "/contact", "/privacy", "/terms", "/calculators", "/converters"]

  // Calculator pages - automatically includes all calculator routes
  const calculatorPages = [
    "/calculators/simple",
    "/calculators/scientific",
    "/calculators/bmi",
    "/calculators/income-tax",
  ]

  // Converter pages - automatically includes all converter routes
  const converterPages = ["/converters/length", "/converters/weight", "/converters/temperature"]

  // Combine all pages
  const allPages = [...staticPages, ...calculatorPages, ...converterPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : page.includes("/calculators/") || page.includes("/converters/") ? 0.8 : 0.6,
  }))
}
