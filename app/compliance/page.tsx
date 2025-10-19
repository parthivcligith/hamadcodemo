export const metadata = {
  title: "Compliance & Quality | Hamadco",
  description: "Overview of quality, regulatory compliance, and distribution practices for pharmaceutical exports.",
}

export default function CompliancePage() {
  return (
    <main className="w-full">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:py-28">
        <h1 className="text-3xl font-semibold tracking-tight text-pretty">Compliance & Quality</h1>
        <p className="mt-4 text-sm leading-relaxed">
          We operate with a quality-first approach to ensure product integrity, regulatory compliance, and safe
          distribution across markets.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <section>
            <h2 className="text-xl font-semibold">Quality Management</h2>
            <ul className="mt-3 list-disc pl-6 text-sm leading-relaxed">
              <li>Good Distribution Practices (GDP) aligned storage and dispatch.</li>
              <li>Supplier and manufacturer qualification with documentation audits.</li>
              <li>Batch traceability, CoAs, and pack integrity checks.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Regulatory & Documentation</h2>
            <ul className="mt-3 list-disc pl-6 text-sm leading-relaxed">
              <li>Export invoices, packing lists, and shipping documents.</li>
              <li>WHO GMP/CoPP copies where available and required.</li>
              <li>Support for country-specific import permits and dossiers.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Cold Chain & Handling</h2>
            <ul className="mt-3 list-disc pl-6 text-sm leading-relaxed">
              <li>Temperature-controlled logistics for sensitive SKUs.</li>
              <li>Data loggers and condition monitoring when specified.</li>
              <li>Validated packaging and route risk mitigation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Pharmacovigilance</h2>
            <ul className="mt-3 list-disc pl-6 text-sm leading-relaxed">
              <li>Adverse event reporting support with partners.</li>
              <li>Recall readiness and batch withdrawal processes.</li>
              <li>Counterfeit prevention and product authenticity verification.</li>
            </ul>
          </section>
        </div>

        <p className="mt-10 text-sm leading-relaxed">
          For compliance queries or documentation requests, please contact us at info@hamadco.in.
        </p>
        <p className="pt-2 text-xs text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
      </section>
    </main>
  )
}
