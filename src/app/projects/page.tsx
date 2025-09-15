import { ProjectCard } from "./ProjectCard";

const Projects = () => {

    const projects = [
        {
            name: "Smart Election",
            description: "This is a decentralized election smart contract. It provides a framework for an administrator to manage the voting process and for users to cast their votes securely and immutably (ensuring a one-vote-per-user constraint).",
            image: "/project4.png",
            repoUrl: "https://github.com/AlbertoPaim/Election-System",
            technologies: ["Solidity", "Hardhat", "Blockchain"]
        },
        {
            name: "Shopping List API",
            description: "RESTful API for managing purchases and their items, with full CRUD operations for both purchases and items.",
            image: "/project2.png",
            repoUrl: "https://github.com/AlbertoPaim/Lista-de-mercado",
            technologies: ["Java", "Spring Boot", "PostgreSQL", "REST API"]
        },

        {
            name: "Smart-Auction",
            description: "Decentralized auction system via smart contract in Solidity. The architecture ensures the immutability and transparency of the process, with development and testing environment managed by Hardhat.",
            image: "/project1.png",
            repoUrl: "https://github.com/AlbertoPaim/Smart-Auction",
            technologies: ["Solidity", "Hardhat", "Ethers", "Blockchain"]
        },

        {
            name: "Ciclos",
            description: "A website for women to track their menstrual cycles, featuring a built-in calculator to predict their next period.",
            image: "/project3.png",
            repoUrl: "https://albertopaim.github.io/Ciclos/",
            technologies: ["HTML", "CSS", "JavaScript"]
        }

    ];

    return (
        <section id="projects" className="container mx-auto max-w-5xl px-4 py-12 md:py-24">
            <h2 className="text-4xl lg:text-5xl font-black text-center text-white drop-shadow-[0_0_3px_#fff] mb-12">
                PROJECTS
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