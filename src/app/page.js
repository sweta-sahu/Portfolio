'use client'

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../components/pages/Home";
import Education from "../components/pages/Education";
import Experience from "../components/pages/Experience";
import Projects from "../components/pages/Projects";

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
