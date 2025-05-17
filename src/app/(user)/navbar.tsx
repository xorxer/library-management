"use client";
import { FaSearch, FaUser } from "react-icons/fa";
import { BiSolidHome } from "react-icons/bi";
import LogoIcon from "@/components/icons/alcove logo.svg";
import Link from "next/link";
import ProfileAvatar from "@/components/ProfileAvatar";

const user = {
  name: "User",
  image: "",
};

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-home-gradient navbar">
            <div className="flex items-center space-x-3">
                <Link href="/" className="flex items-center gap-2 font-figtree font-bold no-underline text-white">
                    <LogoIcon
                            width={50}
                            height={50}
                            style={{color: "white"}}
                    />
                    <span className="font-figtree font-bold text-3xl">Alcove</span>
                </Link>
            </div>
            <div className="flex flex-row space-x-5">
                <Link href="/" className="flex items-center gap-2 font-figtree font-bold text-xl no-underline text-lightgray-100">
                    <BiSolidHome />
                    <span className="font-poppins font-semibold">Home</span>
                </Link>
                <Link href="/search" className="flex items-center gap-2 font-figtree font-bold text-xl no-underline text-lightgray-100">
                    <FaSearch />
                    <span className="font-poppins font-semibold">Search</span>
                </Link>
                <Link href="/profile" className="flex items-center gap-2">
                    <ProfileAvatar name={user.name} imageUrl={user.image} />
                </Link>
            </div>
            
        </nav>
    )
}