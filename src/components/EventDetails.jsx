"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarDays, CreditCard, Users, Clock } from "lucide-react"

export default function EventDetails() {
  const details = [
    { icon: CalendarDays, title: "Date", content: "February 6th - 7th" },
    { icon: Clock, title: "Time", content: "9:00 AM - 5:00 PM" },
    { icon: Users, title: "Team Size", content: "1 - 4 members" },
    { icon: CreditCard, title: "Entry Fee", content: "₹50 per person" },
  ]

  return (
    <section id="details" className="py-16 px-6 bg-gray-900/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-blue-400 mb-12 text-center">Event Details</h2>
        <Card className="bg-gray-800/50 backdrop-blur-md border-gray-700 overflow-hidden">
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {details.map((detail, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-blue-500/10 p-3 rounded-full">
                  <detail.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{detail.title}</h3>
                  <p className="text-gray-300 text-lg">{detail.content}</p>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

