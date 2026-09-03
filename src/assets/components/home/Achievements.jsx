const achievements = [
  {
    title: "Founder & Lead Web Developer - AddWeb",
    description:
      "Founded Add Web and built websites and digital solutions for businesses.",
    date: "2025",
  },
  {
    title: "Invited Speaker - College To CEO, Presidency University",
    description:
      "Invited by the Presidency School of Information Science to speak as Founder & Lead Web Developer of Add Web.",
    date: "Sep 2025",
    link:"https://drive.google.com/file/d/1zz07nd6zDKuQU2nZGjOPNpXpc0bLKjhk/view?usp=sharing",
  },
];

const Achievements = () => {
  return (
    <section className="border-b border-neutral-200">

      {/* Heading */}
      <div className="border-b border-neutral-200 px-4 py-2">
        <h2 className="text-[20px] font-normal tracking-tight">
          Achievements
        </h2>
      </div>

      {/* Achievement List */}
      <div>
        {achievements.map((achievement) => (
          <div
            key={achievement.title}
            className="border-b border-neutral-200 px-4 py-4 last:border-b-0"
          >
            <div className="flex items-start justify-between gap-6">

              {/* Achievement Content */}
              <div className="flex gap-3">

                <span className="mt-1 text-[12px] text-neutral-400">
                  •
                </span>

                <div>
                  <h3 className="text-[14px] font-medium tracking-tight">
                    {achievement.title}
                  </h3>

                  <p className="mt-1 text-[13px] leading-5 text-neutral-500">
                    {achievement.description}
                  </p>
                </div>

              </div>

              {/* Date + Poster */}
              <div className="flex shrink-0 items-center gap-3">

                <span className="text-[12px] text-neutral-400">
                  {achievement.date}
                </span>

                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[12px] text-neutral-500 underline underline-offset-4 transition-colors hover:text-black"
                  >
                    View poster →
                  </a>
                )}

              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Achievements;