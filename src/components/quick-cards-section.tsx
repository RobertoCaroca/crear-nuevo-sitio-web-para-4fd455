import { Card, CardContent, CardBadge } from "./ui/card"
import { Button } from "./ui/button"

export function QuickCardsSection() {
  const cards = [
    {
      title: "Habitaciones",
      description: "Domos geodésicos y bungalows premium integrados en la naturaleza",
      icon: "🏠",
      badge: "Carbono Neutral",
      gradient: "from-[#F5F1E8] to-[#D4D4D8]"
    },
    {
      title: "Experiencias",
      description: "Aventuras ecológicas y conexión auténtica con ecosistemas únicos",
      icon: "🌿",
      badge: "Eco-Certificado",
      gradient: "from-[#F5F1E8] to-[#D4D4D8]"
    },
    {
      title: "Ofertas Especiales",
      description: "Paquetes exclusivos para estadías prolongadas y temporadas",
      icon: "🎁",
      badge: "Disponible",
      gradient: "from-[#F5F1E8] to-[#D4D4D8]"
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <Card key={index} className="relative overflow-hidden group">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-50`} />
              
              {/* Badge */}
              <CardBadge>
                {card.badge}
              </CardBadge>
              
              {/* Content */}
              <CardContent className="relative z-10 p-8 text-center space-y-6">
                {/* Icon */}
                <div className="text-5xl md:text-6xl mb-4">
                  {card.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-h3 text-[#4A4A4A] mb-3">
                  {card.title}
                </h3>
                
                {/* Description */}
                <p className="text-body text-muted-foreground mb-6">
                  {card.description}
                </p>
                
                {/* CTA Button */}
                <Button variant="secondary" size="compact" className="w-full">
                  Explorar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}