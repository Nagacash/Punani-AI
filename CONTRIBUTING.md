# Contributing to Punani AI (landing)

This repo is the **[punani.agency](https://punani.agency)** marketing site and waitlist (Next.js + Clerk). The coding agent lives in **[Punani-Power-Agent](https://github.com/Nagacash/Punani-Power-Agent)**.

## Protected `main`

**Do not push directly to `main`.** All changes go through a **pull request** from your fork.

1. Fork [Punani-AI](https://github.com/Nagacash/Punani-AI).
2. Create a branch, make your change.
3. Run locally:
   ```bash
   npm ci
   npm run build
   npm run lint
   ```
4. Open a PR. Wait for review and CI before merge.

## Secrets

Never commit `.env`, `.env.local`, or Clerk keys. Use Vercel / local env only.

## License

Contributions are MIT-licensed like the rest of the project.
