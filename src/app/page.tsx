"use client"

import { AuraltaHeader } from "@/components/auralta-header"
import { AuraltaFooter } from "@/components/auralta-footer"
import { HeroSection } from "@/components/hero-section"
import { SustainabilitySection } from "@/components/sustainability-section"
import { TrustSection } from "@/components/trust-section"
import { BottomSearchEngine } from "@/components/ui/bottom-search-engine"
import { useEffect, useState } from "react"

export default function Home() {
  const [searchEnginePosition, setSearchEnginePosition] = useState<'sticky' | 'absolute'>('sticky')

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById('footer')
      const searchEngine = document.getElementById('search-engine')
      
      if (footer && searchEngine) {
        const footerRect = footer.getBoundingClientRect()
        const searchEngineHeight = searchEngine.offsetHeight
        const viewportHeight = window.innerHeight
        
        // If footer is visible and less than search engine height from bottom
        if (footerRect.top <= viewportHeight - searchEngineHeight - 20) {
          setSearchEnginePosition('absolute')
        } else {
          setSearchEnginePosition('sticky')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <AuraltaHeader />
      
      {/* Main Content */}
      <main className="pb-24"> {/* Bottom padding to prevent overlap with sticky search */}
        {/* 1. Hero Dual (Patagonia / Río Celeste) */}
        <HeroSection />
        
        {/* 2. Sostenibilidad */}
        <SustainabilitySection />
        
        {/* 3. Sección de Confianza */}
        <TrustSection />
      </main>
      
      {/* Floating Bottom Search Engine */}
      <div 
        id="search-engine"
        className={`
          ${searchEnginePosition === 'sticky' ? 'fixed bottom-4' : 'absolute'}
          left-1/2 transform -translate-x-1/2 z-40 max-w-6xl w-full mx-auto px-4
          transition-all duration-300
        `}
        style={searchEnginePosition === 'absolute' ? { 
          bottom: '20px',
          position: 'absolute'
        } : {}}
      >
        <BottomSearchEngine className="rounded-2xl shadow-2xl border border-verde-suave/20 bg-white/95 backdrop-blur-md" />
      </div>
      
      {/* Footer */}
      <AuraltaFooter id="footer" className="relative z-30" />
    </div>
  )
}