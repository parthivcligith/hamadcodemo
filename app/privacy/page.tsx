export const metadata = {
  title: "Privacy Policy | Hamadco",
  description: "Privacy Policy describing the data we collect, how we use it, and your rights.",
}

export default function PrivacyPage() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28"> {/* increased top padding */}
        <h1 className="text-3xl font-semibold tracking-tight text-pretty">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-relaxed">
          This Privacy Policy explains how Hamadco (“we”, “our”, “us”) collects, uses, and protects personal
          information. By using our website and services, you agree to this policy.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">Information We Collect</h2>
            <ul className="mt-3 list-disc pl-6 text-sm leading-relaxed">
              <li>Contact details such as name, email address, and phone number.</li>
              <li>Business information for order processing and compliance documentation.</li>
              <li>Website usage data (analytics, device, browser, and pages visited).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">How We Use Your Information</h2>
            <ul className="mt-3 list-disc pl-6 text-sm leading-relaxed">
              <li>To process inquiries, orders, and logistics arrangements.</li>
              <li>To comply with regulatory obligations and quality standards.</li>
              <li>To improve our website, services, and customer experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Cookies and Analytics</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We may use cookies and analytics tools to understand activity on our site. You can control cookies through
              your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Data Retention and Security</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We retain personal information only as long as necessary for the purposes described and implement
              reasonable administrative, technical, and physical controls to protect it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Your Rights</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Depending on your location, you may have rights to access, correct, delete, or restrict the processing of
              your personal data. Contact us to exercise these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed">
              For privacy questions, contact: info@hamadco.in or +91 8086890111.
            </p>
          </section>

          <p className="pt-2 text-xs text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>
    </main>
  )
}
