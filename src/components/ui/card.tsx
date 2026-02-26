import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const cardVariants = cva(
  "bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.08)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
  {
    variants: {
      variant: {
        default: "",
        flat: "shadow-none hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:translate-y-0"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"
    return (
      <Comp
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-0", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-h3 text-[#4A4A4A]", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-small text-muted-foreground line-clamp-2", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-0 pt-3", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    src: string
    alt: string
    aspectRatio?: "16:9" | "4:3" | "1:1"
  }
>(({ className, src, alt, aspectRatio = "16:9", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative overflow-hidden rounded-lg mb-4",
      aspectRatio === "16:9" && "aspect-[16/9]",
      aspectRatio === "4:3" && "aspect-[4/3]",
      aspectRatio === "1:1" && "aspect-square",
      className
    )}
    {...props}
  >
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
  </div>
))
CardImage.displayName = "CardImage"

const CardBadge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute top-3 right-3 bg-[#D4AF37] text-white text-label px-2 py-1 rounded-md shadow-sm",
      className
    )}
    {...props}
  >
    {children}
  </div>
))
CardBadge.displayName = "CardBadge"

const CardPrice = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-label font-bold text-[#2D5F4F]", className)}
    {...props}
  />
))
CardPrice.displayName = "CardPrice"

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  CardBadge,
  CardPrice
}