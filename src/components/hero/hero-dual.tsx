'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

type Destination = 'patagonia' | 'rio-celeste';

export default function HeroDual() {
  const [activeDestination, setActiveDestination] = useState&lt;Destination&gt;('patagonia');
  const [showBookingEngine, setShowBookingEngine] = useState(false);
  const modalRef = useRef&lt;HTMLDivElement&gt;(null);
  const toggleRef = useRef&lt;HTMLDivElement&gt;(null);

  // Cerrar modal con Escape
  useEffect(() =&gt; {
    const handleEscape = (e: KeyboardEvent) =&gt; {
      if (e.key === 'Escape' && showBookingEngine) {
        setShowBookingEngine(false);
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () =&gt; document.removeEventListener('keydown', handleEscape);
  }, [showBookingEngine]);

  // Focus management para modal
  useEffect(() =&gt; {
    if (showBookingEngine && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length &gt; 0) {
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
    &lt;section 
      className="relative h-screen lg:h-[70vh] w-full overflow-hidden bg-gray-900"
      aria-label="Hero section con destinos Patagonia y Río Celeste"
    &gt;
      {/* Videos paralelos */}
      &lt;div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2"&gt;
        {/* Video Patagonia */}
        &lt;div className="relative overflow-hidden"&gt;
          &lt;video
            autoPlay
            muted
            loop
            playsInline
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              activeDestination === 'patagonia' ? 'opacity-100' : 'opacity-60'
            }`}
            aria-label="Video de Patagonia mostrando glaciares y Torres del Paine"
          &gt;
            &lt;source src="/videos/patagonia-hero.webm" type="video/webm" /&gt;
            &lt;source src="/videos/patagonia-hero.mp4" type="video/mp4" /&gt;
            Su navegador no soporta videos HTML5.
          &lt;/video&gt;
          {/* Overlay interactivo */}
          &lt;div
            className={`absolute inset-0 bg-gradient-to-r ${destinations.patagonia.color} opacity-30 cursor-pointer transition-opacity hover:opacity-20`}
            onClick={() =&gt; setActiveDestination('patagonia')}
            role="button"
            tabIndex={0}
            aria-label="Seleccionar destino Patagonia"
            onKeyDown={(e) =&gt; e.key === 'Enter' && setActiveDestination('patagonia')}
          /&gt;
        &lt;/div&gt;

        {/* Video Río Celeste */}
        &lt;div className="relative overflow-hidden"&gt;
          &lt;video
            autoPlay
            muted
            loop
            playsInline
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              activeDestination === 'rio-celeste' ? 'opacity-100' : 'opacity-60'
            }`}
            aria-label="Video de Río Celeste mostrando volcanes, canopy y termales"
          &gt;
            &lt;source src="/videos/rio-celeste-hero.webm" type="video/webm" /&gt;
            &lt;source src="/videos/rio-celeste-hero.mp4" type="video/mp4" /&gt;
            Su navegador no soporta videos HTML5.
          &lt;/video&gt;
          {/* Overlay interactivo */}
          &lt;div
            className={`absolute inset-0 bg-gradient-to-r ${destinations['rio-celeste'].color} opacity-30 cursor-pointer transition-opacity hover:opacity-20`}
            onClick={() =&gt; setActiveDestination('rio-celeste')}
            role="button"
            tabIndex={0}
            aria-label="Seleccionar destino Río Celeste"
            onKeyDown={(e) =&gt; e.key === 'Enter' && setActiveDestination('rio-celeste')}
          /&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      {/* Overlay principal con contenido */}
      &lt;div className="absolute inset-0 flex items-center justify-center bg-black/20"&gt;
        &lt;div className="mx-auto max-w-6xl px-4 text-center text-white"&gt;
          {/* Toggle de destinos */}
          &lt;div className="mb-8 flex justify-center"&gt;
            &lt;div 
              ref={toggleRef}
              className="flex items-center rounded-full bg-white/10 backdrop-blur-md p-1 border border-white/20"
              role="tablist"
              aria-label="Selector de destinos turísticos"
            &gt;
              &lt;button
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeDestination === 'patagonia'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() =&gt; setActiveDestination('patagonia')}
                onKeyDown={(e) =&gt; {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setActiveDestination('rio-celeste');
                  }
                }}
                role="tab"
                aria-selected={activeDestination === 'patagonia'}
                aria-controls="hero-content"
                tabIndex={activeDestination === 'patagonia' ? 0 : -1}
              &gt;
                &lt;span className="flex items-center gap-2"&gt;
                  🏔️ Patagonia
                &lt;/span&gt;
              &lt;/button&gt;
              &lt;button
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
                  activeDestination === 'rio-celeste'
                    ? 'bg-white text-gray-900 shadow-lg'
                    : 'text-white hover:bg-white/10'
                }`}
                onClick={() =&gt; setActiveDestination('rio-celeste')}
                onKeyDown={(e) =&gt; {
                  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    setActiveDestination('patagonia');
                  }
                }}
                role="tab"
                aria-selected={activeDestination === 'rio-celeste'}
                aria-controls="hero-content"
                tabIndex={activeDestination === 'rio-celeste' ? 0 : -1}
              &gt;
                &lt;span className="flex items-center gap-2"&gt;
                  🌊 Río Celeste
                &lt;/span&gt;
              &lt;/button&gt;
            &lt;/div&gt;
          &lt;/div&gt;

          {/* Contenido dinámico */}
          &lt;div id="hero-content" role="tabpanel"&gt;
            {/* Badge ecológico */}
            &lt;div className="mb-4 flex justify-center gap-2"&gt;
              &lt;span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm border border-green-400/30"&gt;
                🌿 Green Key Certified
              &lt;/span&gt;
              &lt;span className="rounded-full bg-green-600/20 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm border border-green-400/30"&gt;
                🌱 Carbon Neutral
              &lt;/span&gt;
            &lt;/div&gt;

            {/* Título principal */}
            &lt;h1 className="hero-title mb-4 text-4xl leading-tight md:text-6xl lg:text-7xl"&gt;
              Eco-Glamping Prístino:&lt;br /&gt;
              &lt;span className={destinations[activeDestination].accentColor}&gt;
                {destinations[activeDestination].title}
              &lt;/span&gt;
            &lt;/h1&gt;

            {/* Subtítulo */}
            &lt;p className="hero-subtitle mx-auto mb-8 max-w-3xl text-lg md:text-xl lg:text-2xl"&gt;
              {destinations[activeDestination].subtitle}
              &lt;br /&gt;
              &lt;span className="text-yellow-300"&gt;-10% reserva directa&lt;/span&gt;
            &lt;/p&gt;

            {/* CTAs principales */}
            &lt;div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"&gt;
              &lt;Button
                size="lg"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-emerald-600/25 transition-all duration-300 hover:scale-105 px-8 py-4"
                onClick={() =&gt; setShowBookingEngine(true)}
                aria-describedby="reservar-descripcion"
              &gt;
                Reservar Ahora
              &lt;/Button&gt;
              &lt;Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4"
                aria-describedby="explorar-descripcion"
              &gt;
                Explorar {destinations[activeDestination].title}
              &lt;/Button&gt;
            &lt;/div&gt;
            
            {/* Descripciones ocultas para accesibilidad */}
            &lt;div className="sr-only"&gt;
              &lt;p id="reservar-descripcion"&gt;Abrir motor de reservas para {destinations[activeDestination].title}&lt;/p&gt;
              &lt;p id="explorar-descripcion"&gt;Explorar más información sobre {destinations[activeDestination].title}&lt;/p&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      {/* Trust signals - responsive positioning */}
      &lt;div className="absolute bottom-4 left-4 right-4 lg:bottom-4 lg:right-4 lg:left-auto lg:max-w-xs"&gt;
        &lt;div className="rounded-lg bg-white/10 backdrop-blur-md p-4 border border-white/20"&gt;
          {/* Desktop version */}
          &lt;div className="hidden lg:block"&gt;
            &lt;div className="flex items-center gap-2 text-white mb-2"&gt;
              &lt;span className="text-yellow-400" aria-label="5 de 5 estrellas"&gt;★★★★★&lt;/span&gt;
              &lt;span className="text-sm font-medium"&gt;4.8 TripAdvisor&lt;/span&gt;
            &lt;/div&gt;
            &lt;p className="text-xs text-gray-300"&gt;Cancelación gratuita&lt;/p&gt;
            &lt;p className="text-xs text-gray-300"&gt;Green Key Certified&lt;/p&gt;
          &lt;/div&gt;
          
          {/* Mobile version - horizontal */}
          &lt;div className="lg:hidden flex items-center justify-between text-white"&gt;
            &lt;div className="flex items-center gap-2"&gt;
              &lt;span className="text-yellow-400" aria-label="5 de 5 estrellas"&gt;★★★★★&lt;/span&gt;
              &lt;span className="text-sm font-medium"&gt;4.8&lt;/span&gt;
            &lt;/div&gt;
            &lt;div className="text-xs text-gray-300"&gt;
              &lt;span&gt;Cancelación gratis&lt;/span&gt;
              &lt;span className="mx-2"&gt;•&lt;/span&gt;
              &lt;span&gt;Green Key&lt;/span&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      {/* Motor de reservas (modal) */}
      {showBookingEngine && (
        &lt;div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-title"
          aria-describedby="booking-description"
        &gt;
          &lt;div 
            ref={modalRef}
            className="mx-4 max-w-md rounded-2xl bg-white p-6 shadow-2xl"
            role="document"
          &gt;
            &lt;div className="mb-4 flex items-center justify-between"&gt;
              &lt;h3 id="booking-title" className="text-xl font-semibold text-gray-900"&gt;
                Reservar - {destinations[activeDestination].title}
              &lt;/h3&gt;
              &lt;button
                onClick={() =&gt; setShowBookingEngine(false)}
                className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                aria-label="Cerrar motor de reservas"
              &gt;
                &lt;span className="sr-only"&gt;Cerrar&lt;/span&gt;
                ✕
              &lt;/button&gt;
            &lt;/div&gt;
            
            &lt;p id="booking-description" className="sr-only"&gt;
              Formulario de reserva para {destinations[activeDestination].title}. Complete las fechas y número de huéspedes.
            &lt;/p&gt;
            
            &lt;form className="space-y-4" onSubmit={(e) =&gt; e.preventDefault()}&gt;
              &lt;div&gt;
                &lt;label 
                  htmlFor="checkin-date"
                  className="block text-sm font-medium text-gray-700 mb-1"
                &gt;
                  Fecha de entrada *
                &lt;/label&gt;
                &lt;input
                  id="checkin-date"
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  aria-describedby="date-help"
                /&gt;
                &lt;p id="date-help" className="text-xs text-gray-500 mt-1"&gt;
                  Seleccione su fecha de llegada
                &lt;/p&gt;
              &lt;/div&gt;
              
              &lt;div&gt;
                &lt;label 
                  htmlFor="guest-count"
                  className="block text-sm font-medium text-gray-700 mb-1"
                &gt;
                  Número de huéspedes *
                &lt;/label&gt;
                &lt;select 
                  id="guest-count"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                  aria-describedby="guest-help"
                &gt;
                  &lt;option value=""&gt;Seleccionar huéspedes&lt;/option&gt;
                  &lt;option value="1"&gt;1 huésped&lt;/option&gt;
                  &lt;option value="2"&gt;2 huéspedes&lt;/option&gt;
                  &lt;option value="3"&gt;3 huéspedes&lt;/option&gt;
                  &lt;option value="4"&gt;4+ huéspedes&lt;/option&gt;
                &lt;/select&gt;
                &lt;p id="guest-help" className="text-xs text-gray-500 mt-1"&gt;
                  Máximo 4 huéspedes por glamping
                &lt;/p&gt;
              &lt;/div&gt;
              
              &lt;Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 transition-colors"
                size="lg"
                aria-describedby="submit-help"
              &gt;
                Buscar Disponibilidad
              &lt;/Button&gt;
              &lt;p id="submit-help" className="text-xs text-center text-gray-500"&gt;
                Se abrirá el sistema de reservas externo
              &lt;/p&gt;
            &lt;/form&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      )}
    &lt;/section&gt;
  );
}