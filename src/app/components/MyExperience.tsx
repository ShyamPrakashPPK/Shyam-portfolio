"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Experience = [
    {
        key: 1,
        position: 'Full-stack Developer',
        company: 'Webcastle Media',
        location: 'Kochi, Kerala',
        duration: 'July 2024 – Present',
        description: `Working on our ecommerce service product used by over 10 clients with 2000+ vendors, 9000+ products, and 100k+ users. Technologies: React, Next.js, Angular, Redux, Node.js, Express.js, MongoDB.`,
    },
    {
        key: 2,
        position: 'Frontend Developer',
        company: 'TogetherEd',
        location: 'Washington DC, USA (Remote)',
        duration: 'February 2024 – July 2024',
        description: `Worked on Growday, a SaaS platform. Contributed to React and Next.js projects using Tailwind CSS, Node.js, APIs, and Vercel.`,
    },
    {
        key: 3,
        position: 'Full Stack Developer',
        company: 'Quazma Techno Solutions',
        location: 'Indore, MP, India (Remote)',
        duration: 'July 2023 – January 2024',
        description: `Built modular SPAs with Angular and React. Ensured responsive UI and integrated Vercel deployment. Stack included Angular, Next.js, Tailwind CSS, Node.js.`,
    },
    {
        key: 4,
        position: 'Full Stack Developer Intern',
        company: 'Brototype',
        location: 'Kochi, Kerala',
        duration: 'August 2022 – July 2023',
        description: `Developed Angular-based SPAs using the MEAN stack. Took ownership of projects and applied responsive design principles.`,
    }
];

const MyExperience = () => {
    return (
        <section className='relative isolate py-24'>
            <div className="hidden md:flex absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true">
                <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-primary-400 to-secondary-600 opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }} />
            </div>
            <div className='flex flex-col items-center gap-10'>
                <h1 className="text-4xl md:text-6xl text-center p-6 md:p-10 font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">
                    My Work Experience
                </h1>
                <div className="relative w-full max-w-4xl px-4 md:px-0">
                    {/* Timeline line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-400 to-secondary-600"></div>
                    
                    {/* Mobile Timeline line */}
                    <div className="md:hidden absolute left-4 h-full w-1 bg-gradient-to-b from-primary-400 to-secondary-600"></div>
                    
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
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-400 to-secondary-600"></div>
                            
                            {/* Timeline dot - Mobile */}
                            <div className="md:hidden absolute left-4 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary-400 to-secondary-600"></div>
                            
                            {/* Content */}
                            <div className={`w-full md:w-1/2 ${
                                // Desktop styles
                                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                            } 
                            // Mobile styles
                            pl-8 md:pl-0`}>
                                <div className="bg-gray-300 p-4 md:p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                                    <h4 className="text-base md:text-lg font-semibold text-primary-400 mb-1">{exp.company}</h4>
                                    <p className="text-sm md:text-base text-gray-600 mb-2">{exp.location}</p>
                                    <p className="text-xs md:text-sm text-gray-500 mb-3">{exp.duration}</p>
                                    <p className="text-xs md:text-sm text-gray-700">{exp.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="hidden md:flex absolute right-[calc(50%-4rem)] bottom-10 -z-10 transform-gpu blur-3xl sm:right-[calc(50%-18rem)] lg:right-48 lg:bottom-[calc(50%-30rem)] xl:right-[calc(50%-24rem)]"
                aria-hidden="true">
                <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-l from-primary-400 to-secondary-600 opacity-10"
                    style={{
                        clipPath:
                            'polygon(73.6% 1.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }} />
            </div>
        </section>
    );
};

export default MyExperience;
