"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { AnimatedSection } from "@/components/animated-section"
import { CountrySelect } from "@/components/country-select"
import { PhoneInput } from "@/components/phone-input"
import { COUNTRIES } from "@/components/data/countries"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    productInterest: "",
    message: "",
  })

  const [countryCode, setCountryCode] = useState<string>("IN")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const getNational = (val: string) => {
    const match = COUNTRIES.find((c) => val?.startsWith(`+${c.dialCode}`))
    return match ? val.slice(`+${match.dialCode}`.length).trimStart() : val || ""
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

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-20">
        <div className="absolute inset-0 bg-slate-900" />
        <img
          src="/images/digital-world-map-hologram.jpg"
          alt="Global connectivity background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
          crossOrigin="anonymous"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Get in Touch with Hamadco</h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-300">
            Ready to expand your medical business globally? Contact our export specialists for personalized solutions
            and competitive pricing.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <AnimatedSection>
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="shadow-lg bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900">Send us a Message</CardTitle>
                  <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800 font-medium">
                        Thank you for your inquiry! We've received your message and will get back to you within 24
                        hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-red-800 font-medium">
                        Sorry, there was an error sending your message. Please try again or contact us directly at
                        info@hamadco.in
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
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

                    <div className="grid md:grid-cols-2 gap-4">
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

                    <div className="grid md:grid-cols-2 gap-4">
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
                                const nextVal = national ? `+${selected.dialCode} ${national}` : `+${selected.dialCode}`
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
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
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
                      className="w-full bg-slate-800 text-white hover:bg-slate-900 py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending Message..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="shadow-lg bg-white border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        <p className="text-gray-600">
                          123 Medical Export Plaza
                          <br />
                          Business District, Mumbai 400001
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        <p className="text-gray-600">
                          +91 22 1234 5678
                          <br />
                          +91 98765 43210
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div role="group" aria-label="Email">
                        <p className="text-gray-600">
                          info@hamadco.in
                          <br />
                          exports@hamadco.in
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-[#92301a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  </CardContent>
                </Card>

                <Card className="shadow-lg bg-white border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900">Why Choose Hamadco?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#92301A" }}></div>
                        <span className="text-gray-700">Serving 50+ countries worldwide</span>
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
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Start Your Medical Export Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of healthcare businesses that trust Hamadco for reliable pharmaceutical exports worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-slate-800 text-white hover:bg-slate-900 px-8 py-4 text-lg font-semibold">
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-50 px-8 py-4 text-lg font-semibold bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
