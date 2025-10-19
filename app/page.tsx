"use client"

import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

import { HomeExtraSections } from "@/components/home-extra-sections"
import ScrollMarquee from "@/components/scroll-marquee"
import { GSAPAnimatedSection } from "@/components/gsap-animated-section"
import { CertificationsSection, GlobalReachSection } from "@/components/business-sections"
// Removed decorative background imports
// import {
//   GeometricBackground,
//   FloatingShapes,
//   WaveBackground,
//   GridBackground,
//   ParticleBackground,
//   HexagonPattern,
//   MorphingBlobs,
//   NetworkDots,
//   SpiralPattern,
// } from "@/components/animated-backgrounds"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { CountrySelect } from "@/components/country-select"
import { PhoneInput } from "@/components/phone-input"
import { COUNTRIES } from "@/components/data/countries"

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    productInterest: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [countryCode, setCountryCode] = useState<string>("IN")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()
        if (data.whatsappUrl) {
          window.open(data.whatsappUrl, "_blank")
        }

        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          country: "",
          productInterest: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const productCategories = [
    {
      title: "Pharmaceutical Exports",
      description: "High-quality pharmaceutical products, medical supplies & healthcare equipment",
      iconName: "Stethoscope",
      href: "/medical",
      image: "/medical-devices-surgical-instruments.png",
      color: "bg-blue-50 text-blue-600",
    },
  ]

  const getNational = (val: string) => {
    const match = COUNTRIES.find((c) => val?.startsWith(`+${c.dialCode}`))
    return match ? val.slice(`+${match.dialCode}`.length).trimStart() : val || ""
  }

  return (
    <>
      {/* use token-driven background so global beige applies */}
      <div className="min-h-screen bg-beige-page overflow-hidden">
        <GSAPAnimatedSection animation="fadeUp">
          <section
            className="relative text-gray-900 pt-20 pb-16 md:pt-24 md:pb-24 hero-section"
            style={{
              minHeight: "80vh",
              backgroundImage: "url('/images/hero-highrise.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              filter: "blur(0px)",
            }}
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[5px]" aria-hidden="true" />
            {/* removed: background <img /> for hero */}

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center z-10 border border-transparent">
              <GSAPAnimatedSection animation="scale" delay={0.3}>
                <div
                  className="bg-sandy backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-primary bg-white"
                  style={{ borderColor: "var(--brand-beige)" }}
                >
                  <GSAPAnimatedSection animation="fadeUp" delay={0.5}>
                    <p className="font-medium mb-2 md:mb-3 text-primary text-sm">International Export Specialists</p>
                  </GSAPAnimatedSection>

                  <GSAPAnimatedSection animation="fadeUp" delay={0.7}>
                    <h1 className="text-xl sm:text-2xl font-serif font-bold mb-3 md:mb-4 text-balance text-black md:text-5xl">
                      World-Class Exports. Seamless Compliance.
                    </h1>
                  </GSAPAnimatedSection>

                  <GSAPAnimatedSection animation="fadeUp" delay={0.9}>
                    <p className="text-xs sm:text-sm max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed text-slate-700 text-justify hidden md:block">
                      We specialize in delivering reliable export solutions across pharmaceutical, marine, and
                      aeronautical industries. Partner with us for quality, compliance, and global reach in
                      international trade.
                    </p>
                  </GSAPAnimatedSection>

                  <GSAPAnimatedSection animation="stagger" delay={1.1}>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-8 md:mb-12">
                      <button
                        className="px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#92301a",
                          border: "2px solid #92301a",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff"
                          e.currentTarget.style.borderColor = "#92301a"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff"
                          e.currentTarget.style.borderColor = "#92301a"
                        }}
                        onClick={() => (window.location.href = "/medical")}
                      >
                        <span className="sm:hidden">Explore</span>
                        <span className="hidden sm:inline text-primary">Explore Our Products</span>
                      </button>
                      <button
                        className="px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                        onClick={() => document.getElementById("contact")?.scrollIntoView()}
                        style={{
                          backgroundColor: "#ffffff",
                          color: "#92301a",
                          border: "2px solid #92301a",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#f8fafc"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#ffffff"
                        }}
                      >
                        Get a Quote
                      </button>
                    </div>
                  </GSAPAnimatedSection>

                  <GSAPAnimatedSection animation="scale" delay={1.3}>
                    <div className="bg-sandy backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border max-w-6xl mx-auto overflow-hidden border-primary">
                      <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 overflow-hidden">
                        <div className="flex-1 md:flex-[2]">
                          <div className="relative mb-4">
                            <div className="relative group text-center">
                              <img
                                src="/images/medicine-caduceus.gif"
                                alt="Medical Caduceus Symbol"
                                className="relative w-12 h-12 md:w-16 md:h-16 mx-auto md:mx-0 rounded-full object-cover transition-all duration-300 text-center"
                                crossOrigin="anonymous"
                              />
                            </div>
                            <h3 className="text-xl md:text-2xl font-serif font-bold mb-2 group-hover:text-gray-800 transition-colors text-center text-primary md:text-left">
                              Pharmaceutical Exports
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center mb-4 md:text-left">
                              High-quality pharmaceutical products, medical supplies & healthcare equipment ensuring
                              global health standards with reliable worldwide distribution
                            </p>
                          </div>
                        </div>

                        <div className="flex-1 md:flex-1">
                          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Quality Standards Tile */}
                            <div className="p-4 rounded-lg tile-bg-brand border border-primary">
                              <h4 className="font-semibold text-black mb-4 text-sm">Quality Standards</h4>
                              <ul className="text-black text-xs space-y-1">
                                  <li className="bg-card text-primary text-left font-semibold">
                                    <span style={{ color: "#92301A" }}>•</span> WHO-GMP certified
                                  </li>
                                  <li className="text-primary text-left font-semibold">
                                    <span style={{ color: "#92301A" }}>•</span> FDA approved facilities
                                  </li>
                                  <li className="text-primary font-semibold">
                                    <span style={{ color: "#92301A" }}>•</span> ISO 13485 compliance
                                  </li>
                                  <li className="text-primary text-left font-semibold">
                                    <span style={{ color: "#92301A" }}>•</span> Temperature monitoring
                                  </li>
                                  <li className="text-primary text-left font-semibold">
                                    <span style={{ color: "#92301A" }}>•</span> Batch tracking systems
                                  </li>
                                  <li className="text-primary text-left font-semibold">
                                    <span style={{ color: "#92301A" }}>•</span> Quality assurance protocols
                                  </li>
                              </ul>
                            </div>

                            {/* Global Reach Tile */}
                            {/* switch to full tile color (#fee3bd) by using tile-bg-brand instead of tile-bg-soft */}
                            <div className="p-4 rounded-lg tile-bg-brand border-primary border">
                              <h4 className="font-semibold text-black mb-4 text-sm">Global Reach</h4>
                              <ul className="text-black text-xs space-y-1">
                                <li className="text-primary font-semibold">
                                  <span style={{ color: "#92301A" }}>•</span> 50+ countries served
                                </li>
                                <li className="text-primary text-left font-semibold">
                                  <span style={{ color: "#92301A" }}>•</span> Cold chain logistics
                                </li>
                                <li className="text-primary text-left font-semibold">
                                  <span style={{ color: "#92301A" }}>•</span> Regulatory compliance
                                </li>
                                <li className="text-primary text-left font-semibold">
                                  <span style={{ color: "#92301A" }}>•</span> Regional distribution centers
                                </li>
                                <li className="text-primary text-left font-semibold">
                                  <span style={{ color: "#92301A" }}>•</span> Multi-language support
                                </li>
                                <li className="text-primary text-left font-semibold">
                                  <span style={{ color: "#92301A" }}>•</span> Customs expertise
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom CTA button */}
                      <div className="mt-6 pt-4 border-t border-gray-200">
                        <button
                          className="flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg w-full md:w-auto mx-auto"
                          style={{
                            backgroundColor: "#ffffff",
                            color: "#92301a",
                            border: "2px solid #92301a",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#ffffff"
                            e.currentTarget.style.borderColor = "#7a2817"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#ffffff"
                            e.currentTarget.style.borderColor = "#92301a"
                          }}
                          onClick={() => (window.location.href = "/medical")}
                        >
                          Explore Pharmaceutical Products
                          <svg
                            className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </GSAPAnimatedSection>
                </div>
              </GSAPAnimatedSection>
            </div>
          </section>
        </GSAPAnimatedSection>

        <ScrollMarquee />

        <GSAPAnimatedSection animation="fadeUp">
          <section id="about" className="py-12 md:py-16 bg-background relative overflow-hidden">
            {/* Removed decorative backgrounds */}
            {/* <GeometricBackground /> */}
            {/* <HexagonPattern /> */}
            {/* <SpiralPattern /> */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
              <GSAPAnimatedSection animation="fadeUp" className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 md:mb-4 text-gray-900 md:text-5xl">
                  About Us
                </h2>
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed text-primary">
                  Hamad Co has grown from a small India-based trading company into a globally recognized brand with a
                  strong reputation for quality, trust, and reliability.
                </p>
              </GSAPAnimatedSection>

              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-12 overflow-hidden">
                <GSAPAnimatedSection animation="slideLeft">
                  <div className="space-y-6">
                    <h3 className="font-serif font-bold text-card-foreground text-2xl">Our Mission & Vision</h3>
                    <div className="space-y-6">
                      {/* Our Mission uses soft tile background */}
                      {/* make "Our Mission" tile use exact #fee3bd via tile-bg-brand */}
                      <div className="p-6 rounded-lg tile-bg-brand border border-primary bg-background">
                        {/* make "Our Mission" heading and paragraph black */}
                        <h4 className="text-lg font-semibold mb-3" style={{ color: "#000000" }}>
                          Our Mission
                        </h4>
                        <p className="text-sm sm:text-base leading-relaxed text-primary" style={{ color: "#000000" }}>
                          To provide world-class products and services that empower businesses worldwide, ensuring
                          reliability, sustainability, and customer satisfaction in every deal we make.
                        </p>
                      </div>
                      {/* Our Vision uses brand tile background */}
                      <div className="p-6 rounded-lg tile-bg-brand border-primary border">
                        <h4 className="text-lg font-semibold mb-3" style={{ color: "#000000" }}>
                          Our Vision
                        </h4>
                        <p className="text-sm sm:text-base leading-relaxed text-primary" style={{ color: "#000000" }}>
                          To be recognized as a global leader in trade and exports, creating long-term value for our
                          clients, partners, and communities by embracing innovation, integrity, and excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="slideRight">
                  <div className="space-y-6">
                    <h3 className="font-serif font-bold text-gray-900 text-2xl">Message from the Founder</h3>
                    <div className="beige-card-soft p-6 rounded-lg border-l-4 border-primary">
                      <p className="text-sm sm:text-base leading-relaxed text-justify italic mb-4 text-foreground">
                        "When I started Hamad Co, my vision was simple: to build a company that stands for trust and
                        quality while making India proud in global markets. Today, with our expanding reach and growing
                        customer base, I am proud that we are living that vision every day. Our focus will always remain
                        on innovation, excellence, and building long-term relationships with our partners worldwide."
                      </p>
                      <p className="font-semibold text-primary">- Mr. Hamad , Founder</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      {/* replace About Us section images with African doctors/children images */}
                      <img
                        src="/images/african-doctors-team.jpg"
                        alt="African doctors team in hospital corridor"
                        className="w-full h-40 md:h-48 object-cover rounded-lg"
                      />
                      <img
                        src="/images/african-children-vaccination-1.jpg"
                        alt="African children receiving vaccinations in a clinic"
                        className="w-full h-40 md:h-48 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </GSAPAnimatedSection>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12 overflow-hidden">
                <GSAPAnimatedSection animation="slideLeft">
                  <div className="space-y-6">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 sm:text-4xl">Our Core Values</h3>
                    <div className="space-y-4">
                      {[
                        {
                          title: "Integrity",
                          desc: "We believe in honesty and transparency in every transaction.",
                          color: "blue",
                        },
                        {
                          title: "Quality",
                          desc: "Every product we deliver meets strict international standards.",
                          color: "green",
                        },
                        {
                          title: "Customer Focus",
                          desc: "We put our clients at the center of everything we do.",
                          color: "purple",
                        },
                        {
                          title: "Innovation",
                          desc: "Continuously evolving to meet the needs of a changing world.",
                          color: "orange",
                        },
                        {
                          title: "Sustainability",
                          desc: "Building a future-friendly business with responsibility.",
                          color: "teal",
                        },
                      ].map((value, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-4 rounded-lg border shadow-sm bg-white border-secondary text-background"
                        >
                          <div
                            className={`w-3 h-3 bg- text-primary bg-primary border-primary${value.color}-600 rounded-full mt-2 flex-shrink-0`}
                          ></div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{value.title}</h4>
                            <p className="text-xs sm:text-sm leading-relaxed text-primary">{value.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="slideRight">
                  <div className="space-y-8">
                    {/* Why Choose Hamad Co? card uses soft tile background */}
                    <Card className="tile-bg-brand shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">Why Choose Hamad Co?</h3>
                        <div className="space-y-4">
                          {/* removed: 20+ years of export experience */}
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                            <span className="text-gray-700">50+ countries served worldwide</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                            <span className="text-gray-700">Full regulatory compliance support</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                            <span className="text-gray-700">24/7 customer support</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="tile-bg-brand shadow-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Guarantees</h3>
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                            <span className="text-gray-700">Transparent quotes and clear lead times</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                            <span className="text-gray-700">Dedicated account manager for every order</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                            <span className="text-gray-700">
                              End‑to‑end logistics, documentation, and customs support
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    {/* </CHANGE> */}
                  </div>
                </GSAPAnimatedSection>
              </div>
            </div>
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="products" className="py-12 md:py-16 bg-background relative overflow-hidden">
            {/* Removed background elements */}
            {/* <FloatingShapes /> */}
            {/* <GridBackground /> */}
            {/* <MorphingBlobs /> */}

            <div className="max-w-6xl mx-auto px-6 relative z-10 overflow-hidden">
              <GSAPAnimatedSection animation="fadeUp" className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 md:mb-4 text-primary md:text-5xl">
                  Our Products & Services
                </h2>
                <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed text-gray-600">
                  We cater to multiple industries with a diverse product portfolio
                </p>
              </GSAPAnimatedSection>

              <GSAPAnimatedSection animation="fadeUp" className="overflow-hidden">
                {/* make the large "Pharmaceutical Products" panel background #fee3bd */}
                <div className="rounded-2xl border tile-bg-brand backdrop-blur p-6 md:p-8 shadow-lg flex flex-col md:flex-row gap-8 md:gap-10 items-stretch border-primary">
                  {/* Left compact card */}
                  {/* Products left compact card uses soft tile background */}
                  {/* left compact pharma card to exact #fee3bd */}
                  <Card className="bg-background shadow-sm border rounded-2xl h-full">
                    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                      <div aria-hidden className="text-4xl mb-4">
                        💊
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">Pharmaceutical Products</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We specialize exclusively in pharmaceutical exports—quality-checked and compliance-ready.
                      </p>
                      {/* Category chips */}
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {["Generics", "Branded", "APIs", "OTC", "Vaccines", "Cold-chain"].map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full border text-[10px] md:text-xs"
                            style={{ borderColor: "#92301A", color: "#92301A", backgroundColor: "#FDEBD0" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  {/* </CHANGE> */}

                  {/* Right wide content panel */}
                  {/* change container from grid content-center to flex column so chips don't get vertically centered and can wrap naturally */}
                  <div className="flex-1 flex flex-col gap-6 justify-start">
                    {/* Horizontal, sleek bullet lines */}
                    <ul className="grid gap-3 text-sm md:text-base text-gray-800">
                      {[
                        "Quality-checked sourcing and batch traceability",
                        "Regulatory documentation ready (COA, MSDS, GMP)",
                        "Cold-chain and controlled logistics for sensitive products",
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span
                            className="inline-block h-2 w-2 rounded-full"
                            style={{ backgroundColor: "#92301A" }}
                            aria-hidden
                          />
                          <span className="leading-relaxed text-left">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Row of small feature chips */}
                    <div className="flex flex-wrap items-center gap-2 border-primary">
                      {["Regulatory Support", "Global Fulfillment", "Cold-chain Expertise", "Multilingual Service"].map(
                        (label) => (
                          <span
                            key={label}
                            className="inline-flex items-center rounded-full border px-3 py-1 text-[11px] md:text-xs whitespace-nowrap leading-none border-primary text-primary border-solid bg-background"
                            style={{ borderColor: "#e5e7eb" }}
                          >
                            {label}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </GSAPAnimatedSection>
            </div>
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="global-presence" className="py-12 md:py-16 bg-background relative overflow-hidden">
            {/* Removed decorative backgrounds */}
            {/* <ParticleBackground /> */}
            {/* <NetworkDots /> */}
            {/* <HexagonPattern /> */}

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center overflow-hidden">
                <GSAPAnimatedSection animation="slideLeft">
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-primary md:text-5xl">
                    Our Global Presence
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify mb-6 overflow-hidden">
                    Headquartered in India, Hamad Co exports to markets worldwide. Our commitment to timely delivery,
                    strong logistics, and customer-first service has enabled us to build trusted partnerships across
                    Asia, the Middle East, Europe, and Africa.
                  </p>
                  <div className="grid grid-cols-2 gap-4 overflow-hidden">
                    <div className="text-center p-4 rounded-lg overflow-hidden border border-primary bg-popover text-primary">
                      <div className="text-2xl font-bold mb-2 text-primary">50+</div>
                      <div className="text-sm text-primary">Countries Served</div>
                    </div>
                    <div className="text-center p-4 rounded-lg overflow-hidden border-primary border bg-background">
                      <div className="text-2xl font-bold mb-2 text-primary">100%</div>
                      <div className="text-sm text-primary">Client Satisfaction</div>
                    </div>
                  </div>
                </GSAPAnimatedSection>

                <GSAPAnimatedSection animation="slideRight">
                  {/* Global Presence aside uses soft tile background */}
                  {/* "Why Choose Hamad Co?" aside in Global Presence to exact #fee3bd */}
                  <div className="tile-bg-brand p-6 rounded-lg overflow-hidden border border-primary">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Hamad Co?</h3>
                    <div className="space-y-4 overflow-hidden">
                      {[
                        {
                          title: "Experienced leadership with global vision",
                          desc: "",
                        },
                        {
                          title: "Wide range of industries and products",
                          desc: "",
                        },
                        {
                          title: "Trusted by clients across multiple continents",
                          desc: "",
                        },
                        {
                          title: "Strong export capabilities with reliable logistics",
                          desc: "",
                        },
                        {
                          title: "Commitment to customer satisfaction",
                          desc: "",
                        },
                      ].map((reason, index) => (
                        <div key={index} className="flex items-center gap-3 overflow-hidden">
                          {/* CHANGE bullets set to brand color #92301A */}
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                          <span className="text-gray-700">{reason.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* </CHANGE> */}
                </GSAPAnimatedSection>
              </div>
            </div>
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="certifications">
            <CertificationsSection />
          </section>
        </GSAPAnimatedSection>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="global-reach">
            <GlobalReachSection />
          </section>
        </GSAPAnimatedSection>

        {/* Replaced testimonials with workflow */}
        <section id="export-process" className="py-12 md:py-16 bg-background">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Workflow */}
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 md:mb-4 text-gray-900 text-center md:text-5xl">
              {""}
            </h2>
            <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto text-center mb-8 text-primary">
              Built for compliance, quality, and on time delivery.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
              {[
                { title: "Sourcing & QA", desc: "WHO-GMP manufacturers, batch QC, COA verification" },
                { title: "Regulatory & Docs", desc: "COO, Invoice, Packing List, COPP/COA, MSDS as required" },
                { title: "Cold-chain Logistics", desc: "Validated packaging, temp monitoring, customs handling" },
              ].map((item, idx) => (
                <Card key={idx} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <h3 className="text-base font-semibold text-gray-900 mb-1 text-center">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-primary text-center">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Documents We Provide */}
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-3 md:mb-4 text-gray-900 text-center md:text-5xl">
              {""}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto text-center mb-8">{""}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { title: "Certificates", desc: "COA, COPP, GMP, Free Sale Certificate" },
                { title: "Commercial Docs", desc: "Invoice, Packing List, Letter of Credit docs" },
                { title: "Regulatory", desc: "MSDS, COO, Product Registration support" },
              ].map((block, i) => (
                <Card key={i} className="border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 sm:p-5">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 text-center">{block.title}</h3>
                    <p className="text-xs sm:text-sm text-primary text-center">{block.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <GSAPAnimatedSection animation="fadeUp">
          <section id="contact" className="py-20 bg-background relative overflow-hidden">
            {/* Subtle mesh background (lightweight SVG pattern) */}
            <div className="absolute inset-0 pointer-events-none opacity-10 z-0" aria-hidden="true">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                  <pattern id="mesh-contact-1" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 40 L40 0" stroke="#163764" strokeWidth="0.5" strokeOpacity="0.08" />
                    <path d="M0 0 L40 40" stroke="#0c6f53" strokeWidth="0.5" strokeOpacity="0.06" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#mesh-contact-1)" />
              </svg>
            </div>
            {/* Removed decorative backgrounds */}
            {/* <GeometricBackground /> */}
            {/* <FloatingShapes /> */}
            {/* <MorphingBlobs /> */}
            {/* <NetworkDots /> */}

            <div className="max-w-6xl mx-auto px-6 relative z-10 overflow-hidden">
              <div className="text-center mb-12 overflow-hidden">
                <h2 className="text-3xl font-bold mb-6 text-foreground md:text-5xl">Get in Touch with Hamadco</h2>
                <p className="text-xl max-w-2xl mx-auto leading-relaxed overflow-hidden text-primary">
                  Ready to expand your business globally? Contact our export specialists for personalized solutions and
                  competitive pricing.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 overflow-hidden">
                {/* Contact Form */}
                <Card className="shadow-lg overflow-hidden bg-white border border-gray-200">
                  <CardContent className="p-6 overflow-hidden">
                    <h3 className="text-2xl font-bold mb-4 text-primary">Send us a Message</h3>
                    <p className="text-gray-600 mb-6 overflow-hidden">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>

                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg overflow-hidden">
                        <p className="text-green-800 font-medium overflow-hidden">
                          Thank you for your inquiry! Your message has been formatted and sent to WhatsApp. We'll get
                          back to you within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg overflow-hidden">
                        <p className="text-red-800 font-medium overflow-hidden">
                          Sorry, there was an error sending your message. Please try again or contact us directly at
                          info@hamadco.in
                        </p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                        <div>
                          <Label htmlFor="name" className="text-gray-700 font-medium">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 bg-white"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-gray-700 font-medium">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 bg-white"
                            placeholder="your.email@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                        <div>
                          <Label htmlFor="company" className="text-gray-700 font-medium">
                            Company Name
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="mt-1 bg-white"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700 font-medium">
                            Phone Number
                          </Label>
                          <PhoneInput
                            className="mt-1 bg-white"
                            value={formData.phone}
                            onChange={(val) => setFormData((prev) => ({ ...prev, phone: val }))}
                            defaultCountry="IN"
                            countryCode={countryCode}
                            onCountryChange={(c) => {
                              setCountryCode(c.code)
                              setFormData((prev) => {
                                const national = getNational(prev.phone)
                                const nextVal = national ? `+${c.dialCode} ${national}` : `+${c.dialCode}`
                                return { ...prev, phone: nextVal }
                              })
                              setFormData((prev) => ({ ...prev, country: prev.country || c.name }))
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 overflow-hidden">
                        <div>
                          <Label htmlFor="country" className="text-gray-700 font-medium">
                            Country *
                          </Label>
                          <CountrySelect
                            className="mt-1 bg-white"
                            value={formData.country}
                            onChange={(countryName) => {
                              const selected = COUNTRIES.find((c) => c.name === countryName)
                              if (selected) {
                                setCountryCode(selected.code)
                                setFormData((prev) => {
                                  const national = getNational(prev.phone)
                                  const nextVal = national
                                    ? `+${selected.dialCode} ${national}`
                                    : `+${selected.dialCode}`
                                  return { ...prev, country: countryName, phone: nextVal }
                                })
                              } else {
                                setFormData((prev) => ({ ...prev, country: countryName }))
                              }
                            }}
                            placeholder="Select country"
                          />
                        </div>
                        <div>
                          <Label htmlFor="productInterest" className="text-gray-700 font-medium">
                            Product Interest
                          </Label>
                          <select
                            id="productInterest"
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleInputChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                          >
                            <option value="">Select a category</option>
                            <option value="pharmaceuticals">Pharmaceutical Products</option>
                            <option value="medical-supplies">Medical Supplies</option>
                            <option value="healthcare-equipment">Healthcare Equipment</option>
                            <option value="surgical-instruments">Surgical Instruments</option>
                            <option value="marine-parts">Marine Parts</option>
                            <option value="aeronautical-parts">Aeronautical Parts</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="overflow-hidden">
                        <Label htmlFor="message" className="text-gray-700 font-medium">
                          Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={handleInputChange}
                          className="mt-1 bg-white"
                          rows={5}
                          placeholder="Tell us about your requirements, target markets, or any specific questions you have..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          backgroundColor: "#92301a",
                          color: "#ffffff",
                          border: "2px solid #92301a",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.backgroundColor = "#7a2817"
                            e.currentTarget.style.borderColor = "#7a2817"
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSubmitting) {
                            e.currentTarget.style.backgroundColor = "#92301a"
                            e.currentTarget.style.borderColor = "#92301a"
                          }
                        }}
                      >
                        {isSubmitting ? "Sending Message..." : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information Card */}
                <Card className="shadow-lg overflow-hidden bg-white border border-gray-200">
                  <CardContent className="p-6 overflow-hidden">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
                    <div className="space-y-6 overflow-hidden">
                      <div className="flex items-start gap-4 overflow-hidden">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <div role="group" aria-label="Address">
                          <p className="text-gray-600 text-left">
                            6th Floor, Kandamkulathy Towers, Mahatma Gandhi Rd, KPCC Junction, Opp
                            <br />
                            Maharaja's Ground, Shenoys, Ernakulam,Kerala,India, 682011.
                            <br />
                            India
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 overflow-hidden">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </div>
                        <div role="group" aria-label="Phone">
                          <p className="text-gray-600">+966-599 274 750</p>
                          
                        </div>
                      </div>

                      <div className="flex items-start gap-4 overflow-hidden">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <svg
                            className="w-5 h-5 text-purple-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div role="group" aria-label="Email">
                          <p className="text-gray-600">info@hamadco.in</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 overflow-hidden">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                          <svg
                            className="w-5 h-5 text-orange-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div role="group" aria-label="Business Hours">
                          <p className="text-gray-600">
                            Monday - Friday: 9:00 AM - 6:00 PM IST
                            <br />
                            Saturday: 9:00 AM - 2:00 PM IST
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 overflow-hidden">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
                      <div className="space-y-3 overflow-hidden">
                        {/* removed: 20+ years of export experience */}
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                          <span className="text-gray-700">50+ countries worldwide</span>
                        </div>
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                          <span className="text-gray-700">Full regulatory compliance support</span>
                        </div>
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                          <span className="text-gray-700">Dedicated 24/7 customer support</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </GSAPAnimatedSection>

        <HomeExtraSections />

        <style jsx>{`
          /* Removed custom button styles since we're now using CSS classes from globals.css */
          :global(body) {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="%23333">H</text></svg>') 12 12, auto;
          }
        `}</style>
      </div>
    </>
  )
}
