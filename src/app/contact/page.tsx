import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";


const Contacts = () => {
    return (
        <footer id="contacts" className="mt-16 py-8 gap-4 flex flex-col mx-auto  w-screen items-center">
            <div className="flex gap-4 md:gap-16 justify-center ">
                <Link href="https://github.com/AlbertoPaim" target="_blank" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                    <FaGithub className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                    <p className="text-white text-xl group-hover:text-acao">
                        Github
                    </p>

                </Link>

                <Link href="https://www.linkedin.com/in/albertopaim/" target="_blank" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                    <FaLinkedin className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                    <p className="text-white text-xl group-hover:text-acao">
                        Linkedin
                    </p>
                </Link>

                <Link href="" className="flex flex-col items-center gap-2 transition-all hover:scale-110 group duration-500">
                    <FaWhatsapp className="text-white text-4xl transition duration-500  group-hover:text-acao " />
                    <p className="text-white text-xl group-hover:text-acao">Whatsapp</p>
                </Link>
            </div>

            <span className="text-white text-2xl"> Made by <span className="text-2xl font-bold bg-gradient-to-bl from-destaquePrincipal to-acao text-transparent bg-clip-text">Alberto Paim</span></span>
        </footer>
    );
};

export default Contacts