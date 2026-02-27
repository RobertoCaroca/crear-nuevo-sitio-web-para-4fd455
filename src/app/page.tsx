import { MainNavigation } from "@/components/main-navigation"
import { HeroSection } from "@/components/hero-section"
import { SustainabilitySection } from "@/components/sustainability-section"
import { TrustSection } from "@/components/trust-section"
import { BottomSearchEngine } from "@/components/ui/bottom-search-engine"

export default function Home() {
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
      
      {/* Sticky Bottom Search Engine */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-beige-neutro shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <BottomSearchEngine className="rounded-xl border-0 shadow-none bg-transparent p-0" />
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gris-oscuro text-white py-16 relative z-30">
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
