import type { Metadata } from "next"
import MedicalExportsClientPage from "./MedicalExportsClientPage"

export const metadata: Metadata = {
  title: "Pharmaceutical Exports | Global Trade Solutions - Hamadco",
  description:
    "We provide high-quality pharmaceutical exports, ensuring compliance, timely delivery, and trusted global partnerships. Discover our expertise in pharmaceutical and medical supply exports.",
  keywords: [
    "pharmaceutical exports",
    "pharmaceutical exports",
    "healthcare exports",
    "medical supplies export",
    "international trade",
    "export company",
    "medical products export",
    "pharmaceutical products",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Pharmaceutical Exports | Global Trade Solutions - Hamadco",
    description:
      "We provide high-quality pharmaceutical exports, ensuring compliance, timely delivery, and trusted global partnerships. Discover our expertise in pharmaceutical and medical supply exports.",
    type: "website",
  },
}

export default function MedicalExportsPage() {
  return <MedicalExportsClientPage />
}
