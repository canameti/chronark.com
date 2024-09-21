'use client'; // Add this at the very top of the file to enable client-side behavior

import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "About Me", href: "/aboutme" },
];

export default function Home() {
    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black"
        >
            <nav className="my-8 animate-fade-in">
                <ul className="flex items-center justify-center gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>

            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
            />

            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />

            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                canameti
            </h1>

            <div
                className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0"
            />

            <div className="my-8 text-center animate-fade-in">
                <h2 className="text-sm text-zinc-500 ">
                    I'm mainly a system engineer and sometimes code stuff for fun.
                </h2>
            </div>

            <button
                id="btnQuickAppealDonate"
                className="btn btn-block animate-fade-in btn-primary btnDonate fixed bottom-12 mb-4 z-10"
                style={{
                    backgroundColor: '#00A859',
                    borderRadius: '12px',
                    width: '180px',
                    height: '50px',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 10, // Ensure button is on top
                }}
                onClick={() => window.open('https://donate.unrwa.org/one-time/~my-donation', '_blank')}
            >
                Donate Now
            </button>

            <div
                className="fixed bottom-0 w-full text-center animate-fade-in mb-4 z-0"
                style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '10px', zIndex: 0}}
            >
                <h2 className="text-sm text-zinc-500 ">
                    Donate for our brothers and sisters in Palestine
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg"
                        alt="Palestine Flag"
                        style={{display: 'inline', width: '24px', marginLeft: '8px'}}
                    />
                </h2>
            </div>

        </div>
    );
}
