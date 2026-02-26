'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

type Destination = 'patagonia' | 'rio-celeste';

export default function HeroDual() {
  const [activeDestination, setActiveDestination] = useState<Destination>('patagonia');
  const [showBookingEngine, setShowBookingEngine] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showBookingEngine) {
        setShowBookingEngine(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showBookingEngine]);

  // Focus management para modal
  useEffect(() => {
    if (showBookingEngine && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [showBookingEngine]);

  const destinations = {
    patagonia: {
      title: 'Patagonia Prístina',
      subtitle: 'Glaciares, Torres del Paine y lujo carbononeutral',
      videoSrc: '/videos/patagonia-hero.mp4',
      color: 'from-gray-600 to-blue-900',
      accentColor: 'text-blue-300'
    },
    'rio-celeste': {
      title: 'Río Celeste Místico',
      subtitle: 'Volcanes, termales y canopy eco-sostenible',
      videoSrc: '/videos/rio-celeste-hero.mp4',
      color: 'from-sky-400 to-teal-600',
      accentColor: 'text-sky-300'
    }
  };

  return (
    <section 
      className="relative h-screen lg:h-[70vh] w-full overflow-hidden bg-gray-900"
      aria-label="Hero section con destinos Patagonia y Río Celeste"
    >
      {/* Videos paralelos */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Video Patagonia */}
        <div className="relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              activeDestination === 'patagonia' ? 'opacity-100' : 'opacity-60'
            }`}
            aria-label="Video de Patagonia mostrando glaciares y Torres del Paine"
          >
            <source src="/videos/patagonia-hero.webm" type="video/webm" />
            <source src="/videos/patagonia-hero.mp4" type="video/mp4" />
            Su navegador no soporta videos HTML5.
          </video>
          {/* Overlay interactivo */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${destinations.patagonia.color} opacity-30 cursor-pointer transition-opacity hover:opacity-20`}
            onClick={() => setActiveDestination('patagonia')}
            role="button"
            tabIndex={0}
            aria-label="Seleccionar destino Patagonia"
            onKeyDown={(e) => e.key === 'Enter' && setActiveDestination('patagonia')}
          />
        </div>

        {/* Video Río Celeste */}
        <div className="relative overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              activeDestination === 'rio-celeste' ? 'opacity-100' : 'opacity-60'
            }`}
            aria-label="Video de Río Celeste mostrando volcanes, canopy y termales"
          >
            <source src="/videos/rio-celeste-hero.webm" type="video/webm" />
            <source src="/videos/rio-celeste-hero.mp4" type="video/mp4" />
            Su navegador no soporta videos HTML5.
          </video>
          {/* Overlay interactivo */}
          <div
            className={`absolute inset-0 bg-gradient-to-r ${destinations['rio-celeste'].color} opacity-30 cursor-pointer transition-opacity hover:opacity-20`}
            onClick={() => setActiveDestination('rio-celeste')}
            role="button"
            tabIndex={0}
            aria-label="Seleccionar destino Río Celeste"
            onKeyDown={(e) => e.key === 'Enter' && setActiveDestination('rio-celeste')}
          />
        </div>
      </div>

      {/* Overlay principal con contenido */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
        <div className="mx-auto max-w-6xl px-4 text-center text-white">
          {/* Toggle de destinos */}
          <div className="mb-8 flex justify-center">
            <div 
              ref={toggleRef}
              className="flex items-center rounded-full bg-white/10 backdrop-blur-md p-1 border border-white/20"
              role="tablist"
              aria-label="Selector de destinos turísticos"
            >
              <button
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeDestination === 'patagonia'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveDestination('patagonia')}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActiveDestination('rio-celeste');
                  }
                }}
                role="tab"
                aria-selected={activeDestination === 'patagonia'}
                aria-controls="hero-content"
                tabIndex={activeDestination === 'patagonia' ? 0 : -1}
              >
                <span className="flex items-center gap-2">
                  🏔️ Patagonia
                </span>
              </button>
              <button
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeDestination === 'rio-celeste'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() => setActiveDestination('rio-celeste')}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActiveDestination('patagonia');
                  }
                }}
                role="tab"
                aria-selected={activeDestination === 'rio-celeste'}
                aria-controls="hero-content"
                tabIndex={activeDestination === 'rio-celeste' ? 0 : -1}
              >
                <span className="flex items-center gap-2">
                  🌊 Río Celeste
                </span>
              </button>
            </div>
          </div>

          {/* Contenido dinámico */}
          <div id="hero-content" role="tabpanel">
            {/* Badge ecológico */}
            <div className="mb-4 flex justify-center gap-2">
              <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm border border-green-400/30">
                🌿 Green Key Certified
              </span>
              <span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm border border-green-400/30">
                🌱 Carbon Neutral
              </span>
            </div>

            {/* Título principal */}
            <h1 className="hero-title mb-4 text-4xl leading-tight md:text-6xl lg:text-7xl">
              Eco-Glamping Prístino:<br />
              <span className={destinations[activeDestination].accentColor}>
                {destinations[activeDestination].title}
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="hero-subtitle mx-auto mb-8 max-w-3xl text-lg md:text-xl lg:text-2xl">
              {destinations[activeDestination].subtitle}
              <br />
              <span className="text-yellow-300">-10% reserva directa</span>
            </p>

            {/* CTAs principales */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-600/25 transition-all duration-300 hover:scale-105 px-8 py-4"
                onClick={() => setShowBookingEngine(true)}
                aria-describedby="reservar-descripcion"
              >
                Reservar Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
                aria-describedby="explorar-descripcion"
              >
                Explorar {destinations[activeDestination].title}
              </Button>
            </div>
            
            {/* Descripciones ocultas para accesibilidad */}
            <div className="sr-only">
              <p id="reservar-descripcion">Abrir motor de reservas para {destinations[activeDestination].title}</p>
              <p id="explorar-descripcion">Explorar más información sobre {destinations[activeDestination].title}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust signals - responsive positioning */}
      <div className="absolute bottom-4 left-4 right-4 lg:bottom-4 lg:right-4 lg:left-auto lg:max-w-xs">
        <div className="rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/20">
          {/* Desktop version */}
          <div className="hidden lg:block">
            <div className="flex items-center gap-2 text-white mb-2">
              <span className="text-yellow-400" aria-label="5 de 5 estrellas">★★★★★</span>
              <span className="text-sm font-medium">4.8 TripAdvisor</span>
            </div>
            <p className="text-xs text-gray-300">Cancelación gratuita</p>
            <p className="text-xs text-gray-300">Green Key Certified</p>
          </div>
          
          {/* Mobile version - horizontal */}
          <div className="lg:hidden flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400" aria-label="5 de 5 estrellas">★★★★★</span>
              <span className="text-sm font-medium">4.8</span>
            </div>
            <div className="text-xs text-gray-300">
              <span>Cancelación gratis</span>
              <span className="mx-2">•</span>
              <span>Green Key</span>
            </div>
          </div>
        </div>
      </div>

      {/* Motor de reservas (modal) */}
      {showBookingEngine && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
          aria-describedby="booking-description"
        >
          <div 
            ref={modalRef}
            className="mx-4 max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            role="document"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 id="booking-title" className="text-xl font-semibold text-gray-900">
                Reservar - {destinations[activeDestination].title}
              </h3>
              <button
                onClick={() => setShowBookingEngine(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                aria-label="Cerrar motor de reservas"
              >
                <span className="sr-only">Cerrar</span>
                ✕
              </button>
            </div>
            
            <p id="booking-description" className="sr-only">
              Formulario de reserva para {destinations[activeDestination].title}. Complete las fechas y número de huéspedes.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label 
                  htmlFor="checkin-date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Fecha de entrada *
                </label>
                <input
                  id="checkin-date"
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  aria-describedby="date-help"
                />
                <p id="date-help" className="text-xs text-gray-500 mt-1">
                  Seleccione su fecha de llegada
                </p>
              </div>
              
              <div>
                <label 
                  htmlFor="guest-count"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Número de huéspedes *
                </label>
                <select 
                  id="guest-count"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  aria-describedby="guest-help"
                >
                  <option value="">Seleccionar huéspedes</option>
                  <option value="1">1 huésped</option>
                  <option value="2">2 huéspedes</option>
                  <option value="3">3 huéspedes</option>
                  <option value="4">4+ huéspedes</option>
                </select>
                <p id="guest-help" className="text-xs text-gray-500 mt-1">
                  Máximo 4 huéspedes por glamping
                </p>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
                size="lg"
                aria-describedby="submit-help"
              >
                Buscar Disponibilidad
              </Button>
              <p id="submit-help" className="text-xs text-center text-gray-500">
                Se abrirá el sistema de reservas externo
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}