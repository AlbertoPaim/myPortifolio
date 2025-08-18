"use client"
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { ButtonPrincipal } from "../../components/ButtonPrincipal";
import { ButtonSecundario } from "../../components/ButtonSecundario";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";




export function HeroSection() {
    return (

        <section id="hero" className=" bg-cover max-w-[1080px] px-4 mx-auto justify-center flex items-center">

            <div className="flex flex-col lg:flex-row gap-20 justify-center items-center mx-auto pt-50">

                <div className="text-white flex-1 gap-4 flex flex-col">

                    <span className="mx-auto lg:mx-0 uppercase flex gap-4 bg-gradient-to-bl from-destaquePrincipal to-acao text-transparent bg-clip-text font-extrabold bg-line text-shadow-2xs text-2xl md:text-5xl lg:text-6xl">
                        <span className="text-center text-white text-2xl md:text-5xl lg:text-6xl">I'm</span>
                        <TypeAnimation
                            sequence={[
                                "Alberto Paim",
                                1000,
                                "FullStack",
                                1000,
                            ]}
                            wrapper="span"
                            speed={10}
                            repeat={Infinity}
                        />
                    </span>

                    <p className="text-center lg:text-start text-xl md:text-2xl font-texto">

                        Sou um Desenvolvedor Full Stack focado na construção de APIs seguras e escaláveis com Java e Spring Boot. Também desenvolvo aplicações Web3 e contratos inteligentes utilizando Solidity.                    </p>

                    <div className="flex gap-4">
                        <Link href="/cv.pdf" download className="w-full">
                            <ButtonPrincipal
                                content="Download CV"
                            />
                        </Link>

                        <Link className="w-full" target="_blank" href="https://wa.me/5571981154490?text=Olá, vi seu portifólio e gostaria de te contratar para um serviço.">
                            <ButtonSecundario
                                content="Hire"
                            />
                        </Link>

                    </div>


                </div>
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut",
                    }}
                >
                    <Image
                        className="rotate-10 z-0 w-60 lg:w-60"
                        width={200}
                        height={0}
                        src={'/foguete.png'}
                        alt="image"
                    />
                </motion.div>
            </div>

        </section >

    );
}