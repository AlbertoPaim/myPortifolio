"use client"

import Link from "next/link";
import { useState } from "react";
import { MdClose, MdCode, MdHome, MdLanguage, MdMenu, MdPerson, MdPhone } from "react-icons/md";


export function Nav() {
    const [open, setOpen] = useState(false);

    return (


        <nav className="h-16 w-full fixed z-20  px-4 bg-black">

            <div className="cursor-pointer  flex px-4 justify-end items-center bg-black">
                {!open && (<MdMenu onClick={() => setOpen(!open)} className="hover:text-acao transition-colors text-white text-5xl md:hidden justify-end flex" />)}
                {open && (<MdClose onClick={() => setOpen(!open)} className="hover:text-acao transition-colors text-white text-5xl md:hidden justify-end flex" />)}

            </div>

            <ul className="max-w-[1080px] h-16 gap-10  mx-auto text-white font-semibold text-xl hidden md:flex flex-row items-center z-10 justify-between  ">
                <div>
                    <Link href={'#hero'}><li className="hover:text-acao transition text-acao">Alberto Paim</li></Link>
                </div>
                <div className="flex gap-10">
                    <Link href={'#about'}><li className=" text-white hover:text-acao transition">About Me</li></Link>
                    <Link href={'#projects'}><li className=" text-white hover:text-acao transition">Projects</li></Link>
                    <Link href={'#contacts'}><li className=" text-white hover:text-acao transition">Contacts</li></Link>
                </div>

            </ul>

            <ul className={`gap-10 flex flex-col mx-auto text-white font-semibold text-xl bg-black w-2/3 p-10 absolute top-0 left-0 h-screen z-20 ${open ? 'block' : '-translate-x-full'} transition-transform md:hidden`}>
                <Link href={'#hero'}><li className="hover:text-acao transition flex items-center gap-4"><MdHome className="text-2xl" /> Alberto Paim</li></Link>
                <Link href={'#about'}><li className="hover:text-acao transition flex items-center gap-4"><MdPerson className="text-2xl" /> About Me</li></Link>
                <Link href={'#projects'}><li className="hover:text-acao transition flex items-center gap-4"><MdLanguage /> Projects</li></Link>
                <Link href={'#contacts'}><li className="hover:text-acao transition flex items-center gap-4"><MdPhone /> Contact</li></Link>
            </ul>

        </nav>


    );
}