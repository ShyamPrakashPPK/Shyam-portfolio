import { FC } from 'react';
import ProjectsCard from './cards/ProjectsCard';
import { IProjectSectionCardData } from './utils/data';

interface ProjectCardSectionProps {
    title: string;
    data: IProjectSectionCardData[];
}

const ProjectCardSection: FC<ProjectCardSectionProps> = ({ title, data }) => {
    return (
        <section id='projects' className="grid gap-8 p-5 md:py-20 mt-5 md:p-0">
            <div className="text-4xl md:text-6xl text-center p-10 font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">{title}</div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl::grid-cols-4 gap-5">
                {data.map((card) => (
                    <ProjectsCard
                        href={card.href}
                        key={card.id}
                        title={card.title}
                        src={card.imageUrl}
                        techStack={card.techStack}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectCardSection;
