import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Head>
        <title>Sweta Sahu - Software Engineer</title>
        <meta name="description" content="Portfolio of Sweta Sahu, a skilled Software Engineer specializing in cloud-native solutions, MLOps, and full-stack development." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <Header />
      
      <main>
        <Hero />
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Experience /></AnimatedSection>
        <AnimatedSection><Projects /></AnimatedSection>
        <AnimatedSection><Skills /></AnimatedSection>
        <AnimatedSection><Education /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default Home;