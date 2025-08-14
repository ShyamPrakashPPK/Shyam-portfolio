'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Tech {
  name: string
  logo: string
}

interface TechCardProps {
  title: string
  tech: Tech[]
}

export default function TechCard({ title, tech }: TechCardProps) {
  return (
    <motion.div
      className="card p-6 hover-lift relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-6 text-white"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>
        
        <div className="space-y-3">
          {tech.map((item, index) => (
            <motion.div
              key={item.name}
              className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all duration-300 cursor-pointer group/item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                x: 5
              }}
            >
              <motion.div 
                className="w-6 h-6 relative flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  fill
                  className="object-contain"
                  sizes="24px"
                />
              </motion.div>
              <span className="text-sm text-gray-300 group-hover/item:text-white transition-colors font-medium">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}