"use client"
import { useState } from "react"
import emailjs from "emailjs-com"

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

            <div className="mb-6 text-lg text-center">
                <p>Email: <a href="mailto:andrewkalumba29@gmail.com" className="underline">andrewkalumba29@gmail.com</a></p>
                <p>Phone: <a href="tel:+46700000000" className="underline">+46760347287</a></p>
            </div>

            <form onSubmit={handleSubmit} className="bg-amber-50 text-black p-6 rounded-xl shadow-xl w-full max-w-md">
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
            </form>
        </div>
    )
}

export default ContactForm
