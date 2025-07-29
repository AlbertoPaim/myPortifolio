"use client"

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { SkillCard } from "../components/skillCard";
import Image from "next/image";


export const stacks = [
    {
        area: "Backend",
        backgroundUrl: "/backend.jpg",
        tecnologias: [
            { name: "Java", icon: "/java.png" },
            { name: "Spring Boot", icon: "/spring.png" },
            { name: "Node.js", icon: "/node.png" }
        ]
    },
    {
        area: "Frontend",
        backgroundUrl: "/web.jpg",
        tecnologias: [
            { name: "Next.js", icon: "/eth.png" },
            { name: "TailwindCSS", icon: "/tailwind.png" },
            { name: "CSS", icon: "/css.png" }
        ]
    },
    {
        area: "Web3",
        backgroundUrl: "/web3.jpg",
        tecnologias: [
            { name: "Solidity", icon: "/eth.png" },
            { name: "Hardhat", icon: "/eth.png" },
            { name: "Ethers.js", icon: "/eth.png" }
        ]
    },
    {
        area: "Tools",
        backgroundUrl: "/tools.jpg",
        tecnologias: [
            { name: "Docker", icon: "/docker.png" },
            { name: "PostgreSQL", icon: "/postgre.png" },
            { name: "Git & GitHub", icon: "/github.png" }
        ]
    }
];

export function Skills() {
    return (
        <section
            className="flex flex-col w-full bg-cover max-w-[1080px] mx-auto  gap-4 md:gap-10"
        >
            <h2 className="text-white text-4xl font-headline font-black uppercase ">
                Skills
            </h2>
            <Accordion orientation="vertical" type="multiple" className="w-full">
                {stacks.map((stack, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden first:rounded-t-2xl last:rounded-b-2xl"
                    >
                        <div
                            className="z-0 h-full absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat "
                            style={{ backgroundImage: `url(${stack.backgroundUrl})` }}
                        />

                        <AccordionItem
                            key={index}
                            className="relative z-10 w-full"
                            value={`item-${index}`}
                        >
                            <AccordionTrigger
                                style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.9)" }}
                                type="button"
                                className="group px-2 min-w-[300px] w-full cursor-pointer hover:text-acao hover:no-underline text-white text-3xl font-semibold flex items-center"
                            >
                                {stack.area}
                            </AccordionTrigger>

                            <SkillCard tecnologias={stack.tecnologias} />
                        </AccordionItem>
                    </div>
                ))}
            </Accordion>

        </section>
    );
}