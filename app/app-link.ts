/** Punani web listens here when `punani web` is running on the visitor's machine. */
export const LOCAL_APP_URL = "http://localhost:4096"

/** True on punani.agency (Vercel). Used for helper copy only — the open link stays localhost. */
export function isHostedSite(): boolean {
  if (process.env.NEXT_PUBLIC_APP_URL?.trim()) return false
  return process.env.VERCEL === "1"
}
