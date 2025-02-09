import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Rooms } from "@/components/rooms"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { BookingForm } from "@/components/booking-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Rooms />
      <BookingForm />
      <Testimonials />
      <Footer />
    </main>
  )
}

