"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface MedicalClient {
  name: string
  location: string
  specialty: string
  partnership: string
}

const medicalClients: MedicalClient[] = [
  { name: "Lagos Medical Supplies", location: "Nigeria", specialty: "Pharmaceuticals", partnership: "5 years" },
  { name: "Kenya Healthcare Distributors", location: "Kenya", specialty: "Medical Equipment", partnership: "3 years" },
  { name: "Gulf Medical Trading", location: "UAE", specialty: "Pharmaceutical Products", partnership: "7 years" },
  { name: "West Africa Pharma", location: "Ghana", specialty: "Generic Medicines", partnership: "4 years" },
  { name: "East African Medical Corp", location: "Uganda", specialty: "Medical Consumables", partnership: "2 years" },
  { name: "Sahara Healthcare Network", location: "Sudan", specialty: "Pharmaceutical Exports", partnership: "6 years" },
  {
    name: "Ethiopian Medical Solutions",
    location: "Ethiopia",
    specialty: "Healthcare Products",
    partnership: "3 years",
  },
  { name: "Tanzania Health Supplies", location: "Tanzania", specialty: "Medical Devices", partnership: "4 years" },
  { name: "Rwanda Medical Imports", location: "Rwanda", specialty: "Pharmaceuticals", partnership: "2 years" },
  { name: "South African Pharma", location: "South Africa", specialty: "Medical Equipment", partnership: "8 years" },
]

export default function MedicalMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const animationFrameRef = useRef<number>()

  const handleScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY)
    })
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [handleScroll])

  useEffect(() => {
    if (marqueeRef.current) {
      const translateX = -(scrollY * 0.2) % (marqueeRef.current.scrollWidth / 2)
      marqueeRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`
    }
  }, [scrollY])

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-orange-50 via-white to-orange-50 py-6 md:py-8 border-y border-orange-100">
      <div className="absolute left-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-r from-orange-50 to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-16 md:w-32 bg-gradient-to-l from-orange-50 to-transparent" />

      <div
        ref={marqueeRef}
        className="flex gap-6 md:gap-12 whitespace-nowrap transition-transform duration-75 ease-linear"
        style={{
          width: "200%",
          willChange: "transform",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        {/* First set of medical clients */}
        {medicalClients.map((client, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-3 md:gap-6 px-4 md:px-6 py-2 md:py-3 bg-white/70 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-sm hover:shadow-lg hover:bg-orange-50/80 transition-all duration-300 group min-w-fit"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#92301a] rounded-full animate-pulse" />
              <div className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-[#92301a] transition-colors">
                {client.name}
              </div>
            </div>
            <div className="h-3 md:h-4 w-px bg-[#92301a]" />
            <div className="text-xs font-medium text-gray-600">{client.location}</div>
            <div className="hidden sm:block text-xs text-[#92301a] bg-orange-100 px-2 py-1 rounded-md">
              {client.specialty}
            </div>
            <div className="text-xs text-green-600 font-medium">{client.partnership}</div>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {medicalClients.map((client, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-3 md:gap-6 px-4 md:px-6 py-2 md:py-3 bg-white/70 backdrop-blur-sm rounded-full border border-orange-200/50 shadow-sm hover:shadow-lg hover:bg-orange-50/80 transition-all duration-300 group min-w-fit"
          >
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#92301a] rounded-full animate-pulse" />
              <div className="text-xs md:text-sm font-medium text-gray-900 group-hover:text-[#92301a] transition-colors">
                {client.name}
              </div>
            </div>
            <div className="h-3 md:h-4 w-px bg-[#92301a]" />
            <div className="text-xs font-medium text-gray-600">{client.location}</div>
            <div className="hidden sm:block text-xs text-[#92301a] bg-orange-100 px-2 py-1 rounded-md">
              {client.specialty}
            </div>
            <div className="text-xs text-green-600 font-medium">{client.partnership}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
