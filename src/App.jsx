import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./assets/components/layout/Navbar";
import Footer from "./assets/components/layout/Footer";
import PageContainer from "./assets/components/layout/PageContainer";
import Contact from "./assets/components/home/Contact";
import SmoothScroll from "./assets/components/layout/SmoothScroll";
import Cursor from "./assets/components/cursor/Cursor";

import Home from "./assets/pages/Home";
import Projects from "./assets/pages/Project";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <SmoothScroll />

      <PageContainer>
        <Cursor />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </PageContainer>
    </BrowserRouter>
  );
}

export default App;