import {
  FileText,
  Send,
  Mail,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Connect = () => {
  return (
    <section className="border-b border-neutral-200">

      {/* Heading */}
      <div className="border-b border-neutral-200 px-4 py-2">
        <h2 className="text-[22px] font-normal tracking-tight">
          Connect
        </h2>
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-2 px-5 py-4">

        <a
          href="https://drive.google.com/drive/folders/1frO5w6uab3_eVPfug4rDtwpZYvkGWIUC?usp=sharing"
          className="flex items-center gap-1.5 rounded-lg bg-black px-3.5 py-1.5 text-[12px] font-medium text-white"
        >
          <FileText size={14} />
          Resume
        </a>

        <a
          href="https://wa.me/919347645827"
          className="flex items-center gap-1.5 rounded-lg bg-black px-3.5 py-1.5 text-[12px] font-medium text-white"
        >
          <Send size={14} />
          Contact
        </a>

        <a
          href="https://github.com/Dipeshchand"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-black px-3.5 py-1.5 text-[12px] font-medium text-white"
        >
          <FaGithub size={14} />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/dipesh-chand/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-black px-3.5 py-1.5 text-[12px] font-medium text-white"
        >
          <FaLinkedin size={14} />
          LinkedIn
        </a>

        <a
          href="https://x.com/LifeDipesh"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 rounded-lg bg-black px-3.5 py-1.5 text-[12px] font-medium text-white"
        >
          X (Twitter)
        </a>

        <a
          href="dipeshchand972@gmail.com"
          className="flex items-center gap-1.5 rounded-lg bg-black px-3.5 py-0.5 text-[12px] font-medium text-white"
        >
          <Mail size={14} />
          Email
        </a>

      </div>

    </section>
  );
};

export default Connect;