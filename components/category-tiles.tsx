"use client"

import type React from "react"

import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

type Category = {
  title: string
  href: string
  imageAlt: string
  img: string
  blurb?: string
  icon: React.ReactNode
}

const defaultCategories: Category[] = [
  {
    title: "Medical Devices",
    href: "/medical",
    imageAlt: "Modern medical facility",
    img: "/medical-devices-surgical-instruments.png",
    blurb: "Pharma, devices, consumables",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 animate-pulse" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v20M2 12h20" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Plastics & Polymers",
    href: "/plastics",
    imageAlt: "Industrial plastic components",
    img: "/medical-plastic-components-tubes.png",
    blurb: "Polymers, packaging, parts",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 animate-spin"
        style={{ animationDuration: "3s" }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="m9 9 6 6" />
        <path d="m9 15 6-6" />
      </svg>
    ),
  },
  {
    title: "Rubber Products",
    href: "/rubber",
    imageAlt: "Rubber seals and gaskets",
    img: "/industrial-rubber-seals-gaskets.png",
    blurb: "Seals, hoses, dampeners",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Electronics & Components",
    href: "/electronics",
    imageAlt: "Electronics components",
    img: "/electronic-components-circuit-boards.png",
    blurb: "Sensors, power, control",
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 animate-ping"
        style={{ animationDuration: "2s" }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <circle cx="15" cy="15" r="2" />
        <path d="m9 11 6 4" />
        <path d="M7 7h10" />
        <path d="M7 17h10" />
      </svg>
    ),
  },
]

export default function CategoryTiles({
  categories = defaultCategories,
  className,
}: {
  categories?: Category[]
  className?: string
}) {
  const [active, setActive] = useState<number | null>(null)
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <div className="relative">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat blur-sm"
          style={{
            backgroundImage: "url('/images/digital-world-map-hologram.jpg')",
          }}
        />
        <div className={cn("relative grid grid-cols-2 gap-3", className)}>
          {categories.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              aria-label={`${c.title} exports`}
              className="relative overflow-hidden rounded-xl group min-h-[80px] shadow-sm hover:shadow-md transition-shadow duration-200 beige-card border border-gray-200"
            >
              <div className="absolute top-2 right-2 text-[#92301a] opacity-60">{c.icon}</div>
              <div className="relative p-3 flex flex-col justify-end h-full">
                <h3 className="text-sm font-semibold tracking-tight text-gray-900">{c.title}</h3>
                {c.blurb ? <p className="mt-0.5 text-[12px] leading-5 text-gray-600">{c.blurb}</p> : null}
                <div className="mt-2 w-fit rounded-full px-2.5 py-0.5 text-[11px] font-medium text-[#92301a] bg-orange-50 border border-orange-200">
                  Explore
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      <div
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat blur-sm grayscale"
        style={{
          backgroundImage: "url('/images/digital-world-map-hologram.jpg')",
        }}
      />
      <div
        className={cn("group relative mx-auto flex w-full max-w-7xl items-stretch gap-4 rounded-3xl", className)}
        onMouseLeave={() => setActive(null)}
      >
        {categories.map((c, i) => {
          const isActive = active === i
          const someoneActive = active !== null

          return (
            <Link
              key={c.title}
              href={c.href}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onTouchStart={() => setActive(i)}
              aria-label={`${c.title} exports`}
              className={cn(
                "relative overflow-hidden rounded-2xl group beige-card border border-gray-200",
                "transition-[flex,transform,box-shadow] duration-300 ease-out",
                "shadow-sm hover:shadow-lg focus-visible:shadow-lg",
                "flex-1",
                someoneActive ? (isActive ? "flex-[2]" : "flex-[0.7]") : "flex-1",
                "min-h-[200px] md:h-[240px]",
              )}
            >
              <div className="absolute top-4 right-4 text-[#92301a] opacity-70">{c.icon}</div>

              <div className="relative p-6 flex flex-col justify-end h-full">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900">{c.title}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm md:text-base transition-opacity duration-300 text-gray-600",
                    isActive ? "opacity-100" : "opacity-90",
                  )}
                >
                  {c.blurb}
                </p>

                <div
                  className={cn(
                    "mt-3 w-fit rounded-full px-3 py-1 text-xs font-medium text-[#92301a] bg-orange-50 border border-orange-200",
                    "transition-all duration-300",
                    isActive ? "translate-x-0 opacity-100" : "translate-x-[-4px] opacity-95",
                  )}
                >
                  Explore
                </div>
              </div>

              <div
                className={cn(
                  "pointer-events-none absolute inset-0 rounded-2xl ring-0 transition duration-300",
                  isActive ? "ring-4 ring-orange-400/60" : "ring-0",
                )}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
