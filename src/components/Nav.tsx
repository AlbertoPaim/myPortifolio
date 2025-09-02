import Link from "next/link";

export function Nav() {
    return (
        <nav className="h-16 w-full fixed z-20 ">

            <ul className="px-4 max-w-[1080px] h-16 gap-10  mx-auto text-white font-semibold text-xl hidden md:flex flex-row items-center z-10 justify-between bg-linear-to-t from-transparent via-black/50 to-black ">
                <div>
                    <Link href={'#hero'}><li className="hover:text-acao transition text-acao">Alberto Paim</li></Link>
                </div>
                <div className="flex gap-10">
                    <Link href={'#about'}><li className=" text-white hover:text-acao transition">About</li></Link>
                    <Link href={'#projects'}><li className=" text-white hover:text-acao transition">Projects</li></Link>
                    <Link href={'#contacts'}><li className=" text-white hover:text-acao transition">Contacts</li></Link>
                </div>
            </ul>
        </nav>

    );
}