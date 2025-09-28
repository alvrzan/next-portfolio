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
		<div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg max-w-xs mx-auto">
			<div className="w-36 h-36 relative mb-4">
				<Image
					src={imageSrc}
					alt={name}
					fill
					style={{ objectFit: "cover" }}
					className="rounded-full"
				/>
			</div>
			<h2 className="text-xl font-bold text-gray-800">{name}</h2>
			<h2 className="text-gray-500">{birthDate}</h2>
			<p className="text-gray-500">{role}</p>
		</div>
	);
}
