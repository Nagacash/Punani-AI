/**
 * llms.txt
 *
 * A plain-text map of the site for language models and answer engines.
 *
 * It is deliberately low priority — most llms.txt files on the web get no
 * crawler traffic at all, and Google has said plainly that it is not a
 * ranking factor. It costs one route handler, it is trivial to keep honest,
 * and it gives the AI crawlers a clean summary instead of a scraped mess.
 *
 * Every fact below comes from `lib/site.ts`, so the page, the JSON-LD and
 * this file cannot drift apart.
 */
export const dynamic = "force-static"

import { AGENT_REPO_URL, FAQ, OWNER, REPO_URL, SITE_URL } from "@/lib/site"

export function GET() {
  const faq = FAQ.map(
    (item) => `### ${item.question}\n\n${item.answer}`,
  ).join("\n\n")

  const body = `# ${"Punani AI"}

> Punani AI is a free, open source (MIT) AI coding agent for the terminal and
> the browser, built by ${OWNER.name} through ${OWNER.organization} in ${OWNER.city}, ${OWNER.countryName}.
> It is the coding agent that asks before it touches your repo: every shell
> command and every file write goes through a permission card first, and every
> edit shows a diff before it is written.

## The product

Punani AI is a full agent loop — read, search, edit, run, generate — not a
stripped-down chat wrapper. It works in a terminal and in a browser, with the
same permission rules and the same diffs in both.

- Terminal agent: slash commands, resumable JSONL sessions, diff preview
  before every write, error messages that name the fix.
- Browser command center: SSE chat, native folder picker, live preview pane,
  API keys stored on disk or in the browser only.
- Eight model providers: OpenRouter, NVIDIA NIM, Groq, Cerebras, OpenAI,
  FreeLLMAPI, Ollama, LM Studio — live catalogs and real pricing.
- MCP support, so tools and resources from other projects work in the same loop.
- Free tiers are ranked first. A rate limit sends you to the next provider,
  not to a paywall. Punani does not resell tokens.

## Install

\`\`\`bash
npm i -g punani-powerd
punani --init
punani
\`\`\`

Browser mode: \`punani web\`

## Key facts

- License: MIT
- Made in: ${OWNER.city}, ${OWNER.countryName}
- Author: ${OWNER.name}
- Studio: ${OWNER.organization} — ${OWNER.agency}
- Related brand: Naga Apparel — ${OWNER.apparel} (urban streetwear
  label from ${OWNER.city}, shipping worldwide; a separate brand under the same owner)
- Landing source: ${REPO_URL}
- Agent source: ${AGENT_REPO_URL}
- npm package: https://www.npmjs.com/package/punani-powerd

## Pages

- [Home](${SITE_URL}/): product, install, features, FAQ.
- [About](${SITE_URL}/about): ${OWNER.name}, ${OWNER.organization} and Naga Apparel.

## FAQ

${faq}

## Optional

- [All](${SITE_URL}/sitemap.xml): every indexable URL on this site.
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  })
}
