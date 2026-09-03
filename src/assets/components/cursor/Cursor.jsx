import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    const animate = () => {
      // How quickly the bubble follows the mouse
      current.current.x +=
        (mouse.current.x - current.current.x) * 0.15;

      current.current.y +=
        (mouse.current.y - current.current.y) * 0.15;

      setPosition({
        x: current.current.x,
        y: current.current.y,
      });

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999]"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <div
        className="
          absolute
          left-[18px]
          top-[18px]
          flex
          h-8
          min-w-8
          items-center
          justify-center
          rounded-full
          bg-black
          px-2
          text-[11px]
          font-medium
          text-white
          shadow-md
        "
      >
        hi
      </div>
    </div>
  );
};

export default Cursor;