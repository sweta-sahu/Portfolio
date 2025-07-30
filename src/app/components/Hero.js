import Typewriter from './Typewriter';

const Hero = () => {
  const keywords = ['Software Engineer', 'AI/ML Engineer', 'Data Scientist', 'Backend Developer', 'Full-Stack Developer'];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center text-center bg-gray-900">
      <div className="px-4 py-8">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-400 to-cyan-500 animate-gradient">
              Hi I'm Sweta Sahu
            </span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-light text-gray-300 mb-8 h-12">
            <Typewriter texts={keywords} />
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-400 mb-6">
          Experienced in building scalable backend systems, deploying production-grade ML models, and architecting cloud-native solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            Get In Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1ZX4bAXVlKPv88yc8umJRU9g1B5psm0Ee/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border-2 border-cyan-500 text-cyan-500 font-bold py-3 px-8 rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;