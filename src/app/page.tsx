"use client"

import { AuraltaHeader } from "@/components/auralta-header"
import { AuraltaFooter } from "@/components/auralta-footer"
import { HeroSection } from "@/components/hero-section"
import { SustainabilitySection } from "@/components/sustainability-section"
import { TrustSection } from "@/components/trust-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <AuraltaHeader />
      
      {/* Main Content */}
      <main>
        {/* 1. Hero Dual (Patagonia / Río Celeste) with integrated search */}
        <HeroSection />
        
        {/* 2. Sostenibilidad */}
        <SustainabilitySection />
        
        {/* 3. Sección de Confianza */}
        <TrustSection />
      </main>
      
      {/* Footer */}
      <AuraltaFooter id="footer" className="relative z-30" />
    </div>
  )
}