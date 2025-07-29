"use client";

import { AccordionContent } from "@/components/ui/accordion"
import { Tecnologia, TecnologiaProps } from "./Tecnologia";

interface Props {
    tecnologias: TecnologiaProps[];
}

export const SkillCard = ({ tecnologias }: Props) => {

    return (
        <>
            <AccordionContent className="relative px-4 ">
                <div className="absolute bg-black opacity-40 top-0 left-0 right-0 bottom-0 z-0">

                </div>
                <ul className="flex flex-col gap-4 z-10 relative p-2">
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
