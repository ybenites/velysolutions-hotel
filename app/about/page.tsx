import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-64 relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">About Hotel Master</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Hotel Master was founded in 1995 with a vision to create a luxurious haven for travelers seeking comfort,
              elegance, and exceptional service. Over the years, we have grown to become one of the most respected names
              in the hospitality industry, known for our attention to detail and commitment to guest satisfaction.
            </p>
            <p className="text-gray-600 mb-4">
              Our hotel combines modern amenities with timeless charm, offering a unique experience that caters to both
              business and leisure travelers. From our exquisite dining options to our state-of-the-art fitness center
              and spa, every aspect of Hotel Master is designed to exceed your expectations.
            </p>
            <p className="text-gray-600">
              We take pride in our dedicated staff, who work tirelessly to ensure that every guest feels at home from
              the moment they step through our doors. Whether you&lsquo;re here for a short stay or an extended visit, we
              promise to make your time at Hotel Master truly unforgettable.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
              alt="Hotel Master Exterior"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our service, constantly seeking ways to improve and exceed
                guest expectations.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Hospitality</h3>
              <p className="text-gray-600">
                We believe in genuine, heartfelt hospitality, treating each guest as a valued member of the Hotel Master
                family.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices, minimizing our environmental impact while providing luxurious
                experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

