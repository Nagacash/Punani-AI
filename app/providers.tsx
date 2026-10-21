"use client"

/**
 * The providers.
 *
 * There is one, and it is nothing: the waitlist form posts to the server
 * route, which talks to Clerk with the secret key. The browser never needs
 * the Clerk client, and loading it cost a third-party script, a third-party
 * cookie, and a session handshake that looped inside a frame.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
