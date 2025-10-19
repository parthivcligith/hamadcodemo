"use client"

import * as React from "react"
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupButton } from "@/components/ui/input-group"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { COUNTRIES, type Country } from "./data/countries"
import { ChevronDown } from "lucide-react"

function Flag({ code, alt }: { code: string; alt: string }) {
  const iso = code.toLowerCase()
  const src = `https://flagcdn.com/w20/${iso}.png`
  const srcSet = `https://flagcdn.com/w40/${iso}.png 2x`
  return (
    <img
      src={src || "/placeholder.svg"}
      srcSet={srcSet}
      alt={`${alt} flag`}
      width={20}
      height={15}
      className="rounded-sm border shrink-0 object-cover"
      referrerPolicy="no-referrer"
      loading="lazy"
    />
  )
}

type Props = {
  value: string
  onChange: (fullPhone: string) => void
  defaultCountry?: string // ISO2, e.g., "IN"
  className?: string
  countryCode?: string // new optional controlled selected country ISO2
  onCountryChange?: (c: Country) => void // notify parent when country changes
}

export function PhoneInput({ value, onChange, defaultCountry = "IN", className, countryCode, onCountryChange }: Props) {
  const [open, setOpen] = React.useState(false)
  const [country, setCountry] = React.useState<Country>(() => {
    return COUNTRIES.find((c) => c.code === (countryCode || defaultCountry)) || COUNTRIES[0]
  })

  React.useEffect(() => {
    if (!countryCode) return
    const next = COUNTRIES.find((c) => c.code === countryCode)
    if (next && next.code !== country.code) {
      setCountry(next)
      const matched = COUNTRIES.find((c) => value?.startsWith(`+${c.dialCode}`))
      const nationalFromProp = matched ? value.slice(`+${matched.dialCode}`.length).trimStart() : value || ""
      const newVal = nationalFromProp ? `+${next.dialCode} ${nationalFromProp}` : `+${next.dialCode}`
      onChange(newVal)
    }
  }, [countryCode]) // eslint-disable-line react-hooks/exhaustive-deps

  const prefix = `+${country.dialCode}`
  const national = React.useMemo(() => {
    if (value?.startsWith(prefix)) {
      return value.slice(prefix.length).trimStart()
    }
    const matched = COUNTRIES.find((c) => value?.startsWith(`+${c.dialCode}`))
    if (matched) return value.slice(`+${matched.dialCode}`.length).trimStart()
    return value || ""
  }, [value, prefix])

  const handleNationalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value
    onChange(digits ? `${prefix} ${digits}` : `${prefix}`)
  }

  const selectCountry = (c: Country) => {
    setCountry(c)
    const currentNational = national
    onChange(currentNational ? `+${c.dialCode} ${currentNational}` : `+${c.dialCode}`)
    onCountryChange?.(c)
    setOpen(false)
  }

  return (
    <InputGroup className={className}>
      <InputGroupAddon align="inline-start" className="pl-2 pr-1">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <InputGroupButton variant="ghost" size="sm" className="px-1.5 h-8 gap-1">
              <Flag code={country.code} alt={country.name} />
              <span className="text-xs tabular-nums leading-none">+{country.dialCode}</span>
              <ChevronDown size={12} className="opacity-60" />
            </InputGroupButton>
          </PopoverTrigger>
          <PopoverContent className="w-[min(300px,92vw)] p-0">
            <Command className="max-h-72">
              <CommandInput placeholder="Search country or code..." className="h-9 text-sm" />
              <CommandList className="max-h-60 overflow-auto">
                <CommandEmpty className="py-4 text-sm">No results.</CommandEmpty>
                <CommandGroup heading="Select country" className="text-sm">
                  {COUNTRIES.map((c) => (
                    <CommandItem
                      key={c.code}
                      value={`${c.name} +${c.dialCode}`}
                      onSelect={() => selectCountry(c)}
                      className="py-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <Flag code={c.code} alt={c.name} />
                        <span className="mr-2">{c.name}</span>
                        <span className="text-muted-foreground text-xs">+{c.dialCode}</span>
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </InputGroupAddon>

      <InputGroupInput
        type="tel"
        inputMode="tel"
        placeholder="phone number"
        value={national}
        onChange={handleNationalChange}
        aria-label="Phone number"
        className="h-9 text-sm"
      />
    </InputGroup>
  )
}
