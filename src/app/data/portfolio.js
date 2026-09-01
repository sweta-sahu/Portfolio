export const skillGroups = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL'] },
  {
    name: 'Backend & AI Agents',
    items: ['Node.js/Express', 'FastAPI', 'LangGraph', 'LangChain', 'Agent Orchestration', 'RAG', 'REST APIs'],
  },
  {
    name: 'Infra & Cloud',
    items: ['Docker', 'Kubernetes', 'AWS EC2', 'AWS Lambda', 'SageMaker', 'IoT Core', 'Terraform', 'CI/CD'],
  },
  { name: 'Data', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector Databases'] },
  { name: 'Testing & Quality', items: ['JUnit', 'Mockito', 'TDD', 'Locust', 'Grafana k6'] },
];

export const education = {
  degree: 'M.S.',
  school: 'University at Buffalo, SUNY',
  program: 'Computer Science and Engineering — AI/ML Specialization',
  location: 'Buffalo, NY',
  gpa: 'GPA 3.867/4.0',
  dates: 'Aug 2024 – Dec 2025',
};

export const companies = [
  {
    company: 'The Research Foundation for SUNY',
    location: 'Buffalo, NY',
    roles: [
      {
        role: 'AI Software Engineer',
        dates: 'Feb 2026 – Jul 2026',
        partTime: false,
        bullets: [
          'One of two engineers owning end-to-end delivery of AI systems from prototype to production for an early-stage research platform, moving fast with minimal oversight.',
          'Designed and shipped a production AI agent orchestration layer in Python, engineering tool-call routing and reasoning chains across up to 15 chained steps with deterministic parsing and schema validation.',
          'Trained and productionized ML models in AWS SageMaker with automated retraining pipelines, improving inference precision 22%.',
          'Automated infrastructure with Terraform, Docker, and Kubernetes (EKS) across AWS, cutting environment provisioning time 60%.',
        ],
      },
      {
        role: 'Senior Research Aide',
        dates: 'Feb 2025 – Dec 2025',
        partTime: true,
        bullets: [
          'One of two engineers owning end-to-end delivery of a full-stack, real-time system (Node.js/Express backend, React/Redux frontend) from prototype to production.',
          'Engineered REST APIs and WebSocket pipelines that scaled to 500+ concurrent users with sub-second state updates, containerized via Docker and Kubernetes.',
          'Load-tested backend services with Locust and the UI with Grafana k6 ahead of releases, validating target latency at peak concurrency.',
          'Integrated AWS Cognito for RBAC and shipped zero-regression releases via GitHub Actions CI/CD, maintaining 95% test coverage.',
        ],
      },
    ],
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    roles: [
      {
        role: 'Software Engineer',
        dates: 'Jun 2023 – Jul 2024',
        partTime: false,
        bullets: [
          'Served as Backend Owner and Mentor: led 10+ code reviews, drove Agile sprint delivery, managed on-call rotations on AWS EC2.',
          'Strengthened security for a Digital ID platform with Spring Security and Keycloak RBAC (OAuth2/OIDC) across 50+ endpoints.',
          'Contributed to a GNN-based recommendation system training graph embeddings over 100K+ products, achieving 95%+ test coverage via TDD.',
          '[placeholder — add role-specific highlights if this split needs adjusting]',
        ],
      },
      {
        role: 'Assistant Software Developer',
        dates: 'Jun 2021 – May 2023',
        partTime: false,
        bullets: [
          'Built systems from scratch across concurrent client use cases at TCS Rapid Labs, owning backend architecture for 3 high-traffic Spring Boot microservices exposing 25+ REST APIs.',
          'Reduced inter-service latency 40% with an event-driven Kafka architecture; lowered database load 45% and P95 response times 60% via Redis distributed caching.',
          'Executed a zero-downtime PostgreSQL-to-MongoDB migration for 20K+ production records.',
          '[placeholder — add role-specific highlights if this split needs adjusting]',
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: 'IncidentZero',
    subtitle: 'Safety Incident Prediction & Monitoring',
    stackTags: ['TypeScript', 'Next.js', 'FastAPI', 'MCP'],
    dates: 'Sep – Oct 2025',
    repoUrl: 'https://github.com/sweta-sahu',
    bullets: [
      'Built at the AWS AI Agent Global Hackathon: a full-stack AI agent app combining computer vision, OCR, and LLM tool-calling via Model Context Protocol (MCP).',
      "Designed the agent's tool-routing logic to classify heterogeneous incident-report formats and dispatch each to the correct extraction path.",
      'Built the Next.js frontend to surface real-time incident status and model outputs to end users.',
    ],
  },
  {
    name: 'WanderGenie',
    subtitle: 'Agentic AI Travel Assistant',
    stackTags: ['Python', 'LangGraph', 'TypeScript'],
    dates: 'Nov 2025',
    repoUrl: 'https://github.com/sweta-sahu',
    bullets: [
      'Served as LLM/Agent Lead on a 4-person team, shipping a working multi-agent system in a 24-hour hackathon window.',
      'Engineered LangGraph-based tool orchestration and reasoning chains for autonomous, multi-step trip-planning decisions.',
      'Built the full-stack integration layer (FastAPI + TypeScript) connecting agent outputs to a hybrid retrieval system (pgvector + Neo4j).',
    ],
  },
];

export const extracurricular = [
  {
    initial: 'T',
    title: 'Tree Plantation Volunteer',
    desc: 'Participated in a campus tree-plantation drive supporting local sustainability efforts.',
    certUrl: '#',
  },
  {
    initial: 'E',
    title: 'Techfest Event Head & Volunteer',
    desc: 'Led planning and on-ground execution for a college technical festival as event head and volunteer.',
    certUrl: '#',
  },
  {
    initial: 'S',
    title: 'Technical Workshop Speaker',
    desc: 'Spoke at two technical workshops, sharing hands-on engineering knowledge with peers.',
    certUrl: '#',
  },
  {
    initial: 'C',
    title: 'Campus Ambassador',
    desc: 'Represented and promoted programs on campus as a campus ambassador.',
    certUrl: '#',
  },
  {
    initial: 'H',
    title: 'Hackathon Participant',
    desc: 'Competed in multiple hackathons, building working products under tight deadlines.',
    certUrl: '#',
  },
];

export const recommendations = [
  {
    name: 'Arpan Mukherjee',
    title: 'AI Research Scientist, Research Foundation for SUNY',
    quote:
      'Mentored Sweta on a modular, scalable ML framework on AWS. Her contributions touched every layer of the stack — edge devices, high-speed data pipelines, real-time analytics, and a recommendation system for industrial manufacturing. She ran unit, integration, scalability, vulnerability and load testing with a rigor beyond her stage, and her adoption of tools like Cursor and LocalStack accelerated our dev cycles. Rare depth, ownership, and learning agility for one year of work.',
  },
  {
    name: 'Mahesh Parthasarathy',
    title: 'AI Platform Architect, TCS',
    quote:
      'Directly managed Sweta at TCS. She consistently demonstrated reliability, promptness, and a remarkable work ethic — managing tasks and meeting deadlines without compromising quality. A great team player with strong technical and problem-solving abilities and a proactive, positive attitude.',
  },
  {
    name: 'Prachuryya Barua',
    title: 'Solutions Architect, TCS',
    quote:
      'Part of the TCS CMI Rapid Lab team — a hand-picked group working on small but difficult problems. Sweta is extremely hard-working, determined, laser-focused and intelligent, researching and applying solutions across a range of use cases in parallel.',
  },
];

export const contact = {
  email: 'swetasahu2399@gmail.com',
  phone: '716-446-6484',
  location: 'New York, NY',
  linkedin: 'https://linkedin.com/in/23-swetasahu',
  linkedinLabel: 'linkedin.com/in/23-swetasahu',
  github: 'https://github.com/sweta-sahu',
  githubLabel: 'github.com/sweta-sahu',
  formspreeAction: 'https://formspree.io/f/YOUR_FORM_ID',
};
