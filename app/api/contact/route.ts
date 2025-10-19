import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, country, productInterest, message } = body

    // Validate required fields
    if (!name || !email || !country || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const whatsappMessage = `
🔔 *New Contact Form Submission - Hamadco*

👤 *Contact Details:*
• Name: ${name}
• Email: ${email}
• Company: ${company || "Not provided"}
• Phone: ${phone || "Not provided"}
• Country: ${country}
• Product Interest: ${productInterest || "Not specified"}

💬 *Message:*
${message}

---
📧 Submitted via Hamadco website contact form
    `.trim()

    const whatsappNumber = "918086890111" // WhatsApp number with country code
    const encodedMessage = encodeURIComponent(whatsappMessage)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

    console.log("WhatsApp URL generated:", whatsappUrl)
    console.log("Message content:", whatsappMessage)

    return NextResponse.json(
      {
        message: "Contact form processed successfully",
        whatsappUrl: whatsappUrl,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Failed to process contact form" }, { status: 500 })
  }
}
