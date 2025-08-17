import Image from "next/image";
import Link from "next/link";
import { MdCode, MdOpenInNew } from "react-icons/md";

interface ProjectCardProps {
    name: string;
    description: string;
    image: string;
    repoUrl: string;
    liveUrl?: string;
    technologies: string[];
}

export const ProjectCard = ({ name, description, image, repoUrl, liveUrl, technologies }: ProjectCardProps) => {
    return (

        <div className="group relative h-full cursor-pointer overflow-hidden rounded-lg shadow-lg shadow-black/40 transition-all duration-500 hover:scale-105">

            <Image
                className="object-cover transition-all duration-500 group-hover:scale-110"
                src={image}
                alt={`Imagem do projeto ${name}`}
                fill={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 text-white">

                <div className="flex flex-wrap gap-2 mb-2">
                    {technologies.map((tech) => (
                        <span key={tech} className="bg-slate-500/60 text-sky-200 text-xs font-bold px-2 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-bold">{name}</h3>

                <div className="transition-all duration-500 overflow-hidden max-h-48 md:max-h-0 group-hover:max-h-48">
                    <p className="text-white mt-1 pt-1">
                        {description}
                    </p>
                </div>


                <div className="flex items-center gap-4 mt-4 opacity-100 md:opacity-0 transition-all duration-500 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                    <Link href={repoUrl} target="_blank" className="flex items-center gap-2 px-3 py-2 rounded-md bg-sky-600/80 hover:bg-sky-500 transition-colors">
                        <MdCode />
                        <span>Código</span>
                    </Link>

                </div>
            </div>
        </div>
    );
};