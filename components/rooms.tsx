import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

const rooms = [
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
    title: "Habitación Deluxe",
    price: "199",
    description: "Espaciosa habitación con vista a la ciudad",
  },
  {
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
    title: "Suite Ejecutiva",
    price: "299",
    description: "Suite de lujo con sala de estar separada",
  },
  {
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
    title: "Habitación Familiar",
    price: "249",
    description: "Perfecta para familias con niños",
  },
]

export function Rooms() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-2">HABITACIONES DE HOTEL MASTER</h2>
        <div className="flex justify-center mb-12">
          <Link href="/habitaciones" className="text-[#b4975a] hover:underline">
            Ver Todas las Habitaciones
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative h-64 mb-4 overflow-hidden">
                <Image
                  src={room.image || "/placeholder.svg"}
                  alt={room.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
              <p className="text-gray-600 mb-2">{room.description}</p>
              <p className="text-[#b4975a] font-semibold">Desde €{room.price} / noche</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-8">
          <button
            className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Habitación anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="p-2 border rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Siguiente habitación"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

