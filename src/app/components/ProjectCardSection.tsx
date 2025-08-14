"use client";

import { FC, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ModernProjectCard from './cards/ModernProjectCard';
import { IProjectSectionCardData } from './utils/data';

interface ProjectCardSectionProps {
    title: string;
    data: IProjectSectionCardData[];
}

const ProjectCardSection: FC<ProjectCardSectionProps> = ({ title, data }) => {
    const { scrollYProgress } = useScroll();
    const [scrollY, setScrollY] = useState(0);

    // Debug: Log the number of projects
    console.log(`Total projects: ${data.length}`, data.map(p => p.title));

    // Parallax transforms for different elements
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const cardsY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

    useEffect(() => {
        const updateScrollY = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', updateScrollY);
        return () => window.removeEventListener('scroll', updateScrollY);
    }, []);

    return (
        <section id='projects' className="relative min-h-screen py-16 px-6 lg:px-8 bg-black overflow-hidden">
            {/* Parallax Background Elements */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 opacity-10"
            >
                <div className="absolute top-20 left-10 w-72 h-72 bg-gray-500/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-500/20 rounded-full blur-3xl"></div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <motion.div
                    style={{ y: titleY }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold text-white md:    mb-6">
                        My Projects
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        A collection of projects that showcase my expertise in modern web development,
                        from e-commerce platforms to innovative digital solutions.
                    </p>
                </motion.div>

                {/* Projects Container */}
                <div className=" pb-[550px]  md:pb-56">
                    {/* Responsive Grid Layout: 1 col mobile, 2 col medium, 3 col large */}
                    <motion.div
                        style={{ y: cardsY }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
                    >
                        {/* Column 1 */}
                        <div className="flex flex-col gap-6">
                            {data.filter((_, index) => index % 3 === 0).map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="h-80"
                                >
                                    <ModernProjectCard
                                        title={project?.title || `Project ${index + 1}`}
                                        description={project?.description || ''}
                                        imageUrl={project?.imageUrl || ''}
                                        techStack={project?.techStack || ''}
                                        href={project?.href}
                                        githubLink={project?.githubLink}
                                        type={project?.type || 'client'}
                                        index={index}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Column 2 - Offset Higher on large screens */}
                        <div className="flex flex-col gap-6 lg:-mt-12">
                            {data.filter((_, index) => index % 3 === 1).map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                                    className="h-80"
                                >
                                    <ModernProjectCard
                                        title={project?.title || `Project ${index + 2}`}
                                        description={project?.description || ''}
                                        imageUrl={project?.imageUrl || ''}
                                        techStack={project?.techStack || ''}
                                        href={project?.href}
                                        githubLink={project?.githubLink}
                                        type={project?.type || 'client'}
                                        index={index + 1}
                                    />
                                </motion.div>
                            ))}
                        </div>

                        {/* Column 3 - Hidden on medium and below, shown on large screens */}
                        <div className="hidden lg:flex flex-col gap-6">
                            {data.filter((_, index) => index % 3 === 2).map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                                    className="h-80"
                                >
                                    <ModernProjectCard
                                        title={project?.title || `Project ${index + 3}`}
                                        description={project?.description || ''}
                                        imageUrl={project?.imageUrl || ''}
                                        techStack={project?.techStack || ''}
                                        href={project?.href}
                                        githubLink={project?.githubLink}
                                        type={project?.type || 'client'}
                                        index={index + 2}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* View More Button - Positioned below all cards */}
                <motion.div
                    className="text-center w-full clear-both"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a
                        href="https://github.com/ShyamPrakashPPK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:text-black"
                    >
                        <span className="relative z-10">View More</span>
                        <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectCardSection;
