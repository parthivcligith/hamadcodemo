"use client"

import { useEffect, useState } from "react"

export default function Preloader() {
  const [visible, setVisible] = useState(true)
  const [animateText, setAnimateText] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 1500) // Reduced to 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateText(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!visible) return
    const body = document.body
    const html = document.documentElement
    const prevBodyOverflow = body.style.overflow
    const prevHtmlOverflow = html.style.overflow
    body.style.overflow = "hidden"
    html.style.overflow = "hidden"

    const preventScroll = (e: Event) => {
      e.preventDefault()
    }
    window.addEventListener("wheel", preventScroll, { passive: false })
    window.addEventListener("touchmove", preventScroll, { passive: false })

    return () => {
      body.style.overflow = prevBodyOverflow
      html.style.overflow = prevHtmlOverflow
      window.removeEventListener("wheel", preventScroll)
      window.removeEventListener("touchmove", preventScroll)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 70,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 300ms",
      }}
    >
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: "384px", padding: "0 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}>
          <div
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              letterSpacing: "0.1em",
              color: "#000000",
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              opacity: animateText ? 0 : 1,
              transform: animateText ? "translateY(16px)" : "translateY(0)",
              transition: "all 1000ms",
            }}
          >
            HAMADCO
          </div>

          <div
            style={{
              position: "relative",
              width: "128px",
              height: "128px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                border: "2px solid #e5e7eb",
                borderRadius: "50%",
                animation: "spin 2s linear infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  width: "12px",
                  height: "12px",
                  backgroundColor: "#111827",
                  borderRadius: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>

            <div
              style={{
                position: "absolute",
                top: "16px",
                left: "16px",
                right: "16px",
                bottom: "16px",
                backgroundColor: "#f3f4f6",
                borderRadius: "50%",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  )
}
