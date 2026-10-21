"use client"

import { useEffect, useRef, useState } from "react"

/**
 * The promo clip.
 *
 * It plays on its own, and it can be stopped: a loop that starts by itself
 * and never ends has to have a way out, and a visitor who asked for less
 * motion should not get it at all.
 */
export function PromoVideo() {
  const video = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    const element = video.current
    if (!element) return
    // Less motion asked for, less motion given. The pause event tells the
    // button about it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) element.pause()
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
    <div className="frame frame-promo">
      <div className="frame-bar">
        <span />
        <span />
        <span />
        <span className="frame-title">punani · twelve seconds</span>
        <button
          type="button"
          className="frame-play"
          onClick={toggle}
          aria-label={playing ? "Pause the clip" : "Play the clip"}
        >
          {playing ? "❚❚" : "▶"}
        </button>
      </div>
      <div className="frame-media">
        <video
          ref={video}
          src="/media/punani-promo.mp4"
          width={1920}
          height={1080}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          aria-label="Punani AI — the agent working, and asking once before it deletes anything"
        />
      </div>
    </div>
  )
}
