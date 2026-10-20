import type { Metadata } from "next"
import Providers from "./providers"
import "./globals.css"

export const metadata: Metadata = {
  title: "Punani AI — a coding agent that lives where you work",
  description:
    "Punani AI is a free, open-source coding agent for the terminal and the browser. Read, search, edit and run with you approving every change.",
  icons: { icon: "/logo.png" },
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
