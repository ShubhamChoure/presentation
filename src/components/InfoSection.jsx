import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function InfoSection() {
  const cardVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-purple-200 to-pink-200">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-purple-800 mb-4">Event Information</h2>
        <p className="text-lg text-purple-700">
          Join us for an exciting presentation competition where you can showcase your innovative projects!
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div variants={cardVariants} initial="initial" animate="animate">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-700">Participation Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-purple-600">
                <li>Fill the form with proper team name and details</li>
                <li>Submit abstract of your project and project details</li>
                <li>10 minutes for presentation</li>
                <li>5 minutes for Q&A with judges</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div variants={cardVariants} initial="initial" animate="animate">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-purple-700">Team Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-purple-600">
                <li>Team size: 1 - 4 members</li>
                <li>Entry fee: ₹50 per person</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

