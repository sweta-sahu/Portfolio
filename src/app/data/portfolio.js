export const skillGroups = [
  { name: 'Languages', items: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript', 'SQL'] },
  {
    name: 'AI/ML & Agentic Systems',
    items: [
      'LangGraph',
      'LangChain',
      'RAG',
      'Multi-Agent Orchestration',
      'Prompt Engineering',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'XGBoost',
      'SHAP',
      'Reinforcement Learning',
      'Swin-UNet',
      'GNN',
      'LaBSE',
      'K-Means',
    ],
  },
  {
    name: 'AI-Assisted Development',
    items: ['Claude', 'Claude Code', 'ChatGPT', 'Codex', 'GitHub Copilot', 'Cursor'],
  },
  {
    name: 'Backend & Real-Time Infra',
    items: [
      'FastAPI', 'Flask',
      'Node.js/Express',
      'Spring Boot',
      'REST APIs',
      'WebSockets',
      'Apache Kafka',
      'MCP (Model Context Protocol)',
    ],
  },
  {
    name: 'Data & Distributed Processing',
    items: ['Hadoop', 'Apache Spark', 'PySpark', 'Spark MLlib', 'Pandas', 'NumPy'],
  },
  { name: 'Frontend', items: ['React', 'Redux', 'Next.js', 'HTML/CSS', 'Streamlit'] },
  {
    name: 'Cloud & DevOps',
    items: [
      'AWS EC2',
      'AWS Lambda',
      'S3',
      'IoT Core',
      'Kinesis',
      'SageMaker',
      'Bedrock',
      'Cognito',
      'DynamoDB',
      'SQS/SNS',
      'Docker',
      'Kubernetes (EKS)',
      'Terraform',
      'CI/CD (GitHub Actions)',
    ],
  },
  {
    name: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'pgvector', 'Neo4j', 'Vector Databases'],
  },
  {
    name: 'Testing & Security',
    items: [
      'JUnit',
      'Mockito',
      'pytest',
      'TDD',
      'OWASP Top 10',
      'Keycloak RBAC (OAuth2/OIDC)',
      'Hibernate Envers',
    ],
  },
  { name: 'Observability', items: ['Grafana', 'CloudWatch', 'LangSmith'] },
  {
    name: 'Systems Programming',
    items: ['C', 'Pintos kernel', 'Scheduling', 'Synchronization', 'Syscalls', 'Virtual Memory'],
  },
];

export const education = [
  {
    degree: 'M.S.',
    school: 'University at Buffalo, SUNY',
    program: 'Computer Science and Engineering — AI/ML Specialization',
    location: 'Buffalo, NY',
    gpa: 'GPA 3.867/4.0',
    dates: 'Aug 2024 – Dec 2025',
  },
  {
    degree: 'B.E.',
    school: 'Ramrao Adik Institute of Technology',
    program: 'Electronics and Telecommunication Engineering',
    location: 'Navi Mumbai, India',
    gpa: 'GPA 3.72/4.0',
    dates: 'Aug 2017 – Jun 2021',
  },
];

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
          'Architected a multi-agent AI system in LangGraph for a computational materials-science platform, combining deterministic routing with an LLM-driven planning loop to autonomously orchestrate 15+ tool-calling steps — cutting multi-step query latency 40% across 200+ sampled LangSmith traces.',
          'Designed and built a vector database pipeline via FastAPI to chunk, embed, and retrieve technical textbooks and research papers, integrating live tool-based RAG from JARVIS-DFT, Materials Project, and OPTIMADE across 1,000+ documents (20,000+ embeddings) and improving retrieval grounding accuracy 35%.',
          'Evaluated and deployed self-hosted ML models (ALIGNN, MACE) for real-time materials property prediction, monitoring endpoint uptime and latency in production via Grafana — a deliberate tradeoff over third-party model APIs to preserve data privacy, control cost, and avoid rate limits.',
          'Built a deterministic confidence-flagging framework (4 validation functions) that detects cross-database conflicts, coverage gaps, and methodology mismatches, cutting flagged data-inconsistency issues 50%.',
          'Authored 6+ technical architecture deliverables — system diagrams, implementation plans, gap analyses — aligning engineering and faculty research stakeholders on platform design and roadmap.',
        ],
      },
      {
        role: 'Senior Research Aide',
        dates: 'Feb 2025 – Dec 2025',
        partTime: true,
        bullets: [
          'Architected a fault-tolerant, high-throughput distributed IoT pipeline on AWS IoT Core, Kinesis, and Lambda processing 1M+ telemetry events/day (~10GB/day, 50+ records/sec peak) over MQTT/Modbus at 99.9% uptime.',
          'Trained supervised models in SageMaker behind a fully automated retraining pipeline — an S3-triggered Lambda kicks off retraining once 10GB of new data accumulates — improving precision 22% across successive runs.',
          'Reduced monthly SageMaker infrastructure cost 63% by migrating model hosting from always-on real-time endpoints to event-driven, on-demand inference, validated against AWS Cost Explorer pre/post migration.',
          'Developed RAG-based NLP applications with Python and LangChain, generating 27,000+ embeddings from 1,000+ documents and building evaluation scripts that hit 87% precision / 82% recall on a labeled test set.',
          'Engineered low-latency WebSocket pipelines for real-time analytics supporting 500+ concurrent users with sub-second state updates, reducing UI latency 30% under heavy production load.',
          'Automated multi-region infrastructure with Terraform, Docker, and Kubernetes (EKS) across AWS, cutting provisioning time 60%; raised observability via Grafana/CloudWatch dashboards and reduced MTTR 25%.',
          'Enforced 95% unit/integration coverage and automated OWASP security audits through GitHub Actions CI/CD, and integrated AWS Cognito RBAC into React/Redux and Node.js (Express) full-stack services.',
        ],
      },
    ],
  },
  {
    company: 'Tata Consultancy Services',
    location: 'Mumbai, India',
    roles: [
      {
        role: 'Software Developer',
        dates: 'Jun 2021 – Jul 2024',
        partTime: false,
        bullets: [
          'Owned backend architecture and production delivery for 3 high-traffic Spring Boot microservices, designing 25+ REST APIs and improving production reliability 30%.',
          'Reduced inter-service latency 40% with an event-driven Apache Kafka design; later diagnosed a consumer-lag incident and resolved it by scaling a single consumer to a partitioned, parallel consumer group plus a weekly retention policy.',
          'Lowered database load 45% and response times 60% via Redis distributed caching and P95 optimization, and fixed a production cache-consistency bug caused by delayed invalidation after MongoDB writes.',
          'Executed a zero-downtime PostgreSQL-to-MongoDB migration for 20K+ production records, redesigning the schema to embed nested entities and eliminating relational joins the use case never required.',
          'Acted as Backend Owner and Mentor: led 10+ code reviews, drove Agile sprint delivery, and managed on-call rotations for services productionized on AWS EC2.',
          'Strengthened a Digital ID platform with Keycloak RBAC (OAuth2/OIDC) across 50+ endpoints and Hibernate Envers for 100% traceability across thousands of sensitive data changes.',
          'Drove quality through TDD (JUnit, Mockito) to 95%+ coverage across 10+ containerized microservices, and optimized frontend performance 25% with React/Redux state tuning.',
          'Contributed to a GNN-based recommendation system over 100K+ products and built a LaBSE + K-Means analytics pipeline processing 100K+ documents with automated reporting.',
        ],
      },
    ],
  },
];

export const projects = [
  {
    name: 'Incident Zero',
    subtitle: 'Multimodal AI Security Investigator',
    stackTags: ['MCP', 'Python', 'OCR', 'Static Analysis'],
    dates: 'Feb 2026 – Mar 2026',
    repoUrl: 'https://github.com/sweta-sahu/Incident-Zero',
    bullets: [
      'Built a multimodal AI security-investigation platform coordinating 5 specialized MCP servers — CodeScan, LogReasoner, ScreenshotAnalyzer, DiagramExtractor, and Patcher — to automate vulnerability detection and evidence correlation across code, logs, diagrams, and screenshots.',
      'Designed CodeScan and LogReasoner to statically analyze codebases for hardcoded secrets and SQL-injection risk, and to parse multi-MB log files for authentication failures and attack patterns with severity-scored output.',
      'Built the Patcher MCP server to auto-generate deterministic, unified-diff security patches for identified vulnerabilities.',
    ],
  },
  {
    name: 'Adaptive RL Tutor',
    subtitle: 'Reinforcement-Learning Algebra Tutor',
    stackTags: ['PyTorch', 'DDQN', 'Streamlit'],
    dates: 'Aug 2025 – Dec 2025',
    context: 'CSE Demo Day Fall 2025',
    repoUrl: 'https://github.com/sweta-sahu/Adaptive-RL-Tutor',
    bullets: [
      'Built an adaptive tutoring system using a Double Dueling Deep Q-Network (DDQN) agent to personalize algebra instruction across 10 skills and a 20-action space, optimizing question/hint selection via a custom RL environment.',
      'Engineered a multi-objective reward function balancing correctness, mastery improvement, skill-coverage fairness, and student engagement (boredom/confidence modeling) to guide agent training.',
      'Built a Streamlit demo with real-time mastery tracking and reward-progression visualizations, backed by a 50+ question bank across algebra topics.',
    ],
  },
  {
    name: 'WanderGenie',
    subtitle: 'Agentic AI Travel Assistant',
    stackTags: ['LangGraph', 'FastAPI', 'React/TypeScript', 'pgvector', 'Neo4j'],
    dates: 'Nov 2025',
    context: 'UB Hacking Fall 2025',
    devpostUrl: 'https://devpost.com/software/wandergenie-ai-travel-assistant',
    repoUrl: 'https://github.com/sweta-sahu/WanderGenie-ai-travel-assistant',
    bullets: [
      'Architected a multi-agent trip-planning system in LangGraph with three specialized agents (Planner, Researcher, Packager-Executor), turning natural-language travel requests into complete itineraries with maps, timelines, and booking links.',
      'Built a dual-memory retrieval layer combining Supabase pgvector (RAG for local insights and booking tips) with Neo4j Aura (relationship-aware POI clustering), plus LLM-powered fallback generation for uncached cities.',
      'Integrated AWS Bedrock (Claude) with an OpenAI fallback for inference, and built the FastAPI backend connecting agent output to a React/TypeScript/Mapbox frontend supporting real-time conversational itinerary edits.',
    ],
  },
  {
    name: 'XAI Trading Copilot',
    subtitle: 'Explainable Stock Prediction',
    stackTags: ['XGBoost', 'SHAP', 'AWS SageMaker', 'React'],
    dates: 'Oct 2025',
    context: 'AWS AI Agent Global Hackathon',
    devpostUrl: 'https://devpost.com/software/explainable-ai-trading-copilot',
    repoUrl: 'https://github.com/sweta-sahu/Explainable-AI-Trading-Copilot',
    bullets: [
      'Developed a serverless, explainable stock-prediction platform using XGBoost and SHAP, deployed via AWS SageMaker Serverless Inference behind API Gateway for real-time, cost-efficient predictions.',
      'Built AWS Lambda data pipelines (price collector, news collector, feature builder) ingesting public market data (Stooq) and news sentiment (GDELT) into S3 and DynamoDB for feature engineering and prediction storage.',
      'Built the React frontend consuming a /predict API that returns predictions alongside SHAP-based plain-English explanations for auditability.',
    ],
  },
  {
    name: 'Pintos OS Kernel Extension',
    subtitle: 'Systems Programming in C',
    stackTags: ['C', 'Operating Systems', 'Concurrency'],
    dates: 'Feb 2025 – May 2025',
    // Coursework — the repo lives in a course org Sweta no longer has access to.
    repoUrl: null,
    bullets: [
      'Implemented an interrupt-safe sleep/wake alarm clock with no busy-waiting, a priority-donation system supporting nested donation chains, and a 4.4BSD-style multi-level feedback queue scheduler with tiered recalculation to minimize interrupt-handler overhead.',
      'Implemented user-space argument passing (tokenized, stack-aligned, bounds-checked to 32 args) and a 128-entry per-process file-descriptor table with a global filesystem lock serializing syscall-level file I/O.',
      'Centralized user-pointer validation ahead of any lock acquisition, routing all failures through one safe-exit path with no leaked resources, plus semaphore-based parent-child synchronization handling zombies, orphans, and exec() load-status propagation.',
    ],
  },
  {
    name: 'Agni Intel',
    subtitle: 'Wildfire Spread Forecasting & Reporting',
    stackTags: ['PyTorch', 'Swin-UNet V2', 'FastAPI', 'Mistral-7B', 'React'],
    dates: 'Jan 2025 – May 2025',
    context: 'CSE Demo Day Spring 2025',
    repoUrl: 'https://github.com/sweta-sahu/next-day-wildfire-spread-prediction-and-reporting',
    bullets: [
      'Fine-tuned a Swin-UNet V2 transformer (pretrained SwinV2-S backbone) on 13,000+ satellite image samples (23-channel WildFireSpreadTS) for next-day wildfire spread prediction — 0.92 accuracy, 0.95 F1, 0.90 IoU, 0.99 recall.',
      'Built a post-processing pipeline computing burn-area growth, spread direction, and hotspot coordinates from model output, and integrated an 8-bit quantized Mistral-7B via FastAPI to auto-generate incident reports grounded strictly in computed metrics.',
      'Built the React/Tailwind frontend and FastAPI backend delivering results as an interactive UI and a downloadable PDF for emergency responders.',
    ],
  },
  {
    name: 'Telco Customer Churn',
    subtitle: 'Distributed Data Processing & Modeling',
    stackTags: ['PySpark', 'Spark MLlib', 'scikit-learn', 'Streamlit'],
    dates: 'Aug 2024 – Nov 2024',
    repoUrl: 'https://github.com/sweta-sahu/Customer-Churn-Analysis-Prediction',
    bullets: [
      'Migrated a churn-prediction pipeline from single-node scikit-learn to Apache Spark/PySpark MLlib, cutting Logistic Regression training time from 301.6s to 3.4s while improving precision 0.648 → 0.789 and F1 0.579 → 0.791 at AUROC 0.83+.',
      'Built PySpark preprocessing with Z-score and IQR-based outlier handling, StringIndexer/OneHotEncoder categorical encoding, and Window functions for cumulative feature engineering across a 21-column telecom dataset.',
      'Benchmarked 7 ML models across single-node and distributed implementations by analyzing Spark DAG execution plans, and shipped a Streamlit tool with single/batch prediction, CSV upload, and Plotly churn-rate visualizations.',
    ],
  },
];

// Newest first. `links` is optional; entries without one simply show no link row.
export const extracurricular = [
  {
    initial: 'S',
    title: 'Technical Speaker',
    subtitle: 'Workshop on the Data Science & Machine Learning Pipeline',
    org: 'University at Buffalo',
    date: 'Mar 2025',
    desc: 'Took participants through the complete ML pipeline using a real-world taxi fare prediction problem, from raw data to a working REST API.',
    bullets: [
      'Data ingestion & preprocessing',
      'Feature engineering & feature selection',
      'Model building & evaluation',
      'Microservices & REST API — separate FastAPI microservices for model inference and business logic',
    ],
    links: [{ label: 'gh: Taxi-Fare-Prediction', url: 'https://github.com/sweta-sahu/Taxi-Fare-Prediction' }],
  },
  {
    initial: 'H',
    title: 'UB AI for Good Hackathon',
    org: 'University at Buffalo',
    date: 'Feb 2025',
    links: [
      { label: 'devpost: nutrition-analyzer', url: 'https://devpost.com/software/nutrition-analyzer-web-app' },
      { label: 'gh: nutrition-analyzer', url: 'https://github.com/sweta-sahu/nutrition-analyzer' },
    ],
  },
  {
    initial: 'E',
    title: 'Event Manager',
    subtitle: 'Workshop on System Design',
    org: 'University at Buffalo',
    date: 'Nov 2024',
    desc: 'Supported the speaker and students in the smooth execution of the session, and helped clear student doubts mid-session.',
  },
  {
    initial: 'S',
    title: 'Technical Speaker',
    subtitle: 'Workshop on Web Development',
    org: 'University at Buffalo',
    date: 'Oct 2024',
    desc: 'Held a 1.5-hour workshop teaching students the basics of React and Next.js with a hands-on session.',
  },
  {
    initial: 'C',
    title: 'Campus Ambassador',
    org: 'Belong Education (formerly InterIn)',
    date: 'Jul 2020',
  },
  {
    initial: 'E',
    title: 'Event Head',
    org: 'Ramrao Adik Institute of Technology (IETE)',
    date: 'Oct 2019',
    desc: 'Organized an event named High School of The Dead.',
    bullets: [
      'Led a team of 7 people alongside a co-event head',
      'Marketed both the tech fest and the event',
    ],
  },
  {
    initial: 'V',
    title: 'Volunteer',
    org: 'Ramrao Adik Institute of Technology (Social Wing)',
    date: 'Jul 2019',
    desc: 'Volunteered in planting trees.',
  },
  {
    initial: 'V',
    title: 'Volunteer',
    org: 'Ramrao Adik Institute of Technology (IETE)',
    date: 'Oct 2018',
    desc: 'Volunteered in the event named Junk Yard — responsible for managing people and making sure things were done correctly and on time.',
  },
];

// Mirrors the "Beyond Code" section of the github.com/sweta-sahu profile README.
export const hobbies = [
  {
    emoji: '✈️',
    title: 'Traveling',
    desc: 'Exploring new places and cultures — and collecting the kind of trip-planning problems that turned into WanderGenie.',
  },
  {
    emoji: '🍳',
    title: 'Cooking',
    desc: 'Experimenting with new cuisines, mostly by ignoring the recipe and iterating until it works.',
  },
  {
    emoji: '💃',
    title: 'Dancing',
    desc: 'My favorite way to reset after a long debugging session.',
  },
  {
    // Not a 🇰🇷 flag — Windows has no flag glyphs and renders it as bare "KR" text.
    emoji: '📚',
    title: 'Learning Korean',
    desc: 'Working through Duolingo daily — the same compounding-habit thing that makes code review and testing stick.',
    // Bump this when you refresh the site; the streak keeps counting.
    badge: '187-day streak',
    badgeNote: 'as of Sep 2026',
  },
];

// Verbatim LinkedIn recommendations — quote paragraphs are reproduced exactly as
// written. Don't edit the wording; only the name/title fields are ours.
export const recommendations = [
  {
    name: 'Arpan Mukherjee',
    title: 'AI Research Scientist, Research Foundation for SUNY',
    quote: [
      'I had the opportunity to mentor Sweta since January 2024 during her time as a Research Associate on a challenging project focused on building a modular, scalable machine learning framework on AWS - one that complied with MFA policies and ISO 27001 standards from day one.',
      'Over the course of a year, she explored and integrated a wide spectrum of tools and services. From setting up edge devices and designing pipelines for high-speed big data ingestion, to deploying real-time analytics and a recommendation system tailored for industrial manufacturing, her contributions touched every layer of the stack.',
      'She executed unit testing, integration testing, scalability and vulnerability assessments, as well as load testing, with rigor and maturity - well beyond what’s typical at this stage. She also brought in industry practices around documentation and system design, consistently delivering detailed architectural diagrams and deployment plans within tight deadlines.',
      'Her initiative in evaluating emerging tools like Cursor and LocalStack greatly accelerated our dev cycles, and her technical strengths in React.js, Python, and Node.js made her indispensable across both frontend and backend workflows. She demonstrated a strong expertise in containerizing and deploying applications using Docker for streamlined, reproducible environments. She also demonstrated expertise in improving data extraction accuracy using state-of-the-art language models such as OpenAI GPT-4 and LLaMA.',
      'It’s rare to see such depth, ownership, and learning agility packed into just one year of work. I strongly recommend them for any team looking for early-career talent that already operates at a near-industry level of quality and velocity.',
    ],
  },
  {
    name: 'Mahesh Parthasarathy',
    title: 'AI Platform Architect, TCS',
    quote: [
      'Sweta has been part of my team during her stint at TCS. I had the opportunity to directly manage her. She consistently demonstrated reliability, promptness, and a remarkable work ethic.',
      'She demonstrated her ability to manage tasks effectively and meet deadlines without compromising on quality on multiple occasions. She played a crucial role in our team with her exceptional technical and problem-solving abilities.',
      'In addition to her technical capabilities, Sweta was a great team player. She communicated effectively, collaborated seamlessly with colleagues, and was always willing to lend a hand. Her positive attitude and proactive approach made her a valuable asset to our team.',
      'Although she has left to pursue higher studies, I am confident that Sweta will continue to excel in her academic and professional endeavors. She is a talented and driven individual with a bright future ahead.',
    ],
  },
  {
    name: 'Prachuryya Barua',
    title: 'Solutions Architect, TCS',
    quote: [
      'Sweta was part of TCS CMI Rapid Lab team which I headed. It was a hand picked team of very smart individuals working on small but difficult problems. Sweta is extremely hard working, determined, laser focused and intelligent individual. She worked on range of use cases in parallel and did an amazing job of researching solutions, applying them and eventually solving the problems. I wish her all the best and highly recommend her for future roles.',
    ],
  },
];

export const contact = {
  email: 'sahuswetaa23@gmail.com',
  phone: '716-446-6484',
  location: 'New York, USA (Open to Relocation)',
  linkedin: 'https://linkedin.com/in/23-sweta-sahu',
  linkedinLabel: 'linkedin.com/in/23-sweta-sahu',
  github: 'https://github.com/sweta-sahu',
  githubLabel: 'github.com/sweta-sahu',
  // FormSubmit relays the form straight to the inbox below — no server needed for the
  // static export. The first submission triggers a one-time activation email to that
  // address; click the link in it and every later message is delivered silently.
  formEndpoint: 'https://formsubmit.co/ajax/sahuswetaa23@gmail.com',
};
