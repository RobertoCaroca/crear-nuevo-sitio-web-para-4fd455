import { BookingEngine } from "./ui/booking-engine"

export function HeroSection() {
  return (
    <section className="relative h-[70vh] md:h-[70vh] lg:h-[70vh] overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {/* Placeholder for 4K video - using image fallback */}
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&h=1440&auto=format&fit=crop"
          alt="Experiencias eco-glamping en destinos prístinos"
          className="w-full h-full object-cover"
        />
        {/* Video would go here */}
        {/* <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video> */}
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-600">
          {/* Main Heading */}
          <h1 className="text-h1 text-[#F5F1E8] font-bold">
            Lujo en Armonía con la Naturaleza
          </h1>
          
          {/* Descriptor */}
          <p className="text-body text-[#F5F1E8] max-w-2xl mx-auto">
            Experiencias eco-glamping premium en destinos prístinos. 
            Hospedaje sostenible en armonía con ecosistemas protegidos.
          </p>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a 
              href="#reservas" 
              className="inline-block bg-[#2D5F4F] text-[#F5F1E8] px-8 py-4 rounded-lg text-label font-medium transition-all duration-300 hover:bg-[#2D5F4F]/90 hover:scale-105"
            >
              Reservar Ahora
            </a>
          </div>
        </div>
        
        {/* Booking Engine - Bottom Aligned on Desktop */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 hidden md:block">
          <BookingEngine />
        </div>
      </div>
      
      {/* Mobile Booking Engine - Below Hero */}
      <div className="md:hidden bg-[#F5F1E8] p-4">
        <BookingEngine />
      </div>
    </section>
  )
}