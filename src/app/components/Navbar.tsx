"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-gray-200 top-0 left-0 right-0 z-50 bg-white bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className="text-2xl md:text-5xl text-gray-900 font-semibold"
                >
                    <div className=" w-full ">
                        <Image
                            src="/images/newlogo_preview_rev_1.png"
                            alt="logo"
                            className="w-36  invert"
                            width={300}
                            height={300}
                        />
                    </div>
                </Link>
                <div className="flex items-center gap-4">
                    <div className="md:hidden">
                        {!navbarOpen ? (
                            <button
                                onClick={() => setNavbarOpen(true)}
                                className="flex items-center px-3 py-2 border rounded border-gray-400 text-gray-700 hover:text-blue-600 hover:border-blue-600"
                            >
                                <Bars3Icon className="h-5 w-5" />
                            </button>
                        ) : (
                            <button
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center px-3 py-2 border rounded border-gray-400 text-gray-700 hover:text-blue-600 hover:border-blue-600"
                            >
                                <XMarkIcon className="h-5 w-5" />
                            </button>
                        )}
                    </div>
                </div>
                <div className="hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
};

export default Navbar;
