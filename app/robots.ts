import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"

/**
 * robots.txt
 *
 * The AI crawlers are listed explicitly on purpose. The names that decide
 * whether a page shows up in ChatGPT, Perplexity, Claude and AI Overviews are
 * all allowed here, and the training-only crawlers are allowed too because
 * being in the training set is how a model learns that this brand exists.
 *
 * Blocking Google-Extended would only stop Gemini training data. It would
 * not change the rankings, and it would only make the brand less known.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-Video",
          "Googlebot-News",
          "Bingbot",
          "BingPreview",
          "Applebot",
          "Applebot-Extended",
          "DuckDuckBot",
          "YandexBot",
          "Bravebot",
        ],
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Meta-ExternalAgent",
          "cohere-ai",
          "CCBot",
          "Bytespider",
          "Amazonbot",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
