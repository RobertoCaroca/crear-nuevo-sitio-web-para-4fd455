import { MainNavigation } from "@/components/main-navigation"
import { HeroSection } from "@/components/hero-section"
import { QuickCardsSection } from "@/components/quick-cards-section"
import { TrustSection } from "@/components/trust-section"
import { BottomSearchEngine } from "@/components/ui/bottom-search-engine"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <MainNavigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Cards Section */}
      <QuickCardsSection />
      
      {/* Trust Section */}
      <TrustSection />
      
      {/* Bottom Search Engine */}
      <section className="py-8 bg-gradient-to-b from-transparent to-gris-palido/50">
        <div className="container mx-auto px-4 md:px-10">
          <BottomSearchEngine />
        </div>
      </section>
      
      {/* Footer Placeholder */}
      <footer className="bg-[#4A4A4A] text-[#F5F1E8] py-16">
        <div className="container mx-auto px-4 md:px-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-[#2D5F4F] rounded-lg flex items-center justify-center">
              <span className="text-[#F5F1E8] font-bold">A</span>
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
