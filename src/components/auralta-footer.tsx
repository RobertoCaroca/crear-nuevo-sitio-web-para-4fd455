"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Instagram, Facebook } from "lucide-react"

export interface AuraltaFooterProps {
  className?: string
}

export function AuraltaFooter({ className }: AuraltaFooterProps) {
  return (
    <footer className={cn("bg-[var(--verde-oscuro-profundo)] text-white", className)}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-5 md:px-10 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 max-w-[1200px] mx-auto">
          
          {/* Columna 1 - Marca */}
          <div className="space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[var(--verde-oscuro-profundo)] font-bold text-sm font-heading">A</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Auralta Hotels
              </span>
            </div>
            
            {/* Tagline */}
            <p className="text-[var(--blanco-medio)] text-sm font-body italic mb-3">
              "Naturaleza sin compromisos"
            </p>
            
            {/* Descripción */}
            <p className="text-[var(--blanco-medio)] text-sm font-body leading-relaxed">
              Experiencias de lujo sostenible en los destinos más prístinos de América Latina.
            </p>
            
            {/* Certificaciones */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center" title="Certificación Verde">
                <span className="text-xs text-white font-bold">♻</span>
              </div>
              <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center" title="Sostenibilidad">
                <span className="text-xs text-white font-bold">🌱</span>
              </div>
            </div>
          </div>

          {/* Columna 2 - Destinos & Experiencias */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-[1.5px] text-white mb-4">
              Destinos & Experiencias
            </h3>
            <nav className="space-y-3">
              <a href="#torres-del-paine" className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200">
                Torres del Paine
              </a>
              <a href="#rio-celeste" className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200">
                Río Celeste
              </a>
              <a href="#experiencias" className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200">
                Experiencias
              </a>
              <a href="#sostenibilidad" className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200">
                Sostenibilidad
              </a>
            </nav>
          </div>

          {/* Columna 3 - Empresa */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-[1.5px] text-white mb-4">
              Empresa
            </h3>
            <nav className="space-y-3">
              <a href="#sobre-nosotros" className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200">
                Sobre Nosotros
              </a>
              <a href="#blog" className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200">
                Blog
              </a>
              <a href="#prensa" className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200">
                Prensa
              </a>
              <a href="#trabajos" className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200">
                Trabaja con Nosotros
              </a>
            </nav>
          </div>

          {/* Columna 4 - Contacto y Redes */}
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-[1.5px] text-white mb-4">
              Contacto
            </h3>
            <div className="space-y-3">
              <a 
                href="mailto:reservas@auraltahotels.com" 
                className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200"
              >
                reservas@auraltahotels.com
              </a>
              <a 
                href="tel:+56212345678" 
                className="block text-[var(--blanco-medio)] text-sm font-body hover:text-white transition-colors duration-200"
              >
                +56 2 1234 5678
              </a>
            </div>
            
            {/* Redes Sociales */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="#" 
                className="text-[var(--blanco-medio)] hover:text-white transition-colors duration-200"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-[var(--blanco-medio)] hover:text-white transition-colors duration-200"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-[var(--blanco-medio)] hover:text-white transition-colors duration-200 text-sm"
                aria-label="Síguenos en Pinterest"
              >
                📌
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Subfooter */}
      <div className="border-t border-white/15 bg-[var(--verde-mas-oscuro)]">
        <div className="container mx-auto px-5 md:px-10 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-[1200px] mx-auto">
            <p className="text-[var(--blanco-bajo)] text-xs font-body">
              © 2026 Auralta Hotels. Todos los derechos reservados.
            </p>
            
            <nav className="flex items-center gap-1">
              <a 
                href="#privacidad" 
                className="text-[var(--blanco-bajo)] hover:text-[var(--blanco-medio)] text-xs font-body transition-colors duration-200"
              >
                Privacidad
              </a>
              <span className="text-[var(--blanco-bajo)] text-xs mx-2">·</span>
              <a 
                href="#terminos" 
                className="text-[var(--blanco-bajo)] hover:text-[var(--blanco-medio)] text-xs font-body transition-colors duration-200"
              >
                Términos
              </a>
              <span className="text-[var(--blanco-bajo)] text-xs mx-2">·</span>
              <a 
                href="#cookies" 
                className="text-[var(--blanco-bajo)] hover:text-[var(--blanco-medio)] text-xs font-body transition-colors duration-200"
              >
                Cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}