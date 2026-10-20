import Link from "next/link"

export default function ThanksPage() {
  return (
    <main className="hero">
      <div className="shell">
        <img className="mark" src="/logo.png" alt="Punani AI" width={108} height={126} />
        <span className="tag">You are on the list</span>
        <h1>
          Thanks. <em>Talk soon.</em>
        </h1>
        <p>
          We will write when something lands. Until then, the agent is waiting:
        </p>
        <code className="cmd" style={{ maxWidth: 460, margin: "30px auto 0", textAlign: "left" }}>
          <b>$</b> npm i -g punani-powerd
          {"\n"}<b>$</b> punani --init
        </code>
        <p className="note">
          <Link href="/">back to the start</Link>
        </p>
      </div>
    </main>
  )
}
