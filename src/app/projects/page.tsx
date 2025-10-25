import Card from "@/components/Card/card";

const projects = [
	{
		name: "CodingBar",
		description: "Lorem ipsum",
		link: "https://codingbar.co.id/",
	},
	{ name: "EGS", description: "Co-CEO" },
	{ name: "Alpha", description: "Project Alpha", link: "/projects/alpha" },
	{ name: "Beta", description: "Project Beta" },
];

export default function Projects() {
	return (
		<div className=" w-full p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-stretch">
			{projects.map((proj, index) => (
				<Card
					key={index}
					title={proj.name}
					description={proj.description}
					link={proj.link} // opsional
				/>
			))}
		</div>
	);
}
