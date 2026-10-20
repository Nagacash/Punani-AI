import type { Metadata } from "next"
import Providers from "./providers"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://punani.agency"),
  title: "Punani AI — the coding agent that asks before it touches your code",
  description:
    "Free-first coding agent for terminal and browser — built for free models and local Ollama, or bring your OpenAI, Groq, and OpenRouter keys. Permissions, diffs, MCP. MIT. Naga Codex.",
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Punani AI",
    description:
      "Free-tier coding agent that still feels pro — or use your own API keys. Permissions, diffs, your machine.",
    url: "https://punani.agency",
    siteName: "Punani AI",
    images: [{ url: "/og.jpg", width: 1920, height: 1080, alt: "Punani AI" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punani AI",
    description: "The coding agent that asks before it touches your repo.",
    images: ["/og.jpg"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
