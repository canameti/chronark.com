"use client";
import { Navigation } from "../components/nav";
import { motion } from "framer-motion";

const services = [
    {
        title: "Professional Website Development",
        description: "Transform your digital presence with a modern, high-performance website built with cutting-edge technology. Get a custom-crafted website that perfectly represents your brand and drives results.",
        features: [
            "Custom Design & Development",
            "Responsive Design for All Devices",
            "Next.js & React Architecture",
            "Lightning-Fast Performance",
            "Modern UI/UX Design",
            "Analytics Integration",
            "Social Media Integration",
            "Interactive Elements & Animations",
            "Contact Form Integration",
            "Image Optimization",
            "Cross-Browser Compatibility"
        ],
        highlight: true
    }
];

export default function ServicesPage() {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
            <Navigation />
            
            {/* Hero Section */}
            <div className="px-6 pt-20 pb-32 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                        Elevate Your Digital Presence
                    </h2>
                    <p className="mt-4 text-zinc-400">
                        Stand out in the digital landscape with a professionally crafted website that combines stunning design with powerful functionality. Using cutting-edge technologies like Next.js and React, we create fast, secure, and beautiful web experiences that drive results.
                    </p>
                </div>

                {/* Service Card */}
                <div className="mx-auto max-w-4xl">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="relative p-8 rounded-2xl bg-gradient-to-b from-zinc-800 to-zinc-900 border-2 border-emerald-500"
                        >
                            <div className="flex flex-col h-full">
                                <h3 className="text-2xl font-semibold text-zinc-100">{service.title}</h3>
                                <p className="mt-4 text-lg text-zinc-400">{service.description}</p>
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-zinc-300 text-sm list-none">
                                            <svg className="w-5 h-5 mr-3 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </div>
                                <a
                                    href="mailto:contact@canameti.de"
                                    className="mt-12 px-8 py-4 rounded-full text-base font-medium text-center transition-all duration-300 bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/25"
                                >
                                    Discuss Your Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Us Section */}
                <div className="max-w-5xl mx-auto mt-20 mb-20">
                    <h3 className="text-2xl font-bold text-center text-zinc-100">Why Work With Me?</h3>
                    <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Technical Excellence",
                                description: "Leveraging cutting-edge technologies like Next.js, React, and modern web standards to build high-performance websites."
                            },
                            {
                                title: "User-Centric Design",
                                description: "Creating intuitive, beautiful interfaces that engage visitors and drive conversions through thoughtful UX design."
                            },
                            {
                                title: "Dedicated Support",
                                description: "Providing thorough documentation and responsive support to ensure your website continues to perform optimally."
                            }
                        ].map((feature, index) => (
                            <div key={index} className="p-8 rounded-lg bg-zinc-800/30 border border-zinc-700 hover:border-emerald-500/50 transition-colors duration-300">
                                <h4 className="text-lg font-semibold text-zinc-100">{feature.title}</h4>
                                <p className="mt-2 text-zinc-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
} 