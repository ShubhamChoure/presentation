"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-blue-500 mb-4">About the Competition</h2>
        <p className="text-lg text-gray-300">
          Project Innovate is your chance to showcase your innovative ideas and win amazing prizes!
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="bg-gray-800/80 backdrop-blur-md border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Participation Details</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="list-disc list-inside">
                <li>Submit your project abstract and details</li>
                <li>10 minutes for presentation</li>
                <li>5 minutes for Q&A with expert judges</li>
                <li>Team size: 1 - 4 members</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="bg-gray-800/80 backdrop-blur-md border-gray-700">
            <CardHeader>
              <CardTitle className="text-blue-400">Why Participate?</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="list-disc list-inside">
                <li>Showcase your innovative ideas</li>
                <li>Gain valuable feedback from industry experts</li>
                <li>Network with like-minded innovators</li>
                <li>Win exciting prizes and recognition</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

