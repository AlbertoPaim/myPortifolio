import { motion } from "framer-motion"

interface Props {
    content: string;
}

export function ButtonPrincipal({ content }: Props) {
    return (
        <>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.1 }}
                className="w-full text-detalhes text-lg md:text-2xl font-semibold rounded-lg  bg-linear-to-b
             from-destaquePrincipal to-destaqueSecundario py-2 md:px-4
             hover:from-background hover:to-destaquePrincipal  transition-colors cursor-pointer"
            >
                {content}
            </motion.button>
        </>
    )
}