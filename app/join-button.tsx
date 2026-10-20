"use client"

import { SignUpButton } from "@clerk/nextjs"

/**
 * The sign-up trigger.
 *
 * With Clerk configured it opens the real modal. Without keys it still renders
 * the button, so the page never breaks on a fresh checkout.
 */
export function JoinButton() {
  const body = (
    <span className="btn">
      <span className="orb">✉</span> Join the list
    </span>
  )

  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <a className="btn" href="mailto:chosenfewrecords@hotmail.de?subject=Punani%20AI">
        <span className="orb">✉</span> Join the list
      </a>
    )
  }

  return (
    <SignUpButton mode="modal" forceRedirectUrl="/thanks">
      {body}
    </SignUpButton>
  )
}
