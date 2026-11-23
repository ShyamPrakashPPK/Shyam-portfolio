"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Experience  } from './utils/data';



const MyExperience = () => {
    return (
        <section id="experience" className='relative isolate py-24 bg-black'>

            <div className='flex flex-col items-center gap-10'>
                <h1 className="text-4xl md:text-5xl text-center p-6 md:p-10 font-bold text-white">
                    My Work Experience
                </h1>
                <div className="relative w-full max-w-4xl px-4 md:px-0">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-700"></div>
                    
                    {/* Mobile Timeline line */}
                    <div className="md:hidden absolute left-4 h-full w-1 bg-gray-700"></div>
                    
                    {Experience.map((exp, index) => (
                        <motion.div
                            key={exp.key}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative mb-8 flex items-center ${
                                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            } flex-row`}
                        >
                            {/* Timeline dot - Desktop */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white"></div>
                            
                            {/* Timeline dot - Mobile */}
                            <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white"></div>
                            
                            {/* Content */}
                            <div className={`w-full md:w-1/2 ${
                                // Desktop styles
                                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                            } 
                            // Mobile styles
                            pl-8 md:pl-0`}>
                                                <div className="card p-6 hover-lift hover:border-gray-50">
                                    <h3 className="text-xl font-bold text-white mb-2">{exp.position}</h3>
                                    <h4 className="text-lg font-semibold text-gray-400 mb-1">{exp.company}</h4>
                                    <p className="text-gray-300 mb-2">{exp.location}</p>
                                    <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default MyExperience;
