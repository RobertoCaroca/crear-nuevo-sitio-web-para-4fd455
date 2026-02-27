"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export interface AuraltaHeaderProps {
  className?: string
}

export function AuraltaHeader({ className }: AuraltaHeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "#destinos", label: "Destinos" },
    { href: "#experiencias", label: "Experiencias" },
    { href: "#sostenibilidad", label: "Sostenibilidad" },
    { href: "#nosotros", label: "Nosotros" }
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] transition-all duration-300 ease-out",
        isScrolled 
          ? "bg-white shadow-[0_2px_12px_rgba(0,0,0,0.08)]" 
          : "bg-transparent",
        className
      )}
    >
      <div className="container mx-auto px-5 md:px-10">
        <div className="flex items-center justify-between h-[60px] md:h-[72px]">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300",
              isScrolled 
                ? "bg-[var(--verde-oscuro-profundo)]" 
                : "bg-[var(--verde-oscuro-profundo)]"
            )}>
              <span className="text-white font-bold text-lg font-heading">A</span>
            </div>
            <span className={cn(
              "font-heading font-bold text-xl transition-colors duration-300",
              isScrolled 
                ? "text-[var(--verde-oscuro-profundo)]" 
                : "text-white"
            )}>
              Auralta Hotels
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-heading font-semibold text-sm tracking-[0.5px] transition-colors duration-200 relative py-2",
                  "after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--verde-esmeralda)] after:transition-all after:duration-200",
                  "hover:after:w-full",
                  isScrolled 
                    ? "text-[var(--verde-oscuro-profundo)] hover:text-[var(--verde-esmeralda)]" 
                    : "text-white hover:text-[var(--verde-esmeralda)]"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button
            className="hidden md:block bg-[var(--verde-esmeralda)] hover:bg-[var(--verde-esmeralda-hover)] text-white font-heading font-bold text-sm px-6 py-2.5 rounded-md transition-colors duration-200"
            aria-label="Ir a reservar"
          >
            Reservar
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden flex flex-col items-center justify-center w-6 h-6 transition-colors duration-300",
              isScrolled ? "text-[var(--verde-oscuro-profundo)]" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Mobile Panel */}
          <div className="fixed top-[60px] right-0 bottom-0 w-full max-w-sm bg-[var(--verde-oscuro-profundo)] z-50 md:hidden">
            <nav className="flex flex-col p-6 space-y-6">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white font-heading font-semibold text-lg py-3 border-b border-white/10 transition-colors duration-200 hover:text-[var(--verde-esmeralda)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <button
                className="mt-8 bg-[var(--verde-esmeralda)] hover:bg-[var(--verde-esmeralda-hover)] text-white font-heading font-bold text-sm py-3 px-6 rounded-md transition-colors duration-200 w-full"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Ir a reservar"
              >
                Reservar
              </button>
            </nav>
          </div>
        </>
      )}
    </header>
  )
}