import { MainNavigation } from "@/components/main-navigation"
import { HeroSection } from "@/components/hero-section"
import { DestinationSelector } from "@/components/destination-selector"
import { MiniSearchEngine } from "@/components/mini-search-engine"
import { SustainabilitySection } from "@/components/sustainability-section"
import { TrustSection } from "@/components/trust-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <MainNavigation />
      
      {/* 1. Hero Dual (Patagonia / Río Celeste) */}
      <HeroSection />
      
      {/* 2. Selector Destino */}
      <DestinationSelector />
      
      {/* 3. Mini-buscador */}
      <MiniSearchEngine />
      
      {/* 4. Sostenibilidad */}
      <SustainabilitySection />
      
      {/* 5. Sección de Confianza */}
      <TrustSection />
      
      {/* Footer */}
      <footer className="bg-gris-oscuro text-white py-16">
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
