'use client'

import Header from "../components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Skills from "../components/pages/Skills";
import Education from "../components/pages/Education";
import Experience from "../components/pages/Experience";

export default function Main() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
