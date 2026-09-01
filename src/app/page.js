import Nav from './components/Nav';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Extracurricular from './components/Extracurricular';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { NAV_HEIGHT } from './theme';

const anchor = { scrollMarginTop: NAV_HEIGHT };

const container = {
  maxWidth: 1140,
  margin: '0 auto',
  padding: '72px 48px 100px',
};

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        color: 'oklch(92% 0.006 260)',
        position: 'relative',
        overflowX: 'hidden',
        backgroundImage:
          'linear-gradient(oklch(24% 0.02 260 / 0.35) 1px,transparent 1px),linear-gradient(90deg,oklch(24% 0.02 260 / 0.35) 1px,transparent 1px)',
        backgroundSize: '44px 44px',
      }}
    >
      <Nav />

      {/* The nav is fixed and out of flow — reserve its height. */}
      <div style={{ height: NAV_HEIGHT }} />

      <div id="top" />

      <div id="about" style={anchor}>
        <Hero />
        <div id="skills" style={anchor}>
          <Skills />
        </div>
        <div id="education" style={anchor}>
          <Education />
        </div>
      </div>

      <div style={container}>
        <div id="experience" style={anchor}>
          <Experience />
        </div>
        <div id="projects" style={anchor}>
          <Projects />
        </div>
      </div>

      <div style={container}>
        <div id="extracurricular" style={anchor}>
          <Extracurricular />
        </div>
        <div id="recommendations" style={anchor}>
          <Recommendations />
        </div>
      </div>

      <Contact />

      <Footer />
    </div>
  );
}
