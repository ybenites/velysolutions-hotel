import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
  {
    text: "¡Una estancia excepcional! El servicio fue impecable y las habitaciones lujosas. Definitivamente volveré.",
    author: "Sara Jiménez",
    role: "Viajera de Negocios",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
  },
  {
    text: "Ubicación perfecta, increíbles comodidades y personal amable. Hicieron que nuestra luna de miel fuera realmente especial.",
    author: "Miguel y Emma",
    role: "Pareja",
    rating: 5,
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=150&q=80",
  },
  {
    text: "Experiencia sobresaliente desde el check-in hasta el check-out. La atención al detalle es notable.",
    author: "David García",
    role: "Huésped de Ocio",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl text-center text-white mb-12">OPINIONES DE NUESTROS HUÉSPEDES</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#b4975a] text-[#b4975a]" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`Foto de ${testimonial.author}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

