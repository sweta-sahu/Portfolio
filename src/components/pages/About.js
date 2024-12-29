import styles from "../../app/page.module.css";

export default function About() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 style={{textAlign: 'center'}}>About Me</h1>
          <p>Hi! I'm a passionate Computer Science and Engineering graduate student at the University at Buffalo, specializing in Artificial Intelligence and Machine Learning. With 3+ years of professional experience as a software developer, I've honed my skills in creating innovative solutions through backend development, full-stack engineering, and cutting-edge AI/ML applications.
            <br/><br/>Throughout my career, I've had the opportunity to lead backend teams, design scalable microservices, and develop REST APIs using technologies like Spring Boot, ReactJS, and Docker. My hands-on experience includes deploying applications on AWS, database migrations, and crafting intelligent systems powered by ML models for data clustering and video analytics.
            <br/><br/>In my academic pursuits, I've worked on impactful projects, such as analyzing customer churn using machine learning models and developing high-accuracy chatbots with LSTMs. My curiosity drives me to explore the intersections of data analysis, software engineering, and machine learning to create solutions that transform real-world challenges into success stories.
            <br/><br/>I thrive in fast-paced, collaborative environments where innovation and adaptability are key. Whether it's building APIs to enable seamless system communication, diving into complex datasets for actionable insights, or optimizing code for scalability, I am committed to delivering quality and value.
            <br/><br/>I am currently seeking roles as an AI/ML Engineer, Data Scientist, Data Engineer, or Software Developer. Let's connect and collaborate on the next big idea!</p>
        </main>
      </div>
    </>
  );
}
