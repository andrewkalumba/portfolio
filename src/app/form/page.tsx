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
        <div className="min-h-screen text-amber-50 flex flex-col items-center justify-center p-6"
            style={{
                backgroundImage:
                    `url("./image5.jpg")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "100vh"
            }}>

            <h2 className="text-3xl font-bold mb-4 uppercase">Contact Me</h2>
            <div className="flex flex-col md:flex-row gap-8 mb-5">
                <div className="text-center md:text-left text-2xl">
                    <p>Email: <a href="mailto:andrewkalumba29@gmail.com" className="underline mb-5">andrewkalumba29@gmail.com</a></p>
                    <p>Phone: <a href="tel:+46760347287" className="underline mb-1.5">+46760347287</a></p>
                    <div className="flex justify-center gap-4 mt-4 text-2xl">
                        <a href="https://github.com/andrewkalumba" target="_blank"><FaGithub size={40}/></a>
                        <a href="https://www.linkedin.com/in/andrew-julius-kalumba-82b02b348/" target="_blank"><FaLinkedin size={40}/></a>
                    </div>
                </div>
            </div>

            <motion.form
                onSubmit={handleSubmit}
                className="bg-amber-50 text-black p-6 rounded-xl shadow-xl w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-md"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-md"
                />

                <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mb-4 border rounded-md"
                />

                <button type="submit" className="w-full bg-[#218380] text-amber-50 font-semibold py-2 rounded-md hover:bg-[#1a6c6d]">
                    Send Message
                </button>

                {status && <p className="mt-4 text-center text-black">{status}</p>}
            </motion.form>
        </div>
    )
}

export default ContactForm
