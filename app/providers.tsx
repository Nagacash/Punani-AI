"use client"

import { ClerkProvider } from "@clerk/nextjs"

/**
 * Clerk is optional while the keys are not in place yet.
 *
 * The landing page must still render without them, so the provider is only
 * mounted when a publishable key is present. Once `clerk env pull` has run, the
 * sign-up button becomes a real Clerk modal.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  if (!key) return <>{children}</>
  return <ClerkProvider>{children}</ClerkProvider>
}
