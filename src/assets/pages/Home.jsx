import { motion } from "motion/react";

import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Connect from "../components/home/Connect";
import Experience from "../components/home/Experience";
import Activity from "../components/home/Activity";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";
import Achievements from "../components/home/Achievements";
import CTA from "../components/home/CTA";

const Home = () => {
  return (
    <main>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Connect />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Experience />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Activity />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Projects />
        <Skills />
        <Achievements />
        <CTA />
      </motion.div>

    </main>
  );
};

export default Home;