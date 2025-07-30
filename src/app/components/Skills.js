const Skills = () => {
    const skillCategories = {
      'Languages': ['Python', 'Java', 'JavaScript (ES6+)', 'SQL', 'HTML/CSS', 'YAML'],
      'Frameworks & Libraries': ['Spring Boot', 'Node.js', 'Express', 'Flask', 'FastAPI', 'React', 'Bootstrap', 'Tailwind CSS'],
      'Cloud, DevOps & Security': ['AWS (EC2, S3, Lambda, API Gateway, IoT Core, Kinesis, SageMaker, Cognito)', 'Docker', 'Kubernetes-ready', 'GitLab CI/CD', 'Keycloak (OAuth2/OpenID)'],
      'Databases & Caching': ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      'Data Science & ML': ['Pandas', 'NumPy', 'Scikit-Learn', 'TensorFlow', 'PyTorch', 'Keras', 'NLTK', 'spaCy', 'OpenCV', 'HuggingFace', 'Transformers'],
      'Architecture & Methodologies': ['RESTful API Design', 'Microservices', 'Unit Testing', 'Agile/Scrum']
    };

    return (
        <section id="skills" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-4xl font-bold text-center mb-16">Technical Skills</h3>
            <div className="max-w-5xl mx-auto space-y-12">
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-2xl font-semibold text-center mb-6 text-cyan-400">{category}</h4>
                  <div className="flex flex-wrap justify-center gap-4">
                    {skills.map(skill => (
                      <span key={skill} className="bg-gray-700 text-white py-2 px-5 rounded-full text-lg hover:bg-cyan-500 transition-colors duration-300 cursor-pointer shadow-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
    );
}
export default Skills;