import { clerkMiddleware } from "@clerk/nextjs/server"
import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server"

const handler = clerkMiddleware()

/**
 * Clerk runs only once the keys are in place.
 *
 * The landing page has to render on a fresh checkout, so without keys the proxy
 * is a pass-through and the sign-up button falls back to a mailto link. Add the
 * keys with `npx clerk@latest env pull` and both switch on.
 */
const hasKeys = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY && process.env.CLERK_SECRET_KEY,
)

export default function proxy(request: NextRequest, event: NextFetchEvent) {
  if (!hasKeys) return NextResponse.next()
  // A framed request is a preview, in the app's preview pane. Clerk's session
  // handshake redirects in a frame, and the browser gives up with "redirected
  // you too many times", so the frame is left alone.
  const framed = request.headers.get("sec-fetch-dest") === "iframe"
  if (framed) return NextResponse.next()
  return handler(request, event)
}

export const config = {
  // Next 16 matches proxy routes with path-to-regexp, not raw regular
  // expressions, so there are no negative lookaheads here.
  matcher: ["/(.*)", "/__clerk/(.*)"],
}
