export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hamad Co",
    alternateName: "Hamad Company",
    description:
      "Leading pharmaceutical export company specializing in medical supplies, healthcare equipment, and surgical instruments. WHO-GMP certified, FDA approved facilities serving 50+ countries worldwide.",
    url: "https://hamadco.in",
    logo: "https://hamadco.in/images/hamad-co-logo.png",
    image: "https://hamadco.in/images/hamad-co-pharmaceutical-exports-og.jpg",
    telephone: "+91-8086890111",
    email: "info@hamadco.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Medical Export Plaza",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.076,
      longitude: 72.8777,
    },
    foundingDate: "2000",
    numberOfEmployees: "50-100",
    industry: "Pharmaceutical Exports",
    areaServed: ["Asia", "Middle East", "Europe", "Africa", "Global"],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 19.076,
        longitude: 72.8777,
      },
      geoRadius: "20000000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pharmaceutical and Medical Equipment Exports",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Pharmaceutical Products",
            description: "High-quality pharmaceutical products and medicines",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Medical Equipment",
            description: "Healthcare equipment and medical devices",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Surgical Instruments",
            description: "Precision surgical instruments and tools",
          },
        },
      ],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8086890111",
        contactType: "customer service",
        areaServed: "Global",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        email: "exports@hamadco.in",
        contactType: "sales",
        areaServed: "Global",
      },
    ],
    sameAs: ["https://www.linkedin.com/company/hamadco", "https://twitter.com/hamadco_exports"],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hamadco.in/#organization",
    name: "Hamad Co",
    image: "https://hamadco.in/images/hamad-co-pharmaceutical-exports-og.jpg",
    telephone: "+91-8086890111",
    email: "info@hamadco.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Medical Export Plaza",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.076,
      longitude: 72.8777,
    },
    url: "https://hamadco.in",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hamadco.in/#website",
    url: "https://hamadco.in",
    name: "Hamad Co - Pharmaceutical Exports",
    description:
      "Leading pharmaceutical export company specializing in medical supplies, healthcare equipment, and surgical instruments.",
    publisher: {
      "@id": "https://hamadco.in/#organization",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://hamadco.in/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
