"use client";
import { Github, Mail, Twitter, X } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		label: "Can Ameti",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-16">
					{socials.map((s) => (
						<Card className="p-20 min-h-[200px]">
							<div className="z-10 flex flex-col items-center">
                <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                  {s.label}
                </span>
				<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                  I’m a 23-year-old System Engineer based in Germany.
                  <br /> I grew up in the dynamic city of Berlin, where I completed my education,
                  and my background reflects both German and Turkish heritage.
                  <br /> Now, I work for a company in Bavaria, specializing in Managed Cloud Hosting, IT Operations, and Consulting.
                  <br />
                  While I occasionally code in C#, TypeScript, JavaScript, and Go, these days I spend more of my free time outside,
                  or enjoying my favorite sports — Formula 1 and ice hockey.
				  <br />
                  Feel free to connect if you'd like to discuss tech, sports, or just life!
                </span>
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
