"use client"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaJs, FaGithubSquare, FaSass } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiMui, SiSupabase, SiStyledcomponents } from "react-icons/si"
import { MdCss } from "react-icons/md"

const Skills = () => {
    const skills = [
        { name: "React.js", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TailwindCSS", icon: <SiTailwindcss /> },
        { name: "MUI", icon: <SiMui /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "CSS", icon: <MdCss /> },
        { name: "Supabase", icon: <SiSupabase /> },
        { name: "GitHub", icon: <FaGithubSquare /> },
        { name: "SASS", icon: <FaSass /> },
        { name: "Styled Components", icon: <SiStyledcomponents /> }
    ]

    return (
        <div className="relative bg-[url('/image2.jpg')] bg-cover bg-center py-16">
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>

            <div className="relative z-10">
                <motion.h2
                    className="text-4xl md:text-5xl font-extrabold text-center mb-12 uppercase tracking-wide text-amber-50"
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    Skills
                </motion.h2>

                <motion.div
                    className="flex flex-wrap justify-center gap-6 text-3xl"
                    initial="hidden"
                    whileInView="show"
                    variants={{
                        hidden: { opacity: 0 },
                        show: { opacity: 1, transition: { staggerChildren: 0.2 } },
                    }}
                    viewport={{ once: true }} >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col items-center gap-3 bg-[#218380] text-amber-50 p-5 rounded-xl shadow-lg w-28 h-28 transition-all duration-300"
                            whileHover={{
                                scale: 1.2,
                                rotate: 3,
                                boxShadow: "0px 0px 25px rgba(33, 131, 128, 0.9)",
                            }}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                            }} >
                            <motion.div
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl" >
                                {skill.icon}
                            </motion.div>

                            <span className="text-xs font-semibold text-center">{skill.name} </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Skills
