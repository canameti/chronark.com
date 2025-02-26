"use client";
import { Navigation } from "../../components/nav";
import { motion } from "framer-motion";
import { ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectData {
    title: string;
    description: string;
    date: string;
    url?: string;
    repository?: string;
    published: boolean;
    content: string;
    slug: string;
    discontinued?: boolean;
    image?: string;
    techBadges?: string[];
}

interface ClientPageProps {
    project: ProjectData;
    content: any;
}

export default function ClientPage({ project, content }: ClientPageProps) {
    return (
        <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900">
            <Navigation />
            
            <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
                {/* Back button */}
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <Link href="/projects" className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors duration-200">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Projects
                    </Link>
                </div>

                {/* Project Header */}
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-lg text-zinc-400 mx-auto max-w-2xl"
                    >
                        {project.description}
                    </motion.p>
                    
                    {/* Project Links */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex gap-4 mt-6 justify-center"
                    >
                        {project.url && (
                            <a 
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
                            >
                                <LinkIcon className="w-4 h-4" />
                                Live Project
                            </a>
                        )}
                        {project.repository && (
                            <a 
                                href={project.repository}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
                            >
                                <Github className="w-4 h-4" />
                                Repository
                            </a>
                        )}
                    </motion.div>
                </div>

                {/* Project Content */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-4xl mx-auto prose prose-invert prose-zinc"
                >
                    <div className="relative w-full overflow-hidden rounded-xl shadow-2xl mb-10">
                        {/* Project Image */}
                        <div className="relative aspect-video">
                            <img 
                                src={project.image} 
                                alt={project.title}
                                className="object-cover w-full"
                            />
                            {project.discontinued && (
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-red-500">DISCONTINUED</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {project.techBadges?.map((badge, index) => (
                            <img 
                                key={index}
                                src={badge}
                                alt="Technology Badge"
                                className="h-6"
                            />
                        ))}
                    </div>

                    {/* MDX Content */}
                    <div className="mdx-content">
                        {content}
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 