const About = () => {
  return (
    <section className="border-b border-neutral-200">

      {/* Section heading */}
      <div className="border-b border-neutral-200 px-4 py-2">
        <h2 className="text-[20px] font-normal tracking-tight text-neutral-900">
          About
        </h2>
      </div>

      {/* Content */}
      <div className="px-5 py-5">

        <ul className="space-y-4 text-[14px] leading-6 text-neutral-600">

          {/* Introduction */}
          <li className="flex gap-3">
            <span className="text-neutral-700">•</span>

            <p>
              I’m Dipesh Chand — a Full Stack Developer with 1 year of
              experience, focused on building clean, reliable and
              user-friendly web applications.
            </p>
          </li>

          {/* Full Stack */}
          <li className="flex gap-3">
            <span className="text-neutral-700">•</span>

            <p>
              I build applications end to end using{" "}
              <strong className="font-medium text-neutral-900 underline underline-offset-2">
                React, JavaScript, Node.js and Express
              </strong>{" "}
              — from designing the interface to building APIs and
              integrating databases.
            </p>
          </li>

          {/* Backend */}
          <li className="flex gap-3">
            <span className="text-neutral-700">•</span>

            <p>
              I work with technologies such as{" "}
              <strong className="font-medium text-neutral-900 underline underline-offset-2">
                MongoDB, PostgreSQL, REST APIs and Git
              </strong>
              , with a focus on writing maintainable code and solving
              problems effectively.
            </p>
          </li>

          {/* DevOps */}
          <li className="flex gap-3">
            <span className="text-neutral-700">•</span>

            <p>
              I also work with technologies such as{" "}
              <strong className="font-medium text-neutral-900 underline underline-offset-2">
                Docker, Kubernetes and CI/CD
              </strong>
              , with a focus on writing maintainable code, automating
              deployments, and solving problems effectively.
            </p>
          </li>

        </ul>

      </div>

    </section>
  );
};

export default About;