"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input, Label } from "./input"
import { Calendar } from "lucide-react"

export interface DateRangePickerProps {
  checkIn: string
  checkOut: string
  onCheckInChange: (date: string) => void
  onCheckOutChange: (date: string) => void
  errors?: {
    checkIn?: string
    checkOut?: string
  }
  className?: string
}

const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  ({ checkIn, checkOut, onCheckInChange, onCheckOutChange, errors, className }, ref) => {
    const today = new Date().toISOString().split('T')[0]
    const minCheckOut = checkIn || today

    return (
      <div ref={ref} className={cn("flex flex-col lg:flex-row gap-3 flex-1", className)}>
        {/* Check-in Date */}
        <div className="flex-1 lg:min-w-[160px] space-y-2">
          <Label 
            htmlFor="checkin" 
            className="flex items-center gap-2 text-[#6B6B6B] font-body font-medium text-[11px] tracking-wide uppercase"
          >
            <Calendar className="w-3 h-3 text-[#A7C6A3]" aria-hidden="true" />
            Check-in
          </Label>
          <div className="relative">
            <Input
              id="checkin"
              type="date"
              min={today}
              value={checkIn}
              onChange={(e) => onCheckInChange(e.target.value)}
              error={errors?.checkIn}
              className={cn(
                "bg-white border-2 border-[#A7C6A3]/30 rounded-lg",
                "focus:border-[#A7C6A3] focus:ring-[#A7C6A3]/20 focus:ring-2",
                "text-[#2D5F4F] font-heading text-[15px] font-normal py-3 px-4",
                "transition-all duration-300 hover:border-[#A7C6A3]/50 cursor-pointer",
                // Estilo mejorado para conectar visualmente con check-out
                "lg:rounded-r-none lg:border-r-0"
              )}
              aria-describedby={errors?.checkIn ? "checkin-error" : undefined}
            />
          </div>
          {errors?.checkIn && (
            <p id="checkin-error" role="alert" className="text-[#E74C3C] text-xs mt-1">
              {errors.checkIn}
            </p>
          )}
        </div>

        {/* Separador visual */}
        <div className="hidden lg:flex items-end pb-2">
          <div className="h-[52px] w-px bg-[#A7C6A3]/30 self-end"></div>
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
          <div className="relative">
            <Input
              id="checkout"
              type="date"
              min={minCheckOut}
              value={checkOut}
              onChange={(e) => onCheckOutChange(e.target.value)}
              error={errors?.checkOut}
              className={cn(
                "bg-white border-2 border-[#A7C6A3]/30 rounded-lg",
                "focus:border-[#A7C6A3] focus:ring-[#A7C6A3]/20 focus:ring-2",
                "text-[#2D5F4F] font-heading text-[15px] font-normal py-3 px-4",
                "transition-all duration-300 hover:border-[#A7C6A3]/50 cursor-pointer",
                // Estilo mejorado para conectar visualmente con check-in
                "lg:rounded-l-none"
              )}
              aria-describedby={errors?.checkOut ? "checkout-error" : undefined}
            />
          </div>
          {errors?.checkOut && (
            <p id="checkout-error" role="alert" className="text-[#E74C3C] text-xs mt-1">
              {errors.checkOut}
            </p>
          )}
        </div>
      </div>
    )
  }
)

DateRangePicker.displayName = "DateRangePicker"

export { DateRangePicker }