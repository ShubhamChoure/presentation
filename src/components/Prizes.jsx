"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Prizes() {
  const prizeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section id="prizes" className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-blue-500 mb-4">Exciting Prizes</h2>
        <p className="text-lg text-gray-300">Showcase your innovation and win amazing rewards!</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div variants={prizeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="bg-gradient-to-br from-yellow-400/90 to-yellow-600/90 backdrop-blur-md shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">First Prize</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-white">
                <li>₹3,000 Cash Prize</li>
                <li>Gold Medal</li>
                <li>Certificate of Excellence</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={prizeVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="bg-gradient-to-br from-gray-400/90 to-gray-600/90 backdrop-blur-md shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Second Prize</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-white">
                <li>₹2,000 Cash Prize</li>
                <li>Silver Medal</li>
                <li>Certificate of Achievement</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

