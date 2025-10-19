"use client"

import { Globe2, Package2, ShieldCheck } from "lucide-react"
import { PharmaTile, PharmaTileContent } from "./pharma-tile"

interface ReferenceData {
  company: string
  location: string
  products: string
  partnership: string
}

interface PharmaReferenceTileProps {
  reference: ReferenceData
  index?: number
}

export function PharmaReferenceTile({ reference, index = 0 }: PharmaReferenceTileProps) {
  return (
    <PharmaTile variant="primary" style={{ animationDelay: `${index * 100}ms` }}>
      <PharmaTileContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#163764] transition-colors duration-300">
          {reference.company}
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
            <Globe2 className="h-4 w-4 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
            <span>{reference.location}</span>
          </div>
          <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
            <Package2 className="h-4 w-4 text-[#0c6f53] group-hover:scale-110 transition-transform duration-300" />
            <span>{reference.products}</span>
          </div>
          <div className="flex items-center gap-2 group-hover:text-gray-700 transition-colors duration-300">
            <ShieldCheck className="h-4 w-4 text-[#163764] group-hover:scale-110 transition-transform duration-300" />
            <span>Partnership: {reference.partnership}</span>
          </div>
        </div>
      </PharmaTileContent>
    </PharmaTile>
  )
}
