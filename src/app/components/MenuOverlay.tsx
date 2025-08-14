"use client";

import React from "react";
import NavLink from "./NavLink";

interface MenuOverlayProps {
    links: {
        title: string;
        path: string;
    }[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
    return (
        <ul className="flex flex-col py-4 items-center glass-light border-t border-gray-200">
            {links.map((link, index) => (
                <li key={index} className="w-full text-center hover:bg-green-50 transition-colors duration-200">
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;
