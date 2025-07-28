"use client";

import { AccordionContent } from "@/components/ui/accordion"
import { Tecnologia, TecnologiaProps } from "./Tecnologia";

interface Props {
    tecnologias: TecnologiaProps[];
}

export const SkillCard = ({ tecnologias }: Props) => {

    return (
        <>
            <AccordionContent className="relative p-4">
                <div className="absolute bg-destaquePrincipal opacity-50 top-0 left-0 right-0 bottom-0 z-0 rounded-2xl">

                </div>
                <ul className="flex flex-col gap-4 z-10 relative">
                    {tecnologias.map((item, index) => (
                        <li className=""
                            style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.9)" }}
                            key={index}>
                            <Tecnologia
                                name={item.name}
                                icon={item.icon}
                            />
                        </li>
                    ))}
                </ul>
            </AccordionContent>


        </>
    );
};
