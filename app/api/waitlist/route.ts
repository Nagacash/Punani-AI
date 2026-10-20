import { clerkClient } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

/** Server-side waitlist join (Clerk Backend API). More reliable than client waitlist.join(). */
export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const email = typeof (body as { email?: unknown }).email === "string" ? (body as { email: string }).email.trim() : ""
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 })
  }

  if (!process.env.CLERK_SECRET_KEY) {
    return NextResponse.json({ error: "Waitlist is not configured." }, { status: 503 })
  }

  try {
    const client = await clerkClient()
    await client.waitlistEntries.create({ emailAddress: email })
    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
    const clerkErr = err as { errors?: Array<{ message?: string; longMessage?: string }> }
    const message =
      clerkErr.errors?.[0]?.longMessage ??
      clerkErr.errors?.[0]?.message ??
      "Could not join the list. Try again."
    return NextResponse.json({ error: message }, { status: 422 })
  }
}
