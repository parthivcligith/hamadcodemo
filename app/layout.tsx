import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import IslandNavbar from "@/components/island-navbar"
import Preloader from "@/components/preloader"
import { SiteFooter } from "@/components/site-footer"
import BackToTop from "@/components/back-to-top"

const headingFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
})

const bodyFont = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Hamadco - Global Pharmaceutical Exports | Trusted Export Services",
  description:
    "Leading pharmaceutical exports company specializing in pharmaceutical products, medical supplies, and healthcare equipment. Reliable export solutions with global compliance and quality assurance.",
  keywords: [
    "pharmaceutical exports",
    "global trade",
    "export services",
    "medical supplies export",
    "healthcare exports",
    "international business",
    "export company India",
  ],
  authors: [{ name: "Hamadco" }],
  creator: "Hamadco",
  publisher: "Hamadco",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      // keep generic app icon as a fallback
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon-180.png",
    shortcut: "/icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Hamadco - Global Pharmaceutical Exports | Trusted Export Services",
    description:
      "Leading pharmaceutical exports company specializing in pharmaceutical products, medical supplies, and healthcare equipment. Reliable export solutions with global compliance and quality assurance.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamadco - Global Pharmaceutical Exports | Trusted Export Services",
    description:
      "Leading pharmaceutical exports company specializing in pharmaceutical products, medical supplies, and healthcare equipment. Reliable export solutions with global compliance and quality assurance.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable} antialiased`}>
      <head>
        {/* Prevent pinch-zoom on mobile; note: this impacts accessibility (users can't zoom) */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`${bodyFont.className} font-sans antialiased`}>
        <Preloader />
        <Suspense fallback={<div>Loading...</div>}>
          <IslandNavbar showLogo={true} />
          {children}
        </Suspense>
        <BackToTop />
        <SiteFooter />
        {/* Inline script to block common zoom shortcuts (ctrl/meta + wheel, ctrl/meta + +/-). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => {
  function preventZoom(e) {
    try {
      if (e.ctrlKey || e.metaKey) {
        // block wheel + ctrl/meta
        if (e.type === 'wheel') {
          e.preventDefault();
          return;
        }
        // block key combos like Ctrl+Plus/Ctrl+-/Ctrl+0
        var k = e.key || e.code || '';
        if (k === '+' || k === '-' || k === '=' || k === '0' || k === 'Equal' || k === 'NumpadAdd' || k === 'NumpadSubtract' || e.keyCode === 61 || e.keyCode === 173 || e.keyCode === 187 || e.keyCode === 189) {
          e.preventDefault();
        }
      }
    } catch (err) {
      // ignore
    }
  }
  window.addEventListener('keydown', preventZoom, { passive: false });
  window.addEventListener('wheel', function (e) { if (e.ctrlKey || e.metaKey) e.preventDefault(); }, { passive: false });
})();`,
          }}
        />
      </body>
    </html>
  )
}
