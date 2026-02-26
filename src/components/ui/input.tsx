import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border border-[#D4D4D8] bg-white px-4 py-3 text-body placeholder:text-[#4A4A4A]/50 focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-[#2D5F4F]/10 focus-visible:border-[#2D5F4F] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "",
        success: "border-l-4 border-l-[#27AE60]",
        error: "border-l-4 border-l-[#E74C3C]"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: string
  success?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, type = "text", error, success, ...props }, ref) => {
    const computedVariant = error ? "error" : success ? "success" : variant

    return (
      <div className="space-y-1">
        <input
          type={type}
          className={cn(inputVariants({ variant: computedVariant, className }))}
          ref={ref}
          {...props}
        />
        {error && (
          <div className="flex items-center gap-1 text-xs text-[#E74C3C]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            {error}
          </div>
        )}
        {success && (
          <div className="flex items-center gap-1 text-xs text-[#27AE60]">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
            Campo válido
          </div>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-label text-[#4A4A4A] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & {
    error?: string
    success?: boolean
  }
>(({ className, error, success, children, ...props }, ref) => {
  const variant = error ? "error" : success ? "success" : "default"
  
  return (
    <div className="space-y-1">
      <select
        className={cn(
          inputVariants({ variant }),
          "cursor-pointer appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzRBNEE0QSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHN2Zz4K')] bg-no-repeat bg-right-3 bg-center pr-10",
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </select>
      {error && (
        <div className="flex items-center gap-1 text-xs text-[#E74C3C]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          {error}
        </div>
      )}
    </div>
  )
})
Select.displayName = "Select"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error?: string
    success?: boolean
  }
>(({ className, error, success, ...props }, ref) => {
  const variant = error ? "error" : success ? "success" : "default"
  
  return (
    <div className="space-y-1">
      <textarea
        className={cn(
          inputVariants({ variant }),
          "min-h-[80px] resize-vertical",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <div className="flex items-center gap-1 text-xs text-[#E74C3C]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
          {error}
        </div>
      )}
    </div>
  )
})
Textarea.displayName = "Textarea"

export { Input, Label, Select, Textarea }