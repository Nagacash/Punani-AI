/** Email-only if any Clerk modal opens (no Google / SSO buttons). */
export const clerkAppearance = {
  elements: {
    socialButtonsRoot: { display: "none" },
    socialButtonsBlockButton: { display: "none" },
    socialButtonsIconButton: { display: "none" },
    dividerRow: { display: "none" },
  },
}
