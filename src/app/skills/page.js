'use client';

import {FaLaptopCode, FaBrain, FaCode, FaDatabase, FaCloud, FaDocker, FaGitAlt, FaAws, FaPython, FaJava, FaJs, FaHtml5, FaCss3,} from 'react-icons/fa';
import {SiNumpy, SiPandas, SiScikitlearn, SiTensorflow, SiPytorch, SiOpencv, SiHuggingface, SiReact, SiNextdotjs, SiExpress, SiFlask, SiFastapi, SiSpringboot, SiPostgresql, SiMysql, SiMongodb, SiApachehadoop, SiApachespark, SiApachekafka, SiRedis,} from 'react-icons/si';
import {IoIosAnalytics} from 'react-icons/io';

export default function Skills() {

  const badgeClass = `inline-flex items-center bg-primary/30 text-white px-3 py-1 rounded-full text-sm transition-colors duration-300 hover:bg-primary hover:text-background cursor-pointer`;

  const cardClass = `bg-background/50 border border-primary rounded-2xl shadow-md p-6 transition-shadow duration-300 hover:shadow-xl hover:bg-background/70`;

  return (
    <section id="skills" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary/80 uppercase text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Programming */}
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaLaptopCode className="mr-2 text-primary" /> Programming
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={badgeClass}><FaPython className="inline mr-1" />Python</span>
              <span className={badgeClass}><FaJava className="inline mr-1" />Java</span>
              <span className={badgeClass}><FaJs className="inline mr-1" />JavaScript</span>
              <span className={badgeClass}><FaHtml5 className="inline mr-1" />HTML5</span>
              <span className={badgeClass}><FaCss3 className="inline mr-1" />CSS3</span>
            </div>
          </div>

          {/* AI/ML & Data Science */}
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaBrain className="mr-2 text-primary" /> AI/ML & Data Science
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={badgeClass}><SiNumpy className="inline mr-1" />NumPy</span>
              <span className={badgeClass}><SiPandas className="inline mr-1" />Pandas</span>
              <span className={badgeClass}><SiScikitlearn className="inline mr-1" />Scikit-Learn</span>
              <span className={badgeClass}><SiTensorflow className="inline mr-1" />TensorFlow</span>
              <span className={badgeClass}><SiPytorch className="inline mr-1" />PyTorch</span>
              <span className={badgeClass}><SiOpencv className="inline mr-1" />OpenCV</span>
              <span className={badgeClass}><SiHuggingface className="inline mr-1" />HuggingFace</span>
            </div>
          </div>

          {/* Web Development */}
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaCode className="mr-2 text-primary" /> Web Development
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={badgeClass}><SiReact className="inline mr-1" />ReactJS</span>
              <span className={badgeClass}><SiNextdotjs className="inline mr-1" />NextJS</span>
              <span className={badgeClass}><SiExpress className="inline mr-1" />ExpressJS</span>
              <span className={badgeClass}><SiFlask className="inline mr-1" />Flask</span>
              <span className={badgeClass}><SiFastapi className="inline mr-1" />FastAPI</span>
              <span className={badgeClass}><SiSpringboot className="inline mr-1" />Spring Boot</span>
            </div>
          </div>

          {/* Databases & Big Data */}
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaDatabase className="mr-2 text-primary" /> Databases & Big Data
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={badgeClass}><SiPostgresql className="inline mr-1" />PostgreSQL</span>
              <span className={badgeClass}><SiMysql className="inline mr-1" />MySQL</span>
              <span className={badgeClass}><SiMongodb className="inline mr-1" />MongoDB</span>
              <span className={badgeClass}><SiApachehadoop className="inline mr-1" />Hadoop</span>
              <span className={badgeClass}><SiApachespark className="inline mr-1" />Spark</span>
              <span className={badgeClass}><SiApachekafka className="inline mr-1" />Kafka</span>
              <span className={badgeClass}><SiRedis className="inline mr-1" />Redis</span>
            </div>
          </div>

          {/* DevOps & Cloud */}
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <FaCloud className="mr-2 text-primary" /> DevOps & Cloud
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={badgeClass}><FaDocker className="inline mr-1" />Docker</span>
              <span className={badgeClass}><FaGitAlt className="inline mr-1" />Git</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />AWS S3</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />Lambda</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />IAM</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />Cognito</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />EC2</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />ECR</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />SageMaker</span>
            </div>
          </div>

          {/* Streaming & IoT */}
          <div className={cardClass}>
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <IoIosAnalytics className="mr-2 text-primary" /> Streaming & IoT
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={badgeClass}><FaAws className="inline mr-1" />Kinesis</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />IoT Core</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />CloudWatch</span>
              <span className={badgeClass}><FaAws className="inline mr-1" />CloudTrail</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
