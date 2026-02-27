"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Input, Select, Label } from "./input"
import { MapPin, Calendar, Users } from "lucide-react"

export interface BottomSearchEngineProps {
  className?: string
  onSearch?: (data: SearchData) => void
}

export interface SearchData {
  location: "patagonia" | "rio-celeste"
  checkIn: string
  checkOut: string
  passengers: number
}

const BottomSearchEngine = React.forwardRef<HTMLDivElement, BottomSearchEngineProps>(
  ({ className, onSearch }, ref) => {
    const [location, setLocation] = React.useState<"patagonia" | "rio-celeste">("patagonia")
    const [checkIn, setCheckIn] = React.useState("")
    const [checkOut, setCheckOut] = React.useState("")
    const [passengers, setPassengers] = React.useState(2)
    const [errors, setErrors] = React.useState<Record<string, string>>({})

    const validateForm = () => {
      const newErrors: Record<string, string> = {}
      
      if (!location) newErrors.location = "Destino requerido"
      if (!checkIn) newErrors.checkIn = "Fecha requerida"
      if (!checkOut) newErrors.checkOut = "Fecha requerida"
      if (passengers < 1 || passengers > 10) newErrors.passengers = "Entre 1 y 10 pasajeros"
      
      if (checkIn && checkOut && new Date(checkIn) >= new Date(checkOut)) {
        newErrors.checkOut = "Debe ser posterior a la entrada"
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (validateForm()) {
        const searchData: SearchData = {
          location,
          checkIn,
          checkOut,
          passengers
        }
        
        if (onSearch) {
          onSearch(searchData)
        } else {
          // Redirect to booking system
          const params = new URLSearchParams({
            dest: searchData.location,
            checkin: searchData.checkIn,
            checkout: searchData.checkOut,
            passengers: searchData.passengers.toString()
          })
          
          window.open(`https://booking.auralta.com/search?${params.toString()}`, '_blank')
        }
      }
    }

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0]
    const minCheckOut = checkIn || today

    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg",
          "p-6 max-w-6xl mx-auto",
          "transition-all duration-300",
          className
        )}
        role="search"
        aria-label="Motor de búsqueda de reservas"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Compact horizontal layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-end">
            {/* Location */}
            <div className="space-y-2">
              <Label 
                htmlFor="location" 
                className="flex items-center gap-1 text-[#2D5F4F] font-medium text-sm"
              >
                <MapPin className="w-3 h-3 text-verde-suave" aria-hidden="true" />
                Destino
              </Label>
              <Select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value as "patagonia" | "rio-celeste")}
                error={errors.location}
                className={cn(
                  "bg-white border-verde-suave/30 rounded-lg text-[#2D5F4F]",
                  "focus:border-verde-suave focus:ring-verde-suave/20 focus:ring-2",
                  "py-2.5 px-3 text-sm transition-all duration-200"
                )}
                aria-describedby={errors.location ? "location-error" : undefined}
              >
                <option value="patagonia">Patagonia</option>
                <option value="rio-celeste">Río Celeste</option>
              </Select>
              {errors.location && (
                <p id="location-error" role="alert" className="text-rojo-error text-xs">
                  {errors.location}
                </p>
              )}
            </div>

            {/* Check-in */}
            <div className="space-y-2">
              <Label 
                htmlFor="checkin" 
                className="flex items-center gap-1 text-[#2D5F4F] font-medium text-sm"
              >
                <Calendar className="w-3 h-3 text-azul-profundo" aria-hidden="true" />
                Entrada
              </Label>
              <Input
                id="checkin"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                error={errors.checkIn}
                className={cn(
                  "bg-white border-azul-profundo/30 rounded-lg text-[#2D5F4F]",
                  "focus:border-azul-profundo focus:ring-azul-profundo/20 focus:ring-2",
                  "py-2.5 px-3 text-sm transition-all duration-200"
                )}
                aria-describedby={errors.checkIn ? "checkin-error" : undefined}
              />
              {errors.checkIn && (
                <p id="checkin-error" role="alert" className="text-rojo-error text-xs">
                  {errors.checkIn}
                </p>
              )}
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <Label 
                htmlFor="checkout" 
                className="flex items-center gap-1 text-[#2D5F4F] font-medium text-sm"
              >
                <Calendar className="w-3 h-3 text-azul-profundo" aria-hidden="true" />
                Salida
              </Label>
              <Input
                id="checkout"
                type="date"
                min={minCheckOut}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                error={errors.checkOut}
                className={cn(
                  "bg-white border-azul-profundo/30 rounded-lg text-[#2D5F4F]",
                  "focus:border-azul-profundo focus:ring-azul-profundo/20 focus:ring-2",
                  "py-2.5 px-3 text-sm transition-all duration-200"
                )}
                aria-describedby={errors.checkOut ? "checkout-error" : undefined}
              />
              {errors.checkOut && (
                <p id="checkout-error" role="alert" className="text-rojo-error text-xs">
                  {errors.checkOut}
                </p>
              )}
            </div>

            {/* Passengers */}
            <div className="space-y-2">
              <Label 
                htmlFor="passengers" 
                className="flex items-center gap-1 text-[#2D5F4F] font-medium text-sm"
              >
                <Users className="w-3 h-3 text-verde-suave" aria-hidden="true" />
                Huéspedes
              </Label>
              <Input
                id="passengers"
                type="number"
                min="1"
                max="10"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
                error={errors.passengers}
                className={cn(
                  "bg-white border-verde-suave/30 rounded-lg text-[#2D5F4F]",
                  "focus:border-verde-suave focus:ring-verde-suave/20 focus:ring-2",
                  "py-2.5 px-3 text-sm transition-all duration-200"
                )}
                aria-describedby={errors.passengers ? "passengers-error" : "passengers-help"}
              />
              <p id="passengers-help" className="sr-only">
                Número de huéspedes entre 1 y 10
              </p>
              {errors.passengers && (
                <p id="passengers-error" role="alert" className="text-rojo-error text-xs">
                  {errors.passengers}
                </p>
              )}
            </div>

            {/* Search Button */}
            <div className="space-y-2">
              <div className="h-5"></div> {/* Spacer for alignment */}
              <Button 
                type="submit" 
                className={cn(
                  "w-full bg-verde-exito hover:bg-verde-exito/90",
                  "text-white font-medium px-6 py-2.5 text-sm",
                  "rounded-lg shadow-md transition-all duration-300",
                  "hover:shadow-lg focus:ring-2 focus:ring-verde-exito/30 focus:outline-none"
                )}
                aria-describedby="search-button-help"
              >
                Reservar
              </Button>
              <p id="search-button-help" className="sr-only">
                Buscar disponibilidad con los criterios seleccionados
              </p>
            </div>
          </div>
        </form>
      </div>
    )
  }
)

BottomSearchEngine.displayName = "BottomSearchEngine"

export { BottomSearchEngine }