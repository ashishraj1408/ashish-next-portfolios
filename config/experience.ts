import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "ubs",
    position: "Software Development Engineer",
    company: "Ethos Pro Realtors",
    location: "Gurugram, India",
    startDate: new Date("2025-07-01"),
    endDate: "Present",
    description: [
      "Shipped production features within the first month for a trader-facing P&L dashboard used by global stakeholders.",
      "Led the migration from Kendo UI to EPR's internal design system to reduce UI inconsistencies and improve render performance.",
      "Designed and automated a daily FX rate ingestion pipeline using Databricks (Python, Spark SQL) and Java services.",
    ],
    achievements: [
      "Shipped production features within the first month for a trader-facing P&L dashboard used by global stakeholders.",
      "Led migration from Kendo UI to EPR's internal design system, reducing UI inconsistencies and improving render performance across core dashboards.",
      "Designed and automated a daily FX rate ingestion pipeline using Databricks (Python, Spark SQL) and Java services, eliminating manual rate updates.",
      "Won UBS AI Venture Challenge by building data transformation and anomaly detection pipelines on trading datasets.",
      "Led a 12-member team in an internal hackathon to build an AI-powered tool that generates GitLab tickets, test cases, and requirement summaries.",
    ],
    skills: ["Typescript", "React", "Databricks", "Java", "MERN", "PHP"],
    companyUrl: "https://github.com/ashishraj1408",
    logo: "/experience/EPR.png",
  },
  {
    id: "muze-ai",
    position: "Frontend Developer",
    company: "Hirola InfoTech Pvt",
    location: "Bengaluru, India",
    startDate: new Date("2025-02-01"),
    endDate: new Date("2025-05-30"),
    description: [
      "Improved LLM function-calling accuracy through structured prompt design and response validation.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Migrated ML inference from Replicate to AWS SageMaker to reduce cold-start latency.",
    ],
    achievements: [
      "Improved LLM function-calling accuracy by ~40% through structured prompt design and response validation.",
      "Developed APIs and integrated Slack, Google Workspace, and HubSpot automations via FastAPI.",
      "Migrated ML inference from Replicate to AWS SageMaker, reducing cold-start latency by ~30%.",
      "Created a Next.js dashboard for user analytics and a demo video explaining the implementation.",
    ],
    skills: ["FastAPI", "Python", "AWS", "Next.js", "React", "Typescript"],
    companyUrl: "https://github.com/ashishraj1408",
    logo: "/experience/muzeai-logosd.png",
  },
  {
    id: "builtdesign",
    position: "Full Stack Developer",
    company: "Freelancer",
    location: "Remote",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-12-28"),
    description: [
      "Developed websites using React, Angular, and GraphQL.",
      "Set up AWS servers and CI/CD pipelines.",
      "Built a multi-page PDF reader for large files (>300MB).",
    ],
    achievements: [
      "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://github.com/ashishraj1408",
    logo: "/experience/freelancer.png",
  },
  {
    id: "bgi",
    position: "Full Stack Developer",
    company: "Business Gateways International India",
    location: "Remote",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2024-04-20"),
    description: [
      "Developed websites using React, Angular, and GraphQL.",
      "Set up AWS servers and CI/CD pipelines.",
      "Built a multi-page PDF reader for large files (>300MB).",
    ],
    achievements: [
      "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://github.com/ashishraj1408",
    logo: "/experience/bgi.png",
  },
];
