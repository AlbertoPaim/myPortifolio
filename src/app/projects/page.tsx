import { ProjecCard } from "./ProjectCard";

export const Projects = () => {

    const projects = [
        {
            name: "Portfolio",
            description: "Portifolio feito com Next.js, typescript e TailwindCss",
            image: "/space.jpg",
            webLink: "/",
            codeLink: "/"
        },
        {
            name: "Portfolio",
            description: "Portifolio feito com Next.js, typescript e TailwindCss",
            image: "/space.jpg",
            webLink: "/",
            codeLink: "/"
        },
        {
            name: "Portfolio",
            description: "Portifolio feito com Next.js, typescript e TailwindCss",
            image: "/space.jpg",
            webLink: "/",
            codeLink: "/"
        },
        {
            name: "Portfolio",
            description: "Portifolio feito com Next.js, typescript e TailwindCss",
            image: "/space.jpg",
            webLink: "/",
            codeLink: "/"
        }
    ]




    return (
        <section className="flex flex-col h-screen w-screen overflow-hidden px-4 gap-10 justify-center mx-auto max-w-[1080px] ">
            <h1 className="text-4xl lg:text-6xl text-white uppercase font-black text-center drop-shadow-[0_0_10px_#00BCD4]" >Projects</h1>
            <div>
                <ul className="grid md:grid-cols-2 gap-4">
                    {projects.map((item, index) => (
                        <li
                            className="rounded-t-2xl bg-black"
                            key={index}>
                            <ProjecCard
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                webLink={item.webLink}
                                codeLink={item.codeLink}
                            />
                        </li>
                    ))}

                </ul>

            </div>
        </section>
    );
};

export default Projects