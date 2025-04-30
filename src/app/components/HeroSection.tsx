"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import TechCard from './cards/techStacks';

const HeroSection = () => {
    return (
        <section >
            <div className="lg:py-16 pt-10 pb-52">
                 <div className="grid grid-cols-1 gap-10 lg:flex">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-center"
                >
                    <div className="rounded-full bg-gray-600 w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                        <Image
                            src="/images/profile.png"
                            alt="hero image"
                            className="rounded-full object-cover"
                            fill
                            sizes="(max-width: 768px) 150px, 350px"
                            priority
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-gray-900 dark:text-gray-700 mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Shyam Prakash",
                                1000,
                                "FullStack&nbsp;Developer",
                                1000,
                                "Frontend&nbsp;Developer",
                                1000,
                                "Backend&nbsp;Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-gray-600  text-base sm:text-lg mb-6 lg:text-xl">
                        Dedicated and passionate Full Stack Developer with a strong foundation in computer science. <br />
                        Well versed in frontend technologies like, React, Next js and Redux.
                    </p>
                    <div>
                        <Link
                            href="/#contact"
                            className="transition ease-in delay-250 hover:-translate-y-2 hover:scale-110 px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
                        >
                            Hire Me
                        </Link>
                        <Link
                            download={'/pdf/ShyamPrakashResume.pdf'}
                            href="/pdf/ShyamPrakashResume.pdf"
                            className="transition ease-in delay-250 hover:-translate-y-2 hover:scale-110 px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
                        >
                            <span className="block bg-white text-black hover:bg-slate-100 dark:hover:bg-blue-200 rounded-full px-5 py-2">
                                View Resume
                            </span>
                        </Link>
                    </div>
                </motion.div>
            </div>
            </div>
           
            <div className="grid grid-cols-1 lg:flex  lg:mt-[20vh]">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="text-4xl md:text-6xl text-center p-10 font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">
                        What I know
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6 lg:px-8">
                        <TechCard
                            title="Frontend"
                            tech={[
                                {
                                    name: 'HTML',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                                },
                                {
                                    name: 'CSS',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                                },
                                {
                                    name: 'Tailwind',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
                                },
                                {
                                    name: 'JavaScript',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                                },
                                {
                                    name: 'TypeScript',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
                                },
                                {
                                    name: 'React',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                                },
                                {
                                    name: 'Next.js',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                                },
                                {
                                    name: 'Angular',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
                                }
                            ]}
                        />
                        <TechCard
                            title="Backend"
                            tech={[
                                {
                                    name: 'Node.js',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                                },
                                {
                                    name: 'Express',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
                                },
                                {
                                    name: 'Next Auth',
                                    logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiB2aWV3Qm94PSIwIDAgNDAwIDQwMCI+PHBhdGggZmlsbD0iIzI5MkVEQiIgZD0iTTI4NC45MjcgMTk5LjgzN2MwIDQ3LjQ1NS0zOC40ODUgODUuOTQtODUuOTQgODUuOTQtNDcuNDU2IDAtODUuOTQtMzguNDg1LTg1Ljk0LTg1Ljk0IDAtNDcuNDU2IDM4LjQ4NC04NS45NCA4NS45NC04NS45NCA0Ny40NTUgMCA4NS45NCAzOC40ODQgODUuOTQgODUuOTR6Ii8+PC9zdmc+'  // Base64 encoded simple NextAuth logo
                                }
                            ]}
                        />
                        <TechCard
                            title="Database"
                            tech={[
                                {
                                    name: 'MySQL',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                                },
                                {
                                    name: 'MongoDB',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                                },
                                {
                                    name: 'PostgreSQL',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
                                }
                            ]}
                        />
                        <TechCard
                            title="DevOps"
                            tech={[
                                {
                                    name: 'Docker',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
                                },
                                {
                                    name: 'Kubernetes',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg'
                                },
                                {
                                    name: 'Git',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                                },
                                {
                                    name: 'AWS',
                                    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg'
                                }
                            ]}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
