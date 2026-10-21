import Link from "next/link"
import { JoinButton, JoinWaitlistForm } from "./join-button"
import { PromoVideo } from "./promo-video"
import { LOCAL_APP_URL, isHostedSite } from "./app-link"

const REPO = "https://github.com/Nagacash/Punani-AI"
const AGENT_REPO = "https://github.com/Nagacash/Punani-Power-Agent"

const STATS = [
  { n: "8", label: "model providers" },
  { n: "34", label: "automated tests" },
  { n: "0", label: "surprise writes" },
  { n: "MIT", label: "open source" },
] as const

export default function Page() {
  const hosted = isHostedSite()

  return (
    <>
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
            <a href="#showcase" className="hide">
              Product
            </a>
            <a href="#for-you" className="hide">
              Who it&apos;s for
            </a>
            <a href="#what" className="hide">
              Features
            </a>
            <a href="#install" className="hide">
              Install
            </a>
            <a href={REPO} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a className="btn" href={LOCAL_APP_URL}>
              <span className="orb">↗</span> Open the app
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" aria-hidden>
            <img
              src="/media/hero-atmosphere.jpg"
              alt=""
              width={2720}
              height={1536}
              fetchPriority="high"
            />
          </div>
          <div className="shell hero-inner">
            <img className="mark" src="/logo.png" alt="Punani AI" width={108} height={126} />
            <span className="tag">
              <span className="pulse" />
              Free · open source · production-grade permissions
            </span>
            <h1>
              The coding agent that <em>asks before it touches</em> your repo.
            </h1>
            <p className="hero-lede">
              A full coding agent — not a stripped-down toy — built for people who live on free
              models and for people who plug in OpenAI, Groq, or whatever you already pay for.
              Your keys, your machine. Every write and shell command waits for you; every edit
              shows a diff first. Free tiers ranked first when limits hit.
            </p>
            <div className="cta">
              <a className="btn" href={LOCAL_APP_URL}>
                <span className="orb">↗</span> Open the app
              </a>
              <a className="btn ghost" href="#install">
                <span className="orb">↓</span> Install in 60s
              </a>
              <JoinButton />
            </div>
            <p className="note">
              {hosted ? (
                <>
                  <b>Open the app</b> only works on the same computer where <b>punani web</b> is
                  already running ({LOCAL_APP_URL}). New here? Use <b>Install</b> first, then paste
                  the token from your terminal.
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
            {STATS.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-n">{s.n}</span>
                <span className="stat-l">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="for-you">
          <div className="shell">
            <p className="eyebrow">What makes Punani different</p>
            <h2>Free coding that still feels pro — or bring the keys you already have.</h2>
            <p className="lede center">
              No subscription to us. No lock-in. Same permission engine and diff-first edits whether
              your bill is $0 or you run frontier models on your own dime.
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
                <img
                  src="/media/showcase-spice.jpg"
                  alt="Punani AI — cinematic brand visual"
                  width={1920}
                  height={1080}
                  loading="lazy"
                />
                <div className="frame-shine" aria-hidden />
              </div>
            </div>
            <PromoVideo />
          </div>
        </section>

        <section id="what">
          <div className="shell">
            <p className="eyebrow">What you get</p>
            <h2>Three surfaces. One disciplined engine.</h2>
            <p className="lede">
              Same permission rules in the terminal and the browser. Last match wins. Free providers
              surface first when something rate-limits.
            </p>
            <div className="grid three">
              <div className="card">
                <div className="core">
                  <span className="card-icon">⌘</span>
                  <h3>Terminal agent</h3>
                  <p>
                    Slash commands, resumable JSONL sessions, diff preview before every write, and
                    error messages that name the fix.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="core">
                  <span className="card-icon">◈</span>
                  <h3>Browser command center</h3>
                  <p>
                    SSE chat, native folder picker, live preview pane, settings for keys on disk or
                    in the browser only.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="core">
                  <span className="card-icon">∞</span>
                  <h3>Model freedom</h3>
                  <p>
                    OpenRouter, NVIDIA NIM, Groq, Cerebras, OpenAI, FreeLLMAPI, Ollama, LM Studio —
                    live catalogs and real pricing.
                  </p>
                </div>
              </div>
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
                    <a href={LOCAL_APP_URL} style={{ color: "var(--gold)" }}>
                      — open it now
                    </a>
                  </span>
                </li>
              </div>
              <p className="repo-line">
                Agent:{" "}
                <a href={AGENT_REPO} target="_blank" rel="noreferrer noopener">
                  Punani-Power-Agent
                </a>
                · Landing:{" "}
                <a href={REPO} target="_blank" rel="noreferrer noopener">
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

        <section id="join">
          <div className="shell">
            <div className="signup">
              <div className="core">
                <img className="signup-mark" src="/logo.png" alt="" width={48} height={56} />
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
            © {new Date().getFullYear()} Naga Codex · Maurice Holda, Hamburg
          </p>
          <nav>
            <a href="https://nagacodex.cloud/impressum.html" target="_blank" rel="noreferrer noopener">
              Impressum
            </a>
            <a href="https://nagacodex.cloud/datenschutz.html" target="_blank" rel="noreferrer noopener">
              Datenschutz
            </a>
            <a href={REPO} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href="mailto:chosenfewrecords@hotmail.de">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
