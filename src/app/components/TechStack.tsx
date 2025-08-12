'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const TechStack = () => {
    const technologies = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
        { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    ]

    // Duplicate the array for seamless infinite scroll
    const duplicatedTechnologies = [...technologies, ...technologies]

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

            {/* Infinite Scroll Container with Fade Masks */}
            <div className="relative">
                {/* Left fade mask */}
                <div className="absolute left-0 top-0 w-10 md:w-96 h-full bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none"></div>
                
                {/* Right fade mask */}
                <div className="absolute right-0 top-0 w-10 md:w-96 h-full bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none"></div>
                
                <div className="flex animate-scroll">
                    {duplicatedTechnologies.map((tech, index) => (
                        <motion.div
                            key={`${tech.name}-${index}`}
                            className="flex-shrink-0 mx-8 flex flex-col items-center group cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="w-16 h-16 mb-3 p-3 rounded-xl bg-gray-900 border border-gray-800 transition-all duration-300">
                                <Image
                                    src={tech.icon}
                                    alt={tech.name}
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="text-sm text-gray-400 font-medium whitespace-nowrap">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechStack