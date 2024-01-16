import { FC } from 'react';
import { cn } from '../utils/utils';

interface TechCardProps {
    title: string;
    classaName: string;
    tech: string[];
}

const TechCard: FC<TechCardProps> = ({ title, classaName, tech }) => {
    return (
        <div className="flex-1 flex flex-col gap-4 bg-[#181818] p-4 rounded-xl shadow-lg transition ease-in delay-250 hover:-translate-y-2 hover:scale-110">
            <div className="text-primary font-bold text-2xl tracking-wider ">
                {title}
            </div>
            <div className="flex flex-wrap gap-2 ">
                {tech.map((item, i) => (
                    <div
                        key={i}
                        className={cn(
                            'rounded-md bg-body text-lg text-primary p-2 transition ease-in delay-250 hover:-translate-y-2 hover:scale-110',
                            item === 'HTML' && 'border border-amber-700',
                            item === 'CSS' && 'border border-blue-700',
                            item === 'Tailwind' && 'border border-blue-500/60',
                            item === 'Javascript' && 'border border-yellow-500/60',
                            item === 'Typescript' && 'border border-blue-500/60',
                            item === 'React Js' && 'border border-blue-500/60',
                            item === 'Next Js' && 'border border-white',
                            item === 'Angular' && 'border border-rose-800/60',
                            item === 'Node Js' && 'border border-green-500/60',
                            item === 'Express Js' && 'border border-gray-500/60',
                            item === 'Next Auth' && 'border border-white',
                            item === 'MySql' && 'border border-blue-500/60',
                            item === 'MongoDB' && 'border border-emerald-500/60',
                            item === 'PostgreSQL' && 'border border-blue-500/60',
                            item === 'Docker' && 'border border-blue-500/60',
                            item === 'Kubernetes' && 'border border-blue-500/60',
                            item === 'GIT' && 'border border-orange-500/60',
                            item === 'AWS' && 'border border-yellow-500/60'
                        )}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCard;
