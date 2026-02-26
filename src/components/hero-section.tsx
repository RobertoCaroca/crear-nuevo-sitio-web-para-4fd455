"use client"

import { useState, useEffect } from "react"
import { BookingEngine } from "./ui/booking-engine"
import { Button } from "./ui/button"

type Destination = "patagonia" | "rio-celeste"

interface DestinationContent {
  image: string
  landingUrl: string
  reviews: Array<{ text: string; author: string; rating: number }>
}

const destinationContent: Record<Destination, DestinationContent> = {
  patagonia: {
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2560&h=1440&auto=format&fit=crop",
    landingUrl: "/patagonia",
    reviews: [
      { text: "Torres del Paine a metros, experiencia única", author: "Ana M.", rating: 5 },
      { text: "Lujo sostenible en glaciares, perfecto", author: "Carlos R.", rating: 5 }
    ]
  },
  "rio-celeste": {
    image: "https://images.unsplash.com/photo-1544531586-fbd91aaa4424?q=80&w=2560&h=1440&auto=format&fit=crop",
    landingUrl: "/rio-celeste",
    reviews: [
      { text: "Aguas termales y canopy, mágico", author: "María L.", rating: 5 },
      { text: "Volcán Tenorio, naturaleza pura", author: "Diego S.", rating: 5 }
    ]
  }
}

export function HeroSection() {
  const [showBookingOverlay, setShowBookingOverlay] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  const allReviews = [...destinationContent.patagonia.reviews, ...destinationContent["rio-celeste"].reviews]

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % allReviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [allReviews.length])

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Dual Images Desktop / Stack Images Mobile */}
      <div className="absolute inset-0">
        {/* Desktop: Split-screen images */}
        <div className="hidden md:flex h-full">
          {/* Patagonia Image */}
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={destinationContent.patagonia.image}
              alt="Patagonia glaciares y Torres del Paine"
              className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => window.open(destinationContent.patagonia.landingUrl, '_blank')}
            />
          </div>
          
          {/* Río Celeste Image */}
          <div className="w-1/2 relative overflow-hidden">
            <img
              src={destinationContent["rio-celeste"].image}
              alt="Río Celeste volcán, canopy y termales"
              className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => window.open(destinationContent["rio-celeste"].landingUrl, '_blank')}
            />
          </div>
        </div>

        {/* Mobile: Stacked images */}
        <div className="md:hidden h-full flex flex-col">
          <div className="h-1/2 relative overflow-hidden">
            <img
              src={destinationContent.patagonia.image}
              alt="Patagonia glaciares"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => window.open(destinationContent.patagonia.landingUrl, '_blank')}
            />
          </div>
          <div className="h-1/2 relative overflow-hidden">
            <img
              src={destinationContent["rio-celeste"].image}
              alt="Río Celeste volcán"
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => window.open(destinationContent["rio-celeste"].landingUrl, '_blank')}
            />
          </div>
        </div>
      </div>
      
      {/* Gradient Overlay - Crema con gradiente negro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-[#F5F1E8]/20 to-transparent" />
      
      {/* Main Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-600">
          
          {/* Main Heading - Specification según documento */}
          <h1 className="text-h1 md:text-[5.5rem] text-white font-bold leading-tight font-heading">
            Eco-Boutique Luxury: Patagonia o Río Celeste
          </h1>
          
          {/* Subtitle - Inter 1.5rem según especificación */}
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto leading-relaxed font-body">
            Experiencias inmersivas carbononeutrales en santuarios naturales. -10% directa
          </p>

          {/* Badge Ecológico - Green Key + Carbon Neutral */}
          <div className="flex justify-center">
            <div 
              className="inline-flex items-center gap-3 bg-[#10B981]/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-[#10B981]/30 text-sm cursor-pointer hover:bg-[#10B981]/30 transition-colors"
              title="Green Key + Carbon Neutral - Hover: impacto destino"
            >
              <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
              <span>Green Key</span>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <span>Carbon Neutral</span>
            </div>
          </div>
          
          {/* CTAs - Máximo 2 CTAs según especificación */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            {/* CTA Primario - Verde Esmeralda */}
            <Button
              size="lg"
              className="bg-[#10B981] hover:bg-[#059669] text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg border-0"
              onClick={() => setShowBookingOverlay(true)}
            >
              Reservar Ahora
            </Button>
            {/* CTA Secundario - Crema outline */}
            <Button
              variant="outline"
              size="lg"
              className="border-[#F5F1E8] text-[#F5F1E8] hover:bg-[#F5F1E8] hover:text-black px-8 py-4 text-lg font-medium transition-all duration-300"
              onClick={() => {
                const patagoniaBounds = document.querySelector('.md\\:flex')?.children[0]
                const rioCelesteBounds = document.querySelector('.md\\:flex')?.children[1]
                patagoniaBounds && rioCelesteBounds && window.scrollBy(0, window.innerHeight * 0.3)
              }}
            >
              Explorar Destinos
            </Button>
          </div>

          {/* Trust Dinámico - Carousel reseñas 4.8★ TripAdvisor */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-6 bg-[#F5F1E8]/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-[#D4AF37]" viewBox="0 0 20 20">
                      <path d="M10 15l-5.5 3 1.5-6L0 7.5l6-.5L10 1l4 6 6 .5-4.5 4.5 1.5 6z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-white text-sm font-medium">4.8</span>
              </div>
              
              {/* Review Text */}
              <div className="text-white text-sm max-w-xs">
                "{allReviews[currentReview].text}" - {allReviews[currentReview].author}
              </div>
              
              {/* Badges */}
              <div className="text-white text-xs">
                TripAdvisor • Cancelación Gratis
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Overlay */}
      {showBookingOverlay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F5F1E8] rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowBookingOverlay(false)}
              className="absolute top-4 right-4 text-black hover:text-[#10B981] text-2xl font-bold"
            >
              ×
            </button>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black mb-2">
                Reservar en Patagonia o Río Celeste
              </h3>
              <p className="text-black/70">Selecciona fechas y personaliza tu estadía</p>
            </div>
            <BookingEngine />
          </div>
        </div>
      )}
    </section>
  )
}