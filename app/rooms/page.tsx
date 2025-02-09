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

const rooms = [
  {
    title: "Deluxe Room",
    description: "Spacious room with city view and modern amenities",
    price: 199,
    size: "32m²",
    capacity: "2 Adults",
    bed: "King Size",
    services: ["Free WiFi", "Room Service", "Flat-screen TV", "Air Conditioning"],
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Executive Suite",
    description: "Luxury suite with separate living area and panoramic views",
    price: 299,
    size: "45m²",
    capacity: "2 Adults, 2 Children",
    bed: "King Size",
    services: ["Free WiFi", "Room Service", "Flat-screen TV", "Mini Bar", "Balcony"],
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Family Room",
    description: "Perfect for families with spacious layout and multiple beds",
    price: 249,
    size: "40m²",
    capacity: "4 Adults",
    bed: "2 Queen Size",
    services: ["Free WiFi", "Room Service", "Flat-screen TV", "Air Conditioning"],
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Penthouse Suite",
    description: "Luxurious top-floor suite with breathtaking city views",
    price: 499,
    size: "75m²",
    capacity: "2 Adults",
    bed: "King Size",
    services: ["Free WiFi", "24/7 Room Service", "Smart TV", "Private Terrace", "Jacuzzi"],
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
  },
]

export default function RoomsPage() {
  const [filteredRooms, setFilteredRooms] = useState(rooms)
  const [priceRange, setPriceRange] = useState(500)

  const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const capacity = formData.get("capacity") as string
    const filtered = rooms.filter((room) => {
      const capacityMatch = capacity === "any" || room.capacity.includes(capacity)
      const priceMatch = room.price <= priceRange
      return capacityMatch && priceMatch
    })
    setFilteredRooms(filtered)
  }

  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-64 relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">Our Rooms</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <form onSubmit={handleFilter} className="bg-gray-100 p-6 rounded-lg mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="capacity">Capacity</Label>
              <Select name="capacity">
                <SelectTrigger>
                  <SelectValue placeholder="Select capacity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="2 Adults">2 Adults</SelectItem>
                  <SelectItem value="2 Adults, 2 Children">2 Adults, 2 Children</SelectItem>
                  <SelectItem value="4 Adults">4 Adults</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="price-range">Max Price: ${priceRange}</Label>
              <Input
                type="range"
                id="price-range"
                min="100"
                max="500"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
              />
            </div>
            <div className="flex items-end">
              <Button type="submit" className="w-full">
                Filter Rooms
              </Button>
            </div>
          </div>
        </form>
        <div className="grid gap-8">
          {filteredRooms.map((room, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 border rounded-lg overflow-hidden shadow-lg">
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <Image src={room.image || "/placeholder.svg"} alt={room.title} fill className="object-cover" />
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{room.title}</h2>
                    <p className="text-gray-600">{room.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#b4975a]">${room.price}</div>
                    <div className="text-sm text-gray-500">per night</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="font-semibold">Size</div>
                    <div className="text-gray-600">{room.size}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Capacity</div>
                    <div className="text-gray-600">{room.capacity}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Bed</div>
                    <div className="text-gray-600">{room.bed}</div>
                  </div>
                  <div>
                    <div className="font-semibold">Services</div>
                    <div className="flex gap-2">
                      {room.services.includes("Free WiFi") && <Wifi className="w-5 h-5 text-gray-600" />}
                      {room.services.includes("Room Service") && <Coffee className="w-5 h-5 text-gray-600" />}
                      {(room.services.includes("Flat-screen TV") || room.services.includes("Smart TV")) && (
                        <Tv className="w-5 h-5 text-gray-600" />
                      )}
                      {room.services.includes("Air Conditioning") && <Wind className="w-5 h-5 text-gray-600" />}
                    </div>
                  </div>
                </div>
                <Button className="bg-[#b4975a] hover:bg-[#a3864a] text-white">Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

