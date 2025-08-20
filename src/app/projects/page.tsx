import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    const projects = [
        {
            name: "Smart Election",
            description: "Um contrato inteligente de eleição descentralizada. Permite que um administrador gerencie a votação e que usuários votem de forma segura (somente uma vez).",
            image: "/project4.png",
            repoUrl: "https://github.com/AlbertoPaim/Election-System",
            technologies: ["Solidity", "Hardhat", "Blockchain"]
        },
        {
            name: "Lista de Mercado - API",
            description: "API RESTful para gerenciar compras e seus itens, com operações de CRUD completo tanto para compras quanto para os itens.",
            image: "/project2.png",
            repoUrl: "https://github.com/AlbertoPaim/Lista-de-mercado",
            technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API"]
        },
        {
            name: "Ciclos",
            description: "Site para mulheres gerenciarem seus ciclos menstruais com uma calculadora para prever a próxima menstruação.",
            image: "/project3.png",
            repoUrl: "https://albertopaim.github.io/Ciclos/",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            name: "Portfólio Pessoal",
            description: "Meu portfólio pessoal para exibir projetos e habilidades, construído com foco em design moderno e responsividade.",
            image: "/project1.png",
            repoUrl: "https://github.com/AlbertoPaim/Portfolio",
            liveUrl: "/",
            technologies: ["Next.js", "TypeScript", "TailwindCSS"]
        },
    ];

    return (
        <section id="projects" className="container mx-auto max-w-5xl px-4 py-12 md:py-24">
            <h2 className="text-4xl lg:text-5xl font-black text-center text-white drop-shadow-[0_0_3px_#fff] mb-12">
                PROJETOS
            </h2>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project) => (

                    <li key={project.name} className="min-h-[400px]">
                        <ProjectCard
                            name={project.name}
                            description={project.description}
                            image={project.image}
                            repoUrl={project.repoUrl}
                            technologies={project.technologies}
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
};
