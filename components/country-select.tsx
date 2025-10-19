"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { ChevronsUpDown } from "lucide-react"
import { COUNTRIES } from "./data/countries"
import { cn } from "@/lib/utils"

type Props = {
  value: string
  onChange: (countryName: string) => void
  placeholder?: string
  className?: string
}

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

export function CountrySelect({ value, onChange, placeholder = "Select country", className }: Props) {
  const [open, setOpen] = React.useState(false)
  const selected = COUNTRIES.find((c) => c.name.toLowerCase() === value.toLowerCase())

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          className={cn("w-full justify-between h-9 px-3", className)}
        >
          <div className="flex items-center gap-2 min-w-0">
            {selected ? <Flag code={selected.code} alt={selected.name} /> : null}
            <span className="truncate">{selected ? selected.name : value || placeholder}</span>
          </div>
          <ChevronsUpDown className="opacity-50" size={14} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[min(300px,92vw)] p-0">
        <Command className="max-h-72">
          <CommandInput placeholder="Search country..." className="h-9 text-sm" />
          <CommandList className="max-h-60 overflow-auto">
            <CommandEmpty className="py-4 text-sm">No country found.</CommandEmpty>
            <CommandGroup heading="Countries" className="text-sm">
              {COUNTRIES.map((c) => (
                <CommandItem
                  key={c.code}
                  value={`${c.name} ${c.dialCode}`}
                  onSelect={() => {
                    onChange(c.name)
                    setOpen(false)
                  }}
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
  )
}
