"use client"

import { SearchEngine } from "./ui/search-engine"

const destinationImages = {
  patagonia: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2560&h=1440&auto=format&fit=crop",
  rioceleste: "https://images.unsplash.com/photo-1544531586-fbd91aaa4424?q=80&w=2560&h=1440&auto=format&fit=crop"
}

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Dual Images Side by Side */}
      <div className="absolute inset-0 flex">
        {/* Patagonia Image - 50% */}
        <div className="w-1/2 relative overflow-hidden">
          <img
            src={destinationImages.patagonia}
            alt="Patagonia glaciares y Torres del Paine"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Río Celeste Image - 50% */}
        <div className="w-1/2 relative overflow-hidden">
          <img
            src={destinationImages.rioceleste}
            alt="Río Celeste volcán, canopy y termales"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      
      {/* Motor de Búsqueda - Positioned at top center */}
      <div className="absolute top-20 left-0 right-0 z-10 p-6">
        <SearchEngine />
      </div>
    </section>
  )
}