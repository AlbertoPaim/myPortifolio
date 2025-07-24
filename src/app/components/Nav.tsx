"use client"

import Link from "next/link";
import { useState } from "react";
import { MdContactPhone, MdKeyboard, MdKeyboardAlt, MdLanguage, MdMenu, MdPerson, MdPhone, MdWeb } from "react-icons/md";
import { TbMoodPuzzled } from "react-icons/tb";

export function Nav() {
    const [open, setOpen] = useState(false);

    return (


        <nav className="h-16 w-full fixed md:bg-black z-10">

            <div className=" flex px-4 justify-end items-center bg-black">
                <MdMenu onClick={() => setOpen(!open)} className="text-white text-5xl md:hidden justify-end flex" />
            </div>

            <ul className="h-16 gap-10  mx-auto text-white font-semibold text-xl hidden md:flex flex-row justify-center items-center z-10 ">
                <Link href={'#about'}><li className=" text-white hover:text-acao transition">About Me</li></Link>
                <Link href={'#skills'}><li className=" text-white hover:text-acao transition">Skills</li></Link>
                <Link href={'/'}><li className=" text-white hover:text-acao transition">Projects</li></Link>
                <Link href={'/'}><li className=" text-white hover:text-acao transition">Contact</li></Link>
            </ul>

            <ul className={`gap-10 flex flex-col mx-auto text-white font-semibold text-xl bg-black w-2/3 p-10 absolute top-0 left-0 h-screen z-20 ${open ? 'block' : '-translate-x-full'} transition-transform md:hidden`}>
                <Link href={'/'}><li className="hover:text-acao transition flex items-center gap-4"><MdPerson className="text-2xl" /> About Me</li></Link>
                <Link href={'/'}><li className="hover:text-acao transition flex items-center gap-4"><MdKeyboardAlt /> Skills</li></Link>
                <Link href={'/'}><li className="hover:text-acao transition flex items-center gap-4"><MdLanguage /> Projects</li></Link>
                <Link href={'/'}><li className="hover:text-acao transition flex items-center gap-4"><MdPhone /> Contact</li></Link>
            </ul>

        </nav>


    );
}