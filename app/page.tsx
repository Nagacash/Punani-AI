import { JoinButton } from "./join-button"

/** Where the running agent listens. The app is local-first. */
const APP_URL = "http://localhost:4096"

export default function Page() {
  return (
    <>
      <header>
        <div className="shell head">
          <img src="/logo.png" alt="" width={30} height={35} />
          <span className="wordmark">
            <b>Punani AI</b>
            <span>powerd · naga codex</span>
          </span>
          <nav>
            <a href="#what" className="hide">What it does</a>
            <a href="#install" className="hide">Install</a>
            <a href="#join" className="hide">Join</a>
            <a href="https://github.com/Nagacash" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a className="btn" href={APP_URL}>
              <span className="orb">↗</span> Open the app
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="shell">
            <img className="mark" src="/logo.png" alt="Punani AI" width={108} height={126} />
            <span className="tag">Free and open source</span>
            <h1>
              A coding agent that <em>asks before it touches</em> your code.
            </h1>
            <p>
              Punani AI reads, searches, edits and runs — in your terminal or in the browser. Every
              write and every command waits for your approval, and every edit shows a diff first.
              Bring your own model key, including the free ones.
            </p>
            <div className="cta">
              <a className="btn" href={APP_URL}>
                <span className="orb">↗</span> Open the app
              </a>
              <a className="btn ghost" href="#install">
                <span className="orb">↓</span> Install it
              </a>
              <a className="btn ghost" href="#join">
                <span className="orb">✉</span> Get the updates
              </a>
            </div>
            <p className="note">
              The agent runs on your own machine. Start it with <b>punani web</b> and this button opens it.
            </p>
          </div>
        </section>

        <section id="what">
          <div className="shell">
            <p className="eyebrow">What it does</p>
            <h2>Three ways in, one engine underneath.</h2>
            <p className="lede">
              The terminal, the browser and every MCP server you add all drive the same agent
              loop, the same permission rules and the same session log.
            </p>
            <div className="grid three">
              <div className="card">
                <div className="core">
                  <h3>Terminal</h3>
                  <p>
                    A full coding agent in your shell. Permissions, diffs, resumable sessions and
                    slash commands for every provider you have configured.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="core">
                  <h3>Browser</h3>
                  <p>
                    The same agent, with a live preview pane beside the chat, a folder browser for
                    picking a project, and a settings panel for your keys.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="core">
                  <h3>Your models</h3>
                  <p>
                    OpenRouter, NVIDIA NIM, Groq, Cerebras, OpenAI, FreeLLMAPI, Ollama and LM
                    Studio. Free tiers first, and the price of every model shown before you use it.
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
              <h2>One command, then point it at a model.</h2>
              <p className="lede">
                The wizard asks for a provider and a key, then lists the models that provider
                actually serves right now.
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
                    <a href={APP_URL} style={{ color: "var(--gold)" }}>
                      — open it now
                    </a>
                  </span>
                </li>
              </div>
            </div>
            <div className="card">
              <div className="core">
                <h3>Free from the first prompt</h3>
                <p style={{ marginBottom: 4 }}>
                  FreeLLMAPI routes to whichever provider still has quota and fails over when one
                  is rate limited. OpenRouter and NVIDIA NIM have free tiers too.
                </p>
                <code className="cmd">
                  <b>$</b> punani --init
                  {"\n"}provider   openrouter
                  {"\n"}key        sk-or-v1-…
                  {"\n"}model      openrouter/nvidia/nemotron-3-super-120b-a12b:free
                  {"\n\n"}<b>✓</b> ready — ctx 262k · tools ✔ · free
                </code>
              </div>
            </div>
          </div>
        </section>

        <section id="join">
          <div className="shell">
            <div className="signup">
              <div className="core">
                <p className="eyebrow">Stay in the loop</p>
                <h2>Get the releases and the good free models.</h2>
                <p>
                  An occasional email when something lands — a new provider, a new tool, a model
                  worth knowing about. Nothing else.
                </p>
                <JoinButton />
                <p className="small">
                  Your email is stored by Clerk so we can send those notes. No analytics.
                  Details are in the{" "}
                  <a href="https://nagacodex.cloud/datenschutz.html">Datenschutz</a>.
                  Delete it any time by replying to a mail from us.
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
            <a href="https://github.com/Nagacash" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href="mailto:chosenfewrecords@hotmail.de">Contact</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
