import { useEffect, useRef } from "react";

const DotPattern = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    const dots = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;

      ctx.scale(
        window.devicePixelRatio,
        window.devicePixelRatio
      );

      dots.length = 0;

      const spacing = 10;

      for (let y = 5; y < rect.height; y += spacing) {
        for (let x = 5; x < rect.width; x += spacing) {
          dots.push({
            x,
            y,

            // Current position
            currentX: x,
            currentY: y,

            // Movement velocity
            velocityX: 0,
            velocityY: 0,
          });
        }
      }
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();

      ctx.clearRect(0, 0, rect.width, rect.height);

      dots.forEach((dot) => {
        const dx = dot.currentX - mouse.x;
        const dy = dot.currentY - mouse.y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        const radius = 70;

        if (distance < radius) {
          const force = (radius - distance) / radius;

          const angle = Math.atan2(dy, dx);

          dot.velocityX +=
            Math.cos(angle) * force * 0.8;

          dot.velocityY +=
            Math.sin(angle) * force * 0.8;
        }

        // Spring back to original position
        const spring = 0.08;

        dot.velocityX +=
          (dot.x - dot.currentX) * spring;

        dot.velocityY +=
          (dot.y - dot.currentY) * spring;

        // Friction / damping
        dot.velocityX *= 0.82;
        dot.velocityY *= 0.82;

        // Update position
        dot.currentX += dot.velocityX;
        dot.currentY += dot.velocityY;

        // Draw dot
        ctx.beginPath();

        ctx.arc(
          dot.currentX,
          dot.currentY,
          1,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "#d6d6d6";

        ctx.fill();
      });

      animationFrame = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrame);

      canvas.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };
  }, []);

  return (
    <div className="h-[160px] border-b border-neutral-200 bg-white">
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
      />
    </div>
  );
};

export default DotPattern;