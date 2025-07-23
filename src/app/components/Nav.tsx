import Link from "next/link";

export function Nav() {
    return (
        <div className="h-16 w-full  justify-center items-center flex border-b-destaquePrincipal border">
            <nav>
                <ul className="flex gap-10  mx-auto text-white font-semibold text-xl ">
                    <Link href={'/'}><li className=" text-white hover:text-acao transition">About Me</li></Link>
                    <Link href={'/'}><li className=" text-white hover:text-acao transition">Skills</li></Link>
                    <Link href={'/'}><li className=" text-white hover:text-acao transition">Projects</li></Link>
                    <Link href={'/'}><li className=" text-white hover:text-acao transition">Contact</li></Link>

                </ul>
            </nav>
        </div>
    );
}