"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

export function BookingForm() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()

  return (
    <section className="py-16 bg-[#262626]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg">
          <h2 className="text-3xl text-center mb-8">RESERVE SU ESTANCIA</h2>
          <form className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="check-in">Llegada</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkIn ? format(checkIn, "PPP", { locale: es }) : <span>Seleccione una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus locale={es} />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="check-out">Salida</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {checkOut ? format(checkOut, "PPP", { locale: es }) : <span>Seleccione una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus locale={es} />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Adultos</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione número de adultos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Adulto</SelectItem>
                  <SelectItem value="2">2 Adultos</SelectItem>
                  <SelectItem value="3">3 Adultos</SelectItem>
                  <SelectItem value="4">4 Adultos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Niños</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione número de niños" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Sin Niños</SelectItem>
                  <SelectItem value="1">1 Niño</SelectItem>
                  <SelectItem value="2">2 Niños</SelectItem>
                  <SelectItem value="3">3 Niños</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Button className="w-full bg-[#b4975a] hover:bg-[#a3864a] text-white">Verificar Disponibilidad</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

