export const personalInfo = {
  name: "Alan Jones",
  location: "Portland, Maine",
  title: "Data Platform Engineer & Technical Lead",
  subheadline:
    "I design and modernize enterprise data platforms, helping teams turn business needs into reliable, scalable systems.",
  supportingText:
    "My work spans cloud-native data infrastructure, distributed processing, orchestration, stakeholder discovery, and engineering standards for business-critical data platforms.",
  bio: "I'm a data platform engineer based in Portland, Maine. My background combines software engineering, data systems, and scientific computing, with an M.S. in Earth Science (computational data focus) from UC Santa Barbara and a B.S. in Geology from the University of New Hampshire. Most of my recent work has focused on enterprise data platform modernization: replacing fragile legacy systems, improving reliability, defining technical roadmaps, and helping teams build data systems that are easier to operate and evolve. I care about pragmatic engineering: simple architecture, clear ownership, strong operational visibility, and tools that help teams move faster without losing discipline. Outside of work, I build independent software projects, explore practical AI-assisted development workflows, and spend time in Maine with my family.",
  email: "me@alanjones.dev",
  github: "https://github.com/aljones1816",
  linkedin: "https://www.linkedin.com/in/almjones/",
};

export interface WhatIDoItem {
  title: string;
  description: string;
  bullets: string[];
}

export const whatIDo: WhatIDoItem[] = [
  {
    title: "Platform Architecture",
    description:
      "Designing enterprise data platforms, distributed processing systems, and cloud-native runtime architectures for reliable data movement and analytics.",
    bullets: [
      "Data ingestion and orchestration",
      "Snowflake, Airflow, AWS, Python",
      "Execution tracking, recovery, and auditability",
    ],
  },
  {
    title: "Technical Leadership",
    description:
      "Working with business, product, architecture, and engineering stakeholders to define technical direction and turn organizational priorities into engineering roadmaps.",
    bullets: [
      "Architecture reviews",
      "Platform roadmaps",
      "Cross-team standards",
    ],
  },
  {
    title: "Modernization",
    description:
      "Replacing fragile legacy systems with maintainable, observable, containerized services that are safer to operate and easier to scale.",
    bullets: [
      "ECS/Fargate runtime services",
      "Legacy ETL modernization",
      "Safe retries and operational recovery",
    ],
  },
  {
    title: "AI-Assisted Engineering",
    description:
      "Establishing safe AI-assisted engineering workflows that improve development speed, code review, documentation, and testing without sacrificing engineering discipline.",
    bullets: [
      "AI-assisted code review and testing",
      "Guardrails and access controls",
      "Team enablement and workflow design",
    ],
  },
];

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
      "Technical lead for an enterprise data platform supporting approximately 500 data pipelines and organization-wide reporting, analytics, and operational data products. Defined and led a modernization strategy replacing legacy server-based ETL infrastructure with containerized extraction, ingestion, and processing services on AWS ECS/Fargate.",
    bullets: [
      "Migrated 300+ SAP ingestion pipelines to the new runtime architecture",
      "Reduced on-call incidents from 5–8 per week to less than one on average",
      "Reduced data load times from hours to minutes through safer parallel execution",
      "Eliminated manual job recovery by making workloads retry-safe, observable, and idempotent",
    ],
  },
  {
    id: "roadmap-discovery",
    title: "Platform Roadmap and Stakeholder Discovery",
    description:
      "Worked with business, product, architecture, and engineering stakeholders to refine the multi-year roadmap for an enterprise data platform. Interviewed stakeholders, evaluated current pain points, challenged outdated assumptions, and translated organizational needs into platform priorities that leadership adopted and began implementing.",
    bullets: [
      "Interviewed 7 key stakeholders to understand business needs and operational pain points",
      "Helped align platform investment with long-term data strategy",
      "Influenced team realignment between platform engineering and business-facing analytics work",
      "Helped clarify ownership boundaries across platform, modeling, and SAP support teams",
    ],
  },
  {
    id: "ai-engineering",
    title: "Safe AI-Assisted Engineering Practices",
    description:
      "Established standards and workflows for AI-assisted software development across platform modernization work, including tooling, access controls, review practices, and team enablement. The goal was not to replace engineering judgment, but to make design, testing, migration, review, and documentation work faster and more reliable.",
    bullets: [
      "Helped accelerate migration of 300+ pipelines from a months-long roadmap item into a days/weeks execution window",
      "Introduced AI-assisted PR review, commit recommendations, test generation, and documentation workflows",
      "Defined safe agent usage patterns, including controlled read-only AWS access for development support",
      "Led team enablement on how to use AI safely and effectively in engineering workflows",
    ],
  },
  {
    id: "platform-performance",
    title: "Platform Performance and Developer Productivity",
    description:
      "Designed and delivered foundational platform improvements across data latency, query performance, schema safety, and developer tooling. Work spanned incremental processing patterns, transformation optimization, schema evolution frameworks, and shared engineering libraries adopted across the platform team.",
    bullets: [
      "Reduced data latency by 70% through incremental processing patterns that eliminated costly full-table reprocessing",
      "Improved P95 query latency by 60% and reduced storage costs by approximately 20% on large-scale transformation workloads",
      "Built schema evolution and compatibility frameworks supporting 200+ analytical models, enabling safer platform changes",
      "Developed shared platform libraries and tooling adopted across a 12-engineer team, improving consistency and developer productivity",
    ],
  },
  {
    id: "energy-analytics",
    title: "Massachusetts Energy Analytics Platform",
    description:
      "Designed data models and processing pipelines supporting Massachusetts statewide energy efficiency programs, including reporting and analytics across electric and gas utilities. The platform supported regulatory reporting, public transparency, and program effectiveness analysis.",
    bullets: [
      "Modernized legacy SAS workflows to Python and Airflow",
      "Introduced automated testing, monitoring, and recovery practices",
      "Reduced pipeline failures by 30%",
      "Supported analytics for energy usage, program participation, savings, and consumer impact",
    ],
  },
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
    skills: [
      "Enterprise data platforms",
      "Distributed processing",
      "CDC",
      "Apache Iceberg",
      "Parquet",
      "Data modeling",
    ],
  },
  {
    label: "Technical Leadership",
    skills: [
      "Platform strategy",
      "Architecture reviews",
      "Stakeholder discovery",
      "Engineering standards",
      "CI/CD",
      "Observability",
      "AI-assisted development workflows",
    ],
  },
];
