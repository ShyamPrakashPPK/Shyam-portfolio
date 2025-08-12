"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={`block py-2 pl-3 pr-4 text-gray-700 sm:text-xl rounded md:p-0 hover:text-green-600 transition-colors font-medium ${
                pathname === href ? "text-green-600" : ""
            }`}
        >
            {title}
        </Link>
    );
};

export default NavLink;
