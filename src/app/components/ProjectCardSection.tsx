"use client";

import { FC } from 'react';
import ProjectsCard from './cards/ProjectsCard';
import { IProjectSectionCardData } from './utils/data';

interface ProjectCardSectionProps {
    title: string;
    data: IProjectSectionCardData[];
}

const ProjectCardSection: FC<ProjectCardSectionProps> = ({ title, data }) => {
    return (
        <section id='projects' className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                    {title}
                </span>
            </h2>
            
            <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
                A collection of projects showcasing my expertise in web development, 
                including both personal projects and client work.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {data.map((card) => (
                    <ProjectsCard
                        key={card.id}
                        href={card.href || ''}
                        title={card.title}
                        techStack={card.techStack}
                        githubLink={card.type === 'personal' ? card.githubLink : undefined}
                        description={card.description}
                        imageUrl={card.imageUrl || ''}
                        type={card.type}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectCardSection;
