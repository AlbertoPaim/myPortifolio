
import { motion } from "framer-motion"

interface Props {
    content: string;
}
export function ButtonSecundario({ content }: Props) {
    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.1 }}
                className="w-full text-detalhes  text-lg md:text-2xl font-semibold rounded-lg  bg-background border border-destaqueSecundario py-2 md:px-4 hover:bg-destaquePrincipal transition cursor-pointer">{content}</motion.button>
        </>
    )
}