"use client"

import { useState, useEffect } from "react"
import { BookingEngine } from "./ui/booking-engine"
import { Button } from "./ui/button"

type Destination = "patagonia" | "rio-celeste"

interface DestinationContent {
  title: string
  subtitle: string
  video: string
  videoFallback: string
  ctaSecondary: string
  landingUrl: string
  reviews: Array<{ text: string; author: string; rating: number }>
}

const destinationContent: Record<Destination, DestinationContent> = {
  patagonia: {
    title: "Eco-Glamping Prístino: Patagonia Glaciar",
    subtitle: "Lujo carbononeutral en santuarios naturales. -10% reserva directa",
    video: "/videos/patagonia-4k.mp4",
    videoFallback: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=2560&h=1440&auto=format&fit=crop",
    ctaSecondary: "Explorar Patagonia",
    landingUrl: "/patagonia",
    reviews: [
      { text: "Torres del Paine a metros, experiencia única", author: "Ana M.", rating: 5 },
      { text: "Lujo sostenible en glaciares, perfecto", author: "Carlos R.", rating: 5 }
    ]
  },
  "rio-celeste": {
    title: "Eco-Glamping Prístino: Río Celeste Volcánico", 
    subtitle: "Lujo carbononeutral en santuarios naturales. -10% reserva directa",
    video: "/videos/rio-celeste-4k.mp4",
    videoFallback: "https://images.unsplash.com/photo-1544531586-fbd91aaa4424?q=80&w=2560&h=1440&auto=format&fit=crop",
    ctaSecondary: "Explorar Río Celeste",
    landingUrl: "/rio-celeste",
    reviews: [
      { text: "Aguas termales y canopy, mágico", author: "María L.", rating: 5 },
      { text: "Volcán Tenorio, naturaleza pura", author: "Diego S.", rating: 5 }
    ]
  }
}

export function HeroSection() {
  const [activeDestination, setActiveDestination] = useState<Destination>("patagonia")
  const [showBookingOverlay, setShowBookingOverlay] = useState(false)
  const [currentReview, setCurrentReview] = useState(0)

  const content = destinationContent[activeDestination]

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % content.reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [content.reviews.length])

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Dual Videos Desktop / Single Video Mobile */}
      <div className="absolute inset-0">
        {/* Desktop: Split-screen videos */}
        <div className="hidden md:flex h-full">
          {/* Patagonia Video */}
          <div className="w-1/2 relative overflow-hidden">
            <video
              className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
              onClick={() => window.open(destinationContent.patagonia.landingUrl, '_blank')}
            >
              <source src={destinationContent.patagonia.video} type="video/mp4" />
            </video>
            <img
              src={destinationContent.patagonia.videoFallback}
              alt="Patagonia glaciares y Torres del Paine"
              className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => window.open(destinationContent.patagonia.landingUrl, '_blank')}
            />
          </div>
          
          {/* Río Celeste Video */}
          <div className="w-1/2 relative overflow-hidden">
            <video
              className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
              autoPlay
              muted
              loop
              playsInline
              onClick={() => window.open(destinationContent["rio-celeste"].landingUrl, '_blank')}
            >
              <source src={destinationContent["rio-celeste"].video} type="video/mp4" />
            </video>
            <img
              src={destinationContent["rio-celeste"].videoFallback}
              alt="Río Celeste volcán, canopy y termales"
              className="w-full h-full object-cover cursor-pointer transition-all duration-300 hover:scale-105"
              onClick={() => window.open(destinationContent["rio-celeste"].landingUrl, '_blank')}
            />
          </div>
        </div>

        {/* Mobile: Single active video */}
        <div className="md:hidden h-full">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={content.video} type="video/mp4" />
          </video>
          <img
            src={content.videoFallback}
            alt={`${activeDestination} experiencia eco-glamping`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      
      {/* Main Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-600">
          
          {/* Toggle Destino Prominente */}
          <div className="mb-8">
            <div 
              role="tablist" 
              className="inline-flex bg-[#F5F5F5]/20 backdrop-blur-sm rounded-full p-2 border border-white/20"
            >
              <button
                role="tab"
                aria-selected={activeDestination === "patagonia"}
                onClick={() => setActiveDestination("patagonia")}
                className={`px-6 py-4 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeDestination === "patagonia"
                    ? "bg-[#C0C0C0] text-[#E8E0C1] shadow-lg"
                    : "text-[#F5F5F5] hover:bg-white/10"
                }`}
              >
                PATAGONIA
              </button>
              <button
                role="tab"
                aria-selected={activeDestination === "rio-celeste"}
                onClick={() => setActiveDestination("rio-celeste")}
                className={`px-6 py-4 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeDestination === "rio-celeste"
                    ? "bg-[#A8D8E5] text-[#E8E0C1] shadow-lg"
                    : "text-[#F5F5F5] hover:bg-white/10"
                }`}
              >
                RÍO CELESTE
              </button>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-h1 text-[#F5F5F5] font-bold leading-tight">
            {content.title}
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[#F5F5F5] max-w-3xl mx-auto leading-relaxed">
            {content.subtitle}
          </p>

          {/* Badges Ecológicos */}
          <div className="flex justify-center gap-4 flex-wrap">
            <div 
              className="inline-flex items-center gap-2 bg-[#27AE60]/20 backdrop-blur-sm text-[#F5F5F5] px-4 py-2 rounded-full border border-[#27AE60]/30 text-sm cursor-pointer hover:bg-[#27AE60]/30 transition-colors"
              title="Certificado Green Key"
            >
              <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
              Green Key Certified
            </div>
            <div 
              className="inline-flex items-center gap-2 bg-[#27AE60]/20 backdrop-blur-sm text-[#F5F5F5] px-4 py-2 rounded-full border border-[#27AE60]/30 text-sm cursor-pointer hover:bg-[#27AE60]/30 transition-colors"
              title="100% Carbon Neutral"
            >
              <div className="w-2 h-2 bg-[#27AE60] rounded-full"></div>
              Carbon Neutral
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#A7C6A3] hover:bg-[#4B8B6A] text-[#E8E0C1] px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
              onClick={() => setShowBookingOverlay(true)}
            >
              Reservar Ahora
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[#F5F5F5] text-[#F5F5F5] hover:bg-[#F5F5F5] hover:text-[#E8E0C1] px-8 py-4 text-lg font-medium transition-all duration-300"
              onClick={() => window.open(content.landingUrl, '_blank')}
            >
              {content.ctaSecondary}
            </Button>
          </div>

          {/* Trust Signals - Reviews Carousel */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-6 bg-[#F5F5F5]/10 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-4 h-4 fill-[#D4AF37]" viewBox="0 0 20 20">
                      <path d="M10 15l-5.5 3 1.5-6L0 7.5l6-.5L10 1l4 6 6 .5-4.5 4.5 1.5 6z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-[#F5F5F5] text-sm font-medium">4.8</span>
              </div>
              
              {/* Review Text */}
              <div className="text-[#F5F5F5] text-sm max-w-xs">
                "{content.reviews[currentReview].text}" - {content.reviews[currentReview].author}
              </div>
              
              {/* Badges */}
              <div className="text-[#F5F5F5] text-xs">
                TripAdvisor • Cancelación Gratis
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Overlay */}
      {showBookingOverlay && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#F5F5F5] rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowBookingOverlay(false)}
              className="absolute top-4 right-4 text-[#E8E0C1] hover:text-[#A7C6A3] text-2xl font-bold"
            >
              ×
            </button>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-[#E8E0C1] mb-2">
                Reservar en {activeDestination === "patagonia" ? "Patagonia" : "Río Celeste"}
              </h3>
              <p className="text-[#E8E0C1]">Selecciona fechas y personaliza tu estadía</p>
            </div>
            <BookingEngine destination={activeDestination} />
          </div>
        </div>
      )}
    </section>
  )
}