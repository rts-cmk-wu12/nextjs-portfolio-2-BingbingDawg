"use client"
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { usePathname } from 'next/navigation'

export default function Header() {
     const pathname = usePathname();
    return(
        <>
        <header className="bg-[#1B1B1B] px-3.5 py-6 mx-20 rounded-b">
            <nav className="flex  justify-between items-center ">
            <ul className=" px-[93px] w-68 flex gap-17 ">
                <li className=""><Link className={`link ${pathname === '/' ? 'text-[#62BA1B]' : 'text-[#9C9C9C]'}`} href="/">Home</Link></li>
                <li className=""><Link className={`link ${pathname === '/about' ? 'text-[#62BA1B]' : 'text-[#9C9C9C]'}`} href="/about">About</Link></li>
                <li className=""><Link className={`link ${pathname === '/contact' ? 'text-[#62BA1B]' : 'text-[#9C9C9C]'}`} href="/contact">Contact</Link></li>
            </ul>
            <div className="flex gap-6 px-24">
                <FaLinkedinIn className="size-4.5 text-[#9C9C9C]" />
                <FaBehance className="size-4.5 text-[#9C9C9C]" />
                <FaTwitter className="size-4.5 text-[#9C9C9C]"/>
            </div>
            </nav>
        </header>
        </>
    )
}