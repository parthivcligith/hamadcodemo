export const metadata = {
  title: "Terms of Service | Hamadco",
  description: "Terms governing the use of our website and services.",
}

export default function TermsPage() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <h1 className="text-3xl font-semibold tracking-tight text-pretty">Terms of Service</h1>
        <p className="mt-4 text-sm leading-relaxed">
          These Terms of Service (“Terms”) govern your access to and use of our website and services. By accessing or
          using our services, you agree to these Terms.
        </p>

        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-xl font-semibold">Use of Services</h2>
            <p className="mt-3 text-sm leading-relaxed">
              You agree to use the website and services in compliance with applicable laws, including pharmaceutical,
              export, and import regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Orders and Contracts</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Orders are subject to acceptance, availability, and regulatory clearance. Any timelines are estimates and
              depend on documentation, approvals, and logistics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Compliance & Documentation</h2>
            <p className="mt-3 text-sm leading-relaxed">
              Buyer is responsible for import permits and country-specific regulations. We provide standard export
              documents and quality certificates as mutually agreed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Limitations of Liability</h2>
            <p className="mt-3 text-sm leading-relaxed">
              To the maximum extent permitted by law, we are not liable for indirect or consequential damages. Our total
              liability shall not exceed the value of the affected order.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Changes to Terms</h2>
            <p className="mt-3 text-sm leading-relaxed">
              We may update these Terms from time to time. Continued use of the website after changes constitutes
              acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed">For questions about these Terms, contact: info@hamadco.in</p>
          </section>

          <p className="pt-2 text-xs text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
        </div>
      </section>
    </main>
  )
}
