import { ProjectCard } from "./ProjectCard";

const Projects = () => {

    const projects = [{
        name: "Vende e Passa - Bazar",
        description: "API RESTful para gerenciamento de um bazar online, desenvolvida em Spring Boot com autenticação via JWT e controle de permissões com Spring Security. Imagens são armazenadas em nuvem usando a Cloudinary API, otimizando o banco de dados Postgres com apenas URLs.",
        image: "/project3.png",
        repoUrl: "https://github.com/AlbertoPaim/bazar_java",
        technologies: ["Java", "Spring Boot", "Spring Security", "PostgreSQL", "REST API"]
    },
    {
        name: "Leilão inteligente",
        description: "Sistema de leilão descentralizado via contrato inteligente em Solidity. A arquitetura garante a imutabilidade e a transparência do processo, com ambiente de desenvolvimento e testes gerenciado pelo Hardhat.",
        image: "/project1.png",
        repoUrl: "https://github.com/AlbertoPaim/Smart-Auction",
        technologies: ["Solidity", "Hardhat", "Ethers", "Blockchain"]
    },
    {
        name: "Eleição inteligente",
        description: "Este é um contrato inteligente de eleição descentralizada. Ele fornece uma estrutura para que um administrador gerencie o processo de votação e para que os usuários possam registrar seus votos de forma segura e imutável (garantindo a restrição de um voto por usuário).",
        image: "/project4.png",
        repoUrl: "https://github.com/AlbertoPaim/Election-System",
        technologies: ["Solidity", "Hardhat", "Blockchain"]
    },
    {
        name: "Lista de mercado - API",
        description: "API RESTful para gerenciar compras e seus itens, com operações CRUD completas tanto para compras quanto para itens.",
        image: "/project2.png",
        repoUrl: "https://github.com/AlbertoPaim/Lista-de-mercado",
        technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API"]
    }

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

export default Projects;