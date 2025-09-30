"use client"
import { motion } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"

interface ProjectCardProps {
    title: string
    description: string
    githubLink: string
    liveLink?: string
    image?: string
}

const ProjectCard = ({ title, description, githubLink, liveLink, image }: ProjectCardProps) => {
    return (
        <motion.div
            className="bg-[#006E90] text-amber-50 rounded-xl shadow-lg flex flex-col max-w-sm overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }} >
            {image && liveLink && (
                <a href={liveLink} target="_blank" rel="noopener noreferrer" className="group relative block">

                    <img src={image} alt={title} className="w-fit h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/30 transition-opacity">
                        <span className="text-amber-50 font-bold text-lg flex items-center gap-2">
                            <FaExternalLinkAlt /> Live Demo
                        </span>
                    </div>
                </a>
            )}

            <div className="p-6 flex flex-col justify-between">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-sm mb-4">{description}</p>
                <div className="flex gap-4">
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 underline hover:text-[#FFD700]"
                    >
                        <FaGithub /> GitHub
                    </a>
                    {liveLink && (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 underline hover:text-[#FFD700]"
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard
