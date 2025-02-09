import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#262626] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sobre Nosotros</h3>
            <p className="text-gray-400 mb-4">
              Hotel Master ofrece alojamiento de lujo con servicio de clase mundial. Experimente la perfecta combinación
              de comodidad y sofisticación.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#b4975a]">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#b4975a]">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#b4975a]">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="hover:text-[#b4975a]">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#b4975a]" />
                <p className="text-gray-400">Calle Gran Vía 123, Madrid 28013</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#b4975a]" />
                <p className="text-gray-400">+34 91 123 4567</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#b4975a]" />
                <p className="text-gray-400">info@hotelmaster.com</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#b4975a]">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/habitaciones" className="text-gray-400 hover:text-[#b4975a]">
                  Nuestras Habitaciones
                </Link>
              </li>
              <li>
                <Link href="/dining" className="text-gray-400 hover:text-[#b4975a]">
                  Restaurantes
                </Link>
              </li>
              <li>
                <Link href="/spa" className="text-gray-400 hover:text-[#b4975a]">
                  Bienestar y Spa
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#b4975a]">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Boletín</h3>
            <p className="text-gray-400 mb-4">
              Suscríbase a nuestro boletín para recibir ofertas especiales y actualizaciones.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Su correo electrónico"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#b4975a]"
              />
              <button className="w-full px-4 py-2 bg-[#b4975a] hover:bg-[#a3864a] rounded-lg transition-colors">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Hotel Master. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

