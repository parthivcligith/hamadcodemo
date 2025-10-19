// Simple replacement for class-variance-authority
export type VariantProps<T extends (...args: any) => any> = Partial<{
  [K in keyof Parameters<T>[0]]: Parameters<T>[0][K] extends string | number | boolean
    ? Parameters<T>[0][K]
    : keyof Parameters<T>[0][K]
}>

export function cva(
  base: string,
  config?: {
    variants?: Record<string, Record<string, string>>
    defaultVariants?: Record<string, string>
  },
) {
  return (props: Record<string, any> = {}) => {
    let classes = base

    if (config?.variants) {
      Object.entries(config.variants).forEach(([key, variants]) => {
        const value = props[key] || config.defaultVariants?.[key]
        if (value && variants[value]) {
          classes += ` ${variants[value]}`
        }
      })
    }

    return classes
  }
}
