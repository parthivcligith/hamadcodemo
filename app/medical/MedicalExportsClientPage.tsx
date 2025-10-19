"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { useState } from "react"
import IslandNavbar from "@/components/island-navbar"
import {
  BookOpen,
  FileText,
  Globe2,
  Package2,
  ShieldCheck,
  Ship,
  Thermometer,
  Pill,
  Heart,
  Stethoscope,
  Syringe,
  Microscope,
  Activity,
  Zap,
  Star,
  Target,
  Award,
  Users,
  TrendingUp,
  Shield,
  Phone,
  Mail,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import "./pharma-theme.css"
import { PharmaReferenceTile } from "@/components/pharma-reference-tile"

const FloatingShapes = ({ variant = "default" }: { variant?: "default" | "dots" | "lines" | "circles" }) => {
  if (variant === "dots") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mesh-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="#0c6f53" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-dots)" />
          </svg>
        </div>

        <div className="absolute top-10 left-10 w-2 h-2 bg-[#0c6f53]/30 rounded-full animate-pulse opacity-60" />
        <div
          className="absolute top-32 right-20 w-1 h-1 bg-[#0c6f53]/40 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-[#0c6f53]/20 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-[#0c6f53]/35 rounded-full animate-pulse opacity-30"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-10 w-4 h-4 bg-[#0c6f53]/25 rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="absolute top-20 right-1/4 w-2.5 h-2.5 bg-[#0c6f53]/40 rounded-full animate-pulse opacity-35"
          style={{ animationDelay: "5s" }}
        />
        <div className="absolute top-16 left-1/3 opacity-15 animate-pulse" style={{ animationDelay: "6s" }}>
          <div className="w-6 h-2 bg-[#0c6f53]/40 rounded-full" />
          <div className="w-2 h-6 bg-[#0c6f53]/40 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="absolute bottom-32 right-10 opacity-20 animate-pulse" style={{ animationDelay: "7s" }}>
          <Activity className="h-8 w-8 text-[#0c6f53]/50" />
        </div>
      </div>
    )
  }

  if (variant === "lines") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {/* Mesh background */}
        <div className="absolute inset-0 opacity-3">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mesh-lines" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M0 30 L60 30 M30 0 L30 60" stroke="#0c6f53" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-lines)" />
          </svg>
        </div>

        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0c6f53]/40 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#0c6f53]/30 to-transparent" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6f53]/30 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6f53]/25 to-transparent transform rotate-12" />
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0c6f53]/25 to-transparent transform -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-15">
          <div className="w-32 h-px bg-[#0c6f53]/40 animate-pulse" style={{ animationDelay: "8s" }} />
          <div
            className="w-px h-32 bg-[#0c6f53]/40 animate-pulse absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{ animationDelay: "9s" }}
          />
        </div>
      </div>
    )
  }

  if (variant === "circles") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mesh background */}
        <div className="absolute inset-0 opacity-4">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mesh-circles" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="20" fill="none" stroke="#0c6f53" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mesh-circles)" />
          </svg>
        </div>

        <div className="absolute -top-20 -right-20 w-40 h-40 border border-[#0c6f53]/30 rounded-full opacity-30 animate-pulse" />
        <div
          className="absolute -bottom-10 -left-10 w-32 h-32 border border-[#0c6f53]/25 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-[#0c6f53]/20 rounded-full opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
        <div className="absolute top-20 right-20 w-16 h-16 opacity-15" style={{ animationDelay: "6s" }}>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-2 bg-[#0c6f53]/30 rounded-full animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-12 bg-[#0c6f53]/30 rounded-full animate-pulse" />
        </div>
        <div className="absolute top-10 left-20 opacity-20 animate-pulse" style={{ animationDelay: "10s" }}>
          <div className="w-20 h-20 border border-[#0c6f53]/30 rounded-full flex items-center justify-center">
            <Stethoscope className="h-6 w-6 text-[#0c6f53]/50" />
          </div>
        </div>
        <div className="absolute bottom-20 right-32 opacity-15 animate-pulse" style={{ animationDelay: "12s" }}>
          <div className="w-16 h-16 border border-[#0c6f53]/25 rounded-full flex items-center justify-center">
            <Heart className="h-5 w-5 text-[#0c6f53]/40" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mesh background */}
      <div className="absolute inset-0 opacity-3">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mesh-default" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="50" height="50" fill="none" stroke="#0c6f53" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mesh-default)" />
        </svg>
      </div>

      <div className="absolute top-20 left-10 w-8 h-8 bg-[#0c6f53]/20 rounded-lg rotate-45 animate-pulse opacity-40" />
      <div
        className="absolute bottom-32 right-16 w-6 h-6 bg-[#0c6f53]/30 rounded-full animate-pulse opacity-30"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#0c6f53]/25 rounded-sm rotate-12 animate-pulse opacity-20"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-40 right-1/4 w-3 h-8 bg-[#0c6f53]/25 rounded-full animate-pulse opacity-25"
        style={{ animationDelay: "4.5s" }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-6 h-3 bg-[#0c6f53]/22 rounded-full animate-pulse opacity-30"
        style={{ animationDelay: "6s" }}
      />
      <div className="absolute top-32 right-10 opacity-20 animate-pulse" style={{ animationDelay: "7s" }}>
        <Zap className="h-6 w-6 text-[#0c6f53]/40 transform rotate-12" />
      </div>
      <div className="absolute bottom-40 left-16 opacity-25 animate-pulse" style={{ animationDelay: "8s" }}>
        <Star className="h-5 w-5 text-[#0c6f53]/50" />
      </div>
      <div className="absolute top-1/3 right-1/3 opacity-15 animate-pulse" style={{ animationDelay: "9s" }}>
        <Target className="h-7 w-7 text-[#0c6f53]/35" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 opacity-20 animate-pulse" style={{ animationDelay: "10s" }}>
        <Award className="h-6 w-6 text-[#0c6f53]/45" />
      </div>
    </div>
  )
}

const scrollToContact = () => {
  const contactSection = document.getElementById("contact")
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" })
  }
}

const scrollToHero = () => {
  const heroSection = document.getElementById("hero")
  if (heroSection) {
    heroSection.scrollIntoView({ behavior: "smooth" })
  }
}

export default function MedicalExportsClientPage() {
  const productCategories = [
    {
      title: "Antibiotics",
      examples: ["Amoxicillin", "Ciprofloxacin", "Azithromycin"],
      icon: Pill,
      desc: "Broad spectrum and specialised antibiotics from verified Indian manufacturers, complain with WHO-GMP standards and design to effectively treat common infections.",
    },
    {
      title: "Vitamins & Nutraceuticals",
      examples: ["Multivitamins", "Vitamin C", "Iron & Folic Acid"],
      icon: Heart,
      desc: "Essential suppliments to support general health and wellness, sourced from trusted producers with a focus on purity, potency, and bioavailability.",
    },
    {
      title: "Generic Medicines",
      examples: ["Paracetamol", "Metformin", "Losartan"],
      icon: Stethoscope,
      desc: "High-quality generics that match brand-name efficacy, available in various dosage forms to meet diverse therapeutic needs at affordable prices.",
    },
    {
      title: "Medical Devices & Consumables",
      examples: ["Surgical gloves", "Syringes", "BP monitors"],
      icon: Syringe,
      desc: "Single-use and durable medical devices essential for clinical care, procured from certified suppliers ensuring safety and compliance with international standards.",
    },
    {
      title: "Specialty Pharmaceuticals",
      examples: ["ARVs", "Antimalarials", "Oncology drugs"],
      icon: Microscope,
      desc: "Program medicines for critical health conditions, sourced from WHO-GMP and CDSCO-certified manufacturers with robust supply chains to ensure availability.",
    },
    {
      title: "Vaccines & Biologicals",
      examples: ["Hepatitis B Vaccine", "Tetanus Toxoid", "Insulin"],
      icon: ShieldCheck,
      desc: "Temperature-sensitive vaccines and biologics requiring cold chain logistics, sourced from reputable manufacturers with proven efficacy and safety profiles.",
    },
  ]

  const listingIncludes = [
    { label: "Description & Composition", icon: BookOpen },
    { label: "Strength & Dosage Form", icon: Package2 },
    { label: "Shelf Life & Packaging Options", icon: Ship },
    { label: "Export Certifications (COPP, CoA, MSDS, etc.)", icon: FileText },
  ]

  const services = [
    {
      title: "Product Sourcing",
      desc: "From WHO-GMP and CDSCO-certified Indian manufacturers",
      icon: ShieldCheck,
      body: "We map your tender requirements to audited factories, validate batches for availability, and negotiate competitive pricing. Our sourcing team ensures therapeutic equivalence and documentation readiness from day one.",
    },
    {
      title: "Export Documentation",
      desc: "Invoice, Packing List, Certificate of Origin, COPP",
      icon: FileText,
      body: "We prepare and verify all necessary export documents to ensure smooth customs clearance, including Certificates of Medicinal Product (COPP), Certificates of Analysis (CoA), and Material Safety Data Sheets (MSDS).",
    },
    {
      title: "Regulatory Compliance",
      desc: "CDSCO, DGFT and country-specific registration guidance",
      icon: ShieldCheck,
      body: "Labeling, packaging, and documentation are tailored to meet the regulatory requirements of your target African markets. We assist with product registration and liaise with local authorities to facilitate approvals.",
    },
    {
      title: "Shipping & Logistics",
      desc: "End-to-end support for air and sea freight",
      icon: Ship,
      body: "From booking to delivery, we manage the entire logistics chain. Our partnerships with global freight forwarders ensure cost-effective and timely shipments, with real-time tracking and updates provided throughout the transit process.",
    },
    {
      title: "Cold Chain Logistics",
      desc: "Temperature-controlled handling for sensitive products",
      icon: Thermometer,
      body: "We specialize in cold chain logistics for vaccines, biologics, and other temperature-sensitive pharmaceuticals. Our solutions include refrigerated storage, insulated packaging, and temperature monitoring to maintain product integrity from dispatch to delivery.",
    },
    {
      title: "Labeling & Packaging",
      desc: "Country-specific labeling and packaging support",
      icon: Package2,
      body: "We ensure that all products are labeled and packaged in accordance with the regulatory requirements of the destination country. This includes translations, barcoding, and tamper-evident packaging as needed.",
    },
  ]

  const markets = [
    "Nigeria",
    "Ghana",
    "Kenya",
    "Ethiopia",
    "Uganda",
    "Rwanda",
    "South Africa",
    "Tanzania",
    "Other African nations",
  ]

  const articles = [
    "How to Import Medicines from India to Africa",
    "What is a Certificate of Pharmaceutical Product (COPP)?",
    "Understanding Regulatory Requirements in Kenya and Nigeria",
    "How to Ensure Cold Chain Compliance in African Markets",
  ]

  return (
    <div className="min-h-screen bg-background">
      <IslandNavbar />

      {/* Hero - Updated with medical desk background */}
      <div
        className="relative w-full overflow-hidden"
        id="hero"
        style={{
          minHeight: "80svh",
          backgroundImage: "url('/images/hero-medical-office.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        <div
          className="relative h-full w-full flex items-center justify-center px-4 py-8 md:py-16"
          style={{ zIndex: 10 }}
        >
              <div className="w-full max-w-7xl mx-auto mt-10 sm:mt-12 md:mt-8 px-4 sm:px-6">
            <div className="bg-white rounded-xl md:rounded-3xl p-4 md:p-8 lg:p-12 shadow-sm md:shadow-md border border-gray-200">
              <div className="mb-4 md:mb-8">
                <Link
                  href="/"
                  className="inline-flex items-center mb-6 transition-colors duration-300 hover:scale-105 transform"
                  style={{ color: "var(--brand-navy)" }}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" style={{ color: "var(--brand-navy)" }} />
                </Link>
                <Image
                  src="/images/hpharma.png"
                  alt="Hamadco Medical Exports Logo"
                  width={200}
                  height={80}
                  className="mx-auto w-24 h-auto md:w-48 lg:w-60 transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>

              <div className="mb-2 flex justify-center">
                <Badge
                  variant="outline"
                  className="rounded-full border-[#163764]/30 text-[#163764] bg-[#163764]/5 px-3 py-1"
                >
                  Pharmaceutical & Medical Exports
                </Badge>
              </div>

              <h1
                className="jsx-30a7fd2bf9dd3bca text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold mb-3 md:mb-6 animate-fade-up leading-tight px-2"
                style={{ color: "var(--brand-navy)" }}
              >
                India's Trusted Medical Exporters to Africa
              </h1>

              <div className="flex justify-center mb-3 md:mb-6">
                <Image
                  src="/images/medicine.gif"
                  alt="Animated medical illustration"
                  width={50}
                  height={50}
                  className="md:w-20 md:h-20 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Delivering Health. Ensuring Compliance. */}
              <p className="text-center font-semibold text-sm md:text-lg mb-4 md:mb-6" style={{ color: "#0c6f53" }}>
                Delivering Health. Ensuring Compliance.
              </p>

              <div className="mx-auto max-w-3xl mb-8 md:mb-12 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-[#163764] mb-4">{""}</h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-4">
                  We are India's trusted pharmaceutical and medical export specialists, connecting African healthcare
                  providers with high-quality medicines, medical devices, and healthcare solutions. Our expertise spans
                  product sourcing from WHO-GMP certified manufacturers, complete export documentation, regulatory
                  compliance, and reliable cold-chain logistics to ensure your medical supplies arrive safely and on
                  time.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">{""}</p>
              </div>

              <div className="animate-fade-up animation-delay-600">
                <button
                  onClick={() => window.open("https://wa.me/918086890111", "_blank")}
                  className="inline-flex items-center gap-2 bg-[#163764] hover:bg-[#163764]/90 text-white font-medium px-6 py-3 md:px-8 md:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base min-h-[44px] min-w-[160px]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.173-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  Request Catalog
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[var(--pharma-primary)] to-[var(--pharma-secondary)] py-4">
        {/* Accessible, continuous marquee: two identical tracks that animate left */}
        <div className="marquee overflow-hidden">
          <div className="marquee-track inline-flex items-center whitespace-nowrap">
            <span className="text-white mx-8 flex items-center gap-2">
              <Pill className="h-4 w-4 animate-pulse" />
              WHO-GMP Certified Products
            </span>
            <span className="text-white mx-8 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 animate-pulse" />
              CDSCO Approved Manufacturers
            </span>
            <span className="text-white mx-8 flex items-center gap-2">
              <Ship className="h-4 w-4 animate-pulse" />
              Global Shipping Network
            </span>
            <span className="text-white mx-8 flex items-center gap-2">
              <Heart className="h-4 w-4 animate-pulse" />
              Quality Healthcare Solutions
            </span>
            <span className="text-white mx-8 flex items-center gap-2">
              <Globe2 className="h-4 w-4 animate-pulse" />
              Serving 15+ African Countries
            </span>
            <span className="text-white mx-8 flex items-center gap-2">
              <Users className="h-4 w-4 animate-pulse" />
              Trusted by 500+ Clients
            </span>
            <span className="text-white mx-8 flex items-center gap-2">
              <TrendingUp className="h-4 w-4 animate-pulse" />
              Growing Healthcare Network
            </span>
            <span className="text-white mx-8 flex items-center gap-2">
              <Shield className="h-4 w-4 animate-pulse" />
              100% Compliance Guaranteed
            </span>
          </div>

          
        </div>
      </div>

      

      {/* Mission & About */}
      <section id="mission" className="py-12 md:py-16 relative overflow-hidden pharma-section">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group pharma-border-left bg-[var(--pharma-card-bg)] border-[var(--pharma-border)]">
              <CardHeader className="pb-2 md:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl md:text-2xl font-serif pharma-heading group-hover:opacity-80 transition-opacity duration-300">
                    Our Mission
                  </CardTitle>
                  <Image
                    src="/images/doctor-healthcare.gif"
                    alt="Animated hands protecting medical cross symbol"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20 ml-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardDescription className="text-left leading-relaxed group-hover:text-[var(--pharma-text-light)] transition-colors duration-300 text-[var(--pharma-text-light)]">
                  Our mission is to serve as a reliable link between India's top medical and pharmaceutical
                  manufacturers and the expanding healthcare demands of African nations. We provide high-quality
                  pharmaceutical products with integrity, efficiency, and complete regulatory compliance.
                </CardDescription>
                <div className="mt-4"></div>
              </CardHeader>
            </Card>
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group pharma-border-left-accent bg-[var(--pharma-card-bg)] border-[var(--pharma-border)]">
              <CardHeader className="pb-2 md:pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl md:text-2xl font-serif pharma-accent group-hover:opacity-80 transition-opacity duration-300">
                    About Us
                  </CardTitle>
                  <Image
                    src="/images/medicine-caduceus.gif"
                    alt="Animated medicine bottle illustration"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20 ml-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardDescription className="text-left leading-relaxed group-hover:text-[var(--pharma-text-light)] transition-colors duration-300 text-[var(--pharma-text-light)]">
                  HAMAD CO is a merchant export company supplying Indian medical and pharmaceutical products across
                  Africa. Built on reliability and compliance, we partner with certified manufacturers to deliver
                  quality, tailored solutions that meet local needs. Our focus on transparency and customer satisfaction
                  drives us to enhance healthcare access and outcomes.
                </CardDescription>
                <div className="mt-4"></div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-12 md:py-16 relative overflow-hidden pharma-section">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--pharma-text)]">
              Medical Export Products
            </h2>
            <p className="mt-4 text-[var(--pharma-text-light)] max-w-2xl mx-auto leading-relaxed text-center">
              All medical products meet international healthcare standards and are sourced from licensed Indian
              manufacturers with required medical certifications and regulatory approvals.
            </p>
            <div className="mt-6 flex justify-center">
              <Image
                src="/images/Medical Shield.gif"
                alt="Animated tablet and medicine illustration"
                width={80}
                height={80}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
            <div className="mx-auto mt-3 h-0.5 w-24 bg-gradient-to-r from-[#163764] to-[#0c6f53]" />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {productCategories.map((cat, index) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.title}
                  className="rounded-2xl p-[1px] bg-gradient-to-r from-[#16376426] to-[#0c6f5326]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-[var(--pharma-card-bg)] h-full flex flex-col border-[var(--pharma-border)]">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-[#163764]/10 grid place-items-center group-hover:bg-[#163764]/20 transition-colors duration-300">
                          <Icon className="h-5 w-5 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <CardTitle className="text-lg font-serif group-hover:text-[#163764] transition-colors duration-300 text-[var(--pharma-text)]">
                          {cat.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    {/* Product tiles: enforce equal heights and keep description (no bullets) */}
                    <CardContent className="text-sm text-[var(--pharma-text-light)] grow min-h-40 md:min-h-48">
                      <p className="leading-relaxed text-left">{cat.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* Each Listing Includes */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {listingIncludes.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-xl border border-[var(--pharma-border)] bg-[var(--pharma-card-bg)] backdrop-blur-sm p-5 hover:bg-[var(--pharma-card-bg)] transition-all duration-300 transform hover:-translate-y-1 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-5 w-5 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[var(--pharma-text)] group-hover:text-[#163764] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Export Services */}
      <section id="services" className="py-12 md:py-16 relative overflow-hidden pharma-section">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--pharma-text)]">
              Medical Export Services
            </h2>
            <center>
              <Image
                src="/images/Animated Africa continent.gif"
                alt="Animated tablet and medicine illustration"
                width={80}
                height={80}
                className="md:w-70 md:h-70 ml-4 group-hover:scale-110 transition-transform duration-300"
              />
            </center>

            <p className="mt-4 text-[var(--pharma-text-light)] max-w-2xl mx-auto leading-relaxed text-center">
              We handle the entire medical export workflow, from sourcing to delivery, while maintaining full compliance
              with both Indian and African regulatory requirements for healthcare products.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-24 bg-gradient-to-r from-[#163764] to-[#0c6f53]" />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {services.map((s, index) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="rounded-2xl p-[1px] bg-gradient-to-r from-[#16376426] to-[#0c6f5326]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-[var(--pharma-card-bg)] h-full flex flex-col border-[var(--pharma-border)]">
                    <CardHeader className="flex-row items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-[#163764]/10 grid place-items-center group-hover:bg-[#163764]/20 transition-colors duration-300">
                        <Icon className="h-5 w-5 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-0">
                        <CardTitle className="text-lg font-serif group-hover:text-[#163764] transition-colors duration-300 text-[var(--pharma-text)]">
                          {s.title}
                        </CardTitle>
                        <CardDescription className="leading-relaxed group-hover:text-[var(--pharma-text-light)] transition-colors duration-300 text-[var(--pharma-text-light)]">
                          {s.desc}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 grow min-h-24">
                      {/* Changed from s.points to s.body */}
                      {s.body && (
                        <p className="text-sm text-[var(--pharma-text-light)] text-left leading-relaxed">{s.body}</p>
                      )}
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Markets We Serve */}
      <section id="markets" className="py-12 relative overflow-hidden pharma-section">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--pharma-text)] text-center">
            Healthcare Markets We Serve
          </h2>
          <div className="mt-6 overflow-hidden">
            <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
              {[...markets, ...markets].map((m, index) => (
                <span
                  key={`${m}-${index}`}
                  className="inline-flex items-center rounded-full border border-[var(--pharma-border)] bg-[var(--pharma-card-bg)] px-4 py-1.5 text-[var(--pharma-text)] hover:bg-[#163764]/10 hover:border-[#163764]/30 hover:text-[#163764] transition-all duration-300"
                  style={{ animationDelay: `${index * 40}ms` }}
                >
                  <Globe2 className="mr-2 h-3.5 w-3.5" />
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Health Impact (Vaccinations & Medicines) */}
      <section id="health-impact" className="py-12 pharma-section relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--pharma-text)] text-center">
            Health Impact Across Africa
          </h2>
          <p className="mt-4 text-[var(--pharma-text-light)] max-w-3xl mx-auto text-center leading-relaxed">
            We support immunization programs and reliable access to essential medicines. We work with hospitals,
            clinics, and distributors to improve patient outcomes.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="overflow-hidden rounded-2xl shadow-sm group">
              <img
                src="/images/african-children-vaccination-1.jpg"
                alt="African children receiving vaccinations in a clinic"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm group">
              <img
                src="/images/african-children-vaccination-2.jpg"
                alt="Healthcare worker vaccinating an African child"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm group">
              <img
                src="/images/african-doctor-with-patient.jpg"
                alt="African doctor consulting a patient"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-sm group">
              <img
                src="/images/african-doctors-team.jpg"
                alt="Team of African doctors providing healthcare"
                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* References - CHANGED to use independent PharmaReferenceTile component */}
      <section id="references" className="py-12 pharma-section relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-[var(--pharma-text)]">
              Our Medical Export References
            </h2>
            <p className="mt-4 text-[var(--pharma-text-light)] max-w-2xl mx-auto text-center leading-relaxed">
              Trusted partnerships with healthcare organizations and medical distributors across Africa and the Middle
              East.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                company: "Lagos Medical Supplies Ltd.",
                location: "Lagos, Nigeria",
                products: "Pharmaceutical imports",
                partnership: "5+ years",
              },
              {
                company: "Kenya Healthcare Distributors",
                location: "Nairobi, Kenya",
                products: "Medical equipment & supplies",
                partnership: "3+ years",
              },
              {
                company: "Gulf Medical Trading Co.",
                location: "Dubai, UAE",
                products: "Pharmaceutical products",
                partnership: "7+ years",
              },
              {
                company: "West Africa Pharma Solutions",
                location: "Accra, Ghana",
                products: "Generic medicines",
                partnership: "4+ years",
              },
              {
                company: "East African Medical Corp.",
                location: "Kampala, Uganda",
                products: "Medical consumables",
                partnership: "2+ years",
              },
              {
                company: "Sahara Healthcare Network",
                location: "Khartoum, Sudan",
                products: "Pharmaceutical exports",
                partnership: "6+ years",
              },
            ].map((reference, index) => (
              <PharmaReferenceTile key={index} reference={reference} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Photo Gallery Section ===== */}
      <section className="py-12 pharma-section" id="gallery">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/medicalexport.jpg"
                alt="Medical export operations"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/bf.jpg"
                alt="Pharmaceutical supplies"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/gff.jpg"
                alt="Healthcare equipment"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="py-12 md:py-16 relative overflow-hidden pharma-section">
        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-[var(--pharma-text)]">
              Our Medical Export Process
            </h2>
            <p className="mt-4 text-[var(--pharma-text-light)] max-w-2xl mx-auto leading-relaxed text-center">
              A proven, compliant workflow that delivers quality pharmaceuticals and medical products on time, every
              time.
            </p>
            <div className="mx-auto mt-3 h-0.5 w-24 bg-gradient-to-r from-[#163764] to-[#0c6f53]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Discovery",
                desc: "Requirements, specs, and timelines aligned with African regulatory standards.",
                icon: Globe2,
                color: "#163764",
              },
              {
                title: "Sourcing",
                desc: "Vetted WHO-GMP suppliers and materials with full traceability and Certificates of Analysis.",
                icon: ShieldCheck,
                color: "#0c6f53",
              },
              {
                title: "Compliance",
                desc: "ISO-aligned QA, export documentation, and regulatory controls handled end-to-end.",
                icon: FileText,
                color: "#163764",
              },
              {
                title: "Logistics",
                desc: "Multi-modal transport, customs clearance, cold-chain handling, and last-mile delivery.",
                icon: Ship,
                color: "#0c6f53",
              },
            ].map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={step.title}
                  className="rounded-2xl p-[1px] bg-gradient-to-r from-[#16376426] to-[#0c6f5326]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-[var(--pharma-card-bg)] h-full flex flex-col border-[var(--pharma-border)]">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-[#163764]/10 grid place-items-center group-hover:bg-[#163764]/20 transition-colors duration-300">
                          <Icon className="h-5 w-5 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <CardTitle className="text-lg font-serif group-hover:text-[#163764] transition-colors duration-300 text-[var(--pharma-text)]">
                          {step.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm text-[var(--pharma-text-light)] grow">
                      <p className="leading-relaxed">{step.desc}</p>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-[var(--pharma-card-bg)] border-[var(--pharma-border)]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Package2 className="h-5 w-5 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg font-serif group-hover:text-[#163764] transition-colors duration-300 text-[var(--pharma-text)]">
                    What We Handle
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-[var(--pharma-text-light)]">
                  <li className="hover:text-[#163764] transition-colors duration-200">Supplier qualification</li>
                  <li className="hover:text-[#163764] transition-colors duration-200">CoA & traceability</li>
                  <li className="hover:text-[#163764] transition-colors duration-200">Export documentation</li>
                  <li className="hover:text-[#163764] transition-colors duration-200">Regulatory compliance</li>
                  <li className="hover:text-[#163764] transition-colors duration-200">Cold-chain logistics</li>
                  <li className="hover:text-[#163764] transition-colors duration-200">Post-shipment support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 group bg-[var(--pharma-card-bg)] border-[var(--pharma-border)]">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="h-5 w-5 text-[#0c6f53] group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-lg font-serif group-hover:text-[#0c6f53] transition-colors duration-300 text-[var(--pharma-text)]">
                    Quality Assurance
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-[var(--pharma-text-light)]">
                  <li className="hover:text-[#0c6f53] transition-colors duration-200">Material conformity by batch</li>
                  <li className="hover:text-[#0c6f53] transition-colors duration-200">
                    Independent lab testing available
                  </li>
                  <li className="hover:text-[#0c6f53] transition-colors duration-200">
                    Full insurance and shipment visibility
                  </li>
                  <li className="hover:text-[#0c6f53] transition-colors duration-200">Escalation paths and SLAs</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-[#0f1b2e] text-white relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-serif font-light text-white">Contact Our Medical Export Team</h2>
          <p className="mt-3 text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Ready to place a pharmaceutical export order or need more information about our pharmaceutical and
            healthcare products? Our expert team is here to help with all your pharmaceutical export needs.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-700 bg-[#1a2a3f] p-5 transition-all hover:border-gray-600 hover:bg-[#1f3349]">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-gray-700/50">
                <Phone className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="mt-1 font-medium tracking-wide text-white">+966 599 274 750</p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-[#1a2a3f] p-5 transition-all hover:border-gray-600 hover:bg-[#1f3349]">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-gray-700/50">
                <Mail className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="mt-1 font-medium tracking-wide text-white">info@hamadco.in</p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-[#1a2a3f] p-5 transition-all hover:border-gray-600 hover:bg-[#1f3349]">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-gray-700/50">
                <Globe2 className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-sm text-gray-400">Website</p>
              <p className="mt-1 font-medium tracking-wide text-white">www.hamadco.in</p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-[#1a2a3f] p-5 transition-all hover:border-gray-600 hover:bg-[#1f3349]">
              <div className="mx-auto mb-3 grid h-10 w-10 place-items-center rounded-full bg-gray-700/50">
                <Globe2 className="h-5 w-5 text-gray-300" />
              </div>
              <p className="text-sm text-gray-400">Location</p>
              <p className="mt-1 font-medium tracking-wide text-white">Kerala, India</p>
            </div>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#1a4d6d] to-[#0c6f53] border border-gray-600/30 p-8">
            <h3 className="text-2xl font-serif font-light text-white mb-4">Get Instant Support</h3>
            <p className="text-gray-200 mb-6 max-w-md mx-auto">
              Connect with our medical export specialists directly on WhatsApp for immediate assistance with your
              pharmaceutical needs.
            </p>
            <a
              href="https://wa.me/918086890111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25d366] hover:bg-[#20ba5a] text-white font-medium px-6 py-3 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.173-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
              </svg>
              Chat on WhatsApp
            </a>
          
            {/* Contact form: posts to /api/contact and opens WhatsApp and mailto */}
            <form
              id="contactForm"
              className="mt-8 max-w-xl mx-auto text-left"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input name="name" placeholder="Full name" className="w-full rounded-md px-3 py-2 text-sm" id="contact-name" />
                <input name="email" placeholder="Email" className="w-full rounded-md px-3 py-2 text-sm" id="contact-email" />
                <input name="company" placeholder="Company (optional)" className="w-full rounded-md px-3 py-2 text-sm sm:col-span-2" id="contact-company" />
                <input name="phone" placeholder="Phone (optional)" className="w-full rounded-md px-3 py-2 text-sm" id="contact-phone" />
                <input name="country" placeholder="Country" className="w-full rounded-md px-3 py-2 text-sm" id="contact-country" />
                <input name="productInterest" placeholder="Product interest (optional)" className="w-full rounded-md px-3 py-2 text-sm" id="contact-product" />
              </div>
              <textarea name="message" placeholder="Your message" rows={4} className="w-full mt-3 rounded-md px-3 py-2 text-sm" id="contact-message" />

              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  id="contact-submit"
                  onClick={async () => {
                    const name = (document.getElementById("contact-name") as HTMLInputElement).value
                    const email = (document.getElementById("contact-email") as HTMLInputElement).value
                    const company = (document.getElementById("contact-company") as HTMLInputElement).value
                    const phone = (document.getElementById("contact-phone") as HTMLInputElement).value
                    const country = (document.getElementById("contact-country") as HTMLInputElement).value
                    const productInterest = (document.getElementById("contact-product") as HTMLInputElement).value
                    const message = (document.getElementById("contact-message") as HTMLTextAreaElement).value

                    if (!name || !email || !country || !message) {
                      alert("Please fill name, email, country and message.")
                      return
                    }

                    const payload = { name, email, company, phone, country, productInterest, message }

                    try {
                      const res = await fetch("/api/contact", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload),
                      })
                      const json = await res.json()

                      // Open WhatsApp chat if API returned a URL
                      if (json?.whatsappUrl) {
                        window.open(json.whatsappUrl, "_blank")
                      }

                      // Also open user's mail client with a prefilled mail to info@hamadco.in
                      const mailSubject = encodeURIComponent(`Hamadco Contact: ${name}`)
                      const mailBody = encodeURIComponent(
                        `Name: ${name}\nEmail: ${email}\nCompany: ${company || ""}\nPhone: ${phone || ""}\nCountry: ${country}\nProduct Interest: ${productInterest || ""}\n\nMessage:\n${message}`,
                      )
                      const mailto = `mailto:info@hamadco.in?subject=${mailSubject}&body=${mailBody}`
                      window.open(mailto)

                      alert("Thanks — your message was sent. We'll follow up soon.")
                    } catch (err) {
                      console.error(err)
                      alert("Failed to send contact message. Please try opening WhatsApp or email manually.")
                    }
                  }}
                  className="bg-white text-[#163764] font-medium px-4 py-2 rounded-md"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  onClick={() => {
                    // quick open WhatsApp chat link fallback
                    window.open("https://wa.me/918086890111", "_blank")
                  }}
                  className="bg-[#163764] text-white px-4 py-2 rounded-md"
                >
                  Chat on WhatsApp
                </button>
              </div>
            </form>
            
          </div>

          <div className="mt-10" />
        </div>
      </section>

      {/* Added custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-fade-up {
          animation: fade-in-up 0.8s ease-out forwards;
          will-change: transform, opacity;
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }

        /* New marquee styles for continuous scrolling */
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-track {
          display: inline-flex;
          gap: 0;
          white-space: nowrap;
          will-change: transform;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        /* Respect prefers-reduced-motion */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
          opacity: 0;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          opacity: 0;
        }

        :global(body) {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><text x="50%" y="50%" textAnchor="middle" dy=".3em" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="#333">H</text></svg>') 12 12, auto;
        }

        .section-alt-beige {
          background-color: #f5f5dc;
        }

        .tile-bg-soft {
          background-color: rgba(255, 255, 255, 0.6);
        }
      `}</style>
    </div>
  )
}
