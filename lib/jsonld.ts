import {
  AGENT_REPO_URL,
  BRANDS,
  FAQ,
  OWNER,
  REPO_URL,
  SERVICES,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site"

/**
 * Structured data for the home page.
 *
 * Four blocks, each with a job:
 *   - Organization / Person  — who made this, and which other entities he runs
 *   - WebSite + WebPage      — what the page is, and where it canonically lives
 *   - SoftwareApplication   — what the product is, and that it is free
 *   - FAQPage                — the questions an answer engine is most likely to ask
 *
 * The sameAs links are the important part. An AI answer engine reading
 * "Punani AI" has no way to know that Maurice Holda also runs Naga Codex and
 * Naga Apparel, and that Naga Apparel is not a coding tool at all. Spelling
 * that out is what keeps the three brands from being merged into one blur.
 */
export function buildHomeJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: OWNER.organization,
    url: OWNER.agency,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 1695,
      height: 2016,
    },
    image: `${SITE_URL}/og.jpg`,
    description:
      "Naga Codex builds AI agent systems, generative film and custom web products from Hamburg, Germany. Home of the Punani AI coding agent and Naga Apparel.",
    email: OWNER.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: OWNER.city,
      addressRegion: OWNER.region,
      addressCountry: OWNER.country,
    },
    founder: { "@id": `${SITE_URL}/#maurice-holda` },
    founderOf: [
      { "@id": `${SITE_URL}/#organization` },
      { "@id": `${SITE_URL}/#naga-apparel` },
    ],
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    sameAs: [OWNER.agency, OWNER.linkedin, REPO_URL, AGENT_REPO_URL],
  }

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#maurice-holda`,
    name: OWNER.name,
    jobTitle: OWNER.jobTitle,
    url: OWNER.linkedin,
    email: OWNER.email,
    description:
      "Maurice Holda is a Hamburg-based founder and software engineer. He builds AI agent systems and open source developer tools, including the Punani AI coding agent, and runs the streetwear label Naga Apparel.",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    founderOf: [
      { "@id": `${SITE_URL}/#organization` },
      { "@id": `${SITE_URL}/#naga-apparel` },
    ],
    knowsAbout: [
      "AI coding agents",
      "Developer tooling",
      "Model Context Protocol",
      "Local LLM inference",
      "Web applications",
      "Generative film",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: OWNER.city,
      addressRegion: OWNER.region,
      addressCountry: OWNER.country,
    },
    sameAs: [OWNER.linkedin, OWNER.agency, OWNER.apparel, REPO_URL],
  }

  const website = {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description:
      "Punani AI — the free open source AI coding agent that asks before it touches your repo.",
    inLanguage: "en",
    publisher: { "@id": `${SITE_URL}/#organization` },
    creator: { "@id": `${SITE_URL}/#maurice-holda` },
  }

  const webPage = {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: `${SITE_NAME} — Free Open Source AI Coding Agent with Permissions`,
    description:
      "Punani AI is a free open source AI coding agent for terminal and browser by Naga Codex, Hamburg. Permission cards, diff-first edits, MCP, Ollama and OpenRouter. MIT licensed.",
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#software` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og.jpg`,
      width: 2720,
      height: 1536,
    },
    datePublished: "2025-10-21",
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@id": `${SITE_URL}/#maurice-holda` },
    creator: { "@id": `${SITE_URL}/#organization` },
  }

  const software = {
    "@type": "SoftwareApplication",
    "@id": `${SITE_URL}/#software`,
    name: "Punani AI",
    alternateName: ["Punani powerd", "punani-powerd"],
    url: SITE_URL,
    applicationCategory: "DeveloperApplication",
    applicationSubCategory: "AI coding agent",
    operatingSystem: "macOS, Linux, Windows",
    description:
      "Punani AI is a full open source AI coding agent for the terminal and the browser. Every write and shell command waits for a permission card, every edit shows a diff first, and free model providers are ranked ahead of paid ones. Bring your own OpenAI, Groq or OpenRouter key, or run it against local Ollama.",
    softwareVersion: "1.1.2",
    license: "https://opensource.org/licenses/MIT",
    downloadUrl: "https://www.npmjs.com/package/punani-powerd",
    installUrl: "https://www.npmjs.com/package/punani-powerd",
    softwareHelp: `${SITE_URL}/#install`,
    image: `${SITE_URL}/og.jpg`,
    logo: `${SITE_URL}/logo.png`,
    screenshot: `${SITE_URL}/media/showcase-spice.jpg`,
    author: { "@id": `${SITE_URL}/#maurice-holda` },
    creator: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      description:
        "Free and open source under the MIT licence. Optional use of your own paid model API keys.",
    },
    featureList: SERVICES.map((s) => s.name),
    keywords: [
      "AI coding agent",
      "coding agent",
      "open source AI agent",
      "free AI coding assistant",
      "terminal coding agent",
      "MCP coding agent",
      "Ollama coding agent",
      "permission-first AI agent",
      "diff first coding agent",
    ].join(", "),
    aggregateRating: undefined,
    review: undefined,
    sameAs: [REPO_URL, AGENT_REPO_URL],
  }

  const nagaApparel = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#naga-apparel`,
    name: "Naga Apparel",
    url: OWNER.apparel,
    description:
      "Naga Apparel is an urban streetwear label from Hamburg, Germany, shipping worldwide. Premium comfort and style, crafted rather than produced to order.",
    logo: `${OWNER.apparel}/logo.png`,
    founder: { "@id": `${SITE_URL}/#maurice-holda` },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      addressLocality: OWNER.city,
      addressRegion: OWNER.region,
      addressCountry: OWNER.country,
    },
    sameAs: [OWNER.apparel],
  }

  const nagaCodex = {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#naga-codex`,
    name: OWNER.organization,
    url: OWNER.agency,
    description:
      "Naga Codex is a Hamburg studio building AI agent systems, generative film and custom web products. Security consulting and open source developer tooling.",
    founder: { "@id": `${SITE_URL}/#maurice-holda` },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Place", name: "Hamburg" },
      { "@type": "Place", name: "Europe" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: OWNER.city,
      addressRegion: OWNER.region,
      addressCountry: OWNER.country,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Naga Codex services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI agent system development",
            description:
              "Bespoke coding agents and agent tooling with production-grade permission handling.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web and product development",
            description:
              "Custom web products, from a first prototype to a deployed, fast, maintainable site.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Security consulting",
            description:
              "Security review and hardening for web applications and agent systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Generative film and motion",
            description:
              "Branded motion, product film and social clips produced with a generative pipeline.",
          },
        },
      ],
    },
    sameAs: [OWNER.agency, OWNER.linkedin],
  }

  const services = SERVICES.map((service) => ({
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Worldwide" },
  }))

  const faq = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: FAQ.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: SITE_NAME,
        item: SITE_URL,
      },
    ],
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      person,
      website,
      webPage,
      software,
      nagaApparel,
      nagaCodex,
      ...services,
      faq,
      breadcrumb,
    ],
  }
}

/** The brand family as one flat list, for pages that need it. */
export const brandList = BRANDS

/**
 * Structured data for the about page.
 *
 * Its whole job is to keep the three brands apart. A person who searches for
 * "Naga Apparel" should not be handed a coding agent, and a person reading
 * about Naga Codex should be able to follow the links to both siblings.
 */
export function buildAboutJsonLd() {
  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: OWNER.organization,
    url: OWNER.agency,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 1695,
      height: 2016,
    },
    image: `${SITE_URL}/og.jpg`,
    description:
      "Naga Codex builds AI agent systems, generative film and custom web products from Hamburg, Germany. Home of the Punani AI coding agent and Naga Apparel.",
    email: OWNER.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: OWNER.city,
      addressRegion: OWNER.region,
      addressCountry: OWNER.country,
    },
    founder: { "@id": `${SITE_URL}/#maurice-holda` },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    sameAs: [OWNER.agency, OWNER.linkedin, REPO_URL, AGENT_REPO_URL],
  }

  const person = {
    "@type": "Person",
    "@id": `${SITE_URL}/#maurice-holda`,
    name: OWNER.name,
    jobTitle: OWNER.jobTitle,
    url: OWNER.linkedin,
    email: OWNER.email,
    description:
      "Maurice Holda is a Hamburg-based founder and software engineer. He builds AI agent systems and open source developer tools, including the Punani AI coding agent, and runs the streetwear label Naga Apparel.",
    worksFor: { "@id": `${SITE_URL}/#organization` },
    founderOf: [
      { "@id": `${SITE_URL}/#organization` },
      { "@id": `${SITE_URL}/#naga-apparel` },
    ],
    knowsAbout: [
      "AI coding agents",
      "Developer tooling",
      "Model Context Protocol",
      "Local LLM inference",
      "Web applications",
      "Generative film",
      "Streetwear",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: OWNER.city,
      addressRegion: OWNER.region,
      addressCountry: OWNER.country,
    },
    sameAs: [OWNER.linkedin, OWNER.agency, OWNER.apparel, REPO_URL],
  }

  const nagaApparel = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#naga-apparel`,
    name: "Naga Apparel",
    alternateName: "NAGA Apparel",
    url: OWNER.apparel,
    description:
      "Naga Apparel is an urban streetwear label from Hamburg, Germany, shipping worldwide. Premium comfort and style, crafted rather than produced to order.",
    founder: { "@id": `${SITE_URL}/#maurice-holda` },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    address: {
      "@type": "PostalAddress",
      addressLocality: OWNER.city,
      addressRegion: OWNER.region,
      addressCountry: OWNER.country,
    },
    sameAs: [OWNER.apparel],
  }

  const nagaCodex = {
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#naga-codex`,
    name: OWNER.organization,
    url: OWNER.agency,
    description:
      "Naga Codex is a Hamburg studio building AI agent systems, generative film and custom web products. Security consulting and open source developer tooling.",
    founder: { "@id": `${SITE_URL}/#maurice-holda` },
    parentOrganization: { "@id": `${SITE_URL}/#organization` },
    areaServed: [
      { "@type": "Country", name: "Germany" },
      { "@type": "Place", name: "Hamburg" },
      { "@type": "Place", name: "Europe" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: OWNER.city,
      addressRegion: OWNER.region,
      addressCountry: OWNER.country,
    },
    sameAs: [OWNER.agency, OWNER.linkedin],
  }

  const webPage = {
    "@type": "WebPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `About — ${OWNER.name}, Naga Codex and Naga Apparel in Hamburg`,
    description:
      "Maurice Holda builds AI agent systems and open source developer tools in Hamburg through Naga Codex, and runs the Naga Apparel streetwear label.",
    inLanguage: "en",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/og.jpg`,
      width: 2720,
      height: 1536,
    },
    datePublished: "2025-10-21",
    dateModified: new Date().toISOString().slice(0, 10),
    author: { "@id": `${SITE_URL}/#maurice-holda` },
    about: [
      { "@id": `${SITE_URL}/#organization` },
      { "@id": `${SITE_URL}/#naga-apparel` },
      { "@id": `${SITE_URL}/#maurice-holda` },
    ],
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organization, person, nagaApparel, nagaCodex, webPage],
  }
}
