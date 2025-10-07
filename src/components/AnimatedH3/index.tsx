import { motion } from "framer-motion";

const AnimatedH3 = () => {
    const words = ["Frontend", "||", "Fullstack", "Developer"];

    return (
        <h3 className="text-xl md:text-2xl font-bold flex gap-2 overflow-hidden">
            {words.map((word, index) => (
                <motion.span key={index} className="bg-clip-text leading-relaxed text-transparent bg-gradient-to-r from-[#f1f0ee] via-[#eff1f1] to-[#0a0a0a] animate-gradient-x" >
                    {word}
                </motion.span>
            ))}
        </h3>
    );
};

export default AnimatedH3;
