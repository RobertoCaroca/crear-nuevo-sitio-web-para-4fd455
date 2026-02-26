"use client"

import * as React from "react"
import { Navigation, NavigationBrand, NavigationMenu, NavigationItem, NavigationToggle } from "./ui/navigation"

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  const navigationItems = [
    { href: "#habitaciones", label: "Habitaciones", active: false },
    { href: "#experiencias", label: "Experiencias", active: false },
    { href: "#sostenibilidad", label: "Sostenibilidad", active: false },
    { href: "#ofertas", label: "Ofertas", active: false },
    { href: "#contacto", label: "Contacto", active: false }
  ]

  return (
    <Navigation>
      {/* Brand/Logo */}
      <NavigationBrand>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2D5F4F] rounded-lg flex items-center justify-center">
            <span className="text-[#F5F1E8] font-bold text-lg">A</span>
          </div>
          <span className="font-heading font-bold text-xl text-[#4A4A4A]">
            Auralta Hotels
          </span>
        </div>
      </NavigationBrand>

      {/* Desktop Menu */}
      <NavigationMenu>
        {navigationItems.map((item) => (
          <NavigationItem 
            key={item.href}
            href={item.href}
            active={item.active}
          >
            {item.label}
          </NavigationItem>
        ))}
      </NavigationMenu>

      {/* Mobile Toggle */}
      <NavigationToggle 
        open={mobileMenuOpen}
        onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
      />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <NavigationMenu mobile>
          {navigationItems.map((item) => (
            <NavigationItem 
              key={item.href}
              href={item.href}
              active={item.active}
              className="text-[#F5F1E8] hover:text-[#2D5F4F] py-4"
            >
              {item.label}
            </NavigationItem>
          ))}
        </NavigationMenu>
      )}
    </Navigation>
  )
}