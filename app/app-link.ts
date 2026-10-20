/** Punani web listens here when `punani web` is running on the visitor's machine. */
export const LOCAL_APP_URL = "http://localhost:4096"

/**
 * The agent is local-first. On punani.agency we must not send people to localhost —
 * that only works on the same computer as a running `punani web`.
 */
export function appCallToAction(): { href: string; label: string; hosted: boolean } {
  const override = process.env.NEXT_PUBLIC_APP_URL?.trim()
  if (override) {
    return { href: override, label: "Open the app", hosted: false }
  }
  const hosted = process.env.VERCEL === "1"
  if (hosted) {
    return { href: "#install", label: "Run on your machine", hosted: true }
  }
  return { href: LOCAL_APP_URL, label: "Open the app", hosted: false }
}
