"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Input, Select, Label } from "./input"
import { Plus, Minus, MapPin, Calendar, Users } from "lucide-react"

export interface SearchEngineProps {
  className?: string
  onSearch?: (data: SearchData) => void
}

export interface SearchData {
  location: "patagonia" | "rio-celeste"
  checkIn: string
  checkOut: string
  passengers: number
}

const SearchEngine = React.forwardRef<HTMLDivElement, SearchEngineProps>(
  ({ className, onSearch }, ref) => {
    const [location, setLocation] = React.useState<"patagonia" | "rio-celeste">("patagonia")
    const [checkIn, setCheckIn] = React.useState("")
    const [checkOut, setCheckOut] = React.useState("")
    const [passengers, setPassengers] = React.useState(2)
    const [errors, setErrors] = React.useState<Record<string, string>>({})

    const validateForm = () => {
      const newErrors: Record<string, string> = {}
      
      if (!location) newErrors.location = "Localización requerida"
      if (!checkIn) newErrors.checkIn = "Fecha de entrada requerida"
      if (!checkOut) newErrors.checkOut = "Fecha de salida requerida"
      if (passengers < 1 || passengers > 10) newErrors.passengers = "Número de pasajeros inválido"
      
      if (checkIn && checkOut && new Date(checkIn) >= new Date(checkOut)) {
        newErrors.checkOut = "Fecha de salida debe ser posterior a la entrada"
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
    }

    const incrementPassengers = () => {
      if (passengers < 10) {
        setPassengers(passengers + 1)
      }
    }

    const decrementPassengers = () => {
      if (passengers > 1) {
        setPassengers(passengers - 1)
      }
    }

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0]
    const minCheckOut = checkIn || today

    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_32px_rgba(167,198,163,0.2)] border border-white/30",
          "p-8 max-w-5xl mx-auto",
          "transition-all duration-300 hover:shadow-[0_12px_48px_rgba(167,198,163,0.25)]",
          className
        )}
        role="search"
        aria-label="Motor de búsqueda de reservas"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main search fields */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {/* Location Selector */}
            <div className="space-y-3">
              <Label 
                htmlFor="location" 
                className="flex items-center gap-2 text-[#2D5F4F] font-heading font-medium text-sm"
              >
                <MapPin className="w-4 h-4 text-[#A7C6A3]" aria-hidden="true" />
                Localización
              </Label>
              <Select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value as "patagonia" | "rio-celeste")}
                error={errors.location}
                className={cn(
                  "bg-white/90 border-2 border-[#A7C6A3]/30 rounded-xl",
                  "focus:border-[#A7C6A3] focus:ring-[#A7C6A3]/20 focus:ring-4",
                  "text-[#2D5F4F] font-body py-3 px-4",
                  "transition-all duration-300"
                )}
                aria-describedby={errors.location ? "location-error" : undefined}
              >
                <option value="patagonia">Patagonia</option>
                <option value="rio-celeste">Río Celeste</option>
              </Select>
              {errors.location && (
                <p id="location-error" role="alert" className="text-[#E74C3C] text-xs mt-1">
                  {errors.location}
                </p>
              )}
            </div>

            {/* Check-in Date */}
            <div className="space-y-3">
              <Label 
                htmlFor="checkin" 
                className="flex items-center gap-2 text-[#2D5F4F] font-heading font-medium text-sm"
              >
                <Calendar className="w-4 h-4 text-[#A7C6A3]" aria-hidden="true" />
                Fecha de Entrada
              </Label>
              <Input
                id="checkin"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                error={errors.checkIn}
                className={cn(
                  "bg-white/90 border-2 border-[#A7C6A3]/30 rounded-xl",
                  "focus:border-[#A7C6A3] focus:ring-[#A7C6A3]/20 focus:ring-4",
                  "text-[#2D5F4F] font-body py-3 px-4",
                  "transition-all duration-300"
                )}
                aria-describedby={errors.checkIn ? "checkin-error" : undefined}
              />
              {errors.checkIn && (
                <p id="checkin-error" role="alert" className="text-[#E74C3C] text-xs mt-1">
                  {errors.checkIn}
                </p>
              )}
            </div>

            {/* Check-out Date */}
            <div className="space-y-3">
              <Label 
                htmlFor="checkout" 
                className="flex items-center gap-2 text-[#2D5F4F] font-heading font-medium text-sm"
              >
                <Calendar className="w-4 h-4 text-[#A7C6A3]" aria-hidden="true" />
                Fecha de Salida
              </Label>
              <Input
                id="checkout"
                type="date"
                min={minCheckOut}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                error={errors.checkOut}
                className={cn(
                  "bg-white/90 border-2 border-[#A7C6A3]/30 rounded-xl",
                  "focus:border-[#A7C6A3] focus:ring-[#A7C6A3]/20 focus:ring-4",
                  "text-[#2D5F4F] font-body py-3 px-4",
                  "transition-all duration-300"
                )}
                aria-describedby={errors.checkOut ? "checkout-error" : undefined}
              />
              {errors.checkOut && (
                <p id="checkout-error" role="alert" className="text-[#E74C3C] text-xs mt-1">
                  {errors.checkOut}
                </p>
              )}
            </div>

            {/* Passengers Counter */}
            <div className="space-y-3">
              <Label 
                htmlFor="passengers" 
                className="flex items-center gap-2 text-[#2D5F4F] font-heading font-medium text-sm"
              >
                <Users className="w-4 h-4 text-[#A7C6A3]" aria-hidden="true" />
                Número de Pasajeros
              </Label>
              <div 
                className={cn(
                  "flex items-center bg-white/90 border-2 border-[#A7C6A3]/30 rounded-xl",
                  "transition-all duration-300",
                  errors.passengers && "border-[#E74C3C] ring-2 ring-[#E74C3C]/20"
                )}
                role="group"
                aria-labelledby="passengers-label"
                aria-describedby={errors.passengers ? "passengers-error" : "passengers-help"}
              >
                <Button
                  type="button"
                  onClick={decrementPassengers}
                  disabled={passengers <= 1}
                  className={cn(
                    "bg-transparent hover:bg-[#A7C6A3]/10 text-[#A7C6A3] p-3 rounded-l-xl border-0",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-all duration-200 hover:scale-105"
                  )}
                  aria-label="Disminuir número de pasajeros"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <div 
                  className="flex-1 text-center py-3 px-4 text-[#2D5F4F] font-body font-medium bg-transparent border-0"
                  role="spinbutton"
                  aria-valuenow={passengers}
                  aria-valuemin={1}
                  aria-valuemax={10}
                  aria-label={`${passengers} ${passengers === 1 ? 'pasajero' : 'pasajeros'}`}
                >
                  {passengers} {passengers === 1 ? 'Pasajero' : 'Pasajeros'}
                </div>
                <Button
                  type="button"
                  onClick={incrementPassengers}
                  disabled={passengers >= 10}
                  className={cn(
                    "bg-transparent hover:bg-[#A7C6A3]/10 text-[#A7C6A3] p-3 rounded-r-xl border-0",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-all duration-200 hover:scale-105"
                  )}
                  aria-label="Aumentar número de pasajeros"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <p id="passengers-help" className="sr-only">
                Use los botones más y menos para ajustar el número de pasajeros entre 1 y 10
              </p>
              {errors.passengers && (
                <p id="passengers-error" role="alert" className="text-[#E74C3C] text-xs mt-1">
                  {errors.passengers}
                </p>
              )}
            </div>
          </div>

          {/* Search Button */}
          <div className="flex justify-center pt-4">
            <Button 
              type="submit" 
              size="lg"
              className={cn(
                "bg-gradient-to-r from-[#A7C6A3] to-[#4B8B6A] hover:from-[#4B8B6A] hover:to-[#2D5F4F]",
                "text-white font-heading font-semibold px-12 py-4 text-lg",
                "rounded-2xl shadow-[0_4px_16px_rgba(167,198,163,0.4)]",
                "transition-all duration-300 hover:scale-105 hover:shadow-[0_6px_24px_rgba(167,198,163,0.5)]",
                "focus:ring-4 focus:ring-[#A7C6A3]/30 focus:outline-none"
              )}
              aria-describedby="search-button-help"
            >
              Reservar ahora
            </Button>
            <p id="search-button-help" className="sr-only">
              Haga clic para buscar disponibilidad con los criterios seleccionados
            </p>
          </div>
        </form>
      </div>
    )
  }
)

SearchEngine.displayName = "SearchEngine"

export { SearchEngine }