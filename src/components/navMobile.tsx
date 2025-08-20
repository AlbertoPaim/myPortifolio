"use client"

import Link from "next/link";
import { useState } from "react";
import { MdClose, MdHome, MdLanguage, MdMenu, MdPerson, MdPhone } from "react-icons/md";

export function NavMob() {
    const [open, setOpen] = useState(false)

    return (
        <nav className="flex md:hidden">

            <div className="fixed top-0 right-0 p-4 cursor-pointer z-30">
                <button onClick={() => setOpen(!open)} className=" cursor-pointer text-white hover:text-acao transition-colors">
                    {open ? <MdClose size={40} /> : <MdMenu size={40} />}
                </button>
            </div>

            <ul
                className={`fixed top-0 left-0 flex flex-col gap-10 mx-auto text-white font-semibold text-xl bg-gradient-to-r from-black to-transparent via-black/50 w-full p-4 h-screen z-20 transform transition-transform ease-in-out duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
                onClick={() => setOpen(false)}
            >
                <div className="flex justify-between items-center">
                    <Link href={'#hero'}><li className="hover:text-acao transition flex items-center gap-4"><MdHome className="text-2xl" /> Alberto Paim</li></Link>
                </div>
                <Link href={'#about'}><li className="hover:text-acao transition flex items-center gap-4"><MdPerson className="text-2xl" /> Sobre</li></Link>
                <Link href={'#projects'}><li className="hover:text-acao transition flex items-center gap-4"><MdLanguage /> Projetos</li></Link>
                <Link href={'#contacts'}><li className="hover:text-acao transition flex items-center gap-4"><MdPhone /> Contatos</li></Link>
            </ul>

            {open && (
                <div
                    className="fixed inset-0 bg-black/30 z-10"
                    onClick={() => setOpen(false)}
                ></div>
            )}
        </nav>
    );
}