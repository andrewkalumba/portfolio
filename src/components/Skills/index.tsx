"use client"
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { FaReact, FaNodeJs, FaJs, FaGithubSquare, FaSass } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiMui, SiSupabase, SiStyledcomponents } from "react-icons/si"
import { MdCss } from "react-icons/md"

const Skills = () => {
    const skillsList = [
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
        { name: "Styled Components", icon: <SiStyledcomponents /> },
    ]

    const [skills, setSkills] = useState(skillsList)
    const [isHovered, setIsHovered] = useState(false)
    const [coolingDown, setCoolingDown] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    // Shuffle skills with smooth motion
    const shuffleSkills = () => {
        setSkills(prev => {
            const shuffled = [...prev].sort(() => Math.random() - 0.5)
            return shuffled
        })
    }

    // When hovered → start reshuffling repeatedly
    const handleMouseEnter = () => {
        setIsHovered(true)
        setCoolingDown(false)
        shuffleSkills()
        if (!intervalRef.current) {
            intervalRef.current = setInterval(shuffleSkills, 1500) // every 1.5s
        }
    }

    // When mouse leaves → stop reshuffling with gentle cooldown
    const handleMouseLeave = () => {
        setIsHovered(false)
        setCoolingDown(true)

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
            intervalRef.current = null
        }

        // end cool down after smooth stop (about 2s)
        setTimeout(() => setCoolingDown(false), 2000)
    }

    return (
        <div className="relative bg-[url('/image2.jpg')] bg-cover bg-center py-16" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >

            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black/80 via-black/50 to-black/80]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />

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
                    layout
                    className="flex flex-wrap justify-center gap-6 text-3xl"
                    transition={{ layout: { duration: 0.8, ease: "easeInOut" } }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            layout
                            key={skill.name}
                            className="flex flex-col items-center gap-3 bg-[#218380] text-amber-50 p-5 rounded-xl shadow-lg w-28 h-28 transition-all duration-300"
                            whileHover={{
                                scale: 1.2,
                                rotate: 3,
                                boxShadow: "0px 0px 25px rgba(33, 131, 128, 0.9)",
                            }}
                            animate={
                                isHovered
                                    ? {
                                        y: [0, -6, 0],
                                        opacity: [1, 0.8, 1],
                                        rotate: [0, 6, 0],
                                    }
                                    : coolingDown
                                        ? {
                                            y: [0, -3, 0],
                                            opacity: [1, 0.9, 1],
                                            rotate: [0, 3, 0],
                                        }
                                        : { y: 0, opacity: 1, rotate: 0 }
                            }
                            transition={{
                                duration: isHovered ? 2.5 : 1.5,
                                repeat: isHovered ? Infinity : (coolingDown ? 1 : 0),
                                ease: "easeInOut",
                            }}
                        >
                            <motion.div
                                whileHover={{ rotate: 360, scale: 1.3 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl"
                            >
                                {skill.icon}
                            </motion.div>
                            <motion.span
                                animate={
                                    isHovered
                                        ? { opacity: [1, 0.6, 1], scale: [1, 0.9, 1] }
                                        : coolingDown
                                            ? { opacity: [1, 0.8, 1], scale: [1, 0.95, 1] }
                                            : { opacity: 1, scale: 1 }
                                }
                                transition={{
                                    duration: isHovered ? 1.5 : 1,
                                    repeat: isHovered ? Infinity : (coolingDown ? 1 : 0),
                                    ease: "easeInOut",
                                }}
                                className="text-xs font-semibold text-center"
                            >
                                {skill.name}
                            </motion.span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Skills
