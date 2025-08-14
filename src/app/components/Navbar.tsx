"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Skills", path: "#skills" },
    { title: "Projects", path: "#projects" },
    { title: "Experience", path: "#experience" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass backdrop-blur-xl py-4' : 'py-6'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/" className="text-2xl font-bold text-white">
                            <div className="w-full">
                                <Image
                                    src="/images/newlogo_preview_rev_1.png"
                                    alt="logo"
                                    className="w-36 brightness-0 invert"
                                    width={300}
                                    height={300}
                                />
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.div
                                key={link.title}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    href={link.path}
                                    className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                                >
                                    {link.title}
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="#contact"
                                className="px-6 py-2 bg-white hover:bg-gray-200 text-black rounded-full transition-colors duration-300 font-medium"
                            >
                                Let&apos;s Talk
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="p-2 text-gray-300 hover:text-white transition-colors"
                            whileTap={{ scale: 0.95 }}
                        >
                            {navbarOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {navbarOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden mt-4 pb-4"
                    >
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.path}
                                        onClick={() => setNavbarOpen(false)}
                                        className="block text-gray-300 hover:text-white transition-colors duration-300 font-medium py-2"
                                    >
                                        {link.title}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                            >
                                <Link
                                    href="#contact"
                                    onClick={() => setNavbarOpen(false)}
                                    className="inline-block px-6 py-2 bg-white hover:bg-gray-200 text-black rounded-full transition-colors duration-300 font-medium mt-2"
                                >
                                    Let&apos;s Talk
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
};

export default Navbar;
