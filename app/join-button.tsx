"use client"

import { useWaitlist } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { type FormEvent, useState } from "react"

/** Hero / compact CTA — scrolls to the email form (always works). */
export function JoinButton() {
  return (
    <a className="btn" href="#join">
      <span className="orb">✉</span> Join the list
    </a>
  )
}

/** Email-only waitlist in the #join section. */
export function JoinWaitlistForm() {
  const { waitlist } = useWaitlist()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
    return (
      <a className="btn" href="mailto:chosenfewrecords@hotmail.de?subject=Punani%20AI">
        <span className="orb">✉</span> Join the list
      </a>
    )
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const address = email.trim()
    if (!address) return
    if (!waitlist) {
      setError("Still loading — try again in a second.")
      return
    }

    setSubmitting(true)
    setError(null)
    const { error: clerkError } = await waitlist.join({ emailAddress: address })
    setSubmitting(false)

    if (clerkError) {
      setError(clerkError.message ?? "Could not join the list. Try again.")
      return
    }
    router.push("/thanks")
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="you@domain.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={submitting}
        />
        <button type="submit" className="btn" disabled={submitting}>
          <span className="orb">✉</span> {submitting ? "Joining…" : "Join the list"}
        </button>
      </form>
      {error ? (
        <p className="small" style={{ color: "var(--gold-bright)" }}>
          {error}
        </p>
      ) : null}
    </>
  )
}
