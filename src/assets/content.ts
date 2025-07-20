import sojournessThumb from "./sojourness-main.png";

export interface Experience {
  id: string;
  date: string; // YYYY or YYYY-MM format for sorting
  year: string; // Display year
  title: string;
  subtitle: string;
  description: string;
  expandedContent: string;
  type: "education" | "career" | "project" | "milestone";
  image?: string;
  technologies?: Technology[];
  link?: string;
  location?: string;
}

export interface Technology {
  name: string;
  icon: string;
  color?: string;
}

export const personalInfo = {
  name: "Alan Jones",
  location: "Portland, Maine",
  tagline: "Building data-driven experiences for the modern web",
  interests: [
    "✈️ Travel",
    "🥾 Hiking & Camping",
    "🏋️ Weightlifting",
    "🥒 Pickleball",
    "👨‍🍳 Cooking",
    "🎮 Video Games",
    "🌱 Climate Change Advocacy",
  ],
  bio: "Hi, I'm Alan. I live in Portland, Maine with my spouse and our little dog, Copper. When I'm not coding and creating bugs for myself to fix, I spend my free time traveling with my partner to see as much of the world as we can, hiking through Maine's beautiful wilderness, experimenting with new recipes in the kitchen, finding creative ways to injure myself on unfamiliar gym equipment, and getting bodied on the kitchen line at the pickleball court. I'm a passionate advocate for environmental stewardship and deeply believe that climate change is humanity's most critical challenge. I want to use technology to make the world better.",
};

export const experiences: Experience[] = [
  {
    id: "2015-graduate",
    date: "2015",
    year: "2015",
    title: "Graduate Student",
    subtitle: "Paleoclimatology Research",
    description:
      "Started my journey into software with R programming for climate data analysis",
    expandedContent:
      "As a graduate student studying paleoclimatology, I began tinkering with R programs used to unravel the timing of past great climate changes recorded in ocean sediment cores. This was my first real exposure to programming and data analysis, where I discovered my love for solving complex problems with code.",
    type: "education",
    technologies: [
      {
        name: "R",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
        color: "#276DC3",
      },
    ],
    link: "https://www.sciencedirect.com/science/article/pii/S0277379122001901",
    location: "University Of California Santa Barbara",
  },
  {
    id: "2017-python",
    date: "2017",
    year: "2017",
    title: "Python Discovery",
    subtitle: "Expanding Technical Skills",
    description:
      "Transitioned from R to Python for more robust data processing and analysis",
    expandedContent:
      "Discovered Python and its powerful ecosystem for data science. Started using pandas, numpy, and matplotlib for more complex data analysis tasks. This marked the beginning of my deeper dive into programming beyond just research scripts.",
    type: "milestone",
    technologies: [
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#3776AB",
      },
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        color: "#150458",
      },
    ],
  },
  {
    id: "2019-data-platform",
    date: "2019",
    year: "2019",
    title: "Energy Utility Data Platform",
    subtitle: "First Professional Development",
    description:
      "Developed public data-access platform for Massachusetts energy efficiency programs",
    expandedContent:
      "I collaborated with Massachusetts energy utilities to develop a data platform that drives their energy efficiency programs. This was my first major professional software project, involving large-scale data processing, ETL pipelines, and building systems that real businesses depend on.",
    type: "career",
    technologies: [
      {
        name: "Pandas",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        color: "#150458",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#3776AB",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#4169E1",
      },
    ],
    link: "https://viewer.dnv.com/macustomerprofile/entity/1444/report/2078",
    location: "DNV | Portland, Maine",
  },
  {
    id: "2021-warehouse",
    date: "2021",
    year: "2021",
    title: "Data Warehouse Migration",
    subtitle: "Large-Scale System Architecture",
    description: "Participated in large-scale data warehouse migration project",
    expandedContent:
      "Participated in a large-scale data warehouse migration, learning about system architecture, database optimization, and the challenges of moving massive amounts of data while maintaining business continuity. This experience taught me about scalable system design.",
    type: "career",
    technologies: [
      {
        name: "Snowflake",
        icon: "https://logos-world.net/wp-content/uploads/2022/11/Snowflake-Symbol.png",
        color: "#29B5E8",
      },
      {
        name: "Apache Airflow",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg",
        color: "#017CEE",
      },
      {
        name: "dbt",
        icon: "https://seeklogo.com/images/D/dbt-logo-500AB0BAA7-seeklogo.com.png",
        color: "#FF694B",
      },
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        color: "#2496ED",
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
        color: "#FF9900",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#3776AB",
      },
      {
        name: "SQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#4169E1",
      },
    ],
    location: "IDEXX | Westbrook, Maine",
  },
  {
    id: "2021-javascript",
    date: "2021",
    year: "2021",
    title: "Frontend Discovery",
    subtitle: "Learning Web Development",
    description:
      "Started learning JavaScript and web development to build user interfaces",
    expandedContent:
      "Began exploring frontend development with JavaScript, HTML, and CSS. Realized I wanted to build complete applications, not just backend systems. Started with vanilla JavaScript and quickly moved to understanding modern web development patterns.",
    type: "milestone",
    technologies: [
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E",
      },
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#1572B6",
      },
    ],
  },
  {
    id: "2022-react",
    date: "2022",
    year: "2022",
    title: "React & Modern Frontend",
    subtitle: "Component-Based Development",
    description:
      "Dove deep into React and modern frontend development patterns",
    expandedContent:
      "Immersed myself in React and the modern frontend ecosystem. Learned about component-based architecture, state management, and building interactive user interfaces. Started understanding how to create engaging user experiences.",
    type: "milestone",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6",
      },
    ],
  },
  {
    id: "2025-sojourness",
    date: "2024",
    year: "2024-2025",
    title: "Sojourness",
    subtitle: "Full Stack E-commerce Platform",
    description:
      "Built a complete, bespoke travel booking platform with Next.js and Payload CMS.",
    expandedContent:
      "Sojourness is a travel organization for women that provides unique international and local women-led group travel experiences. Built with modern web technologies, this comprehensive booking platform features a headless CMS architecture for optimal performance and scalability. The platform includes user authentication, search and filtering, custom booking management, and payment processing. This freelance project was my first time deploying and maintaining a professional fullstack application that is actively used to drive vital business operations.",
    type: "project",
    image: sojournessThumb,
    technologies: [
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#000000",
      },
      {
        name: "Payload CMS",
        icon: "https://avatars.githubusercontent.com/u/62968818?s=200&v=4",
        color: "#000000",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6",
      },
    ],
    link: "https://www.sojourness.com",
  },
  {
    id: "2025-fullstack",
    date: "2025",
    year: "2025",
    title: "Full Stack Developer",
    subtitle: "Present Day",
    description:
      "Now building complete web applications from backend to frontend",
    expandedContent:
      "Today I leverage my data engineering background to build comprehensive web applications with robust backend systems and engaging user interfaces. I focus on creating scalable, maintainable applications that solve real problems. I am open to new opportunities and would love to talk to you about what we can build next.",
    type: "career",
    technologies: [
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#000000",
      },
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933",
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        color: "#3776AB",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#4169E1",
      },
    ],
  },
];

// Sort experiences by date
experiences.sort((a, b) => {
  return parseInt(a.date) - parseInt(b.date);
});
