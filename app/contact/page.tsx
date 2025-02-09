import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-64 relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input type="text" placeholder="First Name" required />
                <Input type="text" placeholder="Last Name" required />
              </div>
              <Input type="email" placeholder="Email Address" required />
              <Input type="tel" placeholder="Phone Number" />
              <Textarea placeholder="Your Message" rows={6} required />
              <Button type="submit" className="w-full bg-[#b4975a] hover:bg-[#a3864a] text-white">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#b4975a] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-gray-600">666 Kingston Rd, Park Av. London 11232</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#b4975a] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-600">+44 20 7123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#b4975a] mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-600">info@hotelmaster.com</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with an actual map component or embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.6859670793574!2d-0.12985968422955518!3d51.50736817963522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653583725b56!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1625689961657!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

