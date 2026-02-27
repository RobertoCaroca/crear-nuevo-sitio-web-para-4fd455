"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Input, Select, Label } from "./input"
import { Plus, Minus, MapPin, Calendar, Users, Mountain, Trees } from "lucide-react"

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
          // Fondo crema/arena con sombra suave según especificaciones
          "bg-[#E8E0C1]/95 backdrop-blur-sm border border-[#E8E0C1]/50",
          // Border-radius: 12px para el contenedor general
          "rounded-xl shadow-[0_8px_32px_rgba(232,224,193,0.3)]",
          "p-6 max-w-6xl mx-auto",
          "transition-all duration-300 hover:shadow-[0_12px_48px_rgba(232,224,193,0.4)]",
          className
        )}
        role="search"
        aria-label="Motor de búsqueda de reservas"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Main search fields - Layout horizontal para desktop */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-3">
            {/* Location Selector */}
            <div className="flex-1 lg:min-w-[200px] space-y-2">
              <Label 
                htmlFor="location" 
                className="flex items-center gap-2 text-[#6B6B6B] font-body font-medium text-[11px] tracking-wide uppercase"
              >
                <MapPin className="w-3 h-3 text-[#A7C6A3]" aria-hidden="true" />
                Destino
              </Label>
              
              {/* Selector visual mejorado */}
              <div className="relative">
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value as "patagonia" | "rio-celeste")}
                  className={cn(
                    "bg-white border-2 border-[#A7C6A3]/30 rounded-lg w-full appearance-none",
                    "focus:border-[#A7C6A3] focus:ring-[#A7C6A3]/20 focus:ring-2 focus:outline-none",
                    "text-[#2D5F4F] font-heading text-[15px] font-normal py-3 pl-12 pr-8",
                    "transition-all duration-300 hover:border-[#A7C6A3]/50 cursor-pointer",
                    errors.location && "border-[#E74C3C] ring-2 ring-[#E74C3C]/20"
                  )}
                  aria-describedby={errors.location ? "location-error" : undefined}
                >
                  <option value="patagonia">Patagonia, Chile</option>
                  <option value="rio-celeste">Río Celeste, Costa Rica</option>
                </select>
                
                {/* Ícono de destino */}
                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  {location === "patagonia" ? (
                    <Mountain className="w-5 h-5 text-[#3D6B7A]" />
                  ) : (
                    <Trees className="w-5 h-5 text-[#4A7C59]" />
                  )}
                </div>
                
                {/* Flecha del dropdown */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-[#A7C6A3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              
              {errors.location && (
                <p id="location-error" role="alert" className="text-[#E74C3C] text-xs mt-1">
                  {errors.location}
                </p>
              )}
            </div>

            {/* Check-in Date */}
            <div className="flex-1 lg:min-w-[160px] space-y-2">
              <Label 
                htmlFor="checkin" 
                className="flex items-center gap-2 text-[#6B6B6B] font-body font-medium text-[11px] tracking-wide uppercase"
              >
                <Calendar className="w-3 h-3 text-[#A7C6A3]" aria-hidden="true" />
                Check-in
              </Label>
              <Input
                id="checkin"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                error={errors.checkIn}
                className={cn(
                  "bg-white border-2 border-[#A7C6A3]/30 rounded-lg",
                  "focus:border-[#A7C6A3] focus:ring-[#A7C6A3]/20 focus:ring-2",
                  "text-[#2D5F4F] font-heading text-[15px] font-normal py-3 px-4",
                  "transition-all duration-300 hover:border-[#A7C6A3]/50"
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
            <div className="flex-1 lg:min-w-[160px] space-y-2">
              <Label 
                htmlFor="checkout" 
                className="flex items-center gap-2 text-[#6B6B6B] font-body font-medium text-[11px] tracking-wide uppercase"
              >
                <Calendar className="w-3 h-3 text-[#A7C6A3]" aria-hidden="true" />
                Check-out
              </Label>
              <Input
                id="checkout"
                type="date"
                min={minCheckOut}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                error={errors.checkOut}
                className={cn(
                  "bg-white border-2 border-[#A7C6A3]/30 rounded-lg",
                  "focus:border-[#A7C6A3] focus:ring-[#A7C6A3]/20 focus:ring-2",
                  "text-[#2D5F4F] font-heading text-[15px] font-normal py-3 px-4",
                  "transition-all duration-300 hover:border-[#A7C6A3]/50"
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
            <div className="flex-1 lg:min-w-[180px] space-y-2">
              <Label 
                htmlFor="passengers" 
                className="flex items-center gap-2 text-[#6B6B6B] font-body font-medium text-[11px] tracking-wide uppercase"
              >
                <Users className="w-3 h-3 text-[#A7C6A3]" aria-hidden="true" />
                Huéspedes
              </Label>
              <div 
                className={cn(
                  "flex items-center bg-white border-2 border-[#A7C6A3]/30 rounded-lg",
                  "transition-all duration-300 hover:border-[#A7C6A3]/50",
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
                    "bg-transparent hover:bg-[#A7C6A3]/10 text-[#A7C6A3] p-3 rounded-l-lg border-0",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-all duration-200"
                  )}
                  aria-label="Disminuir número de huéspedes"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <div 
                  className="flex-1 text-center py-3 px-4 text-[#2D5F4F] font-heading text-[15px] font-normal bg-transparent border-0"
                  role="spinbutton"
                  aria-valuenow={passengers}
                  aria-valuemin={1}
                  aria-valuemax={10}
                  aria-label={`${passengers} ${passengers === 1 ? 'huésped' : 'huéspedes'}`}
                >
                  {passengers} {passengers === 1 ? 'Huésped' : 'Huéspedes'}
                </div>
                <Button
                  type="button"
                  onClick={incrementPassengers}
                  disabled={passengers >= 10}
                  className={cn(
                    "bg-transparent hover:bg-[#A7C6A3]/10 text-[#A7C6A3] p-3 rounded-r-lg border-0",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "transition-all duration-200"
                  )}
                  aria-label="Aumentar número de huéspedes"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <p id="passengers-help" className="sr-only">
                Use los botones más y menos para ajustar el número de huéspedes entre 1 y 10
              </p>
              {errors.passengers && (
                <p id="passengers-error" role="alert" className="text-[#E74C3C] text-xs mt-1">
                  {errors.passengers}
                </p>
              )}
            </div>
            {/* Search CTA Button - Integrado en la fila horizontal */}
            <div className="lg:ml-4">
              <div className="h-[27px] lg:block hidden"></div> {/* Spacer para alinear con labels */}
              <Button 
                type="submit" 
                size="lg"
                className={cn(
                  "bg-gradient-to-r from-[#4A7C59] to-[#2D5F4F] hover:from-[#2D5F4F] hover:to-[#1A2E2A]",
                  // Tipografía CTA: fuente secundaria, 15px, peso 700, blanco
                  "text-white font-body font-bold text-[15px] px-8 py-3 h-[52px]",
                  "rounded-lg shadow-[0_4px_20px_rgba(74,124,89,0.4)]",
                  "transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_28px_rgba(74,124,89,0.6)]",
                  "focus:ring-4 focus:ring-[#4A7C59]/30 focus:outline-none",
                  "min-w-[140px] lg:min-w-[160px]"
                )}
                aria-describedby="search-button-help"
              >
                Buscar
              </Button>
            </div>
          </div>

          {/* Microcopy de apoyo */}
          <div className="text-center lg:text-left">
            <p className="text-[#6B6B6B] font-body text-[12px] font-light">
              Mínimo 2 noches • Mejor tarifa con anticipación
            </p>
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