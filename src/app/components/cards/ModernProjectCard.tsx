'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
    title: string
    description: string
    imageUrl: string
    techStack: string
    href?: string
    githubLink?: string
    type: 'personal' | 'client'
    index?: number
}

const ModernProjectCard = ({ title, description, imageUrl, techStack, href, githubLink, type, index = 0 }: ProjectCardProps) => {
    return (
        <motion.div
            className="group relative w-full h-full overflow-hidden cursor-pointer "
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110 filter brightness-40 group-hover:brightness-60"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col justify-end p-6 z-10">
                {/* Tech Stack - Top */}
                <div className="absolute top-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {techStack.split(',').slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                                key={techIndex}
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: techIndex * 0.1 }}
                                className="px-2 py-1 bg-white/10 backdrop-blur-md text-white text-xs font-medium rounded-md "
                            >
                                {tech.trim()}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                    {/* Title */}
                    <motion.h3 
                        className="text-2xl font-bold text-white leading-tight"
                        initial={{ y: 20, opacity: 0.8 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {title}
                    </motion.h3>

                    {/* Description - Shows on hover */}
                    <motion.p 
                        className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 max-h-0 group-hover:max-h-20 overflow-hidden"
                        initial={{ y: 10 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        {description.length > 120 ? description.substring(0, 120) + '...' : description}
                    </motion.p>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-2">
                        <div className="flex gap-3">
                            {href && (
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-2 px-3 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <ExternalLink size={14} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                                    View Live
                                </Link>
                            )}
                            
                            {type === 'personal' && githubLink && (
                                <Link
                                    href={githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/btn flex items-center gap-2 px-3 py-2 bg-zinc-800/80 backdrop-blur-md text-white rounded-lg font-semibold hover:bg-zinc-700 transition-all duration-300 text-sm border border-zinc-700 hover:border-zinc-600 transform hover:scale-105"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Github size={14} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                                    Code
                                </Link>
                            )}
                        </div>

                        {/* Arrow Icon */}
                        <motion.div
                            className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300"
                            whileHover={{ rotate: 45 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ArrowUpRight size={16} className="text-white" />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-xl" />
            </div>
        </motion.div>
    )
}

export default ModernProjectCard