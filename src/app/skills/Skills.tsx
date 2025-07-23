/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { SkillCard } from "../components/skillCard";

export function Skills() {
    return (

        <section className=" mt-4 h-screen w-ful bg-cover max-w-[1080px] px-4 mt-10 mx-auto justify-center">
            <h2 className="text-4xl text-destaqueSecundario font-extrabold">Skills</h2>
            <div className=" grid-cols-1">
                <SkillCard

                />
            </div>
        </section>

    );
}