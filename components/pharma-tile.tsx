"use client"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface PharmaTileProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "accent"
  hover?: boolean
}

export function PharmaTile({ children, className, variant = "primary", hover = true }: PharmaTileProps) {
  const baseStyles = "rounded-2xl p-[1px] transition-all duration-300"

  const variants = {
    primary: "bg-gradient-to-r from-[#16376426] to-[#0c6f5326]",
    secondary: "bg-gradient-to-r from-[#0c6f5326] to-[#16376426]",
    accent: "bg-gradient-to-r from-[#0c6f5326] via-[#16376426] to-[#0c6f5326]",
  }

  return <div className={cn(baseStyles, variants[variant], className)}>{children}</div>
}

interface PharmaTileContentProps {
  children: ReactNode
  className?: string
}

export function PharmaTileContent({ children, className }: PharmaTileContentProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white h-full flex flex-col hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group",
        className,
      )}
    >
      {children}
    </div>
  )
}

interface PharmaTileHeaderProps {
  children: ReactNode
  className?: string
}

export function PharmaTileHeader({ children, className }: PharmaTileHeaderProps) {
  return <div className={cn("p-6 pb-2 md:pb-6", className)}>{children}</div>
}

interface PharmaTileBodyProps {
  children: ReactNode
  className?: string
}

export function PharmaTileBody({ children, className }: PharmaTileBodyProps) {
  return <div className={cn("px-6 pb-6 grow min-h-24 md:min-h-32", className)}>{children}</div>
}
