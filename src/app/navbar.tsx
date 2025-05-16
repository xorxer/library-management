"use client";
import { usePathname } from "next/navigation";
import { FaHome, FaSearch, FaUser } from "react-icons/fa";
import LogoIcon from "../components/icons/alcove logo.svg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md bg-home-gradient">
            <div className="flex items-center space-x-3">
                <LogoIcon
                        width={50}
                        height={50}
                        style={{color: "white"}}
                />
                <div>
                    <p className="text-red-500">Inter Regular</p>
                    <p className="font-roboto font-bold">Roboto Bold</p>
                    <p className="font-figtree font-black">Figtree Black</p>
                    <p className="font-barlow font-medium">Barlow Medium</p>

                </div>
            </div>
        </nav>
    )
}