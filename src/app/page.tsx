import ProfileComponent from "../components/Elements/Profile";

export default function Home() {
	const users = [
		{
			name: "Alfi Reza",
			role: "Fullstack Developer",
			birthDate: "5th February 2002",
			imageSrc: "/images/alvrzan.png",
		},
	];

	return (
		<section
			id="about"
			className="flex flex-col items-center justify-center py-20 px-6 text-center">
			{users.map((user) => (
				<ProfileComponent
					key={user.name}
					name={user.name}
					role={user.role}
					birthDate={user.birthDate}
					imageSrc={user.imageSrc}
				/>
			))}

			<div className="max-w-xl mt-8 text-gray-700 leading-relaxed">
				<p>
					Hi! I’m <span className="font-semibold text-blue-600">Alfi Reza</span>
					, a passionate Fullstack Developer who loves crafting modern,
					responsive, and scalable web applications. I enjoy learning new
					technologies and building tools that make life easier.
				</p>
			</div>

			<a
				href="/projects"
				className="mt-8 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition">
				View My Projects
			</a>
		</section>
	);
}
