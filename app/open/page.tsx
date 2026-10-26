import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { OpenAppForm } from "../open-app-form"
import { LOCAL_APP_URL } from "../app-link"
import { SITE_NAME, SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Open the app — sign in on your machine",
  description:
    "Punani web runs locally on your computer. Start punani web, paste your token, and open the agent in the browser.",
  alternates: { canonical: "/open" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Open Punani on your machine",
    description: "Start punani web locally and paste your sign-in token.",
    url: `${SITE_URL}/open`,
    siteName: SITE_NAME,
    type: "website",
  },
}

export default function OpenAppPage() {
  return (
    <>
      <header>
        <div className="shell head">
          <Link href="/" className="brand" aria-label="Punani AI home">
            <Image src="/logo.png" alt="" width={32} height={32} unoptimized />
            <span className="wordmark">
              <b>Punani AI</b>
              <span>powerd · naga codex</span>
            </span>
          </Link>
          <nav>
            <Link href="/#install">Install</Link>
            <Link href="/">Home</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="open-page">
          <div className="shell narrow">
            <p className="eyebrow">Local agent</p>
            <h1>Open Punani on your machine</h1>
            <p className="lede">
              The coding agent is not hosted on punani.agency — it runs on your computer at{" "}
              <code className="cmd-inline">{LOCAL_APP_URL}</code> when you start{" "}
              <code className="cmd-inline">punani web</code>. This page helps you sign in with your
              token instead of hitting a dead localhost tab.
            </p>
            <div className="card glow">
              <div className="core">
                <OpenAppForm />
              </div>
            </div>
            <p className="small open-footer">
              <Link href="/#install">Install the CLI</Link> ·{" "}
              <Link href="/#faq">FAQ</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
