import styles from "./page.module.css";
import Header from "../components/header/Header";
import { FaPython, FaJava, FaJsSquare, FaHtml5, FaCss3Alt, FaDatabase, FaDocker, FaGitAlt, FaGithub, FaLinux, FaReact, FaLinkedin } from 'react-icons/fa';
import { DiMongodb, DiPostgresql, DiMysql, DiSpark } from 'react-icons/di';
import { SiTensorflow, SiPytorch, SiSpringboot, SiApachehadoop } from 'react-icons/si';

export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.page}>
        <main className={styles.main}>
          <h1 style={{textAlign: 'center'}}>SWETA SAHU</h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <a href="https://www.linkedin.com/in/23-sweta-sahu/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/sweta-sahu" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <FaGithub size={30} />
            </a>
          </div>

          <h2 style={{textAlign: 'center'}}>Introduction</h2>
          <p>I am a Computer Science and Engineering (AI/ML specialization) student at University at Buffalo. I have experience as an IT professional of about 3 years in software development, having experience in creating Proof of Concepts (POCs), Application Development, Platform Development, API Design, Data Analysis and a strong passion for Machine Learning, Deep Learning and Data Analysis. My journey in the IT world has been marked by a relentless pursuit of innovation, problem-solving, and staying on the cutting edge of technology. 
            <br/> <br/>
          Throughout my career, I've had the privilege of working on diverse projects, from building robust Web Applications to diving into the fascinating world of Machine Learning and Deep Learning. This experience has equipped me with the skills to tackle complex challenges, and I take pride in being a team player, collaborating effectively with colleagues to achieve common goals.<br/>
          <br/>
          I'm a quick learner, and I thrive on embracing new technologies and methodologies. This adaptability allows me to work on multiple technologies and handle various projects simultaneously. My goal is to provide innovative solutions, leveraging my diverse skill set and a deep commitment to quality.<br/>
          <br/>
          I am passionate about harnessing data to derive valuable insights and creating efficient APIs to facilitate seamless communication between systems. I am committed to staying at the forefront of the ever-evolving IT landscape, constantly enhancing my skills and knowledge.</p>

          <h2 style={{textAlign: 'center'}}>Skills</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
      {/* Programming Languages */}
      <div><FaPython size={25}/> Python</div>
      <div><FaJava size={25}/> Java</div>
      <div><FaJsSquare size={25}/> JavaScript</div>
      <div><FaHtml5 size={25}/> HTML</div>
      <div><FaCss3Alt size={25}/> CSS</div>
      
      {/* Libraries and Frameworks */}
      <div><FaReact size={25}/> ReactJS</div>
      <div><SiTensorflow size={25}/> TensorFlow</div>
      <div><SiPytorch size={25}/> Pytorch</div>
      <div><SiSpringboot size={25}/> Spring Boot</div>
      
      {/* Databases */}
      <div><DiPostgresql size={25}/> PostgreSQL</div>
      <div><DiMysql size={25}/> MySQL</div>
      <div><DiMongodb size={25}/> MongoDB</div>
      
      {/* DevOps and Deployment */}
      <div><FaLinux size={25}/> Linux</div>
      <div><FaDocker size={25}/> Docker</div>
      <div><FaGitAlt size={25}/> Git</div>
      <div><FaGithub size={25}/> GitLab</div>  {/* Using GitHub icon as a stand-in */}
      
      {/* Big Data Tools */}
      <div><SiApachehadoop size={25}/> Hadoop</div>
      <div><DiSpark size={30}/> Spark</div>
    </div>

        </main>
      </div>
    </>
  );
}
