import { motion } from "framer-motion"

const ReusableH2 = ({ title }: { title: string }) => {
    return (
        <h2 className="text-xl md:text-2xl font-bold flex justify-center md:justify-start mx-auto gap-2 overflow-hidden text-center md:text-left">
            <motion.span className="bg-clip-text leading-relaxed text-transparent bg-gradient-to-r from-[#f1f0ee] via-[#eff1f1] to-[#0a0a0a] animate-gradient-x">
                {title}
            </motion.span>
        </h2>
    )
}

export default ReusableH2
