const Experience = () => {
  const experiences = [
    {
      role: 'Sr. Research Aide',
      company: 'Research Foundation for SUNY',
      date: 'Feb 2025 - Present',
      summary: 'Spearheaded the design and implementation of critical data infrastructure and machine learning capabilities for a pioneering Materials Informatics platform, accelerating research and development cycles.',
      points: [
        'Developed a robust, high-throughput data ingestion platform using Node.js, slashing file upload latency to Amazon S3 by 33%.',
        'Ensured scalable, secure, and resilient application deployment by containerizing with Docker and deploying on AWS EC2 with secure user authentication via AWS Cognito.',
        'Engineered a real-time streaming data pipeline leveraging AWS IoT Core and Kinesis to ingest and process live telemetry data from industrial sensors.',
        'Orchestrated the development and deployment of machine learning pipelines using AWS SageMaker, automating the full lifecycle from data preprocessing to inference.',
        'Deployed predictive models into the live application via a serverless inference API using AWS Lambda and API Gateway for seamless frontend consumption.'
      ]
    },
    {
      company: 'Tata Consultancy Services',
      roles: [
        {
          title: 'Software Developer',
          date: 'Jun 2023 - Jul 2024',
          summary: 'Led a backend team in modernizing a large-scale platform by designing and integrating core microservices, resulting in significantly improved system resilience, performance, and scalability.',
          points: [
            'Led a backend team in the end-to-end design and development of three core microservices using Spring Boot, creating robust and secure REST APIs.',
            'Architected a decoupled, event-driven system by implementing Apache Kafka as a central message broker, improving system resilience.',
            'Containerized all backend applications using Docker and managed their deployment on AWS EC2, establishing a scalable CI/CD workflow.',
            'Drastically improved application response times by integrating Redis as a distributed cache for frequently accessed data.',
            'Orchestrated a complex database migration from PostgreSQL to MongoDB to support unstructured data and enhance data model flexibility.'
          ]
        },
        {
          title: 'Assistant Software Developer',
          date: 'Jun 2021 - May 2023',
          summary: 'Contributed across the full stack, building foundational microservices, implementing security protocols, and developing a sophisticated NLP pipeline to extract data-driven insights.',
          points: [
            'Designed and engineered a complete user onboarding microservice using Spring Boot, with PostgreSQL for data persistence.',
            'Contributed directly to the frontend of a new Carbon Platform by developing reusable components with ReactJS.',
            'Implemented robust security across all APIs by integrating Keycloak for authentication and authorization.',
            'Developed an automated data pipeline using Python and web scraping to collect and cleanse unstructured text data.',
            'Implemented a sophisticated NLP solution applying the LaBSE sentence embedding model and K-means clustering to categorize and extract insights from data.'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-center mb-16">Work Experience</h3>
        <div className="max-w-3xl mx-auto relative border-l-2 border-gray-700 pl-10">
          {experiences.map((job, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="absolute -left-3.5 mt-2 w-6 h-6 rounded-full bg-cyan-500 border-4 border-gray-900"></div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                {job.roles ? (
                  <div>
                    <h4 className="text-2xl font-bold">{job.company}</h4>
                    {job.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className={roleIndex > 0 ? 'mt-6 pt-6 border-t border-gray-700' : ''}>
                        <h5 className="text-xl font-semibold text-cyan-400">{role.title}</h5>
                        <p className="text-gray-500 text-sm mb-2">{role.date}</p>
                        <p className="mt-2 text-gray-400 italic">{role.summary}</p>
                        <ul className="list-disc list-inside mt-4 text-gray-300 space-y-2">
                          {role.points.map((point, i) => <li key={i}>{point}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div>
                    <h4 className="text-2xl font-bold">{job.role}</h4>
                    <p className="text-cyan-400 mt-1">{job.company} | {job.date}</p>
                    <p className="mt-4 text-gray-400 italic">{job.summary}</p>
                    <ul className="list-disc list-inside mt-6 text-gray-300 space-y-2">
                      {job.points.map((point, i) => <li key={i}>{point}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;