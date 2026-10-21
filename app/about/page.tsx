import type { Metadata } from "next"
import Link from "next/link"
import { buildAboutJsonLd } from "@/lib/jsonld"
import { BRANDS, OWNER } from "@/lib/site"

export const metadata: Metadata = {
  title: "About — Maurice Holda, Naga Codex and Naga Apparel in Hamburg",
  description:
    "Maurice Holda builds AI agent systems and open source developer tools in Hamburg through Naga Codex, and runs the Naga Apparel streetwear label. One person, three brands, one city.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Maurice Holda, Naga Codex and Naga Apparel in Hamburg",
    description:
      "The people behind Punani AI: Maurice Holda, Naga Codex in Hamburg, and the Naga Apparel streetwear label.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://punani.agency"}/about`,
    images: [{ url: "/og.jpg", width: 2720, height: 1536, alt: "Naga Codex — Hamburg" }],
  },
}

export default function AboutPage() {
  const jsonLd = buildAboutJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <header>
        <div className="shell head">
          <Link href="/" className="brand" aria-label="Punani AI home">
            <img src="/logo.png" alt="" width={30} height={35} />
            <span className="wordmark">
              <b>Punani AI</b>
              <span>powerd · naga codex</span>
            </span>
          </Link>
          <nav>
            <Link href="/">Product</Link>
            <a href="https://nagacodex.cloud/impressum.html" target="_blank" rel="noreferrer noopener">
              Impressum
            </a>
            <a href={`mailto:${OWNER.email}`}>Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="shell hero-inner">
            <span className="tag">
              <span className="pulse" />
              {OWNER.city} · {OWNER.countryName}
            </span>
            <h1>
              One person. Three brands. <em>One city.</em>
            </h1>
            <p className="hero-lede">
              {OWNER.name} builds software and streetwear from {OWNER.city}. The agent, the studio
              that made it, and the label that dresses people are separate businesses with one
              owner — which is why this page exists, and why the three of them are named
              everywhere instead of being quietly merged into one blur.
            </p>
          </div>
        </section>

        <section id="brands">
          <div className="shell">
            <p className="eyebrow">The brand family</p>
            <h2>Three things, clearly separated.</h2>
            <p className="lede">
              Search engines and AI answer engines get these mixed up when a site does not say
              plainly which is which. So here it is, plainly.
            </p>
            <div className="grid three">
              {BRANDS.map((brand) => (
                <div key={brand.name} className="card">
                  <div className="core">
                    <span className="card-icon">◆</span>
                    <h3>
                      <a href={brand.url} target="_blank" rel="noreferrer noopener">
                        {brand.name}
                      </a>
                    </h3>
                    <p>{brand.description}</p>
                    <p className="small" style={{ marginTop: 12, marginBottom: 0 }}>
                      <a href={brand.url} target="_blank" rel="noreferrer noopener">
                        {brand.url.replace(/^https?:\/\//, "")}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="person">
          <div className="shell grid two">
            <div>
              <p className="eyebrow">The person</p>
              <h2>{OWNER.name}</h2>
              <p className="lede">
                Founder, software engineer and consultant based in {OWNER.city}. Builds AI agent
                systems, generative film and custom web products, and does security review on
                the side.
              </p>
              <p>
                The work splits cleanly: the studio,{" "}
                <a href={OWNER.agency} target="_blank" rel="noreferrer noopener">
                  Naga Codex
                </a>
                , takes on client projects — agent systems, web products, generative film,
                security consulting. The label,{" "}
                <a href={OWNER.apparel} target="_blank" rel="noreferrer noopener">
                  Naga Apparel
                </a>
                , ships urban streetwear worldwide. The product,{" "}
                <Link href="/">Punani AI</Link>, is the open source coding agent that came out of
                the studio work and is given away under the MIT licence.
              </p>
              <p className="repo-line">
                <a href={OWNER.linkedin} target="_blank" rel="noreferrer noopener">
                  LinkedIn
                </a>
                {" · "}
                <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>
                {" · "}
                <a href={OWNER.agency} target="_blank" rel="noreferrer noopener">
                  {OWNER.agency.replace(/^https?:\/\//, "")}
                </a>
              </p>
            </div>
            <div className="card glow">
              <div className="core">
                <h3>Work in the open</h3>
                <p style={{ marginBottom: 4 }}>
                  Both codebases are public. Read the agent, read the site, run it yourself.
                </p>
                <code className="cmd">
                  <b>$</b> npm i -g punani-powerd
                  {"\n"}<b>$</b> punani --init
                  {"\n\n"}<b>→</b> github.com/Nagacash/Punani-Power-Agent
                  {"\n"}<b>→</b> github.com/Nagacash/Punani-AI
                </code>
              </div>
            </div>
          </div>
        </section>

        <section id="legal">
          <div className="shell">
            <p className="eyebrow">Legal</p>
            <h2>The paperwork, for the people who need it.</h2>
            <p className="lede">
              German commercial law needs an Impressum and a privacy policy. Both live on the
              studio site and apply to every Naga brand.
            </p>
            <div className="list">
              <li>
                <span className="k">imprint</span>
                <span className="v">
                  <a
                    href="https://nagacodex.cloud/impressum.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    nagacodex.cloud/impressum.html
                  </a>
                </span>
              </li>
              <li>
                <span className="k">privacy</span>
                <span className="v">
                  <a
                    href="https://nagacodex.cloud/datenschutz.html"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    nagacodex.cloud/datenschutz.html
                  </a>
                </span>
              </li>
              <li>
                <span className="k">contact</span>
                <span className="v">
                  <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>
                </span>
              </li>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="shell foot">
          <p>
            © {new Date().getFullYear()} Naga Codex · {OWNER.name}, {OWNER.city}
          </p>
          <nav>
            <Link href="/">Home</Link>
            <a href="https://nagacodex.cloud/impressum.html" target="_blank" rel="noreferrer noopener">
              Impressum
            </a>
            <a href="https://nagacodex.cloud/datenschutz.html" target="_blank" rel="noreferrer noopener">
              Datenschutz
            </a>
            <a href={`mailto:${OWNER.email}`}>Contact</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
