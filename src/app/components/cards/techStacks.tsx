"use client";

import { FC } from 'react';
import Image from 'next/image';

interface TechCardProps {
    title: string;
    tech: {
        name: string;
        logo: string;
    }[];
}

const TechCard: FC<TechCardProps> = ({ title, tech }) => {
    return (
        <div className="flex-1 flex flex-col gap-6 bg-gray-200 p-6 md:p-8 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className="text-primary text-gray-900  font-bold text-2xl tracking-wider">
                {title}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tech.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-300 transition-all duration-300 hover:shadow-md"
                    >
                        <div className="relative w-10 h-10 flex items-center justify-center">
                            {item.logo.startsWith('data:image') ? (
                                // Handle inline SVG data
                                <img
                                    src={item.logo}
                                    alt={item.name}
                                    className="w-10 h-10"
                                />
                            ) : (
                                <Image
                                    src={item.logo}
                                    alt={item.name}
                                    fill
                                    className="object-contain"
                                />
                            )}
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechCard;
