'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "About Me", href: "/aboutme" },
];

export default function Home() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const transformStyle = isMounted ? {
        transform: `translate(${(mousePosition.x - windowSize.width/2) * 0.02}px, ${(mousePosition.y - windowSize.height/2) * 0.02}px)`
    } : {};

    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"
                    style={transformStyle}
                />
            </div>

            <nav className="my-8 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="relative text-sm duration-500 text-zinc-500 hover:text-zinc-300 group"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-zinc-300 transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </ul>
            </nav>

            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />

            <div className="relative z-10 text-center">
                <h1 
                    className="text-4xl text-transparent duration-1000 cursor-default font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text bg-gradient-to-r from-zinc-300/60 via-zinc-300 to-zinc-300/60 animate-title hover:scale-105 transition-transform"
                    style={{
                        textShadow: '0 0 40px rgba(255,255,255,0.2)'
                    }}
                >
                    canameti
                </h1>

                <p className="mt-8 text-sm text-zinc-500 animate-fade-in leading-relaxed">
                    I'm mainly a system engineer and sometimes code stuff for fun.
                    <br />
                    <span className="text-zinc-400">Exploring the intersection of technology and creativity.</span>
                </p>
            </div>

            <div className="absolute bottom-0 w-full">
                <button
                    className="absolute left-1/2 -translate-x-1/2 bottom-20 px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full text-white font-medium shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 transition-all duration-300 hover:-translate-y-2"
                    onClick={() => window.open('https://donate.unrwa.org/one-time/~my-donation', '_blank')}
                >
                    Donate Now
                </button>

                <div className="h-[1px] bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent animate-glow" />

                <div className="py-4 text-center bg-black/50 backdrop-blur-sm">
                    <p className="text-sm text-zinc-500">
                        Donate for our brothers and sisters in Palestine
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                            alt="Palestine Flag"
                            className="inline-block w-6 h-4 ml-2 align-middle"
                        />
                    </p>
                </div>
            </div>
        </div>
    );
}
