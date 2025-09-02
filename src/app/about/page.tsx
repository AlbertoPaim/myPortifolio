/* eslint-disable react/no-unescaped-entities */
"use client"

import { Skills } from "../../components/Skills";

const About = () => {
    return (
        <div id="about" className="flex py-18 flex-col md:flex-row px-4 max-w-[1080px] mx-auto mt-16 gap-10">
            <div className="flex-1  flex-col gap-10 flex">
                <h2 className="text-4xl font-headline font-black uppercase text-acao text-center md:text-start">About
                </h2>
                <p className="text-white text-2xl text-center md:text-justify">
                    As a Web Developer, I specialize in designing and implementing secure and scalable APIs using Java and the Spring Boot framework. My expertise extends to the Web3 ecosystem, where I develop decentralized applications and write smart contracts with Solidity. I am a collaborative team player with a problem-solving mindset, and my fluent English proficiency (B2) facilitates seamless communication within international teams to deliver solid and efficient software solutions.                </p>
            </div>
            <div className="flex-1 md:mt-0 mt-4 flex justify-center">

                <Skills />

            </div>
        </div>
    );
};

export default About;