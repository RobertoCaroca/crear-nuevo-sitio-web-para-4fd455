"use client"

import { AuraltaHeader } from "@/components/auralta-header"
import { AuraltaFooter } from "@/components/auralta-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function RioCelestePage() {
  const testimonials = [
    {
      text: "El color turquesa del río es más impresionante de lo que las fotos pueden mostrar. Una experiencia mágica e inolvidable.",
      author: "Laura Jiménez"
    },
    {
      text: "La biodiversidad y tranquilidad de este lugar son extraordinarias. Auralta nos permitió conectar profundamente con la naturaleza.",
      author: "Roberto Silva"
    },
    {
      text: "Las aguas termales y la selva exuberante crean un oasis perfecto para renovar el alma y el cuerpo.",
      author: "Patricia Morales"
    }
  ]

  const experiences = [
    {
      title: "Senderismo por el Parque Nacional Volcán Tenorio",
      description: "Trails sinuosos a través de selva exuberante, descubriendo el misterio del color turquesa del Río Celeste.",
      image: "/images/rio-celeste-hiking.jpg"
    },
    {
      title: "Descubrimiento de Cascadas Ocultas", 
      description: "Visita a la impresionante Cascada Río Celeste, emblemática por su agua vibrante y entornos vírgenes.",
      image: "/images/rio-celeste-waterfall.jpg"
    },
    {
      title: "Relajación en Aguas Termales Naturales",
      description: "Baños en manantiales cercanos, fusionando aventura con bienestar en un oasis de biodiversidad.",
      image: "/images/rio-celeste-thermal.jpg"
    }
  ]

  const rooms = [
    {
      title: "Standard",
      description: "Refugio integrado al bosque tropical con vistas al río turquesa y fauna exótica.",
      image: "/images/rio-celeste-standard.jpg"
    },
    {
      title: "Deluxe", 
      description: "Habitaciones panorámicas con acceso directo a senderos naturales y biodiversidad única.",
      image: "/images/rio-celeste-deluxe.jpg"
    },
    {
      title: "Suite Premium",
      description: "Retiro de lujo con vista a las cascadas y servicios de bienestar integrados.",
      image: "/images/rio-celeste-suite.jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <AuraltaHeader />
      
      {/* Main Content */}
      <main>
        {/* Banner Principal */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Imagen de fondo placeholder */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-600"></div>
          <div className="absolute inset-0 bg-black/30"></div>
          
          <div className="relative z-10 flex items-center justify-center h-full px-5 md:px-10">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-h1 mb-6 text-white">
                Sumérgete en la magia de Río Celeste
              </h1>
              <Button 
                size="lg"
                className="text-cta px-8 py-4 rounded-md transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--azul-profundo)',
                  color: 'var(--gris-oscuro)'
                }}
              >
                Reserva ya tu retiro
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de Destacados */}
        <section className="py-16 px-5 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Habitaciones Elegidas */}
            <div className="mb-16">
              <h2 className="text-h2 text-center mb-12" style={{ color: 'var(--gris-oscuro)' }}>
                Habitaciones Elegidas
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {rooms.map((room, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-teal-200 to-green-400"></div>
                    <CardContent className="p-6">
                      <h3 className="text-h3 mb-3" style={{ color: 'var(--azul-profundo)' }}>
                        {room.title}
                      </h3>
                      <p className="text-body mb-4" style={{ color: 'var(--gris-medio)' }}>
                        {room.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="text-cta border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white"
                        style={{ 
                          borderColor: 'var(--azul-profundo)',
                          color: 'var(--azul-profundo)'
                        }}
                      >
                        Más detalles
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Inmersión en la Naturaleza */}
            <div>
              <h2 className="text-h2 text-center mb-12" style={{ color: 'var(--gris-oscuro)' }}>
                Inmersión en la Naturaleza
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {experiences.map((experience, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-emerald-300 to-teal-500"></div>
                    <CardContent className="p-6">
                      <h3 className="text-h3 mb-3" style={{ color: 'var(--azul-profundo)' }}>
                        {experience.title}
                      </h3>
                      <p className="text-body mb-4" style={{ color: 'var(--gris-medio)' }}>
                        {experience.description}
                      </p>
                      <Button 
                        variant="outline"
                        className="text-cta border-azul-profundo text-azul-profundo hover:bg-azul-profundo hover:text-white"
                        style={{ 
                          borderColor: 'var(--azul-profundo)',
                          color: 'var(--azul-profundo)'
                        }}
                      >
                        Más detalles
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios y Opiniones */}
        <section className="py-16 px-5 md:px-10 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-12" style={{ color: 'var(--gris-oscuro)' }}>
              Testimonios y Opiniones
            </h2>
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <p className="text-body mb-4 italic" style={{ color: 'var(--gris-medio)' }}>
                    "{testimonial.text}"
                  </p>
                  <p className="text-cta font-semibold" style={{ color: 'var(--azul-profundo)' }}>
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sostenibilidad */}
        <section className="py-16 px-5 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-h2 mb-6" style={{ color: 'var(--gris-oscuro)' }}>
              Sostenibilidad
            </h2>
            <p className="text-body mb-8" style={{ color: 'var(--gris-medio)' }}>
              Nuestro compromiso con el ecosistema costarricense incluye proyectos de reforestación y protección 
              de la biodiversidad única del Parque Nacional Volcán Tenorio. Trabajamos para preservar el misterio 
              natural del Río Celeste para las futuras generaciones.
            </p>
            <Button 
              className="text-cta px-6 py-3"
              style={{ 
                backgroundColor: 'var(--azul-profundo)',
                color: 'white'
              }}
            >
              Leer más
            </Button>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <AuraltaFooter />
    </div>
  )
}