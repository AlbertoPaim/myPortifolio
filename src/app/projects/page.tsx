import { ProjecCard } from "./ProjectCard";

export const Projects = () => {

    const projects = [
        {
            name: "Smart Election",
            description: "Este projeto implementa um contrato inteligente de eleição descentralizada utilizando Solidity. Permite que um administrador cadastre candidatos, inicie e encerre a votação, e que usuários votem de forma segura (somente uma vez). Feito usando Solidity e Hardhat",
            image: "/project4.png",
            webLink: "https://github.com/AlbertoPaim/Election-System"
        },

        {
            name: "Lista de Mercado - Api",
            description: "A Lista de Mercado é uma API RESTful para gerenciar compras e itens de compras, com operações para criar, ler, atualizar e excluir tanto compras quanto itens. Feito usando Java, Spring Boot e PostgresSQL",
            image: "/project2.png",
            webLink: "https://github.com/AlbertoPaim/Lista-de-mercado"
        },
        {
            name: "Ciclos",
            description: "Site para mulheres gerenciarem seus ciclos mentruais com calculadora da próxima menstruação, feito com Html, Css e javascript",
            image: "/project3.png",
            webLink: "https://albertopaim.github.io/Ciclos/",
        },
        {

            name: "Portfolio",
            description: "Portifolio feito com Next.js, TailwindCss e Typescript",
            image: "/project1.png",
            webLink: "/"
        },

    ]




    return (
        <section id="projects" className="flex flex-col pt-18  overflow-hidden px-4 gap-10 justify-center mx-auto max-w-[1080px] ">
            <h1 className="text-4xl lg:text-6xl text-white uppercase font-black text-center drop-shadow-[0_0_3px_#fff]" >Projects</h1>
            <div>
                <ul className="grid md:grid-cols-2 md:gap-10 lg:gap-20 px-4">
                    {projects.map((item, index) => (
                        <li
                            className="rounded-t-2xl bg-black"
                            key={index}>
                            <ProjecCard
                                name={item.name}
                                description={item.description}
                                image={item.image}
                                webLink={item.webLink}
                            />
                        </li>
                    ))}

                </ul>

            </div>
        </section>
    );
};

export default Projects