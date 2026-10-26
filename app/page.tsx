import Image from "next/image"
import Link from "next/link"
import { JoinButton, JoinWaitlistForm } from "./join-button"
import { PromoVideo } from "./promo-video"
import { LOCAL_APP_URL, appEntryHref, isHostedSite } from "./app-link"
import { buildHomeJsonLd } from "@/lib/jsonld"
import { FAQ, OWNER, REPO_URL, AGENT_REPO_URL, SERVICES } from "@/lib/site"

const PROVIDERS = [
  { name: "OpenRouter", kind: "Free tier first", note: "Hundreds of models, free variants ranked ahead of paid." },
  { name: "NVIDIA NIM", kind: "Free credits", note: "Hosted open models on NVIDIA's free tier." },
  { name: "Groq", kind: "Fast free tier", note: "Very fast inference on the free allowance." },
  { name: "Cerebras", kind: "Free tier", note: "Fast inference for open-weight models." },
  { name: "OpenAI", kind: "Bring your key", note: "Your own key, your own bill, your choice of model." },
  { name: "FreeLLMAPI", kind: "Failover", note: "Automatic fallback when a provider rate-limits." },
  { name: "Ollama", kind: "Local", note: "Run open models on your own hardware, fully offline." },
  { name: "LM Studio", kind: "Local", note: "Local server with live model discovery." },
] as const

export default function Page() {
  const hosted = isHostedSite()
  const jsonLd = buildHomeJsonLd()

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
            <Image src="/logo.png" alt="" width={32} height={32} unoptimized />
            <span className="wordmark">
              <b>Punani AI</b>
              <span>powerd · naga codex</span>
            </span>
          </Link>
          <nav>
            <a href="#showcase" className="hide">
              Product
            </a>
            <a href="#for-you" className="hide">
              Who it&apos;s for
            </a>
            <a href="#what" className="hide">
              Features
            </a>
            <a href="#faq" className="hide">
              FAQ
            </a>
            <a href="#install" className="hide">
              Install
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a className="btn" href={appEntryHref(hosted)}>
              <span className="orb">↗</span> Open the app
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" aria-hidden>
            <Image
              src="/media/hero-atmosphere.jpg"
              alt=""
              fill
              sizes="100vw"
              priority
            />
          </div>
          <div className="shell hero-inner">
            <Image
              className="mark"
              src="/logo.png"
              alt="Punani"
              width={112}
              height={112}
              unoptimized
              priority
            />
            <div className="badge-row">
              <span className="tag tag-place">🇩🇪 Made in Germany · Hamburg</span>
              <span className="tag">
                <span className="pulse" />
                Free · Open Source · Production-grade permissions
              </span>
            </div>
            <h1>
              The coding agent that <em>asks before it touches</em> your repo.
            </h1>
            <p className="hero-lede">
              A Cursor-level AI coding agent in the CLI and the web browser, with $0
              subscription lock-in. Your keys stay on your machine. Free models first.
            </p>
            <div className="cta">
              <a className="btn" href={appEntryHref(hosted)}>
                <span className="orb">↗</span> Open the app
              </a>
              <a className="btn ghost" href="#install">
                <span className="orb">↓</span> Install in 60s
              </a>
              <JoinButton />
            </div>
            <PromoVideo />
            <p className="note">
              {hosted ? (
                <>
                  <b>Open the app</b> takes you to sign-in steps — the agent runs on this computer at{" "}
                  {LOCAL_APP_URL} after <b>punani web</b>. New here? Use <b>Install</b> first.
                </>
              ) : (
                <>
                  Local-first: run <b>punani web</b>, paste the token once, or use{" "}
                  <b>punani web --open</b>.
                </>
              )}
            </p>
          </div>
          <div className="shell stats">
            {[
              { n: "8", label: "model providers" },
              { n: "34", label: "automated tests" },
              { n: "0", label: "surprise writes" },
              { n: "MIT", label: "open source" },
            ].map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-n">{s.n}</span>
                <span className="stat-l">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="for-you">
          <div className="shell">
            <p className="eyebrow">Why Punani</p>
            <h2>Top-tier AI. No monthly lock-in.</h2>
            <p className="lede center why-line">
              Built for developers who want to code with top-tier AI for free instead of paying
              monthly $20/mo subscriptions.
            </p>
            <div className="grid two">
              <div className="card glow">
                <div className="core">
                  <span className="card-icon">◎</span>
                  <h3>Built for the free-model crew</h3>
                  <p>
                    For builders who love free tiers, run local Ollama, or simply cannot justify
                    $20/month agents. OpenRouter free models, Groq and Cerebras speed, NVIDIA NIM
                    credits, FreeLLMAPI failover — ranked so a 429 sends you to the next option,
                    not a paywall.
                  </p>
                  <p className="small" style={{ marginTop: 12, marginBottom: 0 }}>
                    Start with <b>punani --init</b>, pick a free model, ship real code with tools,
                    MCP, and previews — not a demo chatbot.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="core">
                  <span className="card-icon">⬡</span>
                  <h3>Bring OpenAI, Grok, or any key</h3>
                  <p>
                    Already paying for OpenAI, Anthropic, Groq, or routes through OpenRouter?
                    Paste your key once — stored on your machine or only in the browser if you
                    prefer. Swap models from live catalogs with pricing shown up front. Punani
                    does not resell tokens; it orchestrates your stack.
                  </p>
                  <p className="small" style={{ marginTop: 12, marginBottom: 0 }}>
                    One agent loop in terminal and <b>punani web</b>. Same rules. Same diffs. Your
                    choice of brain.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="showcase">
          <div className="shell">
            <p className="eyebrow">Built like a paid product</p>
            <h2>Looks expensive. Costs nothing but your API key.</h2>
            <p className="lede center">
              A full agent loop — read, search, edit, run, generate image and audio — with
              permission cards, live preview, and resumable sessions. No black-box rewrites.
            </p>
            <div className="frame frame-spice">
              <div className="frame-bar">
                <span />
                <span />
                <span />
                <span className="frame-title">punani · permission to touch</span>
              </div>
              <div className="frame-media">
                <Image
                  src="/media/showcase-spice.jpg"
                  alt="Punani AI in the browser — a permission card blocking a destructive shell command before it runs"
                  width={1920}
                  height={1080}
                  sizes="(max-width: 900px) 100vw, 60vw"
                />
                <div className="frame-shine" aria-hidden />
              </div>
            </div>
          </div>
        </section>

        <section id="what">
          <div className="shell">
            <p className="eyebrow">What you get</p>
            <h2>Four surfaces. One disciplined engine.</h2>
            <p className="lede">
              Same permission rules in the terminal and the browser. Last match wins. Free providers
              surface first when something rate-limits.
            </p>
            <div className="grid four">
              {SERVICES.map((service) => (
                <div key={service.name} className="card">
                  <div className="core">
                    <span className="card-icon">◆</span>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="table-wrap">
              <table className="providers">
                <caption>
                  Eight model providers, one agent. Free options are ranked first and
                  rate limits fail over instead of stopping.
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Provider</th>
                    <th scope="col">Kind</th>
                    <th scope="col">What it gives you</th>
                  </tr>
                </thead>
                <tbody>
                  {PROVIDERS.map((p) => (
                    <tr key={p.name}>
                      <th scope="row">{p.name}</th>
                      <td>{p.kind}</td>
                      <td>{p.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="install">
          <div className="shell grid two">
            <div>
              <p className="eyebrow">Install</p>
              <h2>Ship in one terminal.</h2>
              <p className="lede">
                Global CLI, wizard for provider + key, then pick a free model and go.
              </p>
              <code className="cmd cmd-lead">
                <b>$</b> npm i -g punani-powerd
              </code>
              <div className="list">
                <li>
                  <span className="k">install</span>
                  <span className="v">npm i -g punani-powerd</span>
                </li>
                <li>
                  <span className="k">setup</span>
                  <span className="v">punani --init</span>
                </li>
                <li>
                  <span className="k">terminal</span>
                  <span className="v">punani</span>
                </li>
                <li>
                  <span className="k">browser</span>
                  <span className="v">
                    punani web{" "}
                    <Link href={appEntryHref(hosted)} style={{ color: "var(--gold)" }}>
                      — open it now
                    </Link>
                  </span>
                </li>
              </div>
              <p className="repo-line">
                Agent:{" "}
                <a href={AGENT_REPO_URL} target="_blank" rel="noreferrer noopener">
                  Punani-Power-Agent
                </a>
                · Landing:{" "}
                <a href={REPO_URL} target="_blank" rel="noreferrer noopener">
                  Punani-AI
                </a>
                ·{" "}
                <a href="https://punani.agency">punani.agency</a>
              </p>
            </div>
            <div className="card glow">
              <div className="core">
                <h3>Free tier, honest defaults</h3>
                <p style={{ marginBottom: 4 }}>
                  OpenRouter free models, NVIDIA NIM credits, FreeLLMAPI failover — ranked so you
                  are not stuck behind a 429.
                </p>
                <code className="cmd cmd-lead">
                  <b>$</b> npm i -g punani-powerd
                </code>
                <code className="cmd">
                  <b>$</b> punani --init
                  {"\n"}provider   openrouter
                  {"\n"}model      openrouter/minimax/minimax-m3.1-flash:free
                  {"\n\n"}<b>✓</b> ready — ctx 1.0M · tools ✔ · free
                </code>
              </div>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="shell">
            <p className="eyebrow">Questions</p>
            <h2>What people ask before they install.</h2>
            <p className="lede">
              The short answers. Longer ones live in the <Link href="/about">about page</Link> and
              the repository.
            </p>
            <div className="faq">
              {FAQ.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="shell">
            <div className="card glow">
              <div className="core">
                <p className="eyebrow">Contact</p>
                <h2>Talk to the person who builds it.</h2>
                <p>
                  Punani AI is made by {OWNER.name} in {OWNER.city}, {OWNER.countryName}, through{" "}
                  <a href={OWNER.agency} target="_blank" rel="noreferrer noopener">
                    Naga Codex
                  </a>
                  . The same studio runs{" "}
                  <a href={OWNER.apparel} target="_blank" rel="noreferrer noopener">
                    Naga Apparel
                  </a>
                  , an urban streetwear label from Hamburg shipping worldwide. Questions about
                  the agent, the agency or the label go to the same inbox.
                </p>
                <p className="small" style={{ marginTop: 18, marginBottom: 0 }}>
                  <a href={`mailto:${OWNER.email}`}>{OWNER.email}</a>
                  {" · "}
                  {OWNER.city}, {OWNER.countryName}
                  {" · "}
                  <Link href="/about">About the studio</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="join">
          <div className="shell">
            <div className="signup">
              <div className="core">
                <Image className="signup-mark" src="/logo.png" alt="" width={48} height={48} unoptimized />
                <p className="eyebrow">Inner circle</p>
                <h2>Releases, free models, zero noise.</h2>
                <p>
                  One email when something worth knowing lands — a provider, a tool, a model that
                  still has quota. No drip campaign.
                </p>
                <JoinWaitlistForm />
                <p className="small">
                  Your email is stored by Clerk so we can send those notes. No analytics.{" "}
                  <a href="https://nagacodex.cloud/datenschutz.html">Datenschutz</a>. Unsubscribe
                  by replying to any mail from us.
                </p>
              </div>
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
            <Link href="/about">About</Link>
            <a href="https://nagacodex.cloud/impressum.html" target="_blank" rel="noreferrer noopener">
              Impressum
            </a>
            <a href="https://nagacodex.cloud/datenschutz.html" target="_blank" rel="noreferrer noopener">
              Datenschutz
            </a>
            <a href={REPO_URL} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href={`mailto:${OWNER.email}`}>Contact</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
