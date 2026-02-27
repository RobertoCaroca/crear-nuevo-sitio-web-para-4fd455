"use client"

import * as React from "react"

export interface BottomSearchEngineProps {
  className?: string
  onSearch?: (data: SearchData) => void
}

export interface SearchData {
  location: string
  passengers: number
  dates: string
}

const BottomSearchEngine = React.forwardRef<HTMLDivElement, BottomSearchEngineProps>(
  ({ className, onSearch }, ref) => {
    const [location, setLocation] = React.useState("")
    const [passengers, setPassengers] = React.useState(1)
    const [dates, setDates] = React.useState("")

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      
      const searchData: SearchData = {
        location,
        passengers,
        dates
      }
      
      if (onSearch) {
        onSearch(searchData)
      } else {
        // Redirect to booking system or handle search
        console.log("Searching with:", searchData)
      }
    }

    return (
      <div
        ref={ref}
        className={`max-w-6xl mx-auto ${className || ''}`}
        role="search"
        aria-label="Motor de búsqueda de reservas"
      >
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6 items-end">
            
            {/* Location Field */}
            <div className="flex flex-col flex-1 mr-0 md:mr-6">
              <label 
                htmlFor="location" 
                className="text-xs text-[#6B6B6B] mb-1 font-light"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
              >
                Locación
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-4 border border-[#E0E0E0] text-sm text-[#2D2D2D] w-full md:w-[200px] bg-white"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              >
                <option value="">Seleccionar destino</option>
                <option value="patagonia">Patagonia</option>
                <option value="rio-celeste">Río Celeste</option>
              </select>
            </div>

            {/* Passengers Field */}
            <div className="flex flex-col flex-1 mr-0 md:mr-6">
              <label 
                htmlFor="passengers" 
                className="text-xs text-[#6B6B6B] mb-1 font-light"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
              >
                Pasajeros
              </label>
              <input
                id="passengers"
                type="number"
                min="1"
                max="10"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value) || 1)}
                placeholder="Huéspedes"
                className="p-4 border border-[#E0E0E0] text-sm text-[#2D2D2D] w-full md:w-[200px] bg-white"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              />
            </div>

            {/* Dates Field */}
            <div className="flex flex-col flex-1 mr-0 md:mr-6">
              <label 
                htmlFor="dates" 
                className="text-xs text-[#6B6B6B] mb-1 font-light"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}
              >
                Fechas
              </label>
              <input
                id="dates"
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder="Fechas"
                className="p-4 border border-[#E0E0E0] text-sm text-[#2D2D2D] w-full md:w-[200px] bg-white"
                style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="bg-[#4A7C59] hover:bg-[rgba(74,124,89,0.85)] text-white py-2 px-6 cursor-pointer text-sm transition-colors duration-200 border-0"
              style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', padding: '8px 24px' }}
            >
              Buscar Disponibilidad
            </button>
          </div>
        </form>
      </div>
    )
  }
)

BottomSearchEngine.displayName = "BottomSearchEngine"

export { BottomSearchEngine }