"use client"

import { BottomSearchEngine } from "./ui/bottom-search-engine"

const destinationImages = {
  patagonia: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2560&h=1440&auto=format&fit=crop",
  rioceleste: "https://images.unsplash.com/photo-1544531586-fbd91aaa4424?q=80&w=2560&h=1440&auto=format&fit=crop"
}

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col">
      
      {/* Hero Images - 85vh */}
      <div className="h-[85vh] flex flex-col md:flex-row">
        {/* Patagonia Image - Left Half (Desktop) / Top Half (Mobile) */}
        <div 
          className="w-full md:w-1/2 h-1/2 md:h-full relative cursor-pointer group"
          onClick={() => window.location.href = '/patagonia'}
          role="button"
          tabIndex={0}
          aria-label="Ver hoteles en Patagonia"
        >
          <img
            src={destinationImages.patagonia}
            alt="Patagonia glaciares y Torres del Paine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/30 transition-colors duration-300" />
        </div>
        
        {/* Río Celeste Image - Right Half (Desktop) / Bottom Half (Mobile) */}
        <div 
          className="w-full md:w-1/2 h-1/2 md:h-full relative cursor-pointer group"
          onClick={() => window.location.href = '/rio-celeste'}
          role="button"
          tabIndex={0}
          aria-label="Ver hoteles en Río Celeste"
        >
          <img
            src={destinationImages.rioceleste}
            alt="Río Celeste volcán, canopy y termales"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/30 transition-colors duration-300" />
        </div>
      </div>
      
      {/* Bottom Search Engine - 15vh */}
      <div className="h-[15vh] relative">
        <div className="absolute bottom-0 left-0 right-0 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.1)] px-6 md:px-12 py-6">
          <BottomSearchEngine />
        </div>
      </div>
      
    </section>
  )
}