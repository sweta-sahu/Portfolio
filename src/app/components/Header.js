'use client';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-teal-500">
            Sweta Sahu
          </h1>
          <nav className="hidden md:block">
            <a href="#about" className="text-lg px-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#experience" className="text-lg px-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">Experience</a>
            <a href="#projects" className="text-lg px-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">Projects</a>
            <a href="#skills" className="text-lg px-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-lg px-4 text-gray-300 hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;