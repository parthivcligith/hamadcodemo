"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { useParallax } from "@/hooks/use-scroll-animation"
import {
  ShieldCheckIcon,
  GlobeIcon,
  AwardIcon,
  UsersIcon,
  TrendingUpIcon,
  CheckCircle2Icon,
} from "@/components/simple-icons"

export function CertificationsSection() {
  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems", icon: ShieldCheckIcon },
    { name: "ISO 13485", description: "Medical Devices Quality", icon: AwardIcon },
    { name: "CE Marking", description: "European Conformity", icon: CheckCircle2Icon },
    { name: "FDA Registered", description: "US Food & Drug Administration", icon: ShieldCheckIcon },
    { name: "GMP Certified", description: "Good Manufacturing Practice", icon: AwardIcon },
    { name: "REACH Compliant", description: "EU Chemical Regulation", icon: CheckCircle2Icon },
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 md:mb-6 md:text-5xl">Certified Excellence</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-primary">
            Our comprehensive certifications ensure compliance with international standards across all export markets.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 items-stretch gap-4 md:gap-8">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={index * 100} direction="up">
              <Card className="h-full border-0 bg-white/70 backdrop-blur-sm shadow-lg md:hover:shadow-xl transition-all duration-300 md:hover:scale-105">
                <CardContent className="h-full flex flex-col items-center justify-center p-4 md:p-6 text-center min-h-32 md:min-h-40">
                  <cert.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-[#92301a]" />
                  <h3 className="text-sm md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">{cert.name}</h3>
                  <p className="text-xs md:text-sm text-primary">{cert.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export function GlobalReachSection() {
  const { ref, offset } = useParallax(0.3)

  const stats = [
    { number: "50+", label: "Countries Served", icon: GlobeIcon },
    { number: "500+", label: "Active Clients", icon: UsersIcon },
    { number: "99.8%", label: "On-Time Delivery", icon: TrendingUpIcon },
    { number: "24/7", label: "Dedicated Support", icon: CheckCircle2Icon },
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold mb-4 md:mb-6 text-primary md:text-5xl">Global Impact</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connecting businesses worldwide with reliable export solutions and unmatched service quality.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 150} direction="up">
              <div className="text-center group border border-primary rounded-4xl bg-card">
                <stat.icon className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-[#92301a] transition-colors" />
                <div className="text-2xl md:text-4xl font-bold mb-1 md:mb-2 text-gray-900">{stat.number}</div>
                <div className="text-sm md:text-base text-primary">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Hamadco's expertise in medical device exports has been invaluable to our European expansion.",
      author: "Dr. Sarah Chen",
      company: "MedTech Solutions",
      location: "Germany",
    },
    {
      quote: "Their compliance knowledge and attention to detail saved us months of regulatory delays.",
      author: "James Rodriguez",
      company: "Global Plastics Corp",
      location: "USA",
    },
    {
      quote: "Reliable, professional, and always delivers on time. Our go-to partner for Asian markets.",
      author: "Yuki Tanaka",
      company: "Precision Electronics",
      location: "Japan",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 md:mb-6">Trusted by Industry Leaders</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See what our clients say about their export success with Hamadco.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={index} delay={index * 200} direction="up">
              <Card className="border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 md:p-8">
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.author}</div>
                    <div className="text-xs md:text-sm text-gray-600">{testimonial.company}</div>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {testimonial.location}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
