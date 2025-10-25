import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Alvrzan | Portfolio",
	description: "Personal portfolio of Alvrzan, Fullstack Developer.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-tr from-gray-200 to-blue-200 text-gray-800`}>
				<header className="py-6 px-10 flex relative justify-between items-center backdrop-blur-sm bg-white/30 shadow-md">
					<Link
						href="/"
						className="text-2xl font-bold">
						Alvrzan<span className="text-blue-600">.</span>
						<span className="absolute top-4 -skew-5 text-sm text-[#ffffffec] drop-shadow-[0_0_2px_#f6ff00]">
							Next.JS Project
						</span>
					</Link>
					<nav className="space-x-6 text-gray-700">
						<a
							href="#about"
							className="hover:text-blue-600">
							About
						</a>
						<Link
							href="/projects"
							className="hover:text-blue-600">
							Projects
						</Link>
						<a
							href="#contact"
							className="hover:text-blue-600">
							Contact
						</a>
					</nav>
				</header>
				<main className="min-h-screen flex flex-col items-center justify-center">
					{children}
				</main>
				<footer className="py-4 text-center text-sm text-gray-500">
					© {new Date().getFullYear()} Alvrzan. All rights reserved.
				</footer>
			</body>
		</html>
	);
}
