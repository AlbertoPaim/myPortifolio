"use client"
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { ButtonPrincipal } from "../components/ButtonPrincipal";
import { ButtonSecundario } from "../components/ButtonSecundario";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";




export function HeroSection() {
    return (

        <section id="HeroSection" className=" h-full w-ful bg-cover max-w-[1080px] px-4 mx-auto justify-center items-center">

            <div className="flex flex-col md:flex-row gap-20 justify-center items-center mx-auto pt-20">

                <div className="text-white flex-1 gap-4 flex flex-col text-2xl">


                    <span className=" uppercase flex gap-4 bg-gradient-to-bl from-destaquePrincipal to-acao text-transparent bg-clip-text font-extrabold bg-line text-shadow-2xs text-3xl md:text-4xl">
                        <h1 className="text-white">I'm</h1>
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

                    <p className="text-xl">

                        I'm a Backend Developer focused on building secure and scalable APIs with Java and Spring Boot. I also develop Web3 apps and smart contracts using Solidity.
                    </p>

                    <div className="flex gap-4">
                        <ButtonPrincipal
                            content="Download CV"
                        />
                        <ButtonSecundario
                            content="Hire"
                        />
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
                        className="rotate-10 z-0"
                        width={300}
                        height={0}
                        src={'/foguete.png'}
                        alt="image"
                    />
                </motion.div>
            </div>

        </section >

    );
}