"use client"

import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";

export function Nav() {
    const [open, setOpen] = useState(false);

    return (

        <div className="mb-16">
            <nav className="h-16 w-full fixed md:bg-black ">

                <div className=" flex px-4 justify-end items-center bg-black">
                    <MdMenu onClick={() => setOpen(!open)} className="text-white text-5xl md:hidden justify-end flex" />
                </div>

                <ul className="h-16 gap-10  mx-auto text-white font-semibold text-xl hidden md:flex flex-row justify-center items-center z-10 ">
                    <Link href={'/'}><li className=" text-white hover:text-acao transition">About Me</li></Link>
                    <Link href={'/'}><li className=" text-white hover:text-acao transition">Skills</li></Link>
                    <Link href={'/'}><li className=" text-white hover:text-acao transition">Projects</li></Link>
                    <Link href={'/'}><li className=" text-white hover:text-acao transition">Contact</li></Link>
                </ul>

                <ul className={`gap-10 flex flex-col mx-auto text-white font-semibold text-xl bg-black w-2/3 p-10 absolute top-0 left-0 h-screen z-20 ${open ? 'block' : '-translate-x-full'} transition-transform md:hidden`}>
                    <Link href={'/'}><li className="hover:text-acao transition">About Me</li></Link>
                    <Link href={'/'}><li className="hover:text-acao transition">Skills</li></Link>
                    <Link href={'/'}><li className="hover:text-acao transition">Projects</li></Link>
                    <Link href={'/'}><li className="hover:text-acao transition">Contact</li></Link>
                </ul>

            </nav>

        </div >
    );
}