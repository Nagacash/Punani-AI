"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { clerkAppearance } from "@/lib/clerk-appearance"

/**
 * Clerk is optional while the keys are not in place yet.
 *
 * The landing page must still render without them, so the provider is only
 * mounted when a publishable key is present. Once `clerk env pull` has run, the
 * join button opens the Clerk waitlist modal (email only).
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  if (!key) return <>{children}</>
  return (
    <ClerkProvider appearance={clerkAppearance} afterSignOutUrl="/">
      {children}
    </ClerkProvider>
  )
}
