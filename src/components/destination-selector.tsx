"use client"

import { useState } from "react"
import { Button } from "./ui/button"

interface DestinationSelectorProps {
  onDestinationChange?: (destination: 'patagonia' | 'rio-celeste') => void
  className?: string
}

export function DestinationSelector({ onDestinationChange, className = "" }: DestinationSelectorProps) {
  const [selectedDestination, setSelectedDestination] = useState<'patagonia' | 'rio-celeste'>('patagonia')

  const destinations = [
    {
      id: 'patagonia' as const,
      name: 'Patagonia',
      description: 'Glaciares y Torres del Paine',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=400&h=200&auto=format&fit=crop'
    },
    {
      id: 'rio-celeste' as const,
      name: 'Río Celeste',
      description: 'Volcán, canopy y termales',
      image: 'https://images.unsplash.com/photo-1544531586-fbd91aaa4424?q=80&w=400&h=200&auto=format&fit=crop'
    }
  ]

  const handleDestinationSelect = (destination: 'patagonia' | 'rio-celeste') => {
    setSelectedDestination(destination)
    onDestinationChange?.(destination)
  }

  return (
    <section className={`py-8 bg-white ${className}`}>
      <div className="container mx-auto px-4 md:px-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 font-heading font-bold text-gris-oscuro text-center mb-8">
            Elige tu Destino
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  selectedDestination === destination.id 
                    ? 'ring-4 ring-verde-suave shadow-xl' 
                    : 'shadow-md'
                }`}
                onClick={() => handleDestinationSelect(destination.id)}
              >
                {/* Background Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.name} - ${destination.description}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Selection indicator */}
                  {selectedDestination === destination.id && (
                    <div className="absolute top-4 right-4 bg-verde-suave rounded-full w-8 h-8 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-body text-body font-semibold mb-1">
                    {destination.name}
                  </h3>
                  <p className="font-body text-body opacity-90">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button
              onClick={() => {
                document.getElementById('search-section')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-verde-suave hover:bg-verde-suave/90 text-gris-oscuro font-body font-medium px-8 py-3 rounded-xl transition-all duration-300"
            >
              Continuar con {destinations.find(d => d.id === selectedDestination)?.name}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}