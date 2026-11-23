'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { WavyBackground } from './ui/WavyBackground'

const HeroSection = () => {
    return (
        <WavyBackground
            className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
            containerClassName="relative min-h-screen w-full overflow-hidden"
            colors={[
                "#ffffff", // white
                "#f5f5f5", // very light gray
                "#e8e8e8", // light gray
                "#d0d0d0", // medium gray
                "#b8b8b8", // darker gray
            ]}
            waveWidth={60}
            backgroundFill="#000000"
            blur={20}
            speed="slow"
            waveOpacity={0.8}
        >
         

            <div className="relative w-full max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 lg:mt-10">
                {/* Main Heading */}
                <motion.h1
                    className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 tracking-tight text-white mix-blend-difference leading-tight sm:leading-[0.9] text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                >
                    Crafting Digital
                    <br />
                    <span className="text-white">
                        Experiences
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl text-white mix-blend-difference mb-8 sm:mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    Full Stack Developer passionate about creating exceptional web applications
                    that solve real-world problems with clean, efficient code.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 md:mb-20 w-full max-w-md sm:max-w-none mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <motion.button
                        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[160px] sm:min-w-[180px] text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            window.open('/pdf/ShyamPrakashResume.pdf', '_blank');
                        }}
                    >
                        <span className="relative z-10">Download Resume</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>

                    <motion.button
                        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-white font-semibold rounded-full border border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-105 w-full sm:w-auto min-w-[160px] sm:min-w-[180px] text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            document.getElementById('projects')?.scrollIntoView({
                                behavior: 'smooth'
                            });
                        }}
                    >
                        <span className="relative z-10">See Projects</span>
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                    </motion.button>
                </motion.div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 sm:bottom-8 inset-x-0 flex flex-col items-center gap-2 sm:gap-4 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                onClick={() => {
                    window.scrollBy({
                        top: window.innerHeight,
                        behavior: 'smooth'
                    });
                }}
            >
                <div className="hidden sm:flex items-center gap-8">
                    <span className="relative z-10 text-xs sm:text-sm text-white mix-blend-difference font-medium">Scroll down</span>

                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-600 rounded-full flex justify-center">
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2"
                            />
                        </div>
                    </motion.div>

                    <span className="relative z-10 text-xs sm:text-sm text-white mix-blend-difference font-medium">to see projects</span>
                </div>

                {/* Mobile version - just the scroll indicator */}
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10 flex flex-col items-center sm:hidden"
                >
                    <div className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-2 bg-gray-400 rounded-full mt-1"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </WavyBackground>
    );
};

export default HeroSection;
