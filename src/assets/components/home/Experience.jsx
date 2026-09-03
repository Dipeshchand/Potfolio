import { BriefcaseBusiness } from "lucide-react";
import GoApptiv from "../../images/GoApptiv.avif";
import Zones from "../../images/zoneslogo.png"
import Addweb from "../../images/projects/Addweb.png";

const Experience = () => {
  return (
    <section className="border-b border-neutral-200">
      {/* Heading */}
      <div className="border-b border-neutral-200 px-4 py-2">
        <h2 className="text-[22px] font-normal tracking-tight">Experience</h2>
      </div>

      {/* Experience list */}
      <div>
        {/* Experience 1 */}
        <div className="flex gap-4  px-5 py-2">
          {/* Icon */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200">
            <img src={Zones} size={16} />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <div>
                <p className="mt-0.5 text-[14px] font-medium ">
                  <a 
                   href="https://www.zones.com/site/home/index.html?zone=business"
                    target="_blank"
                    rel="noreferrer"
                  className="underline decoration-neutral-400 underline-offset-4">
                    {" "}
                    Zones{" "}
                  </a>
                </p>

                <h3 className="text-[15px] text-neutral-500">
                  Technical Support Engineer — JPMorgan Chase Account - 6 Month
                </h3>
              </div>

              <p className="text-[13px] text-neutral-400">
                Jan 2026 — July 2026
              </p>
            </div>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex gap-4 px-5 py-2">
          
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200">
            <img src={Addweb} size={16} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <div>
                <h3 className="mt-0.5 text-[16px] font-medium ">
                  <u className="underline decoration-neutral-400 underline-offset-4">
                    {" "}
                    Addweb{" "}
                  </u>
                </h3>
                <p className="text-[13px] text-neutral-500">
                  Full Stack Developer - 1yr
                </p>
              </div>

              <p className="text-[13px] text-neutral-400">
                Nov 2025 — Nov 2026
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 px-5 py-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-neutral-200">
            <img src={GoApptiv} size={16} />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <div>
                <h3 className="mt-0.5 text-[16px] font-medium ">
                  <a
                    href="https://www.goapptiv.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-neutral-400 underline-offset-4"
                  >
                    {" "}
                    Goapptiv{" "}
                  </a>
                </h3>
                <p className="text-[13px] text-neutral-500">
                  SQL & Database Operations Intern - 1yr
                </p>
              </div>

              <p className="text-[13px] text-neutral-400">
                Nov 2021 – Oct 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
