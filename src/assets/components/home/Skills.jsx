import {
  siTypescript,
  siJavascript,
  siCplusplus,
  siHtml5,
  siCss,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siShadcnui,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siMongodb,
  siRedis,
  siPrisma,
  siSupabase,
  siGit,
  siGithub,
  siDocker,
  siPostman,
  siCursor,
  siVercel,
  siFigma,
} from "simple-icons";

const skills = [
  { name: "TypeScript", icon: siTypescript },
  { name: "JavaScript", icon: siJavascript },
  { name: "C/C++", icon: siCplusplus },
  { name: "SQL", icon: null },
  { name: "HTML", icon: siHtml5 },
  { name: "CSS", icon: siCss },
  { name: "React.js", icon: siReact },
  { name: "Next.js", icon: siNextdotjs },
  { name: "Tailwind CSS", icon: siTailwindcss },
  { name: "Shadcn UI", icon: siShadcnui },
  { name: "Node.js", icon: siNodedotjs },
  { name: "Express.js", icon: siExpress },
  { name: "REST APIs", icon: null },
  { name: "PostgreSQL", icon: siPostgresql },
  { name: "MongoDB", icon: siMongodb },
  { name: "Redis", icon: siRedis },
  { name: "Prisma", icon: siPrisma },
  { name: "Supabase", icon: siSupabase },
  { name: "Git", icon: siGit },
  { name: "GitHub", icon: siGithub },
  { name: "Docker", icon: siDocker },
  { name: "Postman", icon: siPostman },
  { name: "VS Code", icon: null },
  { name: "Cursor", icon: siCursor },
  { name: "Vercel", icon: siVercel },
  { name: "Figma", icon: siFigma },
];

const Skills = () => {
  return (
    <section className="border-b border-neutral-200">

      {/* Heading */}
      <div className="border-b border-neutral-200 px-4 py-2">
        <h2 className="text-[20px] font-normal tracking-tight">
          Skills
        </h2>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 p-4">
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-2 py-1 text-[11px] text-neutral-700"
          >
            {skill.icon && (
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 shrink-0"
                aria-hidden="true"
                style={{
                  fill: `#${skill.icon.hex}`,
                }}
              >
                <path d={skill.icon.path} />
              </svg>
            )}

            {skill.name}
          </span>
        ))}
      </div>

    </section>
  );
};

export default Skills;