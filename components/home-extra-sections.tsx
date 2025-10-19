import {
  GlobeIcon,
  ShieldCheckIcon,
  ShipIcon,
  CheckCircle2Icon,
  FactoryIcon,
  WarehouseIcon,
} from "@/components/simple-icons"
import Link from "next/link"

export function HomeExtraSections() {
  return (
    <section aria-label="Additional company information" className="bg-white">
      {/* Export Process */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 animate-fade-up md:text-5xl">Our Export Process</h2>
          <p className="mt-3 max-w-2xl mx-auto animate-fade-up text-primary" style={{ animationDelay: "0.1s" }}>
            A proven, compliant workflow that delivers quality on time every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div
            className="rounded-2xl border beige-card p-6 animate-fade-up hover:shadow-lg hover:scale-105 transition-all duration-300 group border-primary"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <GlobeIcon className="h-5 w-5 text-gray-700 group-hover:text-[#92301a] transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#92301a] rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#92301a] transition-colors duration-300">
                Discovery
              </h3>
            </div>
            <p className="mt-2 text-sm group-hover:text-gray-700 transition-colors duration-300 text-primary text-center">
              Requirements, specs, and timelines aligned with regional regulations.
            </p>
            <div className="mt-4 h-1 rounded-full overflow-hidden text-background bg-background border-primary border">
              <div className="h-full bg-[#92301a] rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
            </div>
          </div>

          <div
            className="rounded-2xl border beige-card p-6 animate-fade-up hover:shadow-lg hover:scale-105 transition-all duration-300 group border-primary"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <FactoryIcon className="h-5 w-5 text-gray-700 group-hover:text-green-600 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                Sourcing
              </h3>
            </div>
            <p className="mt-2 text-sm group-hover:text-gray-700 transition-colors duration-300 text-primary text-center">
              Vetted suppliers and materials with full traceability and COAs.
            </p>
            <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden border-primary border">
              <div
                className="h-full bg-green-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"
                style={{ transitionDelay: "0.2s" }}
              ></div>
            </div>
          </div>

          <div
            className="rounded-2xl border beige-card p-6 animate-fade-up hover:shadow-lg hover:scale-105 transition-all duration-300 group border-primary"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShieldCheckIcon className="h-5 w-5 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                Compliance
              </h3>
            </div>
            <p className="mt-2 text-sm group-hover:text-gray-700 transition-colors duration-300 text-primary text-center">
              ISO‑aligned QA, documentation, and export controls handled end‑to‑end.
            </p>
            <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden border-primary border">
              <div
                className="h-full bg-purple-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"
                style={{ transitionDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          <div
            className="rounded-2xl border beige-card p-6 animate-fade-up hover:shadow-lg hover:scale-105 transition-all duration-300 group border-primary"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <ShipIcon className="h-5 w-5 text-gray-700 group-hover:text-blue-600 transition-colors duration-300" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Logistics
              </h3>
            </div>
            <p className="mt-2 text-sm group-hover:text-gray-700 transition-colors duration-300 text-primary text-center">
              Multi‑modal transport, customs, insurance, and last‑mile delivery.
            </p>
            <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden border-primary border">
              <div
                className="h-full bg-blue-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"
                style={{ transitionDelay: "0.6s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            className="rounded-2xl border beige-card p-8 text-center animate-fade-up hover:shadow-lg transition-all duration-300 group border-primary bg-background"
            style={{ animationDelay: "1.0s" }}
          >
            <p className="text-4xl font-semibold text-gray-900 group-hover:text-[#92301a] transition-colors duration-300">
              99.6%
            </p>
            <p className="mt-2 text-gray-600">On‑time delivery</p>
            <div className="mt-4 w-full bg-gray-100 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-[#92301a] rounded-full animate-pulse" style={{ width: "99.6%" }}></div>
            </div>
          </div>
          <div
            className="rounded-2xl border beige-card p-8 text-center animate-fade-up hover:shadow-lg transition-all duration-300 group border-primary"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="text-4xl font-semibold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
              40+
            </p>
            <p className="mt-2 text-gray-600">Countries served</p>
            <div className="mt-4 flex justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>
          </div>
          <div
            className="rounded-2xl border beige-card p-8 text-center animate-fade-up hover:shadow-lg transition-all duration-300 group border-primary"
            style={{ animationDelay: "1.4s" }}
          >
            <p className="text-4xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
              200+
            </p>
            <p className="mt-2 text-gray-600">Partner manufacturers</p>
            <div className="mt-4 grid grid-cols-4 gap-1 max-w-16 mx-auto">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-purple-500 rounded-sm animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="rounded-2xl border beige-card p-8 animate-fade-up hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group border-primary"
            style={{ animationDelay: "1.6s" }}
          >
            <div className="flex items-center gap-3">
              <WarehouseIcon className="h-5 w-5 text-gray-700 group-hover:text-[#92301a] transition-colors duration-300" />
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#92301a] transition-colors duration-300">
                What we handle
              </h3>
            </div>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600">
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">Supplier qualification</li>
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">COA & traceability</li>
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">Customs documentation</li>
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">Dangerous goods handling</li>
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">Cold‑chain logistics</li>
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">Post‑shipment support</li>
            </ul>
            <Link
              href="/#contact"
              className="mt-4 inline-block text-sm underline underline-offset-4 hover:text-[#92301a] transition-colors duration-300 text-foreground"
            >
              Talk to an expert →
            </Link>
          </div>

          <div
            className="rounded-2xl border beige-card p-8 animate-fade-up hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group border-primary"
            style={{ animationDelay: "1.8s" }}
          >
            <div className="flex items-center gap-3">
              <CheckCircle2Icon className="h-5 w-5 text-gray-700 group-hover:text-green-600 transition-colors duration-300" />
              <h3 className="text-lg font-semibold group-hover:text-green-600 transition-colors duration-300 text-foreground">
                Assurance
              </h3>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">Material conformity by batch</li>
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">Independent lab testing on request</li>
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">
                Full insurance and shipment visibility
              </li>
              <li className="hover:text-gray-800 transition-colors duration-200 text-primary">Escalation paths and SLAs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
