# Punani AI

Landing page for [Punani powerd by Naga Codex](https://github.com/Nagacash/Punani-AI). The agent itself lives in the parent `punani-powerd` repo until this repository holds the full tree.

**Clerk app:** **Punani AI** (`app_3KxiqECH7u1jNM0SF1h9mcckE8K`) on [known-muskrat-4119.clerk.accounts.dev](https://known-muskrat-4119.clerk.accounts.dev).

That is **not** the same Clerk application as [Naga-Automation](https://github.com/Nagacash/nagacodex-automation) (nagaflow uses **Naga-Automation** / proven-drum). Do not copy keys from `nagacodex-automation-saas-main/.env.local` into this project.

## Run

```bash
npm install
npm run dev                  # http://localhost:3000
```

Requires `.env.local` with Clerk keys (see below).

## Clerk setup

This folder is **linked** to the Punani AI application. `clerk doctor` should pass after `env pull`.

On a fresh machine:

```bash
npx -y clerk@latest auth login
cd landing/punani-ai
npx -y clerk@latest link --app app_3KxiqECH7u1jNM0SF1h9mcckE8K
npx -y clerk@latest env pull --file .env.local
```

`clerk init` is for greenfield projects. Here Clerk is already wired (`@clerk/nextjs`, `proxy.ts`, `JoinButton`). Use **link** + **env pull** instead of re-running init.

**Do not** run `clerk enable orgs` for this site unless you add team workspaces. The join list only needs email sign-up.

### Production

When the landing page has a real domain:

```bash
npx -y clerk@latest deploy
```

Follow the prompts (domain, DNS). Mirror the same `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` (production instance) on Vercel or your host.

Never commit `.env.local`.
