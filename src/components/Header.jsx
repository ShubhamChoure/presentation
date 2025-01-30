"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="py-4 px-6 flex justify-end items-center space-x-4 bg-gray-900/80 backdrop-blur-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mr-auto">
        <span className="text-xs font-bold text-blue-500">PROJECT</span>
        <span className="text-xl font-bold">INNOVATE</span>
      </div>
      <div className="lg:hidden">
        <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      <nav
        className={`${isMenuOpen ? "block" : "hidden"} lg:block absolute top-full left-0 right-0 bg-gray-900/80 backdrop-blur-md lg:relative lg:bg-transparent lg:backdrop-blur-none`}
      >
        <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6 p-4 lg:p-0 lg:justify-end">
          <li>
            <a
              href="#about"
              className="block lg:inline hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#details"
              className="block lg:inline hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Details
            </a>
          </li>
          <li>
            <a
              href="#prizes"
              className="block lg:inline hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Prizes
            </a>
          </li>
        </ul>
      </nav>
      <Button
        variant="outline"
        className="hidden lg:inline-flex bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
        onClick={() => window.open("https://forms.google.com/your-form-url", "_blank")}
      >
        Register Now
      </Button>
    </motion.header>
  )
}

