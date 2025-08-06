"use client";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { SkillCard } from "./skillCard";

export const stacks = [
    {
        area: "Backend",
        tecnologias: [
            { name: "Java", icon: "/java.png" },
            { name: "Spring Boot", icon: "/spring.png" },
            { name: "Node.js", icon: "/node.png" }
        ]
    },
    {
        area: "Frontend",
        tecnologias: [
            { name: "Next.js", icon: "/next.png" },
            { name: "TailwindCSS", icon: "/tailwind.png" },
            { name: "Html", icon: "/html.png" },
            { name: "CSS", icon: "/css.png" }
        ]
    },
    {
        area: "Web3",
        tecnologias: [
            { name: "Solidity", icon: "/eth.png" },
            { name: "Hardhat", icon: "/hardhat.png" },
            { name: "Ethers.js", icon: "/ethers.png" }
        ]
    },
    {
        area: "Tools",
        tecnologias: [
            { name: "Docker", icon: "/docker.png" },
            { name: "PostgreSQL", icon: "/postgre.png" },
            { name: "Git & GitHub", icon: "/github.png" }
        ]
    }
];

export function Skills() {
    return (
        <div className="flex flex-col gap-10 w-full">
            <h2 className="text-acao text-4xl font-headline font-black uppercase text-center md:text-start">
                Skills
            </h2>

            <Tabs defaultValue="Backend" className="w-full max-w-6xl mx-auto gap-4">
                <TabsList className=" bg-transparent flex justify-center md:justify-start flex-wrap gap-2">
                    {stacks.map((item, index) => (
                        <TabsTrigger
                            key={index}
                            value={item.area}
                            className="px-4 py-2 text-sm md:text-base"
                        >
                            {item.area}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {stacks.map((item, index) => (
                    <TabsContent defaultValue={"backend"} className="border border-white p-2 rounded-xl" key={index} value={item.area}>
                        <SkillCard tecnologias={item.tecnologias} />
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
