/** Punani web listens here when `punani web` is running on the visitor's machine. */
export const LOCAL_APP_URL = "http://127.0.0.1:4096"

/** On punani.agency, "Open the app" goes here first (token + steps), not straight to localhost. */
export const OPEN_APP_PATH = "/open"

/** True on punani.agency (Vercel). Local dev skips the /open gate page. */
export function isHostedSite(): boolean {
  if (process.env.NEXT_PUBLIC_APP_URL?.trim()) return false
  return process.env.VERCEL === "1"
}

/** Header / hero target: hosted site explains token; local preview opens the agent directly. */
export function appEntryHref(hosted: boolean): string {
  return hosted ? OPEN_APP_PATH : LOCAL_APP_URL
}

export function signInWithTokenUrl(token: string): string {
  const trimmed = token.trim()
  if (!trimmed) return LOCAL_APP_URL
  return `${LOCAL_APP_URL}/?t=${encodeURIComponent(trimmed)}`
}
