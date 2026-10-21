/**
 * One place for the facts the search engines, the AI answer engines and the
 * humans all have to agree on.
 *
 * If a name, a URL or a description is wrong here, it is wrong everywhere:
 * in the tab title, in the JSON-LD, in the sitemap, in llms.txt. So it lives
 * here and nowhere else.
 */

export const SITE_URL = "https://punani.agency"
export const SITE_NAME = "Punani AI"
export const SITE_LOCALE = "en_US"

export const OWNER = {
  name: "Maurice Holda",
  jobTitle: "Founder",
  organization: "Naga Codex",
  city: "Hamburg",
  region: "Hamburg",
  country: "DE",
  countryName: "Germany",
  email: "chosenfewrecords@hotmail.de",
  linkedin: "https://www.linkedin.com/in/maurice-holda",
  /** The consultancy that also runs Naga Apparel. One person, several entities. */
  agency: "https://www.nagacodex.cloud",
  apparel: "https://naga-apparel.com",
} as const

export const REPO_URL = "https://github.com/Nagacash/Punani-AI"
export const AGENT_REPO_URL = "https://github.com/Nagacash/Punani-Power-Agent"

/**
 * The three names the brand is known by, in the order they matter.
 *
 * They are separate entities — a clothing label, a software studio and a
 * coding agent — that share one owner. Schema.org needs that said out loud,
 * because an AI answer engine reading a page about a coding agent has no way
 * to guess that the same person also runs a streetwear brand in Hamburg.
 */
export const BRANDS = [
  {
    name: "Punani AI",
    url: SITE_URL,
    kind: "SoftwareProduct",
    description:
      "Free-first open source coding agent for the terminal and the browser. Permission cards, diff-first edits, MCP support and eight model providers. Built by Naga Codex in Hamburg.",
  },
  {
    name: "Naga Codex",
    url: "https://www.nagacodex.cloud",
    kind: "ProfessionalService",
    description:
      "AI agent systems, generative film and custom web development, built by Maurice Holda in Hamburg. Security consulting and open source tooling.",
  },
  {
    name: "Naga Apparel",
    url: "https://naga-apparel.com",
    kind: "Organization",
    description:
      "Urban streetwear label from Hamburg, shipping worldwide. Crafted apparel with premium comfort and style, run by Maurice Holda.",
  },
] as const

/**
 * What the agent actually does. These are the phrases a buyer types, so they
 * belong in the copy that the answer engines quote back.
 */
export const KEYWORDS = [
  "coding agent",
  "AI coding agent",
  "terminal coding agent",
  "open source AI agent",
  "free AI coding assistant",
  "coding agent with permissions",
  "diff first AI agent",
  "MCP coding agent",
  "Ollama coding agent",
  "OpenRouter coding agent",
  "AI agent developer tool",
  "self hosted AI agent",
] as const

export const SERVICES = [
  {
    name: "Terminal coding agent",
    description:
      "A full agent loop in your terminal: slash commands, resumable JSONL sessions, diff preview before every write, and error messages that name the fix.",
  },
  {
    name: "Browser command center",
    description:
      "The same engine in the browser over SSE, with a native folder picker, a live preview pane and API key storage on disk or in the browser only.",
  },
  {
    name: "Model freedom",
    description:
      "Eight model providers behind one agent: OpenRouter, NVIDIA NIM, Groq, Cerebras, OpenAI, FreeLLMAPI, Ollama and LM Studio, with live catalogs and real pricing.",
  },
  {
    name: "Permission-first editing",
    description:
      "Every write and shell command waits for a permission card, and every edit shows a diff before it lands. Last match wins, and nothing is rewritten behind your back.",
  },
] as const

export const FAQ = [
  {
    question: "Is Punani AI really free?",
    answer:
      "Yes. There is no subscription to us and no token resale. Punani ranks free tiers first — OpenRouter free models, NVIDIA NIM credits, FreeLLMAPI failover — so a rate limit sends you to the next option instead of a paywall. If you already pay for OpenAI, Anthropic or Groq, paste your own key and it runs on your model instead.",
  },
  {
    question: "What does \"asks before it touches your repo\" mean?",
    answer:
      "Every shell command and every file write goes through a permission card first. A destructive command such as rm -rf ./build stops at the card and waits for you. Nothing is applied in the background, and every edit shows a diff before it is written.",
  },
  {
    question: "Which models can Punani AI use?",
    answer:
      "Eight providers: OpenRouter, NVIDIA NIM, Groq, Cerebras, OpenAI, FreeLLMAPI, Ollama and LM Studio. Punani reads live catalogs, shows real pricing, and lets you swap models without changing the agent.",
  },
  {
    question: "Can I run it fully offline or on my own hardware?",
    answer:
      "Yes. Point Punani at a local Ollama or LM Studio instance and the agent runs on your machine with no cloud calls. Your API keys are stored on your machine, or in the browser only if you prefer that.",
  },
  {
    question: "Does it support MCP and the Model Context Protocol?",
    answer:
      "Yes. MCP servers can be registered with the agent, so tools, resources and prompts from other projects are available inside the same permission-first loop.",
  },
  {
    question: "Is Punani AI open source?",
    answer:
      "Yes, MIT licensed. The landing page and the agent engine are both public on GitHub: Punani-AI for the site and Punani-Power-Agent for the agent itself.",
  },
  {
    question: "Who builds Punani AI?",
    answer:
      "Maurice Holda, working through Naga Codex in Hamburg, Germany. The same studio runs Naga Apparel, an urban streetwear label from Hamburg shipping worldwide. Both sit under the Naga brand family, and Punani AI is the software product.",
  },
  {
    question: "Which platforms does it work on?",
    answer:
      "Terminal and browser. The terminal gives you slash commands and resumable sessions. The browser gives you a chat loop, a folder picker and a live preview pane. Same permission rules, same diffs, in both.",
  },
] as const
