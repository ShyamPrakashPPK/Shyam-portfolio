'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import AboutSection from './components/AboutSection'
import ProjectCardSection from './components/ProjectCardSection'
import MyExperience from './components/MyExperience'
import EmailSection from './components/EmailSection'
import ScrollProgress from './components/ScrollProgress'
import { projectCard } from './components/utils/data'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <motion.h2
              className="text-2xl font-bold gradient-text"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Loading Portfolio
            </motion.h2>
          </motion.div>
        </motion.div>
      ) : (
        <motion.main
          key="main"
          className="relative min-h-screen bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          
          <div className="relative z-10">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="scroll-section"
            >
              <HeroSection />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="scroll-section"
            >
              <AboutSection />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="scroll-section"
            >
              <TechStack />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="scroll-section"
            >
              <MyExperience />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="scroll-section"
            >
              <ProjectCardSection title="Featured Projects" data={projectCard} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="scroll-section"
            >
              <EmailSection />
            </motion.section>
          </div>


        </motion.main>
      )}
    </AnimatePresence>
  )
}
