/* eslint-disable react/no-unescaped-entities */
"use client"

import { Skills } from "../../components/Skills";

const About = () => {
    return (
        <div id="about" className="flex py-18 flex-col md:flex-row px-4 max-w-[1080px] mx-auto mt-16 gap-10">
            <div className="flex-1  flex-col gap-10 flex">
                <h2 className="text-4xl font-headline font-black uppercase text-acao text-center md:text-start">Sobre
                </h2>
                <p className="text-white text-2xl text-center md:text-justify">
                    Como Desenvolvedor Web, sou especializado em projetar e implementar APIs seguras e escaláveis utilizando Java e o framework Spring Boot. Minha experiência se estende ao ecossistema Web3, onde desenvolvo aplicações descentralizadas e escrevo contratos inteligentes com Solidity. Sou um profissional colaborativo com uma mentalidade voltada para a resolução de problemas, e minha proficiência em inglês (B2) facilita a comunicação em equipes internacionais para entregar soluções de software sólidas e eficientes.</p>
            </div>
            <div className="flex-1 md:mt-0 mt-4 flex justify-center">

                <Skills />

            </div>
        </div>
    );
};

export default About;