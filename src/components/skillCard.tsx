"use client";

import { Tecnologia, TecnologiaProps } from "./Tecnologia";

interface Props {
    tecnologias: TecnologiaProps[];
}

export const SkillCard = ({ tecnologias }: Props) => {

    return (
        <>

            <ul className="bg-white flex flex-col gap-4 p-4 border border-background rounded-xl">
                {tecnologias.map((item, index) => (
                    <li className="text-acao "
                        key={index}>
                        <Tecnologia
                            name={item.name}
                            icon={item.icon}
                        />
                    </li>
                ))}
            </ul>
        </>
    );
};
