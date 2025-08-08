import Image from "next/image";
import Link from "next/link";
import { MdCode, MdLink, MdWeb } from "react-icons/md";

interface ProjectCardProps {
    name: string;
    description: string;
    image: string;
    webLink: string;
}

export const ProjecCard = ({ name, description, image, webLink }: ProjectCardProps) => {
    return (
        <div className="text-white">

            <div className="relative rounded-t-xl group ">

                <Image
                    className="rounded-t-2xl mx-auto min-w-full min-h-96 opacity-30 md:opacity-80 transition-opacity duration-300 group-hover:opacity-30"
                    src={image}
                    width={1000}
                    height={400}
                    alt="project image"
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 flex flex-col items-center justify-center gap-4 text-5xl text-zinc-400 md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        className="border border-white rounded-full p-4 hover:text-white "
                        href={webLink}
                        target="_blank"
                    >
                        <MdCode />
                    </Link>

                    <span className="text-3xl text-white">Visitar Projeto</span>
                </div>
                <h3 className="text-2xl text-center md:text-start  font-bold px-2 pt-2 group-hover:text-acao">{name}</h3>
                <p className="text-xl text-center md:text-start  text-zinc-400 px-2 pb-2 group-hover:text-white">{description}</p>
            </div>



        </div>
    );
};
