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
                    Sou um Desenvolvedor Full Stack focado em construir APIs seguras e escaláveis utilizando Java e Spring Boot. Também exploro o ecossistema Web3, criando aplicações descentralizadas e contratos inteligentes com Solidity. Com inglês fluente (B2), me comunico com facilidade com equipes internacionais. Valorizo a comunicação clara, o trabalho em equipe e a resolução de problemas para entregar soluções sólidas e eficientes.
                </p>
            </div>
            <div className="flex-1 md:mt-0 mt-4 flex justify-center">

                <Skills />

            </div>
        </div>
    );
};

export default About;