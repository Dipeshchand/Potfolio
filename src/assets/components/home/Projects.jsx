import ProjectCard from "./ProjectCard";
import Wedding from "../../images/projects/weddingphoto.png";
import Gym from "../../images/projects/gym.png";

const projects = [
  {
      title: "BookMyFit",
      description:
        "A modern developer portfolio focused on clean interfaces, interactions and performance.",
      image: Gym,
      technologies: [
        "React",
        "Tailwind CSS",
        "Motion",
         "Node.js",
        "Express",
        "MongoDB",
      ],
      liveLink: "https://bookmyfit-1.onrender.com/",
      codeLink: "https://github.com/Dipeshchand/Gym--membership-",
    },

  {
    title: "Aestheticmoments wedding photography",
    description:
      "Developed a responsive wedding photography portfolio website with modern UI/UX and a backend admin panel to upload and manage portfolio content dynamically",
    image:Wedding,
    technologies: [
      "React",
      "Tailwind CSS",
      "Motion",
      "MongoDB",
    ],
    liveLink: "https://www.aestheticmoments.in/",
    codeLink: "https://github.com/Dipeshchand/aestheticmomentsphotography-client",
  },
];

const Projects = () => {
  return (
    <section className="border-b border-neutral-200">

      {/* Heading */}
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-2">

        <h2 className="text-[20px] font-normal tracking-tight">
          Projects
        </h2>

        <a
          href="/projects"
          className="text-[13px] text-neutral-500 underline underline-offset-4 hover:text-black"
        >
          View all
        </a>

      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}

      </div>

      {/* See All Projects */}
      <div className="flex justify-center border-t border-neutral-200 py-3">

        <a
          href="/projects"
          className="rounded-lg bg-black px-4 py-2 text-[12px] font-medium text-white transition-transform hover:scale-[1.02]"
        >
          See all projects →
        </a>

      </div>

    </section>
  );
};

export default Projects;