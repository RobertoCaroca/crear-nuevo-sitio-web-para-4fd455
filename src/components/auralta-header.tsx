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
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigationItems = [
    { href: "/patagonia", label: "Patagonia" },
    { href: "/rio-celeste", label: "Río Celeste" }
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-[100] transition-all duration-300 ease-out",
        isScrolled 
          ? "bg-white shadow-[0_1px_8px_rgba(0,0,0,0.06)]" 
          : "bg-transparent",
        className
      )}
    >
      <div className="px-5 md:px-10">
        <div className="flex items-center justify-between h-[60px] md:h-[72px]">
          
          {/* Logo - SVG placeholder for now, white/dark versions */}
          <div className="flex items-center">
            <a href="/" aria-label="Auralta Hotels - Ir al inicio">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                className="max-h-8 cursor-pointer hover:opacity-80 transition-opacity duration-200"
                aria-label="Auralta Hotels Logo"
              >
                <rect 
                  width="32" 
                  height="32" 
                  rx="4" 
                  fill={isScrolled ? "#2D2D2D" : "#FFFFFF"}
                />
                <text 
                  x="16" 
                  y="20" 
                  textAnchor="middle" 
                  fontSize="14" 
                  fontWeight="bold"
                  fill={isScrolled ? "#FFFFFF" : "#2D2D2D"}
                  fontFamily="Inter, sans-serif"
                >
                  A
                </text>
              </svg>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-light text-sm tracking-[0.5px] transition-all duration-200 hover:opacity-60",
                  isScrolled 
                    ? "text-[#2D2D2D]" 
                    : "text-white"
                )}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <button
            className="hidden md:block bg-[#4A7C59] hover:bg-[rgba(74,124,89,0.85)] text-white text-sm px-6 py-2.5 rounded transition-colors duration-200"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}
            aria-label="Ir a reservar"
          >
            Reservar
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden w-6 h-6 transition-colors duration-300 flex items-center justify-center",
              isScrolled ? "text-[#2D2D2D]" : "text-white"
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
          <div className="fixed top-[60px] right-0 bottom-0 w-full max-w-sm bg-[#2D2D2D] z-50 md:hidden">
            <nav className="flex flex-col p-6 space-y-12">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white font-light text-lg transition-colors duration-200 hover:opacity-60"
                  style={{ 
                    fontFamily: 'Inter, sans-serif', 
                    fontSize: '18px',
                    marginTop: '48px'
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              
              {/* Mobile CTA Button */}
              <button
                className="mt-8 bg-[#4A7C59] hover:bg-[rgba(74,124,89,0.85)] text-white text-sm py-3 px-6 rounded transition-colors duration-200 w-full"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400' }}
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