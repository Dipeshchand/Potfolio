import profileImage from "../../images/profileD.jpeg"

const CTA = () => {
  return (
    <section className="border-b border-neutral-200">

      {/* Venn Diagram */}
      <div className="relative mx-auto flex min-h-[520px] max-w-[620px] items-center justify-center overflow-hidden">

        {/* Top Circle */}
        <div className="absolute left-1/2 top-[35px] h-[235px] w-[235px] -translate-x-1/2 rounded-full border border-neutral-200">
          <span className="absolute left-1/2 top-[55px] -translate-x-1/2 whitespace-nowrap text-[12px] text-neutral-400">
            Frontend Development
          </span>
        </div>

        {/* Left Circle */}
        <div className="absolute left-[50px] top-[150px] h-[235px] w-[235px] rounded-full border border-neutral-200">
          <span className="absolute left-[15px] top-1/2 -translate-y-1/2 whitespace-nowrap text-[12px] text-neutral-400">
            Backend Development
          </span>
        </div>

        {/* Right Circle */}
        <div className="absolute right-[50px] top-[150px] h-[235px] w-[235px] rounded-full border border-neutral-200">
          <span className="absolute right-[15px] top-1/2 -translate-y-1/2 whitespace-nowrap text-[12px] text-neutral-400">
            DevOps & Cloud
          </span>
        </div>

        {/* Bottom Circle */}
        <div className="absolute bottom-[35px] left-1/2 h-[235px] w-[235px] -translate-x-1/2 rounded-full border border-neutral-200">
          <span className="absolute left-1/2 bottom-[55px] -translate-x-1/2 whitespace-nowrap text-[12px] text-neutral-400">
            Problem Solving
          </span>
        </div>

        {/* Profile Image */}
        <div className="relative z-10 h-[84px] w-[84px] overflow-hidden rounded-full border-2 border-white bg-neutral-100 shadow-md">
          <img
            src={profileImage}
            alt="Dipesh Chand"
            className="h-full w-full object-cover"
          />
        </div>

      </div>

      {/* CTA */}
      <div className="flex flex-col items-center border-t border-neutral-200 px-4 py-8">

        <p className="text-center text-[14px] text-neutral-500">
          Still reading? That means something clicked. Let’s talk.
        </p>

        <a
          href="/contact"
          className="mt-5 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-[13px] font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
         <strong> Book a free call </strong>
        </a>

      </div>

    </section>
  );
};

export default CTA;