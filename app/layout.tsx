import type { Metadata } from "next"
import Providers from "./providers"
import "./globals.css"
import { OWNER, SITE_LOCALE, SITE_NAME, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? SITE_URL),
  title: {
    default:
      "Punani AI — Free Open Source AI Coding Agent with Permissions",
    template: "%s | Punani AI",
  },
  description:
    "Punani AI is a free open source AI coding agent for terminal and browser by Naga Codex, Hamburg. Permission cards, diff-first edits, MCP, Ollama and OpenRouter. MIT licensed.",
  applicationName: SITE_NAME,
  keywords: [
    "AI coding agent",
    "coding agent",
    "open source AI agent",
    "free AI coding assistant",
    "terminal coding agent",
    "MCP coding agent",
    "Ollama coding agent",
    "permission-first AI agent",
    "diff first coding agent",
    "Punani AI",
    "Punani powerd",
    "Naga Codex",
    "Maurice Holda",
    "Hamburg AI developer",
    "Naga Apparel",
  ],
  authors: [{ name: OWNER.name, url: OWNER.linkedin }],
  creator: OWNER.name,
  publisher: OWNER.organization,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: "Punani AI — Free Open Source AI Coding Agent with Permissions",
    description:
      "A full AI coding agent for terminal and browser that asks before it touches your repo. Free models first, your own keys optional. MIT licensed, by Naga Codex, Hamburg.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og.jpg",
        width: 2720,
        height: 1536,
        alt: "Punani AI — the AI coding agent that asks before it touches your repo",
      },
    ],
    locale: SITE_LOCALE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Punani AI — Free Open Source AI Coding Agent with Permissions",
    description:
      "The AI coding agent that asks before it touches your repo. Terminal and browser, free models first, MIT licensed. By Naga Codex, Hamburg.",
    images: ["/og.jpg"],
    creator: "@nagacash",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "geo.region": "DE-HH",
    "geo.placename": "Hamburg",
  },
  verification: {
    // Filled in from the environment so the repo keeps no search-console ids.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
