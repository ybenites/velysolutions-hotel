"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Wifi, Coffee, Tv, Wind } from "lucide-react"

const habitaciones = [
  {
    titulo: "Habitación Deluxe",
    descripcion: "Espaciosa habitación con vista a la ciudad y comodidades modernas",
    precio: 199,
    tamano: "32m²",
    capacidad: "2 Adultos",
    cama: "Cama King",
    servicios: ["WiFi Gratis", "Servicio de Habitaciones", "TV de Pantalla Plana", "Aire Acondicionado"],
    imagen: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Suite Ejecutiva",
    descripcion: "Suite de lujo con sala de estar separada y vistas panorámicas",
    precio: 299,
    tamano: "45m²",
    capacidad: "2 Adultos, 2 Niños",
    cama: "Cama King",
    servicios: ["WiFi Gratis", "Servicio de Habitaciones", "TV de Pantalla Plana", "Minibar", "Balcón"],
    imagen: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Habitación Familiar",
    descripcion: "Perfecta para familias con diseño espacioso y múltiples camas",
    precio: 249,
    tamano: "40m²",
    capacidad: "4 Adultos",
    cama: "2 Camas Queen",
    servicios: ["WiFi Gratis", "Servicio de Habitaciones", "TV de Pantalla Plana", "Aire Acondicionado"],
    imagen: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
  },
  {
    titulo: "Suite Penthouse",
    descripcion: "Lujosa suite en el último piso con impresionantes vistas de la ciudad",
    precio: 499,
    tamano: "75m²",
    capacidad: "2 Adultos",
    cama: "Cama King",
    servicios: ["WiFi Gratis", "Servicio de Habitaciones 24/7", "Smart TV", "Terraza Privada", "Jacuzzi"],
    imagen: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
]

export default function PaginaHabitaciones() {
  const [habitacionesFiltradas, setHabitacionesFiltradas] = useState(habitaciones)
  const [rangoPrecios, setRangoPrecios] = useState(500)

  const manejarFiltro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const capacidad = formData.get("capacidad") as string
    const filtradas = habitaciones.filter((habitacion) => {
      const coincideCapacidad = capacidad === "cualquiera" || habitacion.capacidad.includes(capacidad)
      const coincidePrecio = habitacion.precio <= rangoPrecios
      return coincideCapacidad && coincidePrecio
    })
    setHabitacionesFiltradas(filtradas)
  }

  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-64 relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">Nuestras Habitaciones</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <form onSubmit={manejarFiltro} className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="capacidad">Capacidad</Label>
              <Select name="capacidad">
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar capacidad" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cualquiera">Cualquiera</SelectItem>
                  <SelectItem value="2 Adultos">2 Adultos</SelectItem>
                  <SelectItem value="2 Adultos, 2 Niños">2 Adultos, 2 Niños</SelectItem>
                  <SelectItem value="4 Adultos">4 Adultos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="rango-precios">Precio Máximo: €{rangoPrecios}</Label>
              <Input
                type="range"
                id="rango-precios"
                min="100"
                max="500"
                step="50"
                value={rangoPrecios}
                onChange={(e) => setRangoPrecios(Number(e.target.value))}
              />
            </div>
            <div className="flex items-end">
              <Button type="submit" className="w-full">
                Filtrar
              </Button>
            </div>
          </div>
        </form>
        <div className="grid gap-8">
          {habitacionesFiltradas.map((habitacion, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 border rounded-lg overflow-hidden shadow-lg">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image
                  src={habitacion.imagen || "/placeholder.svg"}
                  alt={habitacion.titulo}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{habitacion.titulo}</h2>
                    <p className="text-gray-600">{habitacion.descripcion}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#b4975a]">€{habitacion.precio}</div>
                    <div className="text-sm text-gray-500">por noche</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="font-semibold">Tamaño</div>
                    <div className="text-gray-600">{habitacion.tamano}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Capacidad</div>
                    <div className="text-gray-600">{habitacion.capacidad}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Cama</div>
                    <div className="text-gray-600">{habitacion.cama}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Servicios</div>
                    <div className="flex gap-2">
                      {habitacion.servicios.includes("WiFi Gratis") && <Wifi className="w-5 h-5 text-gray-600" />}
                      {habitacion.servicios.includes("Servicio de Habitaciones") && (
                        <Coffee className="w-5 h-5 text-gray-600" />
                      )}
                      {(habitacion.servicios.includes("TV de Pantalla Plana") ||
                        habitacion.servicios.includes("Smart TV")) && <Tv className="w-5 h-5 text-gray-600" />}
                      {habitacion.servicios.includes("Aire Acondicionado") && (
                        <Wind className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  </div>
                </div>
                <Button className="bg-[#b4975a] hover:bg-[#a3864a] text-white">Reservar</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

