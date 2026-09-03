const Footer = () => {
  return (
    <footer className="border-t border-neutral-200">

      {/* Footer Content */}
      <div className="px-4 py-8 text-center">
        <p className="text-[13px] text-neutral-500">
          Designed and developed by{" "}
          <a
            href="#"
            className="font-medium text-black underline underline-offset-4"
          >
            Dipesh Chand
          </a>
        </p>

        <p className="mt-1 text-[13px] text-neutral-500">
          © 2026. Built in the open.
        </p>

      </div>

      {/* Bottom Dot Pattern */}
      <div
        className="h-[100px] border-t border-neutral-200"
        style={{
          backgroundImage:
            "radial-gradient(#d4d4d4 1px, transparent 1.2px)",
          backgroundSize: "8px 8px",
        }}
      />

    </footer>
  );
};

export default Footer;