"use client"

import type React from "react"

interface GSAPAnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeUp" | "stagger" | "scale" | "slideLeft" | "slideRight"
  delay?: number
}

export function GSAPAnimatedSection({ children, className = "" }: GSAPAnimatedSectionProps) {
  return <div className={className}>{children}</div>
}
