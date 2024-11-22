"use client";
import { Github, Mail, Twitter, X, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <X size={24} />,
		href: "https://x.com/canameti_",
		label: "X (Twitter)",
		handle: "@canameti_",
		id: "twitter"
	},
	{
		icon: <Mail size={24} />,
		href: "", // mailto:info@canameti.de
		label: "Mail (Currently offline)",
		handle: "info@canameti.de",
		id: "mail"
	},
	{
		icon: <Github size={24} />,
		href: "https://github.com/canameti",
		label: "Github",
		handle: "canameti",
		id: "github"
	},
	{
		icon: <Linkedin size={24} />,
		href: "https://www.linkedin.com/in/can-ameti-4a0049327/",
		label: "LinkedIn",
		handle: "Can Ameti",
		id: "linkedin"
	},
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
					{socials.map((s) => (
						<Card key={s.id}>
							<Link
								href={s.href}
								target="_blank"
								className="relative flex flex-col items-center justify-between h-full p-6 duration-700 group sm:p-8 md:p-12"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<div className="flex flex-col items-center gap-4 my-8">
									<span className="relative z-10 flex items-center justify-center w-16 h-16 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
										{s.icon}
									</span>
									<div className="z-10 flex flex-col items-center gap-4">
										<span className="text-xl font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white font-display whitespace-nowrap px-4">
											{s.handle}
										</span>
										<span className="text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
											{s.label}
										</span>
									</div>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
