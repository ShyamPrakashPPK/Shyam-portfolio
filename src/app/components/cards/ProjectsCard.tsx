import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsCardProps {
    title: string;
    href: string;
    techStack: string;
    githubLink?: string;
    description?: string;
    imageUrl: string; // URL for the website snapshot
    type: 'personal' | 'client'; // To differentiate between personal and client projects
}

const ProjectsCard: FC<ProjectsCardProps> = ({
    title,
    href,
    techStack,
    githubLink,
    description,
    imageUrl,
    type
}) => {
    return (
        <div className="group relative glass-light rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover-lift">
            {/* Preview Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden">
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        type === 'personal' 
                            ? 'bg-green-100 text-green-700 border border-green-300'
                            : 'bg-emerald-100 text-emerald-700 border border-emerald-300'
                    }`}>
                        {type === 'personal' ? 'Personal Project' : 'Client Project'}
                    </span>
                </div>

                {/* Website Snapshot */}
                <Image
                    src={imageUrl}
                    alt={`${title} preview`}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={true}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-start p-6">
                    <div className="flex gap-3">
                        <Link 
                            href={href}
                            target="_blank"
                            className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transform hover:scale-105 transition-all duration-200"
                        >
                            Visit Site
                            <ExternalLink size={16} />
                        </Link>
                        {type === 'personal' && githubLink && (
                            <Link 
                                href={githubLink}
                                target="_blank"
                                className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transform hover:scale-105 transition-all duration-200"
                            >
                                Code
                                <Github size={16} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">
                        {title}
                    </h3>
                    {description && (
                        <p className="text-gray-600 text-sm line-clamp-2">
                            {description}
                        </p>
                    )}
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2">
                    {techStack.split(',').map((tech, index) => (
                        <span 
                            key={index}
                            className="text-xs px-3 py-1.5 bg-green-50 text-gray-700 rounded-full font-medium border border-green-200"
                        >
                            {tech.trim()}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;
