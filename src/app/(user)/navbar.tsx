"use client";
import { usePathname } from "next/navigation";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import LogoIcon from "../../components/icons/alcove logo.svg";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-home-gradient navbar">
            <div className="flex items-center space-x-3">
                <Link href="/" className="flex items-center gap-2 font-figtree font-bold text-xl no-underline text-white">
                    <LogoIcon
                            width={50}
                            height={50}
                            style={{color: "white"}}
                    />
                    <span className="font-figtree-700">Alcove</span>
                </Link>
            </div>
        </nav>
    )
}