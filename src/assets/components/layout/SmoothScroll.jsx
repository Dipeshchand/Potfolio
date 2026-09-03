import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;