"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "./button"
import { Input, Select, Label } from "./input"

export interface SimpleBookingEngineProps {
  className?: string
}

const SimpleBookingEngine = React.forwardRef<HTMLDivElement, SimpleBookingEngineProps>(
  ({ className }, ref) => {
    const [checkIn, setCheckIn] = React.useState("")
    const [checkOut, setCheckOut] = React.useState("")
    const [guests, setGuests] = React.useState("")
    const [selectedDestination, setSelectedDestination] = React.useState("patagonia")
    const [errors, setErrors] = React.useState<Record<string, string>>({})

    const validateForm = () => {
      const newErrors: Record<string, string> = {}
      
      if (!selectedDestination) newErrors.destination = "Destino requerido"
      if (!checkIn) newErrors.checkIn = "Fecha de entrada requerida"
      if (!checkOut) newErrors.checkOut = "Fecha de salida requerida"
      if (!guests) newErrors.guests = "Número de pasajeros requerido"
      
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
          destination: selectedDestination,
          checkIn,
          checkOut,
          guests
        }
        
        console.log("Búsqueda de disponibilidad", searchData)
        
        // Redirect to external booking engine with pre-filtered data
        const params = new URLSearchParams({
          dest: searchData.destination,
          checkin: searchData.checkIn,
          checkout: searchData.checkOut,
          guests: searchData.guests
        })
        
        // Simulate redirect to external booking system
        window.open(`https://booking.auralta.com/search?${params.toString()}`, '_blank')
      }
    }

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0]

    return (
      <div
        ref={ref}
        className={cn(
          "bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 mx-auto max-w-4xl",
          className
        )}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Locación */}
            <div className="space-y-2">
              <Label htmlFor="destination" className="text-gray-700 font-medium">Locación</Label>
              <Select
                id="destination"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value as "patagonia" | "rio-celeste")}
                error={errors.destination}
                className="bg-white border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option value="patagonia">Patagonia</option>
                <option value="rio-celeste">Río Celeste</option>
              </Select>
            </div>

            {/* Fecha de Entrada */}
            <div className="space-y-2">
              <Label htmlFor="checkin" className="text-gray-700 font-medium">Fecha de Entrada</Label>
              <Input
                id="checkin"
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                error={errors.checkIn}
                className="bg-white border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            {/* Fecha de Salida */}
            <div className="space-y-2">
              <Label htmlFor="checkout" className="text-gray-700 font-medium">Fecha de Salida</Label>
              <Input
                id="checkout"
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                error={errors.checkOut}
                className="bg-white border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              />
            </div>

            {/* Número de Pasajeros */}
            <div className="space-y-2">
              <Label htmlFor="guests" className="text-gray-700 font-medium">Pasajeros</Label>
              <Select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                error={errors.guests}
                className="bg-white border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
              >
                <option value="">Cantidad</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num.toString()}>
                    {num} {num === 1 ? 'Pasajero' : 'Pasajeros'}
                  </option>
                ))}
              </Select>
            </div>
          </div>

          {/* Botón Reservar */}
          <div className="flex justify-center pt-4">
            <Button 
              type="submit" 
              className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-12 py-3 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Reservar
            </Button>
          </div>
        </form>
      </div>
    )
  }
)
SimpleBookingEngine.displayName = "SimpleBookingEngine"

export { SimpleBookingEngine }