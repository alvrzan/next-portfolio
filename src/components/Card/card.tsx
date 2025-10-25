"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CardProps {
	title?: string;
	description?: string;
	link?: string;
}

export default function Card({
	title = "Project Name",
	description = "Project Descriptions",
	link,
}: CardProps) {
	const [isVisible, setIsVisible] = useState(false);
	useEffect(() => {
		setIsVisible(true);
	}, []);

	const CardContent = (
		<div
			className={`
        flex flex-col bg-amber-400 rounded-3xl p-6 items-center justify-start w-full min-h-[400px]
        transform transition-all duration-1000 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
        hover:scale-105 hover:shadow-xl
      `}>
			<div className="w-full aspect-square rounded-full overflow-hidden relative mb-4">
				<Image
					src="/images/avatar.png"
					alt={title}
					fill
					className="object-cover"
				/>
			</div>

			<h1 className="font-semibold text-center text-lg sm:text-xl">{title}</h1>

			<p className="text-justify line-clamp-4 mt-2 text-sm sm:text-base">
				{description}
			</p>
		</div>
	);

	return link ? (
		<Link
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			className="w-full">
			{CardContent}
		</Link>
	) : (
		CardContent
	);
}
