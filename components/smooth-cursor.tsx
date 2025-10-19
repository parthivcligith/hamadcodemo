"use client"

import { useEffect, useRef } from "react"

export default function SmoothCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    const isCoarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (isCoarse || reduceMotion) return

    const ring = ringRef.current!
    const dot = dotRef.current!

    let mouseX = -100,
      mouseY = -100
    let ringX = -100,
      ringY = -100
    let dotX = -100,
      dotY = -100
    let raf = 0

    const update = () => {
      // Lerp positions for smoothness
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      dotX += (mouseX - dotX) * 0.25
      dotY += (mouseY - dotY) * 0.25

      ring.style.transform = `translate3d(${ringX - 14}px, ${ringY - 14}px, 0)` // center ring (28px)
      dot.style.transform = `translate3d(${dotX - 3}px, ${dotY - 3}px, 0)` // center dot (6px)
      raf = requestAnimationFrame(update)
    }

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      const target = e.target as HTMLElement | null
      const isActionable = !!target?.closest(
        'a, button, [role="button"], [type="button"], [type="submit"], .cursor-pointer',
      )
      // Scale ring subtly on actionable elements
      ring.style.setProperty("--v0-ring-scale", isActionable ? "1.6" : "1")
      dot.style.setProperty("--v0-dot-scale", isActionable ? "0.85" : "1")
      ring.style.opacity = "1"
      dot.style.opacity = "1"
    }

    const onEnter = () => {
      ring.style.opacity = "1"
      dot.style.opacity = "1"
    }
    const onLeave = () => {
      ring.style.opacity = "0"
      dot.style.opacity = "0"
    }
    const onDown = () => {
      ring.style.setProperty("--v0-ring-scale", "1.9")
      dot.style.setProperty("--v0-dot-scale", "0.75")
    }
    const onUp = () => {
      ring.style.setProperty("--v0-ring-scale", "1")
      dot.style.setProperty("--v0-dot-scale", "1")
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseenter", onEnter, { passive: true })
    window.addEventListener("mouseleave", onLeave, { passive: true })
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)

    raf = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseenter", onEnter)
      window.removeEventListener("mouseleave", onLeave)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
    }
  }, [])

  return (
    <div className="v0-cursor-container" aria-hidden="true">
      <div ref={ringRef} className="v0-cursor-ring" />
      <div ref={dotRef} className="v0-cursor-dot" />
    </div>
  )
}
