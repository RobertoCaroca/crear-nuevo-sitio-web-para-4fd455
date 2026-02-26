import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[6px] text-label font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        // Botón Primario - Verde Suave (Nueva Guía UI v2.0)
        default: "bg-[#A7C6A3] text-[#E8E0C1] hover:bg-[#4B8B6A] hover:scale-[1.02] active:shadow-inner active:shadow-black/20",
        // Botón Secundario - Transparente con borde
        secondary: "bg-transparent border-2 border-[#E8E0C1] text-[#E8E0C1] hover:bg-[#E8E0C1] hover:text-[#F5F5F5]",
        // Botón Terciario - Link style
        link: "text-[#A7C6A3] underline-offset-4 decoration-dotted hover:decoration-solid hover:text-[#A7C6A3]/80 p-0 h-auto",
        // Variantes adicionales
        destructive: "bg-[#E74C3C] text-white hover:bg-[#E74C3C]/90",
        success: "bg-[#27AE60] text-white hover:bg-[#27AE60]/90",
        warning: "bg-[#F39C12] text-white hover:bg-[#F39C12]/90",
        outline: "border-2 border-[#C0C0C0] bg-white text-[#E8E0C1] hover:bg-[#C0C0C0]",
        ghost: "hover:bg-[#C0C0C0] hover:text-[#E8E0C1]",
      },
      size: {
        default: "px-6 py-4 has-[>svg]:px-4", // 16px 24px múltiplos de 8px
        compact: "px-4 py-2 text-xs has-[>svg]:px-4", // Versión compacta para cards
        sm: "px-4 py-2 text-xs has-[>svg]:px-4",
        lg: "px-8 py-4 text-base has-[>svg]:px-6",
        icon: "size-12 p-0",
        "icon-sm": "size-10 p-0",
        "icon-lg": "size-14 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
