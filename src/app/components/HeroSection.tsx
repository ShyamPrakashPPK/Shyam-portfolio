"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import TechCard from './cards/techStacks';

const HeroSection = () => {
    return (
        <section className="lg:py-16 pt-10">
            <div className="grid grid-cols-1 lg:flex">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/profile.png"
                            alt="hero image"
                            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
                >
                    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold ">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                            Hello, I&apos;m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Shyam Prakash",
                                1000,
                                "FullStack Developer",
                                1000,
                                "Frontend Developer",
                                1000,
                                "Backend Developer",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
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
                            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                                View Resume
                            </span>
                        </Link>
                    </div>
                </motion.div>
                
            </div>

       

            <div className="col-span-2 p-6 md:col-span-2 lg:col-span-3 pt-10 md:py-20 ">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-4 place-self-center mt-4 lg:mt-0"
                >
                <div className=" text-4xl md:text-6xl text-center p-10 font-extrabold mt-2 text-transparent bg-clip-text bg-gradient-to-l from-primary-400 to-secondary-600">
                    What I know
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    <TechCard
                        title="Frontend"
                        classaName=" bg-[#4f91f2]"
                        tech={[
                            'HTML',
                            'CSS',
                            'Tailwind',
                            'Javascript',
                            'Typescript',
                            'React Js',
                            'Next Js',
                            'Angular'
                        ]}
                    />
                    <TechCard
                        title="Backend"
                        classaName="bg-[#f37c36] "
                        tech={[
                            'Node Js',
                            'Express Js',
                            'Next Auth']}
                    />
                    <TechCard
                        title="Database"
                        classaName="bg-[#e0558a]"
                        tech={[
                            'MySql',
                            'MongoDB',
                            'PostgreSQL',
                        ]}
                    />
                    <TechCard
                        title="Devops"
                        classaName="bg-[#10c0a2]"
                        tech={[
                            'Docker',
                            'Kubernetes',
                            'GIT',
                            'AWS',
                        ]}
                    />
                    </div>
                </motion.div>
                
            </div>
        </section>
    );
};

export default HeroSection;
