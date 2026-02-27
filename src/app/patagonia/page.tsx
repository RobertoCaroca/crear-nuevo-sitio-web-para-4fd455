"use client"

import { AuraltaHeader } from "@/components/auralta-header"
import { AuraltaFooter } from "@/components/auralta-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PatagoniaPage() {
  const testimonials = [
    {
      text: "Un lugar donde el tiempo se detiene y la naturaleza te abraza con su inmensidad. La Patagonia desde Auralta es simplemente transformadora.",
      author: "María González"
    },
    {
      text: "La experiencia más auténtica que he vivido. Cada amanecer en Torres del Paine es un regalo que nunca olvidaré.",
      author: "Carlos Mendoza"
    },
    {
      text: "El silencio de la Patagonia y el confort de Auralta crean la combinación perfecta para renovar el alma.",
      author: "Ana Rodríguez"
    }
  ]

  const experiences = [
    {
      title: "Senderismo entre Picos Majestuosos",
      description: "Exploración de trails icónicos en Torres del Paine, conectando con la belleza indómita de la Patagonia.",
      image: "/images/patagonia-hiking.jpg"
    },
    {
      title: "Paseos a Caballo por Llanuras Abiertas", 
      description: "Inmersión cultural y paisajística en la estepa patagónica, ideal para parejas y viajeros eco-conscientes.",
      image: "/images/patagonia-horse.jpg"
    },
    {
      title: "Kayak en Aguas Glaciares Prístinas",
      description: "Navegación por lagos turquesas rodeados de glaciares y vida silvestre diversa.",
      image: "/images/patagonia-kayak.jpg"
    }
  ]

  const rooms = [
    {
      title: "Standard",
      description: "Refugio panorámico con vistas a los picos graníticos y acceso directo a la naturaleza patagónica.",
      image: "/images/patagonia-standard.jpg"
    },
    {
      title: "Deluxe", 
      description: "Glamping de lujo con terrazas privadas, chimeneas y lounges exteriores frente a los glaciares.",
      image: "/images/patagonia-deluxe.jpg"
    },
    {
      title: "Suite Premium",
      description: "Experiencia inmersiva total con panorámicas de 360° y servicios personalizados.",
      image: "/images/patagonia-suite.jpg"
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
          <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-800"></div>
          <div 
            className="absolute inset-0 bg-overlay-patagonico"
            style={{ backgroundColor: 'var(--overlay-patagonico)' }}
          ></div>
          
          <div className="relative z-10 flex items-center justify-center h-full px-5 md:px-10">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-h1 mb-6 text-white">
                Descubra la Patagonia en su máxima expresión
              </h1>
              <Button 
                size="lg"
                className="text-cta px-8 py-4 rounded-md transition-all duration-300"
                style={{ 
                  backgroundColor: 'var(--acento-patagonia)',
                  color: 'white'
                }}
              >
                Reserva tu experiencia
              </Button>
            </div>
          </div>
        </section>

        {/* Sección de Destacados */}
        <section className="py-16 px-5 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Habitaciones Populares */}
            <div className="mb-16">
              <h2 className="text-h2 text-center mb-12" style={{ color: 'var(--gris-oscuro)' }}>
                Habitaciones Populares
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {rooms.map((room, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-slate-300 to-slate-500"></div>
                    <CardContent className="p-6">
                      <h3 className="text-h3 mb-3" style={{ color: 'var(--acento-patagonia)' }}>
                        {room.title}
                      </h3>
                      <p className="text-body mb-4" style={{ color: 'var(--gris-medio)' }}>
                        {room.description}
                      </p>
                      <Button 
                        variant="outline" 
                        className="text-cta border-acento-patagonia text-acento-patagonia hover:bg-acento-patagonia hover:text-white"
                        style={{ 
                          borderColor: 'var(--acento-patagonia)',
                          color: 'var(--acento-patagonia)'
                        }}
                      >
                        Más detalles
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Experiencias Únicas */}
            <div>
              <h2 className="text-h2 text-center mb-12" style={{ color: 'var(--gris-oscuro)' }}>
                Experiencias Únicas
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {experiences.map((experience, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-64 bg-gradient-to-br from-blue-300 to-slate-600"></div>
                    <CardContent className="p-6">
                      <h3 className="text-h3 mb-3" style={{ color: 'var(--acento-patagonia)' }}>
                        {experience.title}
                      </h3>
                      <p className="text-body mb-4" style={{ color: 'var(--gris-medio)' }}>
                        {experience.description}
                      </p>
                      <Button 
                        variant="outline"
                        className="text-cta border-acento-patagonia text-acento-patagonia hover:bg-acento-patagonia hover:text-white"
                        style={{ 
                          borderColor: 'var(--acento-patagonia)',
                          color: 'var(--acento-patagonia)'
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
        <section className="py-16 px-5 md:px-10" style={{ backgroundColor: 'var(--apoyo-niebla)' }}>
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
                  <p className="text-cta font-semibold" style={{ color: 'var(--acento-patagonia)' }}>
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
              Nuestro compromiso con la Patagonia va más allá del turismo. Desarrollamos iniciativas de conservación 
              que protegen este ecosistema único, trabajando junto a comunidades locales para preservar la biodiversidad 
              y minimizar nuestro impacto ambiental.
            </p>
            <Button 
              className="text-cta px-6 py-3"
              style={{ 
                backgroundColor: 'var(--acento-patagonia)',
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