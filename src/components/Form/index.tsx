"use client"
import { useState } from "react"
import emailjs from "emailjs-com"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        emailjs
            .send(
                "service_andrew",
                "template_uvhadgc",
                formData,
                "XseJFrnvUKExPPOeV"
            )
            .then(() => {
                setStatus("✅ Message sent successfully!")
                setFormData({ name: "", email: "", message: "" })
            })
            .catch(() => setStatus("❌ Failed to send message. Try again."))
    }

    return (
        <div id="contact" className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] relative overflow-hidden">

            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#218380] via-[#fbbf24] to-[#218380]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }} />

            <motion.div
                className="absolute w-72 h-72 bg-[#218380]/20 rounded-full top-[-100px] left-[-100px] blur-3xl animate-pulse"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />

            <motion.div
                className="absolute w-72 h-72 bg-[#fbbf24]/20 rounded-full bottom-[-120px] right-[-120px] blur-3xl animate-pulse"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} />

            <motion.h2
                className="text-4xl md:text-5xl font-extrabold mb-8 uppercase text-amber-50 tracking-wider"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }} >
                Contact Me
            </motion.h2>

            <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
                <motion.div
                    className="flex-1 text-center md:text-left text-amber-50 space-y-4"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }} >
                    <p>Email: <a href="mailto:andrewkalumba29@gmail.com" className="underline hover:text-[#fbbf24] transition">andrewkalumba29@gmail.com</a></p>
                    <p>Phone: <a href="tel:+46760347287" className="underline hover:text-[#fbbf24] transition">+46760347287</a></p>
                    <div className="flex justify-center md:justify-start gap-6 mt-4 text-3xl">
                        <a href="https://github.com/andrewkalumba" target="_blank" className="hover:text-[#218380] transition-transform transform hover:scale-110"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/andrew-julius-kalumba-82b02b348/" target="_blank" className="hover:text-[#218380] transition-transform transform hover:scale-110"><FaLinkedin /></a>
                    </div>
                </motion.div>

                <motion.form
                    onSubmit={handleSubmit}
                    className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 flex flex-col gap-5 text-white"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }} >
                    <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} className="w-full p-4 rounded-xl bg-white/20 placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-[#218380] focus:outline-none transition" />

                    <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} className="w-full p-4 rounded-xl bg-white/20 placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-[#218380] focus:outline-none transition" />

                    <textarea name="message" rows={5} placeholder="Your Message..." required value={formData.message} onChange={handleChange} className="w-full p-4 rounded-xl bg-white/20 placeholder-white/70 border border-white/30 focus:ring-2 focus:ring-[#218380] focus:outline-none transition" />

                    <motion.button type="submit" className="w-full py-3 bg-[#218380] rounded-xl font-bold hover:bg-[#1a6c6d] shadow-lg hover:scale-105 transition-transform" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                        Send Message
                    </motion.button>

                    {status && (
                        <motion.p className="mt-3 text-center font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
                            {status}
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </div>
    )
}

export default ContactForm
