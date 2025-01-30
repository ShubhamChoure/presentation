"use client"

import React, { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import EventDetails from "@/components/EventDetails"
import Location from "@/components/Location"
import Prizes from "@/components/Prizes"
import Footer from "@/components/Footer"
import ParticleBackground from "@/components/ParticleBackground"
import SplashScreen from "@/components/SplashScreen"

const Home = () => {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2500) // Adjust this value to control how long the splash screen is shown

    return () => clearTimeout(timer)
  }, [])

  return (
    <React.Fragment>
      <AnimatePresence>{showSplash && <SplashScreen />}</AnimatePresence>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/mobile-bg.jpg')] bg-cover bg-center opacity-20 md:hidden"></div>
        <ParticleBackground />
        <div className="relative z-10">
          <Header />
          <Hero />
          <About />
          <EventDetails />
          <Location />
          <Prizes />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home

