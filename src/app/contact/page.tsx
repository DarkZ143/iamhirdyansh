"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, Loader2, CheckCircle2, XCircle } from "lucide-react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.send(
                "your_service_id", // replace with your EmailJS Service ID
                "your_template_id", // replace with your Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                "your_public_key" // replace with your EmailJS Public Key
            );
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    };

    return (
        <><Navbar/>
        <main className="relative min-h-screen bg-gradient-to-br from-[#0a0f1e] via-[#0f1b2d] to-[#1a2338] text-gray-200 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.2)_0,transparent_100%)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:40px_40px]"></div>

            <section className="relative z-10 max-w-3xl mx-auto px-6 py-20">
                <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                    Contact Me
                </h1>
                <p className="mt-4 text-center text-gray-400">
                    Let’s build something amazing together. Drop me a message 🚀
                </p>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl backdrop-blur-md space-y-6"
                >
                    <div>
                        <label className="block text-sm font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            placeholder="Your Name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            placeholder="your@email.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Message</label>
                        <textarea
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                            placeholder="Write your message..."
                        />
                    </div>

                    {/* Button + Status */}
                    <button
                        type="submit"
                        disabled={status === "sending"}
                        className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg hover:opacity-90 transition disabled:opacity-50"
                    >
                        {status === "sending" ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : status === "success" ? (
                            <>
                                <CheckCircle2 className="w-5 h-5 text-green-400" />
                                Sent Successfully!
                            </>
                        ) : status === "error" ? (
                            <>
                                <XCircle className="w-5 h-5 text-red-400" />
                                Failed! Try Again
                            </>
                        ) : (
                            <>
                                <Send className="w-5 h-5" />
                                Send Message
                            </>
                        )}
                    </button>
                </form>
            </section>
        </main>
        <Footer />
        </>
    );
}
