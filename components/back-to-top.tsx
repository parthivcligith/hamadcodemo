"use client"

import { useEffect, useState } from "react"
import { ArrowUpIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after ~240px scroll
      setVisible(window.scrollY > 240)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      window.scrollTo(0, 0)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className={cn(
        "fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6",
        "h-10 w-10 rounded-full border border-border bg-background text-foreground shadow-md",
        "flex items-center justify-center",
        "transition-opacity duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      )}
    >
      <ArrowUpIcon className="h-4 w-4" aria-hidden="true" />
      <span className="sr-only">Back to top</span>
    </button>
  )
}
