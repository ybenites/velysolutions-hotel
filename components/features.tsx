import { Bed, Coffee, Wifi, Car, ShowerHead, Utensils } from "lucide-react"

const features = [
  {
    icon: Bed,
    title: "Habitaciones Acogedoras",
    description: "Experimente la comodidad en nuestras habitaciones diseñadas con amenidades premium.",
  },
  {
    icon: Coffee,
    title: "Desayuno Incluido",
    description: "Comience su día con nuestro desayuno buffet gourmet de cortesía.",
  },
  {
    icon: Wifi,
    title: "WiFi Gratuito",
    description: "Manténgase conectado con acceso a internet de alta velocidad en todo el hotel.",
  },
  {
    icon: Car,
    title: "Estacionamiento Gratuito",
    description: "Estacionamiento conveniente en el sitio disponible para todos nuestros huéspedes.",
  },
  {
    icon: ShowerHead,
    title: "Piscina",
    description: "Relájese y refrésquese en nuestras piscinas interiores y exteriores impecables.",
  },
  {
    icon: Utensils,
    title: "Restaurante",
    description: "Saboree la exquisita cocina en nuestro restaurante interno.",
  },
]

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center mb-12">CARACTERÍSTICAS DEL HOTEL</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 items-start">
              <feature.icon className="w-12 h-12 text-[#b4975a] flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

