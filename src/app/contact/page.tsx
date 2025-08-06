"use client"

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";


const Contacts = () => {
    return (
        <footer id="contacts" className="bg-[url(/terra.jpg)] bg-cover  mt-16 py-8 gap-4 flex flex-col justify-center mx-auto  w-screen items-center">
            <div className="flex flex-col md:flex-row items-center gap-20">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}>
                    <Image src="/sat.png" width={300} height={200} alt="Imagem satélite" />
                </motion.div>

                <div className="flex md:flex-col gap-10 ">
                    <Link href="https://github.com/AlbertoPaim" target="_blank" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                        <FaGithub className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                        <p className="text-white text-xl group-hover:text-acao">
                            Github
                        </p>

                    </Link>

                    <Link href="https://www.linkedin.com/in/albertopaim/" target="_blank" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                        <FaLinkedin className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                        <p className="text-white text-xl group-hover:text-acao">
                            Linkedin
                        </p>
                    </Link>

                    <Link href="https://wa.me/5571981154490?text=Olá, vi seu portifólio e gostaria de te contratar para um serviço." target="_blank" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                        <FaWhatsapp className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                        <p className="text-white text-xl group-hover:text-acao">Whatsapp</p>
                    </Link>
                </div>
            </div>


            <span className="text-white text-2xl mt-4"> Made by <span className="text-2xl font-bold bg-gradient-to-bl from-destaquePrincipal to-acao text-transparent bg-clip-text">Alberto Paim</span></span>
        </footer >
    );
};

export default Contacts