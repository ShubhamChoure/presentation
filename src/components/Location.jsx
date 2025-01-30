"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"

export default function Location() {
  return (
    <section id="location" className="py-16 px-6 bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gray-800/80 backdrop-blur-md border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-8 h-8 text-blue-400 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Venue</h3>
                  <a
                    href="https://www.google.com/maps/place/Parvatibai+Genba+Moze+College+of+Engineering,PUNE/@18.5777574,73.977915,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 transition-colors inline-block"
                  >
                    Gate No, 1178, Baif Rd, beside Talathi Office, Wagholi, Pune, Maharashtra 412207
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="relative h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/college.avif"
              alt="Parvatibai Genba Moze College of Engineering"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

