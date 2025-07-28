import Image from "next/image";

export interface TecnologiaProps {
    name: string;
    icon: string;
}

export const Tecnologia = ({ name, icon }: TecnologiaProps) => {
    return (
        <div className="flex gap-4 items-center">
            <Image src={icon} width={30} height={30} alt="icone" />
            <span className="text-2xl text-white font-semibold">{name}</span>
        </div>
    );
};

