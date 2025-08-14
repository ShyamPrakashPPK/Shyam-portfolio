'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import Image from 'next/image'

interface Technology {
    name: string;
    icon: string;
}

const TechStack = () => {
    const constraintsRef = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const x = useMotionValue(0)
    const animationRef = useRef<any>(null)

    const technologies: Technology[] = [
        { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
        { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
        { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
        { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
        { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
        { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
        { name: 'Angular', icon: 'https://skillicons.dev/icons?i=angular' },
        { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
        { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
        { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
        { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgresql' },
        { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
        { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
        { name: 'Kubernetes', icon: 'https://skillicons.dev/icons?i=kubernetes' },
        { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
        { name: 'AWS', icon: 'https://skillicons.dev/icons?i=aws' },
        { name: 'Tailwind', icon: 'https://skillicons.dev/icons?i=tailwind' },
        { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
    ]

    // Double the array for seamless infinite scroll
    const duplicatedTechnologies = [...technologies, ...technologies]
    const itemWidth = 128 // Each item width including margins
    const totalWidth = duplicatedTechnologies.length * itemWidth

    // Auto-scroll animation
    useEffect(() => {
        if (!isPaused && !isDragging) {
            const currentX = x.get()
            const targetX = currentX - totalWidth / 2

            animationRef.current = animate(x, targetX, {
                duration: 27,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                onRepeat: () => {
                    // Reset position for infinite loop
                    x.set(0)
                }
            })
        } else if (animationRef.current) {
            animationRef.current.stop()
        }

        return () => {
            if (animationRef.current) {
                animationRef.current.stop()
            }
        }
    }, [isPaused, isDragging, x, totalWidth])

    const handleDragStart = () => {
        setIsDragging(true)
        setIsPaused(true)
        if (animationRef.current) {
            animationRef.current.stop()
        }
    }

    const handleDragEnd = () => {
        setIsDragging(false)
        // Small delay to prevent immediate restart
        setTimeout(() => setIsPaused(false), 100)
    }

    return (
        <section id="skills" className="py-16 overflow-hidden bg-black relative">
            <div className="mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl lg:text-4xl font-bold text-white mb-4"
                >
                    Technologies I Work With
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-gray-400 max-w-2xl mx-auto"
                >
                    Leveraging modern technologies to build exceptional digital experiences
                </motion.p>
            </div>

            {/* Draggable Scroll Container with Fade Masks */}
            <div
                className="relative overflow-hidden"
                ref={constraintsRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Left fade mask */}
                <div className="absolute left-0 top-0 w-10 md:w-96 h-full bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>

                {/* Right fade mask */}
                <div className="absolute right-0 top-0 w-10 md:w-96 h-full bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>

                <motion.div
                    className="flex cursor-grab active:cursor-grabbing"
                    drag="x"
                    dragConstraints={{ left: -totalWidth + 800, right: 200 }}
                    dragElastic={0.2}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 40 }}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                    style={{ x }}
                >
                    {duplicatedTechnologies.map((tech, index) => (
                        <motion.div
                            key={`${tech.name}-${index}`}
                            className="flex-shrink-0 mx-8 flex flex-col items-center group cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="w-16 h-16 mb-3 p-3 rounded-xl bg-gray-900 border border-gray-800 transition-all duration-300 group-hover:border-gray-600 group-hover:bg-gray-800">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-sm text-gray-400 font-medium whitespace-nowrap group-hover:text-gray-300">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default TechStack