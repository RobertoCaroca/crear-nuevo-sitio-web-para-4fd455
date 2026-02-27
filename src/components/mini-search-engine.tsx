"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input, Select } from "./ui/input"
import { MapPin, Calendar, Users } from "lucide-react"

interface MiniSearchEngineProps {
  className?: string
  onSearch?: (data: SearchData) => void
}

interface SearchData {
  location: "patagonia" | "rio-celeste"
  checkIn: string
  checkOut: string
  passengers: number
}

export function MiniSearchEngine({ className = "", onSearch }: MiniSearchEngineProps) {
  const [location, setLocation] = useState<"patagonia" | "rio-celeste">("patagonia")
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [passengers, setPassengers] = useState(2)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const searchData: SearchData = {
      location,
      checkIn,
      checkOut,
      passengers
    }
    
    if (onSearch) {
      onSearch(searchData)
    } else {
      // Default behavior - redirect to booking system
      const params = new URLSearchParams({
        dest: searchData.location,
        checkin: searchData.checkIn,
        checkout: searchData.checkOut,
        passengers: searchData.passengers.toString()
      })
      
      window.open(`https://booking.auralta.com/search?${params.toString()}`, '_blank')
    }
  }

  const today = new Date().toISOString().split('T')[0]
  const minCheckOut = checkIn || today

  return (
    <section id="search-section" className={`py-8 bg-white ${className}`}>
      <div className="container mx-auto px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-h2 font-heading font-bold text-gris-oscuro text-center mb-8">
            Buscar Disponibilidad
          </h2>
          
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border-2 border-beige-neutro p-6 shadow-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              {/* Location */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-gris-oscuro font-medium text-sm">
                  <MapPin className="w-4 h-4 text-verde-suave" />
                  Destino
                </label>
                <Select
                  value={location}
                  onChange={(e) => setLocation(e.target.value as "patagonia" | "rio-celeste")}
                  className="border-beige-neutro text-gris-oscuro focus:border-verde-suave focus:ring-verde-suave/20"
                >
                  <option value="patagonia">Patagonia</option>
                  <option value="rio-celeste">Río Celeste</option>
                </Select>
              </div>

              {/* Check-in */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-gris-oscuro font-medium text-sm">
                  <Calendar className="w-4 h-4 text-verde-suave" />
                  Entrada
                </label>
                <Input
                  type="date"
                  min={today}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="border-beige-neutro text-gris-oscuro focus:border-verde-suave focus:ring-verde-suave/20"
                />
              </div>

              {/* Check-out */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-gris-oscuro font-medium text-sm">
                  <Calendar className="w-4 h-4 text-verde-suave" />
                  Salida
                </label>
                <Input
                  type="date"
                  min={minCheckOut}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="border-beige-neutro text-gris-oscuro focus:border-verde-suave focus:ring-verde-suave/20"
                />
              </div>

              {/* Passengers */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-body text-gris-oscuro font-medium text-sm">
                  <Users className="w-4 h-4 text-verde-suave" />
                  Huéspedes
                </label>
                <Select
                  value={passengers.toString()}
                  onChange={(e) => setPassengers(Number(e.target.value))}
                  className="border-beige-neutro text-gris-oscuro focus:border-verde-suave focus:ring-verde-suave/20"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={(i + 1).toString()}>
                      {i + 1} {i + 1 === 1 ? 'Huésped' : 'Huéspedes'}
                    </option>
                  ))}
                </Select>
              </div>

              {/* Search Button */}
              <Button
                type="submit"
                className="bg-verde-suave hover:bg-verde-suave/90 text-gris-oscuro font-body font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Buscar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}