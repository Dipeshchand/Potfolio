import { useState } from "react";
import { Video, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import profileImage from "../../images/profileD.jpeg";
import DotPattern from "../layout/DotPattern";

const avatarUrl =
  "https://api.dicebear.com/10.x/notionists/svg?eyesVariant=variant05&mouthVariant=variant03";

const Hero = () => {
  const [isAvatar, setIsAvatar] = useState(false);

  return (
    <section>
      <DotPattern />

      <div className="p-5">
        <div className="flex items-center gap-5">
          {/* Profile image */}
          <div className="h-[106px] w-[106px] shrink-0 rounded-xl border border-neutral-300 p-1.5 overflow-hidden">
            <AnimatePresence mode="wait">
              {isAvatar ? (
                <motion.img
                  key="avatar"
                  src={profileImage}
                  alt="Avatar"
                  initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
                  animate={{
                    opacity: 1,
                    scale: [0.7, 1.08, 0.96, 1],
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: 5,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="h-full w-full rounded-lg object-cover"
                />
              ) : (
                <motion.img
                  key="profile"
                  src={avatarUrl}
                  alt="Dipesh Chand"
                  initial={{ opacity: 0, scale: 0.7, rotate: 5 }}
                  animate={{
                    opacity: 1,
                    scale: [0.7, 1.08, 0.96, 1],
                    rotate: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.7,
                    rotate: -5,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                  }}
                  className="h-full w-full rounded-lg object-cover"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Profile information */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-3xl font-medium tracking-tight"
            >
              Dipesh Chand
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-1 text-lg text-neutral-500"
            >
              Full Stack Developer
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-3 flex gap-2"
            >
              <a
                href="https://wa.me/919347645827"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                <Video size={15} />
                Book a call
              </a>

              <a
                href="mailto:dipeshchand972@gmail.com"
                className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                <Mail size={15} />
                Send an email
              </a>
            </motion.div>
          </div>
        </div>

        {/* Availability / Avatar toggle */}
        {/* Availability / Avatar toggle */}
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setIsAvatar((prev) => !prev)}
            aria-label="Toggle profile avatar"
            className={`relative h-5 w-10 rounded-full p-0.5 transition-colors duration-300 ${
              isAvatar ? "bg-neutral-800" : "bg-neutral-200"
            }`}
          >
            <motion.div
              animate={{
                x: isAvatar ? 20 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
              }}
              className="h-4 w-4 rounded-full bg-white shadow-sm"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
