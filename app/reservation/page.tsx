import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BookingForm } from "@/components/booking-form"

export default function ReservationPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center h-64 relative">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
          <h1 className="text-4xl font-bold text-white">Make a Reservation</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Book Your Stay</h2>
          <BookingForm />
        </div>
      </div>
      <Footer />
    </div>
  )
}

