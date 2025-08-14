"use client"

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";


const Contacts = () => {
    return (
        <footer id="contacts" className=" mt-16 py-8 gap-4 flex flex-col justify-center mx-auto w-screen items-center">



            <div className=" flex flex-col md:flex-row items-center gap-8">


                <div className="flex md:flex-col gap-10 ">
                    <Link href="https://github.com/AlbertoPaim" target="_blank" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                        <FaGithub className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                        <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className="text-white text-xl group-hover:text-acao">
                            Github
                        </p>

                    </Link>

                    <Link href="https://www.linkedin.com/in/albertopaim/" target="_blank" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                        <FaLinkedin className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                        <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className="text-white text-xl group-hover:text-acao">
                            Linkedin
                        </p>
                    </Link>

                    <Link href="https://wa.me/5571981154490?text=Olá, vi seu portifólio e gostaria de te contratar para um serviço." target="_blank" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                        <FaWhatsapp className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                        <p style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className="text-white text-xl group-hover:text-acao">Whatsapp</p>
                    </Link>
                </div>
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}>
                    <Image src="/sat.png" width={200} height={200} alt="Imagem satélite" />
                </motion.div>
            </div>

            <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
                className="opacity-90 absolute -z-10  -bottom-50 min-w-lg"
            >


                <Image src="/terra.png"
                    width={2000}
                    height={2000}
                    alt="terra"
                    className=" md:opacity-75"
                >
                </Image>
            </motion.div>
            <span style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }} className="text-white text-2xl mt-4 text-shadow:2px_2px_4px_#000 font-black"> Made by <span style={{ textShadow: '1px 1px 10px rgba(0,0,0,0.3)' }} className="font-black text-2xl  bg-gradient-to-bl from-destaquePrincipal to-acao text-transparent bg-clip-text">Alberto Paim</span></span>


        </footer >
    );
};

export default Contacts