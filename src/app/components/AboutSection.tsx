'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
    const roles = [
        "Full Stack Developer",
        "Frontend Specialist",
        "Backend Engineer",
        "UI/UX Enthusiast"
    ]

    return (
        <section id="about" className="py-24 px-6 lg:px-8 bg-black">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-80 h-80 mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl rotate-6"></div>
                            <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-gray-800 shadow-2xl">
                                <Image
                                    src="/images/profile.png"
                                    alt="Shyam Prakash"
                                    fill
                                    className="object-cover filter grayscale"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        {/* Name */}
                        <div>
                            <motion.h1
                                className="text-5xl lg:text-6xl font-bold text-white mb-4"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Shyam Prakash
                            </motion.h1>

                            <motion.div
                                className="grid grid-cols-2 gap-0"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                {/* Top Left */}
                                <motion.p
                                    className="text-xl text-gray-400 font-medium px-4 py-3"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.8 }}
                                >
                                    {roles[0]}
                                </motion.p>

                                {/* Top Right */}
                                <motion.p
                                    className="text-xl text-gray-400 font-medium px-4 py-3 border-l border-gray-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.9 }}
                                >
                                    {roles[1]}
                                </motion.p>

                                {/* Bottom Left */}
                                <motion.p
                                    className="text-xl text-gray-400 font-medium px-4 py-3 border-t border-gray-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1.0 }}
                                >
                                    {roles[2]}
                                </motion.p>

                                {/* Bottom Right */}
                                <motion.p
                                    className="text-xl text-gray-400 font-medium px-4 py-3 border-t border-l border-gray-700"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1.1 }}
                                >
                                    {roles[3]}
                                </motion.p>
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <p className="text-lg text-gray-300 leading-relaxed">
                                I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating exceptional digital experiences.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                With expertise in modern web technologies like React, Next.js, and Node.js, I build scalable applications that solve real-world problems and deliver outstanding user experiences.
                            </p>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-4 gap-8 pt-8 border-t border-gray-800"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 1.4 }}
                        >
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">3+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide">Years Experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">16+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">16+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-2">3</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wide">Happy Employers</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection