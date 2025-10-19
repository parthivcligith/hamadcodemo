"use client"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer
      className="relative border-t border-slate-800 bg-gradient-to-b from-[#0f172a] to-[#0b1220] text-white"
      aria-labelledby="site-footer-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#92301a]/50 to-transparent"
      />
      <h2 id="site-footer-heading" className="sr-only">
        Site footer
      </h2>

      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-white">Hamadco</span>
            </div>
            <p className="text-sm text-white leading-relaxed text-left">
              Trusted global pharmaceutical export partner delivering quality, compliance, and reliability worldwide.
            </p>
          </div>

          {/* Exports */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">Pharmaceutical Exports</h3>
            <ul className="mt-4 space-y-2 text-sm text-white">
              <li>
                <Link className="text-white visited:text-white transition-colors hover:text-[#e3b09f]" href="/medical">
                  Explore Pharmaceutical Exports
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-white">
              <li>
                <Link className="text-white visited:text-white transition-colors hover:text-[#e3b09f]" href="/#about">
                  About
                </Link>
              </li>
              
              <li>
                <Link className="text-white visited:text-white transition-colors hover:text-[#e3b09f]" href="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-white">
              <li>
                <a
                  href="mailto:info@hamadco.in"
                  className="block text-white visited:text-white transition-colors hover:text-[#e3b09f]"
                >
                  Email: info@hamadco.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+918086890111"
                  className="block text-white visited:text-white transition-colors hover:text-[#e3b09f]"
                >
                  Phone: +91 8086890111
                </a>
              </li>
              <li>
                <span className="block text-white">
                  6th Floor, Kandamkulathy Towers, Mahatma Gandhi Rd, KPCC Junction, Opp Maharaja&apos;s Ground,
                  Shenoys, Ernakulam, Kerala 682011
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white">© {new Date().getFullYear()} Hamadco. All rights reserved.</p>
          <nav aria-label="Legal links">
            <ul className="flex items-center gap-4 text-xs text-white">
              <li>
                <Link href="/privacy" className="text-white visited:text-white transition-colors hover:text-[#e3b09f]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white visited:text-white transition-colors hover:text-[#e3b09f]">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/compliance"
                  className="text-white visited:text-white transition-colors hover:text-[#e3b09f]"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
