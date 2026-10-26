import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

/**
 * A confirmation screen has nothing to rank. It is kept out of the index and
 * out of the sitemap, and it gets its own title so it never borrows the
 * homepage's title in a search result or a shared tab.
 */
export const metadata: Metadata = {
  title: { absolute: "You are on the list — Punani AI" },
  description: "Your Punani AI waitlist signup is confirmed.",
  alternates: { canonical: "/thanks" },
  robots: {
    index: false,
    follow: true,
  },
}

export default function ThanksPage() {
  return (
    <main className="hero">
      <div className="shell">
        <Image className="mark" src="/logo.png" alt="Punani" width={112} height={112} unoptimized />
        <span className="tag">You are on the list</span>
        <h1>
          Thanks. <em>Talk soon.</em>
        </h1>
        <p>
          We will write when something lands. Until then, the agent is waiting:
        </p>
        <code className="cmd cmd-lead" style={{ maxWidth: 460, margin: "30px auto 0", textAlign: "left" }}>
          <b>$</b> npm i -g punani-powerd
        </code>
        <code className="cmd" style={{ maxWidth: 460, margin: "10px auto 0", textAlign: "left" }}>
          <b>$</b> punani --init
        </code>
        <p className="note">
          <Link href="/">back to the start</Link>
        </p>
      </div>
    </main>
  )
}
