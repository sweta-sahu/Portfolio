'use client';

export default function About() {
  return (
    <section id="about" className="bg-background text-foreground py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary uppercase text-center mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto space-y-6 text-foreground/90 text-lg leading-relaxed">
          <p>
            Hi! I'm a passionate Computer Science and Engineering graduate student at the University at Buffalo, specializing in Artificial Intelligence and Machine Learning. With over 3 years of professional experience as a software developer, I've honed my skills in creating innovative solutions through backend development, full-stack engineering, and cutting-edge AI/ML applications.
          </p>
          <p>
            Throughout my career, I've had the opportunity to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Lead backend teams to design scalable microservices and REST APIs using Spring Boot and ReactJS.</li>
            <li>Deploy applications on AWS, manage database migrations, and build intelligent systems for data clustering and video analytics.</li>
            <li>Collaborate on impactful projects, including customer churn analysis and high-accuracy chatbot development using LSTM models.</li>
          </ul>
          <p>
            My curiosity drives me to explore the intersections of data analysis, software engineering, and machine learning to create solutions that transform real-world challenges into success stories.
          </p>
          <p>
            I thrive in fast-paced, collaborative environments where innovation and adaptability are key. Whether it's building APIs for seamless communication, diving into complex datasets for actionable insights, or optimizing code for scalability, I am committed to delivering quality and value.
          </p>
          <p className="font-semibold text-primary">
            Looking for opportunities: AI/ML Engineer, Data Scientist, Data Engineer, or Software Developer.
          </p>
        </div>
      </div>
    </section>
  );
}