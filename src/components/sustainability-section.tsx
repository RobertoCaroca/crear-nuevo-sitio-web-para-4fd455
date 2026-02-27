import { Card, CardContent, CardBadge } from "./ui/card"
import { Button } from "./ui/button"

export function SustainabilitySection() {
  const sustainabilityFeatures = [
    {
      title: "Construcción Sostenible",
      description: "Domos geodésicos diseñados con materiales locales y tecnologías de bajo impacto ambiental",
      icon: "🏗️",
      badge: "LEED Gold",
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=400&h=250&auto=format&fit=crop",
      gradient: "from-verde-suave/20 to-beige-neutro/30"
    },
    {
      title: "Energía Renovable", 
      description: "100% energía solar y eólica para minimizar nuestra huella de carbono",
      icon: "⚡",
      badge: "Carbono Neutral",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=400&h=250&auto=format&fit=crop",
      gradient: "from-azul-profundo/20 to-verde-suave/20"
    },
    {
      title: "Conservación Local",
      description: "Programas de protección de ecosistemas y colaboración con comunidades indígenas",
      icon: "🌱",
      badge: "WWF Partner",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=400&h=250&auto=format&fit=crop",
      gradient: "from-beige-neutro/30 to-verde-suave/20"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-h2 font-heading font-bold text-gris-oscuro mb-6">
            Compromiso con la Sostenibilidad
          </h2>
          <p className="font-body text-gris-oscuro/80 leading-relaxed">
            En Auralta Hotels creemos que el lujo verdadero viene de la armonía con la naturaleza. 
            Nuestro enfoque ecológico no es solo una promesa, es la base de cada experiencia que ofrecemos, 
            protegiendo los ecosistemas únicos de Patagonia y Río Celeste para las futuras generaciones.
          </p>
        </div>

        {/* Sustainability Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sustainabilityFeatures.map((feature, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Feature Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Badge */}
                <CardBadge className="absolute top-4 left-4 bg-verde-suave text-gris-oscuro">
                  {feature.badge}
                </CardBadge>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${feature.gradient}`} />
              </div>
              
              {/* Content */}
              <CardContent className="p-6 space-y-4">
                {/* Icon */}
                <div className="text-4xl mb-4">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="font-heading text-h3 text-gris-oscuro">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="font-body text-gris-oscuro/70 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-verde-suave/10 to-azul-profundo/10 rounded-2xl p-8">
          <h3 className="font-heading text-h3 text-gris-oscuro mb-4">
            Sé Parte del Cambio
          </h3>
          <p className="font-body text-gris-oscuro/80 mb-6 max-w-2xl mx-auto">
            Cada reserva contribuye directamente a proyectos de conservación y desarrollo comunitario. 
            Únete a nosotros en la construcción de un turismo más consciente y responsable.
          </p>
          <Button 
            className="bg-verde-suave hover:bg-verde-suave/90 text-gris-oscuro font-heading font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Conocer Nuestros Proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}