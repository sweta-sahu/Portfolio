'use client'; 

const About = () => {

  const basePath = "https://sweta-sahu.github.io/Portfolio"

  const porfileImage = `${basePath}/assets/sweta-sahu.jpg`;

  return (
    <section id="about" className="py-24 bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/3 w-full flex-shrink-0">
             <img 
               src={porfileImage} 
               alt="Sweta Sahu" 
               className="w-64 h-64 rounded-full object-cover mx-auto shadow-2xl border-4 border-gray-700"
               onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x400/1a202c/7dd3fc?text=Sweta'; }}
              />
          </div>
          <div className="lg:w-2/3 w-full text-center lg:text-left">
              <h3 className="text-4xl font-bold mb-4">My Engineering Philosophy</h3>
              <p className="text-lg text-gray-400 mb-8">
                  I believe the most powerful software is born at the intersection of robust architecture, intelligent data, and seamless user experience. My work is dedicated to mastering these three pillars to build solutions that are not just functional, but truly exceptional.
              </p>
              <div className="space-y-6">
                  <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                          <svg className="w-10 h-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"/></svg>
                      </div>
                      <div>
                          <h4 className="text-xl font-bold text-white mb-1">Architecting the Backend</h4>
                          <p className="text-gray-300">This is the foundation. I build high-performance, scalable microservices and real-time data pipelines that serve as the reliable backbone for any application.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                          <svg className="w-10 h-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                      </div>
                      <div>
                          <h4 className="text-xl font-bold text-white mb-1">Infusing Intelligence</h4>
                          <p className="text-gray-300">This is where data becomes insightful. I specialize in the full MLOps lifecycle, turning complex models into production-grade APIs that power smarter applications.</p>
                      </div>
                  </div>
                   <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                           <svg className="w-10 h-10 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      </div>
                      <div>
                          <h4 className="text-xl font-bold text-white mb-1">Crafting the Experience</h4>
                          <p className="text-gray-300">This is where the user connects. I build intuitive frontends and ensure the system is deployed seamlessly using Docker and CI/CD for a polished final product.</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;