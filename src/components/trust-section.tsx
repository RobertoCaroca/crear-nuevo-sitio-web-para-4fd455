"use client"

import * as React from "react"
import { Button } from "./ui/button"

export function TrustSection() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0)
  
  const testimonials = [
    {
      name: "María González",
      location: "San José, Costa Rica",
      rating: 5,
      text: "Una experiencia transformadora. El equilibrio perfecto entre lujo y sostenibilidad.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b734?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "David Johnson",
      location: "Miami, USA", 
      rating: 5,
      text: "Jamás pensé que podría disfrutar tanto del confort en medio de la naturaleza virgen.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Ana Rodríguez",
      location: "Barcelona, España",
      rating: 5,
      text: "Los domos geodésicos son impresionantes. Una arquitectura que respeta el entorno.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Carlos Mendoza",
      location: "Medellín, Colombia",
      rating: 5,
      text: "El servicio excepcional y la consciencia ambiental hacen de Auralta algo único.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
    },
    {
      name: "Sophie Martin",
      location: "París, Francia",
      rating: 5,
      text: "Une expérience magique dans un cadre préservé. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face"
    }
  ]

  const certifications = [
    {
      name: "Green Key Eco",
      logo: "🌱",
      description: "Certificación internacional de sostenibilidad ambiental"
    },
    {
      name: "Carbon Trust",
      logo: "🌍",
      description: "Carbono neutral certificado y medición de huella ambiental"
    },
    {
      name: "LEED Gold",
      logo: "🏆",
      description: "Construcción sostenible y eficiencia energética"
    },
    {
      name: "WWF Partner",
      logo: "🐾",
      description: "Aliado en conservación y protección de ecosistemas"
    }
  ]

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`text-[#D4AF37] ${i < rating ? 'opacity-100' : 'opacity-30'}`}
      >
        ★
      </span>
    ))
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Calificación y Reseñas */}
          <div className="space-y-8">
            {/* Rating Header */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <div className="flex text-[#D4AF37]">
                    {renderStars(5)}
                  </div>
                  <span className="text-h3 font-bold text-[#4A4A4A]">4.8</span>
                </div>
                <p className="text-small text-muted-foreground">
                  4.8/5 basado en 287 reseñas
                </p>
              </div>
            </div>
            
            <Button variant="link" size="sm">
              Ver todas las reseñas →
            </Button>

            {/* Testimonial Carousel */}
            <div className="relative bg-[#D4D4D8]/30 rounded-xl p-6 min-h-[200px]">
              <div className="space-y-4">
                {/* Avatar and Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-label font-medium text-[#4A4A4A]">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-small text-muted-foreground">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex text-[#D4AF37]">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-body text-[#4A4A4A] leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial 
                        ? 'bg-[#2D5F4F]' 
                        : 'bg-[#D4D4D8]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Certificaciones */}
          <div className="space-y-8">
            <h3 className="text-h2 text-[#4A4A4A]">
              Certificaciones y Alianzas
            </h3>
            
            <div className="grid grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-lg p-6 border border-[#D4D4D8] hover:border-[#2D5F4F] transition-all duration-300 hover:shadow-lg"
                >
                  {/* Logo */}
                  <div className="text-4xl mb-3">
                    {cert.logo}
                  </div>
                  
                  {/* Name */}
                  <h4 className="text-label font-bold text-[#4A4A4A] mb-2">
                    {cert.name}
                  </h4>
                  
                  {/* Tooltip on hover */}
                  <div className="absolute invisible group-hover:visible bg-[#4A4A4A] text-[#F5F1E8] text-small p-4 rounded-lg shadow-lg -top-2 left-0 right-0 z-10 transform -translate-y-full">
                    {cert.description}
                    <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#4A4A4A]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}