"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavigationProps {
  className?: string
  children?: React.ReactNode
}

export interface NavigationItemProps {
  href: string
  children: React.ReactNode
  className?: string
  active?: boolean
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className, children }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "sticky top-0 z-[100] bg-[#F5F1E8] h-18 md:h-[72px] border-b border-[#D4D4D8]",
          className
        )}
      >
        <div className="container mx-auto px-4 md:px-10 h-full flex items-center justify-between">
          {children}
        </div>
      </nav>
    )
  }
)
Navigation.displayName = "Navigation"

const NavigationBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center", className)}
    {...props}
  >
    {children}
  </div>
))
NavigationBrand.displayName = "NavigationBrand"

const NavigationMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement> & {
    mobile?: boolean
  }
>(({ className, mobile = false, children, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      mobile
        ? "fixed inset-0 top-16 md:top-[72px] z-40 bg-gris-piedra/95 flex flex-col items-center justify-start pt-8 space-y-4"
        : "hidden md:flex items-center space-x-8",
      className
    )}
    {...props}
  >
    {children}
  </ul>
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationItem = React.forwardRef<HTMLAnchorElement, NavigationItemProps>(
  ({ className, href, active = false, children, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          href={href}
          className={cn(
            "text-label font-medium text-[#4A4A4A] transition-colors duration-200 relative py-2",
            "hover:text-[#2D5F4F]",
            "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2D5F4F] after:transition-all after:duration-200",
            "hover:after:w-full",
            active && "text-[#2D5F4F] after:w-full",
            className
          )}
          {...props}
        >
          {children}
        </a>
      </li>
    )
  }
)
NavigationItem.displayName = "NavigationItem"

const NavigationToggle = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    open?: boolean
    onToggle?: () => void
  }
>(({ className, open = false, onToggle, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "md:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1",
      className
    )}
    onClick={onToggle}
    {...props}
  >
    <span
      className={cn(
        "block w-5 h-0.5 bg-[#4A4A4A] transition-all duration-300",
        open && "rotate-45 translate-y-1.5"
      )}
    />
    <span
      className={cn(
        "block w-5 h-0.5 bg-[#4A4A4A] transition-all duration-300",
        open && "opacity-0"
      )}
    />
    <span
      className={cn(
        "block w-5 h-0.5 bg-[#4A4A4A] transition-all duration-300",
        open && "-rotate-45 -translate-y-1.5"
      )}
    />
    <span className="sr-only">Abrir menú</span>
  </button>
))
NavigationToggle.displayName = "NavigationToggle"

export {
  Navigation,
  NavigationBrand,
  NavigationMenu,
  NavigationItem,
  NavigationToggle
}