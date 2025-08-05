/* eslint-disable react/no-unescaped-entities */
"use client"

import { Skills } from "../../components/Skills";

const About = () => {
    return (
        <div id="about" className="flex py-18 flex-col md:flex-row px-4 max-w-[1080px] mx-auto mt-16 gap-10">
            <div className="flex-1  flex-col gap-10 flex">
                <h2 className="text-4xl font-headline font-black uppercase text-acao text-center md:text-start">About me</h2>
                <p className="text-white text-2xl text-center md:text-justify">
                    I'm a Backend Developer focused on building secure and scalable APIs using Java and Spring Boot. <br className="md:hidden" />
                    I also explore the Web3 ecosystem by creating decentralized applications and smart contracts with Solidity. <br className="md:hidden" />
                    With fluent English (B2), I communicate easily with international teams. <br className="md:hidden" />
                    I value clear communication, teamwork, and problem-solving to deliver solid and efficient solutions.
                </p>
            </div>
            <div className="flex-1 md:mt-0 mt-4 w-4 ">

                <Skills />

            </div>
        </div>
    );
};

export default About;