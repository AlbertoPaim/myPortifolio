
import { MdOutlineArrowDropDown } from "react-icons/md";
import { SkillCard } from "../components/skillCard";

export const stacks = [

    {
        area: "Backend",
        backgroundUrl: "/backend.jpg",
        tecnologias: ["Java", "Spring bot"]
    },
    {
        area: "Frontend",
        backgroundUrl: "/web.jpg",
        tecnologias: ["Next.js", "TailwindCss", "Css"]
    },
    {
        area: "Web3",
        backgroundUrl: "/web3.jpg",
        tecnologias: ["Solidity", "Hardhat", "Ethers.js"]
    },
    {
        area: "Environments & Tools",
        backgroundUrl: "/tools.jpg",
        tecnologias: ["Docker", "Postgress", "Git & GitHub"]
    }

];

export function Skills() {
    return (

        <section id="skills"
            className="flex flex-col pt-16 min-h-screen w-ful bg-cover max-w-[1080px] px-4 mx-auto justify-center gap-10">

            <h2 className="text-center text-6xl text-white font-extrabold uppercase">Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stacks.map((stack, index) => (

                    <SkillCard key={index}
                        area={stack.area}
                        tecnologias={stack.tecnologias}
                        backgroundUrl={stack.backgroundUrl}
                    />

                ))}


            </div>

        </section>

    );
}