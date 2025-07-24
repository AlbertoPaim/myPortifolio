import { MdOutlineArrowDropDown } from "react-icons/md";

interface Props {
    area: string;
    backgroundUrl: string;
    tecnologias: string[];
}

export const SkillCard = ({ area, tecnologias, backgroundUrl }: Props) => {
    return (
        <div
            style={{ backgroundImage: `url(${backgroundUrl})` }}
            className="bg-cover bg-no-repeat bg-center flex flex-col items-center justify-center w-full h-56 border border-detalhes rounded-2xl shadow-2xl p-4 hover:opacity-80 cursor-pointer transition-transform">
            <h3 className="text-detalhes  font-black text-5xl text-center uppercase flex flex-col  items-center">
                <span className="text-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]">{area} </span>
                <MdOutlineArrowDropDown className="text-6xl text-detalhes text-center" />
            </h3>

            <ul className="hidden">
                {tecnologias.map((item, index) => (
                    <li className="text-xl font-bold text-white" key={index}>
                        {item}
                    </li>
                ))}
            </ul>


        </div>
    );
};
