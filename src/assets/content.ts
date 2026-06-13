export const personalInfo = {
  name: "Alan Jones",
  location: "Portland, Maine",
  title: "Data Platform Engineer & Technical Lead",
  heroCopy:
    "I write about building reliable data platforms, modernizing legacy systems, and using AI-assisted engineering without losing engineering discipline.",
  bio: "I'm a data platform engineer and technical lead based in Maine. My work focuses on enterprise data platforms: ingestion, orchestration, distributed processing, reliability, and the engineering practices that make large systems easier to operate. I like the part of engineering where technical design meets business reality — understanding what people actually need, finding the real constraints, and turning that into architecture teams can build and maintain. Before moving into software and data engineering, I worked in computational earth science and paleoclimate research. That background still shapes how I think about data, uncertainty, and complex systems. Outside of work, I build side projects, experiment with practical AI-assisted development workflows, and spend time outdoors with my family.",
  education: [
    "M.S. Earth Science (Computational data focus) — UC Santa Barbara",
    "B.S. Geology — University of New Hampshire",
  ],
  email: "me@alanjones.dev",
  github: "https://github.com/aljones1816",
  linkedin: "https://www.linkedin.com/in/almjones/",
};

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  bullets: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "platform-modernization",
    title: "Enterprise Data Platform Modernization",
    description:
      "Technical lead for an enterprise data platform supporting approximately 500 data pipelines and organization-wide reporting, analytics, and operational data products. Led modernization from legacy server-based ETL infrastructure to containerized extraction, ingestion, and processing services on AWS ECS/Fargate.",
    bullets: [
      "Migrated 300+ SAP ingestion pipelines to the new runtime architecture",
      "Reduced on-call incidents from 5–8 per week to less than one on average",
      "Reduced data load times from hours to minutes through safer parallel execution",
      "Eliminated manual job recovery by making workloads retry-safe, observable, and idempotent",
    ],
  },
  {
    id: "platform-performance",
    title: "Platform Performance and Developer Productivity",
    description:
      "Designed and delivered foundational platform improvements across data latency, query performance, schema safety, and developer tooling.",
    bullets: [
      "Reduced data latency by 70% through incremental processing patterns",
      "Improved P95 query latency by 60% and reduced storage costs ~20%",
      "Built schema evolution framework supporting 200+ analytical models",
      "Developed shared libraries adopted across a 12-engineer team",
    ],
  },
  {
    id: "roadmap-discovery",
    title: "Platform Roadmap and Stakeholder Discovery",
    description:
      "Worked with business, product, architecture, and engineering stakeholders to refine a multi-year platform roadmap. Interviewed stakeholders, evaluated pain points, and translated organizational needs into adopted modernization priorities.",
    bullets: [
      "Interviewed 7 stakeholders to understand platform needs and pain points",
      "Helped align platform investment with long-term data strategy",
      "Influenced team realignment between platform engineering and analytics work",
      "Helped clarify ownership boundaries across platform, modeling, and SAP support teams",
    ],
  },
  {
    id: "ai-engineering",
    title: "Safe AI-Assisted Engineering Practices",
    description:
      "Established standards and workflows for AI-assisted software development across platform modernization work, including tooling, access controls, review practices, and team enablement.",
    bullets: [
      "Helped accelerate migration of 300+ pipelines into a days/weeks execution window",
      "Introduced AI-assisted PR review, test generation, and documentation workflows",
      "Defined safe usage patterns including controlled read-only AWS access",
      "Led team enablement on practical and responsible AI-assisted engineering",
    ],
  },
  {
    id: "energy-analytics",
    title: "Massachusetts Energy Analytics Platform",
    description:
      "Designed data models and processing pipelines supporting Massachusetts statewide energy efficiency programs, including reporting and analytics across electric and gas utilities.",
    bullets: [
      "Modernized legacy SAS workflows to Python and Airflow",
      "Introduced automated testing, monitoring, and recovery practices",
      "Reduced pipeline failures by 30%",
      "Supported regulatory reporting, public transparency, and program effectiveness analysis",
    ],
  },
];

export interface Principle {
  number: string;
  title: string;
  body: string;
  relatedSlug?: string;
}

export const principles: Principle[] = [
  {
    number: "01",
    title: "Make retries safe.",
    body: "Recovery should not require heroics. A failed job should leave behind enough state to understand what happened and enough structure to retry safely.",
    relatedSlug: "make-retries-safe",
  },
  {
    number: "02",
    title: "Make execution disposable and state durable.",
    body: "Compute should be replaceable. State should be explicit, queryable, and owned. If you can't throw away a server and start fresh, the server has too much responsibility.",
    relatedSlug: "long-running-etl-servers",
  },
  {
    number: "03",
    title: "Architecture follows ownership.",
    body: "Systems are easier to operate when team responsibilities match the way the platform is built. Design systems people can actually own.",
    relatedSlug: "architecture-follows-ownership",
  },
  {
    number: "04",
    title: "Business needs should shape platform design.",
    body: "Platform work should start with real user pain, not abstract technical preference. The best architectural decisions are grounded in what people actually need to do.",
  },
  {
    number: "05",
    title: "AI should reduce toil, not judgment.",
    body: "AI-assisted workflows are most valuable when they improve testing, review, documentation, and migration work — while keeping engineers accountable for design decisions.",
    relatedSlug: "ai-makes-implementation-cheap",
  },
  {
    number: "06",
    title: "Readable systems age better.",
    body: "Simple patterns, clear naming, consistent standards, and good documentation compound over time. A system that a new engineer can understand in a day costs less to operate than one that requires tribal knowledge.",
  },
];

export const impactMetrics = [
  { value: "~500", label: "pipelines supported" },
  { value: "300+", label: "pipelines migrated" },
  { value: "5–8 → <1", label: "on-call incidents / week" },
  { value: "−70%", label: "data latency" },
];

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Cloud & Infrastructure",
    skills: ["AWS", "ECS/Fargate", "S3", "Terraform", "Docker", "GitHub Actions"],
  },
  {
    label: "Data Engineering",
    skills: ["Snowflake", "Airflow", "dbt", "Python", "SQL", "PostgreSQL", "MySQL"],
  },
  {
    label: "Data Platforms",
    skills: ["Enterprise data platforms", "Distributed processing", "CDC", "Apache Iceberg", "Parquet", "Data modeling"],
  },
  {
    label: "Technical Leadership",
    skills: ["Platform strategy", "Architecture reviews", "Stakeholder discovery", "Engineering standards", "CI/CD", "Observability", "AI-assisted development"],
  },
];
