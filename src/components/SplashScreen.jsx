"use client"
import { motion } from "framer-motion"

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-blue-600 text-3xl font-bold mb-2"
        >
          PROJECT
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-6xl font-bold text-white"
        >
          INNOVATE
        </motion.h1>
      </div>
    </motion.div>
  )
}

export default SplashScreen

