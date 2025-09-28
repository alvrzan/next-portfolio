import Image from "next/image";
import ProfileComponent from "./Components/Elements/Profile";

export default function Home() {
	const users = [
		{
			name: "Alvrzan",
			role: "Fullstack Developer",
			birthDate: "5th, February 2002",
			imageSrc: "/images/alvrzan.png",
		},
	];
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-tr  from-gray-300 to-blue-300">
			<div className="grid grid-cols-1 items-center justify-center text-black">
				{users.map((user) => (
					<ProfileComponent
						key={user.name}
						name={user.name}
						role={user.role}
						birthDate={user.birthDate}
						imageSrc={user.imageSrc}
					/>
				))}
			</div>
		</div>
	);
}
