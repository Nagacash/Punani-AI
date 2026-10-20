import { JoinButton } from "./join-button"
import { LOCAL_APP_URL, isHostedSite } from "./app-link"

const REPO = "https://github.com/Nagacash/Punani-AI"

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
          <a href="/" className="brand" aria-label="Punani AI home">
            <img src="/logo.png" alt="" width={30} height={35} />
            <span className="wordmark">
              <b>Punani AI</b>
              <span>powerd · naga codex</span>
            </span>
          </a>
          <nav>
            <a href="#showcase" className="hide">
              Product
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
            <img src="/media/hero-atmosphere.jpg" alt="" />
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
              Terminal, browser, and MCP — one engine, your keys, your machine. Every write and
              every shell command waits for you. Every edit shows a diff first. Free models ranked
              first.
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

        <section id="showcase" className="showcase">
          <div className="shell">
            <p className="eyebrow">Built like a paid product</p>
            <h2>Looks expensive. Costs nothing but your API key.</h2>
            <p className="lede center">
              A full agent loop — read, search, edit, run, generate image and audio — with
              permission cards, live preview, and resumable sessions. No black-box rewrites.
            </p>
            <div className="frame">
              <div className="frame-bar">
                <span />
                <span />
                <span />
                <span className="frame-title">punani web · local session</span>
              </div>
              <img
                src="/media/product-showcase.jpg"
                alt="Punani AI browser interface with chat, permissions, and code diff preview"
                width={1920}
                height={1080}
                loading="lazy"
              />
            </div>
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
                Landing &amp; signup:{" "}
                <a href={REPO} target="_blank" rel="noreferrer noopener">
                  github.com/Nagacash/Punani-AI
                </a>
                · Live at{" "}
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
                <JoinButton />
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
