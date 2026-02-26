import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const modalVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in-0 zoom-in-95 duration-300",
  {
    variants: {
      variant: {
        default: "",
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

const modalContentVariants = cva(
  "relative bg-[#F5F1E8] rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.15)] p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in fade-in-0 zoom-in-95 duration-300",
  {
    variants: {
      size: {
        default: "max-w-2xl",
        sm: "max-w-md",
        lg: "max-w-4xl",
        xl: "max-w-6xl"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
)

export interface ModalProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalVariants> {
  open?: boolean
  onClose?: () => void
}

export interface ModalContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof modalContentVariants> {}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ className, variant, open = false, onClose, children, ...props }, ref) => {
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose?.()
        }
      }

      if (open) {
        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'
      }

      return () => {
        document.removeEventListener('keydown', handleEscape)
        document.body.style.overflow = 'unset'
      }
    }, [open, onClose])

    if (!open) return null

    return (
      <>
        {/* Overlay */}
        <div 
          className="fixed inset-0 z-50 bg-[#4A4A4A]/70 animate-in fade-in-0 duration-300"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div
          className={cn(modalVariants({ variant, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      </>
    )
  }
)
Modal.displayName = "Modal"

const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <div
        className={cn(modalContentVariants({ size, className }))}
        ref={ref}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {children}
      </div>
    )
  }
)
ModalContent.displayName = "ModalContent"

const ModalHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 text-center sm:text-left mb-6", className)}
    {...props}
  />
))
ModalHeader.displayName = "ModalHeader"

const ModalTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("text-h2 text-[#4A4A4A]", className)}
    {...props}
  />
))
ModalTitle.displayName = "ModalTitle"

const ModalDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-body text-muted-foreground", className)}
    {...props}
  />
))
ModalDescription.displayName = "ModalDescription"

const ModalFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4 mt-6", className)}
    {...props}
  />
))
ModalFooter.displayName = "ModalFooter"

const ModalClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onClose?: () => void
  }
>(({ className, onClose, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute top-6 right-6 w-6 h-6 flex items-center justify-center rounded-full text-[#4A4A4A] hover:bg-[#D4D4D8] transition-colors",
      className
    )}
    onClick={onClose}
    {...props}
  >
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
    <span className="sr-only">Cerrar</span>
  </button>
))
ModalClose.displayName = "ModalClose"

export {
  Modal,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalFooter,
  ModalClose
}