"use client"

import { useEffect, useRef, useState } from "react"

interface Client {
  name: string
  location: string
  industry: string
  partnership: string
}

const clients: Client[] = [
  { name: "MedTech Solutions", location: "Germany", industry: "Medical Devices", partnership: "5 years" },
  { name: "Global Plastics Corp", location: "USA", industry: "Polymers", partnership: "8 years" },
  { name: "European Electronics", location: "Netherlands", industry: "Electronics", partnership: "3 years" },
  { name: "ChemCorp Industries", location: "Switzerland", industry: "Chemicals", partnership: "12 years" },
  { name: "Rubber Dynamics", location: "Japan", industry: "Rubber Products", partnership: "6 years" },
  { name: "Precision Medical", location: "Canada", industry: "Surgical Instruments", partnership: "4 years" },
  { name: "Advanced Polymers", location: "UK", industry: "Industrial Plastics", partnership: "7 years" },
  { name: "TechComponents Ltd", location: "Singapore", industry: "Electronics", partnership: "9 years" },
  { name: "BioChemical Solutions", location: "France", industry: "Pharmaceuticals", partnership: "11 years" },
  { name: "Industrial Seals Co", location: "South Korea", industry: "Rubber Seals", partnership: "2 years" },
]

const MARQUEE_SPEEDS = {
  mobile: 10, // seconds - faster on mobile
  tablet: 25, // seconds - medium speed on tablet
  desktop: 35, // seconds - slower on desktop for better readability
}

export default function ScrollMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [currentSpeed, setCurrentSpeed] = useState(MARQUEE_SPEEDS.desktop)

  const getMarqueeSpeed = () => {
    if (typeof window === "undefined") return MARQUEE_SPEEDS.desktop

    if (window.innerWidth < 768) {
      return MARQUEE_SPEEDS.mobile
    } else if (window.innerWidth < 1024) {
      return MARQUEE_SPEEDS.tablet
    } else {
      return MARQUEE_SPEEDS.desktop
    }
  }

  useEffect(() => {
    const updateSpeed = () => {
      const newSpeed = getMarqueeSpeed()
      setCurrentSpeed(newSpeed)
    }

    updateSpeed()
    window.addEventListener("resize", updateSpeed)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target instanceof HTMLElement) {
              entry.target.style.animation = `marquee ${currentSpeed}s linear infinite`
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (marqueeRef.current) {
      observer.observe(marqueeRef.current)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener("resize", updateSpeed)
    }
  }, [currentSpeed])

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 py-6 md:py-8 border-y border-gray-100">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes marquee {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }
        `,
        }}
      />

      <div className="absolute left-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent" />

      <div
        ref={marqueeRef}
        className="flex gap-6 md:gap-12 whitespace-nowrap"
        style={{
          width: "200%",
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
      >
        {/* First set of clients */}
        {clients.map((client, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-3 md:gap-6 px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 group min-w-fit bg-white"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-[#92301a] transition-colors">
                {client.name}
              </div>
            </div>
            <div className="h-3 md:h-4 w-px bg-gray-300" />
            <div className="text-xs font-medium text-gray-600">{client.location}</div>
            <div className="hidden sm:block text-xs px-2 py-1 rounded-md bg-primary text-background">
              {client.industry}
            </div>
            <div className="text-xs text-[#92301a] font-medium">{client.partnership}</div>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {clients.map((client, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-3 md:gap-6 px-4 md:px-6 py-2 md:py-3 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200/50 shadow-sm hover:shadow-md transition-all duration-300 group min-w-fit"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-500 rounded-full animate-pulse" />
              <div className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-[#92301a] transition-colors">
                {client.name}
              </div>
            </div>
            <div className="h-3 md:h-4 w-px bg-gray-300" />
            <div className="text-xs font-medium text-gray-600">{client.location}</div>
            <div className="hidden sm:block text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
              {client.industry}
            </div>
            <div className="text-xs text-[#92301a] font-medium">{client.partnership}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
