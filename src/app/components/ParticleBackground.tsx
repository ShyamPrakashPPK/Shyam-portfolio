'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  pulse: number
  pulseSpeed: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.min(120, Math.floor((canvas.width * canvas.height) / 12000))
      
      const colors = ['#10b981', '#059669', '#047857', '#065f46', '#064e3b', '#34d399', '#6ee7b7']
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01
        })
      }
      
      particlesRef.current = particles
    }

    const drawParticles = () => {
      // Create gradient background effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      )
      gradient.addColorStop(0, 'rgba(16, 185, 129, 0.02)')
      gradient.addColorStop(1, 'rgba(16, 185, 129, 0)')
      
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      particlesRef.current.forEach((particle, index) => {
        // Update pulse
        particle.pulse += particle.pulseSpeed
        
        // Mouse interaction
        const mouseDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - particle.x, 2) + 
          Math.pow(mouseRef.current.y - particle.y, 2)
        )
        
        if (mouseDistance < 150) {
          const force = (150 - mouseDistance) / 150
          const angle = Math.atan2(particle.y - mouseRef.current.y, particle.x - mouseRef.current.x)
          particle.vx += Math.cos(angle) * force * 0.01
          particle.vy += Math.sin(angle) * force * 0.01
        }
        
        // Update position with some randomness
        particle.x += particle.vx + Math.sin(particle.pulse) * 0.1
        particle.y += particle.vy + Math.cos(particle.pulse) * 0.1
        
        // Bounce off edges with some damping
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8
          particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8
          particle.y = Math.max(0, Math.min(canvas.height, particle.y))
        }
        
        // Gradually slow down particles
        particle.vx *= 0.999
        particle.vy *= 0.999
        
        // Pulsing size effect
        const pulsedSize = particle.size + Math.sin(particle.pulse) * 0.5
        const pulsedOpacity = particle.opacity + Math.sin(particle.pulse * 2) * 0.1
        
        // Draw particle with glow effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulsedSize, 0, Math.PI * 2)
        
        // Create glow
        const glowGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, pulsedSize * 3
        )
        glowGradient.addColorStop(0, particle.color + Math.floor(pulsedOpacity * 255).toString(16).padStart(2, '0'))
        glowGradient.addColorStop(0.5, particle.color + Math.floor(pulsedOpacity * 0.3 * 255).toString(16).padStart(2, '0'))
        glowGradient.addColorStop(1, particle.color + '00')
        
        ctx.fillStyle = glowGradient
        ctx.fill()
        
        // Draw core particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulsedSize * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = particle.color + Math.floor(pulsedOpacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
        
        // Draw connections to nearby particles with enhanced effects
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            const opacity = 0.15 * (1 - distance / 120)
            const lineWidth = (1 - distance / 120) * 1.5
            
            // Create gradient line
            const lineGradient = ctx.createLinearGradient(
              particle.x, particle.y,
              otherParticle.x, otherParticle.y
            )
            lineGradient.addColorStop(0, `rgba(16, 185, 129, ${opacity})`)
            lineGradient.addColorStop(0.5, `rgba(52, 211, 153, ${opacity * 1.2})`)
            lineGradient.addColorStop(1, `rgba(16, 185, 129, ${opacity})`)
            
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = lineGradient
            ctx.lineWidth = lineWidth
            ctx.stroke()
          }
        })
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    resizeCanvas()
    createParticles()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    />
  )
}