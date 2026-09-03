import { Link } from "react-router-dom";
import ProjectCard from "../components/home/ProjectCard";
import Gym from "../images/projects/gym.png"
import floter from "../images/projects/floter.png";
import Wedding from "../images/projects/weddingphoto.png"
import movie from "../images/projects/movie.png"
import Viv from "../images/projects/viv.png"
import workinprogress from "../images/projects/workinprogress.jpg";


const projects = [
  {
    title: "RentV",
    description:
      "A full-stack rental platform designed to simplify property discovery, listing and management.",
    image: workinprogress,
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    liveLink: "https://github.com/Dipeshchand/RentV",
    codeLink: "https://github.com/Dipeshchand/RentV",
  },

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
      title: "Floating Card",
      description:
        "A full-stack rental platform designed to simplify property discovery, listing and management.",
      image: floter,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "Motion",
        "Lenis"
      ],
      liveLink: "https://floating-card-ten.vercel.app/",
      codeLink: "https://github.com/Dipeshchand/Floating-Card",
    },

    {
      title: "Aestheticmoments wedding photography",
      description:
        "Developed a responsive wedding photography portfolio website with modern UI/UX and a backend admin panel to upload and manage portfolio content dynamically. Focused on elegant design, smooth performance, and mobile responsiveness..",
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
    {
      title: "Movie-Search",
      description:
        "Movie Search is a platform where you can find the movies ",
      image:movie,
      technologies: [
        "React",
        "Tailwind CSS",
        "API",
        "JavaScript",
      ],
      liveLink: "https://movie-search-rust-two.vercel.app/",
      codeLink: "https://github.com/Dipeshchand/Movie-Search",
    },
    {
      title: "Vivid snaps wedding Photography ",
      description:
        "Movie Search is a platform where you can find the movies ",
      image:Viv ,
      technologies: [
        "React",
        "Tailwind CSS",
        "API",
        "JavaScript",
        "MongoDB",
        "Cloudinary",
        "Corn-job"
      ],
      liveLink: "https://www.vividsnaps.in/home",
      codeLink: "https://github.com/Dipeshchand/Vivid-Snaps-Photography-Company",
    },
];

const Project = () => {
  return (
    <section className="border-b border-neutral-200">

      {/* Page heading */}
      <div className="border-b border-neutral-200 px-4 py-2">
        <h1 className="text-[20px] font-normal tracking-tight text-neutral-500">
          Projects
        </h1>
      </div>

      {/* Main title */}
      <div className="border-b border-neutral-200 px-4 py-4">
        <h2 className="text-[24px] font-medium tracking-tight">
          Everything I've shipped
        </h2>
      </div>

      {/* Navigation + Search */}
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">

        <Link
          to="/"
          className="text-[13px] text-neutral-500 hover:text-black"
        >
          ← Home
        </Link>

        <input
          type="text"
          placeholder="Search projects..."
          className="w-[240px] rounded-lg border border-neutral-200 px-3 py-2 text-[13px] outline-none placeholder:text-neutral-400 focus:border-neutral-400"
        />

      </div>

      {/* Projects */}
      <div className="grid grid-cols-2">

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}

      </div>

    </section>
  );
};

export default Project;