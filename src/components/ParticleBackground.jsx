"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animationFrameId
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Cyberpunk color palette
    const colors = {
      primary: "#00f3ff",
      secondary: "#ff00ff",
      tertiary: "#00ff87",
      background: "#0a0a1a"
    }

    class Particle {
      constructor() {
        this.reset(true)
        this.baseSize = Math.random() * 2 + 1
        this.oscillation = Math.random() * 0.02
      }

      reset(initial = false) {
        this.x = Math.random() * canvas.width
        this.y = initial ? Math.random() * canvas.height : -50
        this.speed = Math.random() * 3 + 1
        this.size = this.baseSize * (Math.random() * 0.5 + 0.5)
        this.color = `hsla(${Math.floor(Math.random() * 360)}, 70%, 50%, 0.8)`
        this.angle = Math.random() * Math.PI * 2
      }

      update() {
        this.y += this.speed
        this.angle += this.oscillation
        this.x += Math.sin(this.angle) * 0.5
        
        if (this.y > canvas.height + 50) this.reset()
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const particles = Array(150).fill().map(() => new Particle())

    // Geometric elements
    const polygons = {
      hexagon: Array(6).fill().map((_, i) => ({
        x: Math.cos((i * Math.PI) / 3),
        y: Math.sin((i * Math.PI) / 3)
      })),
      triangle: Array(3).fill().map((_, i) => ({
        x: Math.cos((i * Math.PI * 2) / 3),
        y: Math.sin((i * Math.PI * 2) / 3)
      }))
    }

    function drawRotatingPolygon(type, x, y, size, rotation, color) {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.strokeStyle = color
      ctx.lineWidth = 2
      
      ctx.beginPath()
      polygons[type].forEach((point, i) => {
        const px = point.x * size
        const py = point.y * size
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      })
      ctx.closePath()
      ctx.stroke()
      ctx.restore()
    }

    function drawLightRay(progress) {
      const gradient = ctx.createLinearGradient(
        0, canvas.height * 0.3,
        0, canvas.height * 0.7
      )
      gradient.addColorStop(0, `rgba(0, 243, 255, 0)`)
      gradient.addColorStop(0.5, `rgba(0, 243, 255, ${0.2 * Math.sin(progress)})`)
      gradient.addColorStop(1, `rgba(0, 243, 255, 0)`)
      
      ctx.fillStyle = gradient
      ctx.fillRect(
        canvas.width * 0.5 - 100, 0,
        200, canvas.height
      )
    }

    function animate(timestamp) {
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Draw geometric elements
      const time = timestamp * 0.001
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      
      // Rotating hexagons
      drawRotatingPolygon('hexagon', centerX, centerY, 150, time * 0.5, colors.primary)
      drawRotatingPolygon('hexagon', centerX, centerY, 120, -time * 0.3, colors.secondary)
      
      // Floating triangles
      drawRotatingPolygon('triangle', 
        centerX + Math.sin(time) * 100,
        centerY + Math.cos(time * 0.8) * 80,
        60, 
        time * 0.7, 
        colors.tertiary
      )

      // Dynamic light rays
      drawLightRay(time)

      // Grid lines
      ctx.strokeStyle = `rgba(0, 243, 255, 0.1)`
      ctx.lineWidth = 1
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Handle resize
    const resizeHandler = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', resizeHandler)
    return () => {
      window.removeEventListener('resize', resizeHandler)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  )
}

export default ParticleBackground