const Contact = () => {
  return (
    <section className="border-b border-neutral-200">
      {/* Page heading */}
      <div className="border-b border-neutral-200 px-4 py-2">
        <h1 className="text-[20px] font-normal tracking-tight">Contact</h1>
      </div>

      {/* Main heading */}
      <div className="border-b border-neutral-200 px-4 py-3">
        <h2 className="text-[20px] font-medium tracking-tight">
          Let's talk about what you're building
        </h2>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3">
        <a href="/" className="text-[13px] text-neutral-500 hover:text-black">
          ← Home
        </a>

        <span className="rounded-full border border-neutral-200 px-3 py-1 text-[12px] text-neutral-600">
          Open to work
        </span>
      </div>

      {/* Fastest routes */}
      <div className="border-b border-neutral-200">
        <div className="border-b border-neutral-200 px-4 py-2">
          <h2 className="text-[20px] font-normal tracking-tight">
            Fastest routes
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-2 p-4">
          {/* Book a call */}
          <a
            href="https://wa.me/919347645827"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between rounded-lg bg-black px-4 py-3 text-white"
          >
            <div>
              <p className="text-[13px] font-medium">📅DM me on Whatsapp</p>

              <p className="mt-0.5 text-[11px] text-neutral-300">
                Let's build together
              </p>
            </div>

            <span>↗</span>
          </a>

          {/* X */}
          <a
            href="https://x.com/LifeDipesh"
            className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3"
          >
            <div>
              <p className="text-[13px] font-medium">𝕏 DM me on X</p>

              <p className="mt-0.5 text-[11px] text-neutral-500">@LifeDipesh</p>
            </div>

            <span>↗</span>
          </a>
        </div>
      </div>

      {/* Send a message */}
      <div>
        <div className="border-b border-neutral-200 px-4 py-2">
          <h2 className="text-[20px] font-normal tracking-tight">
            Send a message
          </h2>
        </div>

        <div className="p-5">
          <p className="mb-4 text-[13px] leading-5 text-neutral-500">
            Write here and it lands in my inbox. Roles, freelance work, or a
            question about something I've built — all welcome.
          </p>

          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium">
                Your email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-neutral-200 px-3 py-2.5 text-[13px] outline-none transition focus:border-black"
              />
            </div>

            {/* Message */}
            <div>
              <label className="mb-1.5 block text-[12px] font-medium">
                Your message
              </label>

              <textarea
                rows="5"
                placeholder="What are you building, and where do you want help?"
                className="w-full resize-none rounded-lg border border-neutral-200 px-3 py-2.5 text-[13px] outline-none transition focus:border-black"
              />
            </div>

            <p className="text-[11px] text-neutral-500">
              At least 10 characters so I know what you need.
            </p>

            <button
              type="submit"
              className="w-full rounded-lg bg-neutral-400 px-4 py-3 text-[13px] font-medium text-white transition hover:bg-black"
            >
              ✈ Send message
            </button>
          </form>

          <p className="mt-2 text-right text-[11px] text-neutral-500">
            Goes straight to your email
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
