"use client"

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { SearchEngine } from "./ui/search-engine"

const destinationImages = {
  patagonia: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2560&h=1440&auto=format&fit=crop",
  rioceleste: "https://images.unsplash.com/photo-1544531586-fbd91aaa4424?q=80&w=2560&h=1440&auto=format&fit=crop"
}

export function HeroSection() {
  const [currentDestination, setCurrentDestination] = useState<'patagonia' | 'rioceleste'>('patagonia')

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDestination(prev => prev === 'patagonia' ? 'rioceleste' : 'patagonia')
    }, 8000) // Alternar cada 8 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Alternating Background Images */}
      <div className="absolute inset-0">
        <img
          src={destinationImages[currentDestination]}
          alt={currentDestination === 'patagonia' 
            ? "Patagonia glaciares y Torres del Paine" 
            : "Río Celeste volcán, canopy y termales"
          }
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
        />
      </div>
      
      {/* Enhanced gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      
      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        {/* Main Title */}
        <h1 className="text-h1 md:text-[56px] font-heading font-bold text-white mb-6 max-w-4xl leading-tight">
          Explora la Belleza Prístina de Nuestra Naturaleza
        </h1>
        
        {/* Large CTA Button */}
        <Button 
          size="lg"
          className="bg-verde-suave hover:bg-verde-suave/90 text-gris-oscuro font-heading font-bold px-12 py-6 text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-12"
          onClick={() => {
            document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Reservar Ahora
        </Button>
      </div>
    </section>
  )
}