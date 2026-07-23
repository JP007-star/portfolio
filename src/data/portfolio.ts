export const personalInfo = {
  name: "Jaya Prasad M",
  title: "Java Developer",
  email: "jayaprasad.jp.m@gmail.com",
  phone: "+91-9080059962",
  location: "Tirunelveli, Tamil Nadu, India",
  address: "Tirunelveli, Tamil Nadu, India",
  linkedin: "https://linkedin.com/in/jayaprasad",
  github: "https://github.com/JP007-star",
  resumeUrl: "https://drive.google.com/drive/folders/1DkGQLQz1r0o01-XTygWKVD-KlAXBmC2S",
};

export const bio = {
  short: "Java Developer with 5+ years of experience in building scalable, cloud-native applications using Java, Spring Boot, React.js, and GCP.",
  full: "Dedicated and results-driven Java Developer with 5+ years of comprehensive experience in designing, developing, and deploying enterprise-grade applications. Proficient in microservices architecture, RESTful API development, frontend performance optimization, and cloud deployments. Demonstrated success in delivering high-impact solutions, enhancing system performance, and automating complex business workflows. Adept at collaborating with cross-functional teams to achieve project objectives and drive organizational growth.",
  yearsOfExperience: 5,
};

export const skills = {
  languages: [
    { name: "Java 8 / 11 / 17 / 21 (LTS)", level: 95 },
    { name: "JavaScript", level: 85 },
  ],
  frameworks: [
    { name: "Spring Boot 3.x", level: 95 },
    { name: "React.js 18.x", level: 85 },
  ],
  databases: [
    { name: "MySQL 8.x", level: 85 },
    { name: "MongoDB 7.x", level: 90 },
  ],
  devops: [
    { name: "Docker", level: 90 },
    { name: "Kubernetes", level: 85 },
    { name: "Helm", level: 80 },
    { name: "GitLab CI/CD", level: 85 },
    { name: "Git / GitHub", level: 85 },
  ],
  cloud: [
    { name: "GCP", level: 85 },
    { name: "AWS", level: 85 },
  ],
  toolsAndPractices: [
    { name: "IntelliJ IDEA", level: 85 },
    { name: "VS Code", level: 85 },
    { name: "Linux", level: 80 },
    { name: "Agile / Scrum", level: 85 },
    { name: "Confluence (Wiki Integration)", level: 80 },
  ],
};

export const experience = [
  {
    id: 1,
    role: "Senior Engineer",
    company: "Altimetrik",
    location: "Bengaluru",
    period: "Mar 2025 - Present",
    description:
      "Project: Lending Platform | Calibo. Designed and developed a DocuSign integration microservice from scratch using Java and Spring Boot, automating document workflows and reducing manual processing effort by 50%. Developed and maintained scalable React.js applications using functional components and hooks (useState, useEffect), optimizing component re-rendering for frontend performance. Built and consumed RESTful APIs enabling communication between React frontends and Spring Boot microservices. Configured MongoDB replica set with automatic failover, improving application uptime and fault tolerance. Implemented data persistence using Spring Data JPA, designing entity models, repositories, and relationships. Worked on cloud-native deployments across GCP and AWS.",
    achievements: [
      "DocuSign Integration - 50% reduction in manual processing",
      "MongoDB Replica Set with Automatic Failover",
      "RESTful API Development Across 6 Microservices",
      "Frontend Performance Optimization (React.js)",
    ],
  },
  {
    id: 2,
    role: "Senior Software Engineer",
    company: "Yash Technologies",
    location: "Bengaluru",
    period: "Nov 2024 - Mar 2025",
    description:
      "Project: ATS Internal App. Designed and developed a Resume ATS Scoring Platform using Spring Boot microservices to evaluate resumes based on predefined scoring criteria, with a React-based frontend for input capture and score display. Integrated the Google Gemini API to analyze resume content and generate contextual relevance scores, improving accuracy and consistency of ATS evaluations. Owned end-to-end system design, including API contracts, service boundaries, data models, and error-handling strategies. Deployed on AWS with MongoDB as the primary database.",
    achievements: [
      "Resume ATS Scoring Platform (Spring Boot + React)",
      "Google Gemini API Integration",
      "AWS Deployment with MongoDB",
    ],
  },
  {
    id: 3,
    role: "Associate Software Engineer",
    company: "Torry Harris Integrated Solution",
    location: "Bengaluru",
    period: "Aug 2021 - Nov 2024",
    description:
      "Project: API Catalogue | BT Group. Designed and implemented RESTful APIs for seamless communication between frontend and backend components. Collaborated with development teams to design appropriate React Redux data flow and state management strategies. Utilized Spring Boot framework for efficient and scalable backend development, migrated Java REST API to AWS cloud using EKS and other AWS web services. Created and optimized database schemas and queries for MySQL and MongoDB, worked with Kafka. Managed migration and upgradation of Java Development Kit (JDK) versions from JDK 8 to JDK 11 and JDK 17.",
    achievements: [
      "RESTful API Development",
      "AWS EKS Migration",
      "JDK Upgradation (8 → 11 → 17)",
      "30% System Performance Improvement",
      "25% Cloud Infrastructure Cost Reduction",
    ],
  },
  {
    id: 4,
    role: "Software Engineer Trainee",
    company: "Avanze Technologies",
    location: "Salem",
    period: "Feb 2021 - Jul 2021",
    description:
      "Project: MortgageSats | Firstsource. Designed and implemented RESTful APIs and backend functionality using PHP frameworks such as Laravel and CodeIgniter. Created responsive and intuitive user interfaces using React.js, HTML5, CSS3, and related frontend technologies.",
    achievements: [
      "PHP/Laravel Backend Development",
      "React.js Frontend Components",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "PDF RAG Chatbot",
    description:
      "Built an end-to-end RAG (Retrieval-Augmented Generation) system where documents are chunked, embedded using Sentence Transformers, stored in FAISS, and retrieved using similarity search. Integrated retrieved content with Llama3 (Ollama) and exposed the service using FastAPI.",
    techStack: ["Python", "FastAPI", "FAISS", "Sentence-Transformers", "Llama3", "Ollama"],
    link: "https://github.com/JP007-star/pdf-rag-chatbot",
    year: "2026",
  },
  {
    id: 2,
    title: "End-to-End MLOps Pipeline",
    description:
      "Built an end-to-end MLOps pipeline covering data preprocessing, model training, evaluation, deployment, and monitoring. Implemented Docker-based containerization, version control using Git, and deployed ML models using Kubernetes. Integrated cloud platforms (AWS/GCP/Azure) for scalable production deployment.",
    techStack: ["Python", "Docker", "Kubernetes", "ML Pipelines", "AWS", "GCP", "Azure"],
    link: "https://github.com/JP007-star/ml_ops_project",
    year: "2026",
  },
  {
    id: 3,
    title: "Restaurant Application",
    description:
      "Developed Spring Boot Java Application and setup CI/CD pipeline using Jenkins, Ansible and demonstrated DevOps infrastructure using Docker, Kubernetes in AWS cloud.",
    techStack: ["Spring Boot", "Jenkins", "Ansible", "Docker", "Kubernetes", "AWS"],
    link: "https://github.com/JP007-star/RestaurantApp.git",
    year: "2022",
  },
  {
    id: 4,
    title: "Train Ticket Reservation System",
    description:
      "Developed a Spring Boot Java Application with Thymeleaf for rendering the frontend. Application is used to reserve and generate tickets for train journeys.",
    techStack: ["Spring Boot", "Thymeleaf", "Java"],
    link: "https://github.com/JP007-star/TrainTicketReservation.git",
    year: "2021",
  },
  {
    id: 5,
    title: "Home Automation (IOT)",
    description:
      "RealTime IOT Project with NodeMCU and RealTime Database in Firebase for Controlling Home Appliance with Flutter Hybrid Mobile App.",
    techStack: ["Flutter", "Firebase", "NodeMCU", "IOT"],
    link: "https://github.com/JP007-star/IOT-HOME.git",
    year: "2021",
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering in Electrical and Electronics Engineering",
    institution: "SCAD College of Engineering and Technology",
    period: "2017-2021",
    details: "Affiliated to Anna University - CGPA: 8.22",
  },
];

export const awards = [
  {
    id: 1,
    title: "Rise and Shine Award",
    organization: "Altimetrik",
    year: "2025",
    description: "Recognition for outstanding performance.",
  },
  {
    id: 2,
    title: "Team Excellence Award",
    organization: "Torry Harris Integrated Solution",
    year: "2024",
    description: "Recognition for team excellence.",
  },
  {
    id: 3,
    title: "Team Excellence Award",
    organization: "Torry Harris Integrated Solution",
    year: "2023",
    description: "Recognition for team excellence.",
  },
  {
    id: 4,
    title: "Rookie of the Quarter",
    organization: "Torry Harris Integrated Solution",
    year: "2023",
    description: "Recognition as Rookie of the Quarter.",
  },
  {
    id: 5,
    title: "Green Belt Lean Six Sigma",
    organization: "MSME",
    year: "2020",
    description: "Completed GREEN BELT LEAN SIX SIGMA certification program.",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Google Cloud Certified – Associate Cloud Engineer",
    organization: "Google Cloud",
    year: "2025",
  },
  {
    id: 2,
    title: "Oracle Gen AI Professional",
    organization: "Oracle",
    year: "2025",
  },
];