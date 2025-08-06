import Image from "next/image";
import Link from "next/link";
import { MdCode, MdLink } from "react-icons/md";

interface ProjectCardProps {
    name: string;
    description: string;
    image: string;
    webLink: string;
    codeLink: string;
}

export const ProjecCard = ({ name, description, image, webLink, codeLink }: ProjectCardProps) => {
    return (
        <div className="text-white">

            <div className="relative rounded-t-xl group min-w-full">

                <Image
                    className="rounded-t-2xl mx-auto w-full opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    src={image}
                    width={600}
                    height={600}
                    alt="project image"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 text-3xl text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link
                        className="border border-white rounded-full p-2 hover:text-white"
                        href={webLink}
                        target="_blank"
                    >
                        <MdLink />
                    </Link>
                    <Link
                        className="border border-white rounded-full p-2 hover:text-white"
                        href={codeLink}
                        target="_blank"
                    >
                        <MdCode />
                    </Link>
                </div>
                <h3 className="text-center md:text-start  text-xl px-2 pt-2 group-hover:text-acao">{name}</h3>
                <p className="text-center md:text-start  text-zinc-400 px-2 pb-2 group-hover:text-white">{description}</p>
            </div>



        </div>
    );
};
