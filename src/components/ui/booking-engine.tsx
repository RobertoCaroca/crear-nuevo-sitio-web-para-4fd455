"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Input, Select, Label } from "./input"

export interface BookingEngineProps {
  className?: string
  sticky?: boolean
  destination?: "patagonia" | "rio-celeste"
}

const BookingEngine = React.forwardRef<HTMLDivElement, BookingEngineProps>(
  ({ className, sticky = false, destination }, ref) => {
    const [checkIn, setCheckIn] = React.useState("")
    const [checkOut, setCheckOut] = React.useState("")
    const [roomType, setRoomType] = React.useState("")
    const [guests, setGuests] = React.useState("")
    const [selectedDestination, setSelectedDestination] = React.useState(destination || "patagonia")
    const [errors, setErrors] = React.useState<Record<string, string>>({})

    // Room options by destination
    const roomOptions = {
      patagonia: [
        { value: "geodesica-glaciar", label: "Domo Geodésico Glaciar" },
        { value: "bungalow-torres", label: "Bungalow Torres del Paine" },
        { value: "suite-patagonica", label: "Suite Patagónica" },
        { value: "villa-andina", label: "Villa Andina Privada" }
      ],
      "rio-celeste": [
        { value: "geodesica-volcan", label: "Domo Geodésico Volcánico" },
        { value: "bungalow-termal", label: "Bungalow Termal" },
        { value: "suite-canopy", label: "Suite Canopy" },
        { value: "villa-celeste", label: "Villa Río Celeste" }
      ]
    }

    const validateForm = () => {
      const newErrors: Record<string, string> = {}
      
      if (!destination && !selectedDestination) newErrors.destination = "Destino requerido"
      if (!checkIn) newErrors.checkIn = "Fecha de entrada requerida"
      if (!checkOut) newErrors.checkOut = "Fecha de salida requerida"
      if (!roomType) newErrors.roomType = "Tipo de habitación requerido"
      if (!guests) newErrors.guests = "Número de huéspedes requerido"
      
      if (checkIn && checkOut && new Date(checkIn) >= new Date(checkOut)) {
        newErrors.checkOut = "Fecha de salida debe ser posterior a la entrada"
      }

      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      if (validateForm()) {
        const searchData = {
          destination: destination || selectedDestination,
          checkIn,
          checkOut,
          roomType,
          guests
        }
        // Aquí iría la lógica de búsqueda de disponibilidad
        console.log("Búsqueda de disponibilidad", searchData)
        
        // Redirect to external booking engine with pre-filtered data
        const params = new URLSearchParams({
          dest: searchData.destination,
          checkin: searchData.checkIn,
          checkout: searchData.checkOut,
          room: searchData.roomType,
          guests: searchData.guests
        })
        
        // Simulate redirect to external booking system
        window.open(`https://booking.auralta.com/search?${params.toString()}`, '_blank')
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "bg-[#F5F1E8] rounded-lg shadow-[0_4px_16px_rgba(0,0,0,0.1)] transition-all duration-300",
          sticky ? "h-20 px-8 py-4" : "p-6 md:p-8",
          className
        )}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Pre-filled destination indicator */}
          {destination && (
            <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-lg p-3 mb-4">
              <div className="flex items-center gap-2 text-[#2D5F4F]">
                <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                <span className="text-sm font-medium">
                  Destino pre-seleccionado: {destination === "patagonia" ? "Patagonia Glaciar" : "Río Celeste Volcánico"}
                </span>
              </div>
            </div>
          )}

          <div className={cn(
            "grid gap-4",
            !destination 
              ? (sticky ? "grid-cols-2 md:grid-cols-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-5")
              : (sticky ? "grid-cols-2 md:grid-cols-5" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4")
          )}>
            {/* Destination Selector - Only show if not pre-filled */}
            {!destination && (
              <div className="space-y-2">
                <Label htmlFor="destination">Destino</Label>
                <Select
                  id="destination"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value as "patagonia" | "rio-celeste")}
                  error={errors.destination}
                >
                  <option value="patagonia">Patagonia</option>
                  <option value="rio-celeste">Río Celeste</option>
                </Select>
              </div>
            )}

            {/* Check-in */}
            <div className="space-y-2">
              <Label htmlFor="checkin">Fecha de Entrada</Label>
              <Input
                id="checkin"
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                error={errors.checkIn}
                className={sticky ? "py-2" : ""}
              />
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <Label htmlFor="checkout">Fecha de Salida</Label>
              <Input
                id="checkout"
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                error={errors.checkOut}
                className={sticky ? "py-2" : ""}
              />
            </div>

            {/* Room Type */}
            <div className="space-y-2">
              <Label htmlFor="roomtype">Tipo de Habitación</Label>
              <Select
                id="roomtype"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                error={errors.roomType}
              >
                <option value="">Seleccionar</option>
                {roomOptions[destination || selectedDestination].map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <Label htmlFor="guests">Huéspedes</Label>
              <Select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                error={errors.guests}
              >
                <option value="">Cantidad</option>
                <option value="1">1 Huésped</option>
                <option value="2">2 Huéspedes</option>
                <option value="3">3 Huéspedes</option>
                <option value="4">4 Huéspedes</option>
                <option value="4+">4+ Huéspedes</option>
              </Select>
            </div>

            {/* Submit Button */}
            <div className={cn(
              "flex items-end",
              sticky ? "col-span-1" : "col-span-full md:col-span-1 lg:col-span-1"
            )}>
              <Button 
                type="submit" 
                className="w-full bg-[#10B981] hover:bg-[#2D5F4F] text-white"
                size={sticky ? "compact" : "default"}
              >
                Buscar Disponibilidad
              </Button>
            </div>
          </div>
        </form>
      </div>
    )
  }
)
BookingEngine.displayName = "BookingEngine"

export { BookingEngine }