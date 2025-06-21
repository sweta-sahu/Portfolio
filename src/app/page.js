'use client';

import { useEffect, useState } from 'react';
import Loader from './components/loader/Loader';
import About from './about/page';
import Skills from './skills/page';

export default function Home() {
  const [loading, setLoading] = useState(true);

  const basePath = "https://sweta-sahu.github.io/Portfolio"
  const profileImg = `${basePath}/assets/developer.png`;

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section id="home" className="bg-background text-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8">

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-primary">Sweta Sahu</span>
              </h1>
              <p className="text-lg mb-6">
                Passionate graduate student in Computer Science Engineering specializing in AI/ML,
                with 3+ years of software development experience.
              </p>

              <div className="flex justify-center lg:justify-start gap-4">
                <a
                  href="https://drive.google.com/file/d/1w8LDmNsZyy-4uiVpJWDnvGucwidvmku_/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  View Resume
                </a>
                <a
                  href="mailto:swetasah@buffalo.edu"
                  className="inline-block border border-primary text-primary font-medium py-2 px-4 rounded-2xl hover:bg-primary hover:text-background transition no-underline"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="flex-1 text-center">
              <img
                src={profileImg}
                alt="Sweta Sahu"
                className="mx-auto w-4/5 max-w-sm rounded-lg shadow-lg border-2 border-primary"
              />
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container mx-auto px-4">
          <About />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-5">
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>
    </>
  );
}
