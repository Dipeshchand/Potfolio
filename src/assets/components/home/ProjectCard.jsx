import { ExternalLink } from "lucide-react";
import { siGithub } from "simple-icons";

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveLink,
  codeLink,
}) => {
  return (
    <article className="group border-b border-neutral-200 p-5">

      {/* Project image */}
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          border-neutral-200
          bg-neutral-100
          transition-colors
          duration-300
          group-hover:border-neutral-300
        "
      >
        <img
          src={image}
          alt={title}
          className="
            aspect-[16/9]
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.03]
          "
        />
      </div>

      {/* Project information */}
      <div className="mt-4">

        <div className="flex items-start justify-between gap-4">

          {/* Title + description */}
          <div>
            <h3
              className="
                text-[16px]
                font-medium
                tracking-tight
                transition-colors
                duration-200
                group-hover:text-neutral-700
              "
            >
              {title}
            </h3>

            <p className="mt-1.5 text-[13px] leading-5 text-neutral-500">
              {description}
            </p>
          </div>

          {/* Live + Code buttons */}
          <div className="flex shrink-0 gap-1.5">

            {/* Live */}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-1
                  rounded-md
                  border
                  border-neutral-200
                  px-2
                  py-1
                  text-[11px]
                  text-neutral-600
                  transition-all
                  duration-200
                  hover:bg-neutral-100
                  hover:text-black
                "
              >
                <ExternalLink
                  size={11}
                  strokeWidth={1.8}
                />

                Live
              </a>
            )}

            {/* GitHub Code */}
            {codeLink && (
              <a
                href={codeLink}
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  gap-1
                  rounded-md
                  border
                  border-neutral-200
                  px-2
                  py-1
                  text-[11px]
                  text-neutral-600
                  transition-all
                  duration-200
                  hover:bg-neutral-100
                  hover:text-black
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  width="11"
                  height="11"
                  aria-hidden="true"
                >
                  <path d={siGithub.path} />
                </svg>

                Code
              </a>
            )}

          </div>

        </div>

        {/* Technologies */}
        <div className="mt-3 flex flex-wrap gap-1.5">

          {technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                bg-neutral-100
                px-2
                py-1
                text-[11px]
                text-neutral-600
                transition-colors
                duration-200
                group-hover:bg-neutral-200
              "
            >
              {technology}
            </span>
          ))}

        </div>

      </div>

    </article>
  );
};

export default ProjectCard;