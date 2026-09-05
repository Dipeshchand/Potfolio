import { Search, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header
      className={`mt-5 h-[55px] border-y border-neutral-200 px-5 ${
        darkMode
          ? "border-neutral-800 bg-neutral-950 text-white"
          : "border-neutral-200 bg-white text-black"
      }`}
    >
      <div className="flex h-full items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-mono text-[16px] font-bold tracking-tight"
        >
          DIPESH
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 text-sm">
          {/* Projects */}
          <Link
            to="/projects"
            className={`transition-colors ${
              darkMode
                ? "text-neutral-300 hover:text-white"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Projects
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`transition-colors ${
              darkMode
                ? "text-neutral-300 hover:text-white"
                : "text-neutral-700 hover:text-black"
            }`}
          >
            Contact
          </Link>

          {/* Search */}
          <button
            type="button"
            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 ${
              darkMode
                ? "border-neutral-700 text-neutral-400"
                : "border-neutral-200 text-neutral-500"
            }`}
          >
            <Search size={15} />

            <span>Search</span>

            <span
              className={
                darkMode
                  ? "text-xs text-neutral-500"
                  : "text-xs text-neutral-400"
              }
            >
              ⌘K
            </span>
          </button>

          {/* Divider */}
          <div
            className={`h-5 w-px ${
              darkMode ? "bg-neutral-800" : "bg-neutral-200"
            }`}
          />

          {/* Controls */}
          <div
            className={`flex items-center gap-3 rounded-full px-3 py-2 ${
              darkMode
                ? "bg-neutral-800 text-white"
                : "bg-neutral-100 text-black"
            }`}
          >
            <Volume2 size={15} />

            {/* Dark mode button */}
            {/* 
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle dark mode"
              className="transition-transform hover:scale-110"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            */}
          </div>

          {/* Visitor Counter */}
          <VisitorCounter />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;