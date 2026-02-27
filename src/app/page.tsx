"use client"

import { MainNavigation } from "@/components/main-navigation"
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
      {/* Navigation */}
      <MainNavigation />
      
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
          ${searchEnginePosition === 'sticky' ? 'sticky bottom-4' : 'absolute'}
          left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-beige-neutro shadow-lg
          transition-all duration-300
        `}
        style={searchEnginePosition === 'absolute' ? { 
          bottom: '20px',
          position: 'absolute'
        } : {}}
      >
        <div className="container mx-auto px-4 py-4">
          <BottomSearchEngine className="rounded-xl border-0 shadow-none bg-transparent p-0" />
        </div>
      </div>
      
      {/* Footer */}
      <footer id="footer" className="bg-gris-oscuro text-white py-16 relative z-30">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-verde-suave rounded-lg flex items-center justify-center">
              <span className="text-gris-oscuro font-bold">A</span>
            </div>
            <span className="font-heading font-bold text-xl">
              Auralta Hotels
            </span>
          </div>
          <p className="text-small opacity-80">
            Lujo sostenible en armonía con la naturaleza
          </p>
        </div>
      </footer>
    </div>
  )
}