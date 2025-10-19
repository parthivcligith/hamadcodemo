"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Image from "next/image"

const links = [{ href: "/", label: "Home" }]

const exportLinks = [{ href: "/medical", label: "Pharmaceutical Exports" }]

const getSectionLinks = (pathname: string) => {
  if (pathname === "/") {
    return [
      { href: "/#about", label: "About" },
      { href: "/#products", label: "Products" },
      { href: "/#export-process", label: "Our Export Process" },
    ]
  } else if (pathname === "/medical") {
    return [
      { href: "/medical#products", label: "Products" },
      { href: "/medical#services", label: "Services" },
      { href: "/medical#markets", label: "Markets" },
      { href: "/medical#process", label: "Process" },
    ]
  }
  return []
}

const getContactLink = (pathname: string) => {
  if (pathname === "/medical") {
    return "/medical#contact"
  }
  return "/#contact"
}

const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  const hash = href.split("#")[1]
  if (hash) {
    e.preventDefault()
    const element = document.getElementById(hash)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
}

interface IslandNavbarProps {
  showLogo?: boolean
}

export default function IslandNavbar({ showLogo = false }: IslandNavbarProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)

  const sectionLinks = getSectionLinks(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setDropdownOpen(false)
    setMobileDropdownOpen(false)
  }, [pathname])

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)")
    if (mql.matches) setOpen(false)
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false)
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow
      document.body.style.overflow = "hidden"
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false)
      }
      document.addEventListener("keydown", onKey)
      return () => {
        document.body.style.overflow = original
        document.removeEventListener("keydown", onKey)
      }
    }
  }, [open])

  return (
    <>
      <div className="fixed top-2 left-2 right-2 sm:left-3 sm:right-3 z-50 flex justify-center">
        <div
          className="relative flex w-full max-w-4xl items-center justify-between rounded-full border border-white/60 backdrop-blur-md shadow-lg px-3 sm:px-4 py-2 transition-all duration-300 text-background bg-background"
          style={{
            transform: scrolled ? "scale(0.98)" : "scale(1)",
            backgroundColor: "white",
          }}
        >
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-1 sm:gap-2 rounded-full px-1 sm:px-2 py-1 text-sm font-semibold text-gray-900 no-underline"
          >
            <Image
              src="/images/hamad-logo-horizontal.png"
              alt="Hamad Co"
              width={120}
              height={32}
              className="h-4 sm:h-6 w-auto"
            />
          </Link>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-1 mx-1">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-3 py-2 text-sm font-medium text-gray-600 no-underline ${
                    active ? "bg-gray-900/10" : ""
                  }`}
                >
                  <span className="relative z-10">{l.label}</span>
                </Link>
              )
            })}

            <div className="relative group">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="relative rounded-full px-3 py-2 text-sm font-medium text-gray-600 no-underline hover:bg-gray-900/5 flex items-center gap-1 cursor-pointer"
              >
                <span className="relative z-10">We Export</span>
                <svg
                  className={`w-4 h-4 transition-transform group-hover:rotate-180`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: "#92301a" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-96 transition-all duration-300 ease-in-out">
                {exportLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline"
                    onClick={() => setDropdownOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {sectionLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleSmoothScroll(e, l.href)}
                className="relative rounded-full px-3 py-2 text-sm font-medium text-gray-500 no-underline hover:text-gray-700 cursor-pointer"
              >
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}

            <a
              href={getContactLink(pathname)}
              onClick={(e) => handleSmoothScroll(e, getContactLink(pathname))}
              className="relative rounded-full px-4 py-2 text-sm font-medium no-underline transition-all duration-200 white-bg-button cursor-pointer"
            >
              <span className="relative z-10">Contact</span>
            </a>
          </nav>

          {/* Desktop CTA */}
          {/* Removed Get Quote button from desktop view */}

          <button
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-gray-900/10 bg-white/90 transition-all duration-200"
            style={{ color: "#92301a" }}
          >
            <div className="relative w-4 h-4 sm:w-5 sm:h-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "rotate-45 translate-y-1.5" : "translate-y-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-3 h-0.5 w-full bg-current transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-1.5" : "translate-y-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-60 transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute top-16 sm:top-18 left-2 right-2 sm:left-4 sm:right-4 rounded-2xl bg-white shadow-2xl border border-gray-200 z-61 transition-all duration-300 transform ${
            open ? "translate-y-0 opacity-100 scale-100" : "-translate-y-4 opacity-0 scale-95"
          }`}
        >
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-base font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="h-8 w-8 grid place-items-center rounded-full hover:bg-gray-100 transition-colors duration-200"
                style={{ color: "#92301a" }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>
            <div className="h-px bg-gray-100 mb-4" />

            <nav className="flex flex-col space-y-1">
              {links.map((l, index) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-xl px-4 py-3 text-base font-medium text-gray-800 no-underline hover:bg-gray-50 transition-all duration-200 ${
                    open ? "animate-slide-down-fade" : ""
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}

              <div className="py-2">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full text-left text-sm font-semibold text-gray-900 px-4 py-2 hover:bg-gray-50 rounded-xl transition-colors duration-200 flex items-center justify-between"
                >
                  <span>We Export</span>
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: "#92301a" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${mobileDropdownOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"} overflow-hidden`}
                >
                  {exportLinks.map((l, index) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`block rounded-xl px-6 py-2 text-sm font-medium text-gray-600 no-underline hover:bg-gray-50 transition-all duration-200 ${
                        open ? "animate-slide-down-fade" : ""
                      }`}
                      style={{
                        animationDelay: `${(links.length + index) * 50}ms`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {sectionLinks.map((l, index) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, l.href)
                    setOpen(false)
                  }}
                  className={`rounded-xl px-4 py-2 text-sm font-medium text-gray-600 no-underline hover:bg-gray-50 transition-all duration-200 cursor-pointer ${
                    open ? "animate-slide-down-fade" : ""
                  }`}
                  style={{ animationDelay: `${(links.length + exportLinks.length + index) * 50}ms` }}
                >
                  {l.label}
                </a>
              ))}

              <a
                href={getContactLink(pathname)}
                onClick={(e) => {
                  handleSmoothScroll(e, getContactLink(pathname))
                  setOpen(false)
                }}
                className={`rounded-xl px-4 py-3 text-base font-medium no-underline transition-all duration-200 mt-2 text-center white-bg-button cursor-pointer ${
                  open ? "animate-slide-down-fade" : ""
                }`}
                style={{
                  animationDelay: `${(links.length + exportLinks.length + sectionLinks.length) * 50}ms`,
                }}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
