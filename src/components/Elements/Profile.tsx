import Image from "next/image";

interface ProfileProps {
	name: string;
	role: string;
	birthDate: string;
	imageSrc: string;
}

export default function Profile({
	name,
	role,
	birthDate,
	imageSrc,
}: ProfileProps) {
	return (
		<div className="flex flex-col items-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all max-w-xs mx-auto transform hover:-translate-y-2">
			<div className="w-36 h-36 relative mb-4">
				<Image
					src={imageSrc}
					alt={name}
					fill
					style={{ objectFit: "cover" }}
					className="rounded-full border-4 border-blue-500 shadow-md"
				/>
			</div>
			<h2 className="text-2xl font-bold text-gray-800">{name}</h2>
			<h3 className="text-gray-500">{birthDate}</h3>
			<p className="text-gray-600">{role}</p>
		</div>
	);
}
