"use client"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { SkillCard } from "./skillCard";

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
            { name: "Next.js", icon: "/next.png" },
            { name: "TailwindCSS", icon: "/tailwind.png" },
            { name: "Html", icon: "/html.png" },
            { name: "CSS", icon: "/css.png" }
        ]
    },
    {
        area: "Web3",
        backgroundUrl: "/web3.jpg",
        tecnologias: [
            { name: "Solidity", icon: "/eth.png" },
            { name: "Hardhat", icon: "/hardhat.png" },
            { name: "Ethers.js", icon: "/ethers.png" }
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
        <div className="flex flex-col gap-10 w-full justify-center">
            <h2 className=" text-acao text-4xl font-headline font-black uppercase text-center md:text-start">
                Skills
            </h2>
            <Tabs defaultValue="backend" className="w-sm md:w-md lg:w-lg ">
                <TabsList className="bg-transparent">
                    {stacks.map((item, index) => (
                        <TabsTrigger key={index} value={item.area}>{item.area}</TabsTrigger>
                    ))}
                </TabsList>

                {stacks.map((item, index) => (
                    <TabsContent
                        defaultValue="backend" key={index} value={item.area}>
                        <SkillCard
                            tecnologias={item.tecnologias}
                        />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}