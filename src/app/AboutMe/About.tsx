/* eslint-disable react/no-unescaped-entities */
"use client"

import { Skills } from "./Skills";

export const About = () => {
    return (
        <div className="flex py-10 flex-col md:flex-row px-4 max-w-[1080px] justify-center mx-auto mt-16 gap-10">
            <div className="flex-1  flex-col gap-10 flex">
                <h2 className="text-white text-4xl font-headline font-black uppercase">About me</h2>
                <p className="font-headline text-white text-2xl text-justify">
                    I'm a Backend Developer focused on building secure and scalable APIs using Java and Spring Boot. I also explore the Web3 ecosystem by creating decentralized applications and smart contracts with Solidity. With fluent English (B2), I communicate easily with international teams. I value clear communication, teamwork, and problem-solving to deliver solid and efficient solutions.

                </p>
            </div>
            <div className="flex-1 md:mt-0 mt-4">

                <Skills />
            </div>
        </div>
    );
};

