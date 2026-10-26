"use client"

import { useState } from "react"
import { LOCAL_APP_URL, signInWithTokenUrl } from "./app-link"

export function OpenAppForm() {
  const [token, setToken] = useState("")

  function openAgent(withToken: boolean) {
    const url = withToken ? signInWithTokenUrl(token) : LOCAL_APP_URL
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="open-app">
      <ol className="open-steps">
        <li>
          Install and start the agent on <strong>this computer</strong>:
          <code className="cmd cmd-lead block">
            <b>$</b> npm i -g punani-powerd{"\n"}
            <b>$</b> punani web --open
          </code>
        </li>
        <li>
          Copy the <strong>token</strong> line from your terminal (or use the signed link{" "}
          <code className="cmd-inline">punani web --open</code> prints).
        </li>
        <li>Paste it below and open the local sign-in page.</li>
      </ol>

      <form
        className="open-form"
        onSubmit={(e) => {
          e.preventDefault()
          openAgent(token.trim().length > 0)
        }}
      >
        <label className="sr-only" htmlFor="punani-token">
          Punani web token
        </label>
        <input
          id="punani-token"
          type="text"
          name="token"
          autoComplete="off"
          spellCheck={false}
          placeholder="Paste token from punani web"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button type="submit" className="btn" disabled={!token.trim()}>
          <span className="orb">↗</span> Open with token
        </button>
      </form>

      <p className="open-hint">
        If you see <em>connection refused</em>, <code className="cmd-inline">punani web</code> is not
        running yet — start it in a terminal, then try again. Already on the sign-in screen?{" "}
        <button type="button" className="linkish" onClick={() => openAgent(false)}>
          Open {LOCAL_APP_URL}
        </button>{" "}
        and paste the token there.
      </p>
    </div>
  )
}
