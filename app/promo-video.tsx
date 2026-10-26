"use client"

import { useEffect, useRef, useState } from "react"

const LOOP = ["Read", "Edit", "Diff", "rm -rf ./build"] as const

/**
 * Portrait teaser of the current build. It loops on its own, and it can be
 * stopped. Reduced motion gets the poster and stays still.
 */
export function PromoVideo() {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const element = video.current
    if (!element) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      element.pause()
      setPlaying(false)
    }
  }, [])

  function toggle() {
    const element = video.current
    if (!element) return
    if (element.paused) {
      void element.play()
      setPlaying(true)
    } else {
      element.pause()
      setPlaying(false)
    }
  }

  return (
    <figure className="hero-device">
      <div className="device">
        <div className="device-bar">
          <span />
          <span />
          <span />
          <span className="device-title">punani · latest build</span>
          <button
            type="button"
            className="frame-play"
            onClick={toggle}
            aria-pressed={playing}
            aria-label={playing ? "Pause the teaser" : "Play the teaser"}
          >
            {playing ? "❚❚" : "▶"}
          </button>
        </div>
        <video
          ref={video}
          src="/media/punani-build.mp4"
          poster="/media/punani-promo-9-16.png"
          width={720}
          height={858}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          Punani AI latest build. The agent reads, edits, shows a diff, and stops
          before rm -rf ./build.
        </video>
      </div>
      <figcaption className="device-caption">
        <span className="device-kicker">This build</span>
        <ul className="loop-pills">
          {LOOP.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </figcaption>
    </figure>
  )
}
