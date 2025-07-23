/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export function About() {
    return (

        <section className="h-screen w-ful bg-cover max-w-[1080px] px-4 mt-10 mx-auto justify-center">

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mx-auto">

                <div className="text-white flex-1 gap-4 flex flex-col">
                    <h1 className="font-extrabold text-4xl text-acao">
                        Hi, I'm Alberto Paim
                    </h1>

                    <p className="text-xl">

                        I'm a Backend Developer passionate about building robust, secure, and scalable APIs using Java and Spring Boot.

                        I also explore the Web3 ecosystem, where I develop decentralized applications and smart contracts with Solidity.</p>
                </div>

                <div className="flex-1 mx-auto items-center justify-center rotate-10 relative z-0">
                    <Image
                        className="rotate-3"
                        width={500}
                        height={0}
                        src={'/foguete.png'}
                        alt="image"
                    />
                </div>
            </div>
        </section>

    );
}