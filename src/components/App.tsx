import { useState, useEffect, useRef, useCallback } from "react";
import "../styles/App.css";
import {
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconGitBranch,
  IconServer,
  IconUsers,
  IconRefresh,
  IconRobot,
  IconChevronDown,
} from "@tabler/icons-react";
import {
  personalInfo,
  whatIDo,
  caseStudies,
  skillGroups,
} from "../assets/content";
import profilePic from "../assets/me.jpeg";

interface FormattedCommit {
  hash: string;
  message: string;
  date: string;
  repo: string;
}

const WHAT_I_DO_ICONS = [
  <IconServer size={24} />,
  <IconUsers size={24} />,
  <IconRefresh size={24} />,
  <IconRobot size={24} />,
];

function Nav() {
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <span className="nav-name">Alan Jones</span>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-inner">
        <div className="hero-profile">
          <img
            src={profilePic}
            alt={personalInfo.name}
            className="hero-photo"
          />
          <div className="hero-text">
            <div className="hero-meta">data_platform_engineer · portland_me</div>
            <h1 className="hero-name">
              {personalInfo.name}
              <span className="hero-cursor" aria-hidden="true" />
            </h1>
            <h2 className="hero-title">{personalInfo.title}</h2>
            <p className="hero-subheadline">{personalInfo.subheadline}</p>
            <p className="hero-supporting">{personalInfo.supportingText}</p>
            <div className="hero-location">
              <span>📍 {personalInfo.location}</span>
            </div>
          </div>
        </div>
        <div className="hero-ctas">
          <a
            href={`mailto:${personalInfo.email}`}
            className="cta-btn cta-email"
          >
            <IconMail size={18} />
            <span>Email</span>
          </a>
          <a
            href={personalInfo.github}
            className="cta-btn cta-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            className="cta-btn cta-linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function WhatIDo() {
  return (
    <section className="section what-i-do-section" id="what-i-do">
      <div className="section-inner">
        <h2 className="section-heading">What I Do</h2>
        <div className="what-i-do-grid">
          {whatIDo.map((item, i) => (
            <div key={item.title} className="what-card">
              <div className="what-card-header">
                <span className="what-card-icon">{WHAT_I_DO_ICONS[i]}</span>
                <h3 className="what-card-title">{item.title}</h3>
              </div>
              <div className="what-card-body">
                <p className="what-card-desc">{item.description}</p>
                <ul className="what-card-bullets">
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study }: { study: (typeof caseStudies)[number] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`case-study-card ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="case-study-header">
        <h3 className="case-study-title">{study.title}</h3>
        <span className="case-study-chevron">
          <IconChevronDown size={18} />
        </span>
      </div>
      <p className="case-study-desc">{study.description}</p>
      <div className="case-study-bullets">
        <ul>
          {study.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SelectedWork() {
  return (
    <section className="section work-section" id="work">
      <div className="section-inner">
        <h2 className="section-heading">Selected Work</h2>
        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalStrengths() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <h2 className="section-heading">Technical Strengths</h2>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-tags">
                {group.skills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
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

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-inner about-inner">
        <h2 className="section-heading">About</h2>
        <p className="about-bio">{personalInfo.bio}</p>
      </div>
    </section>
  );
}

function CommitActivity() {
  const [showCommits, setShowCommits] = useState(false);
  const [commits, setCommits] = useState<FormattedCommit[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCommits, setTotalCommits] = useState(0);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const formatDate = useCallback((dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );
    if (diffInMinutes < 60) return `${diffInMinutes} minutes ago`;
    if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
    const days = Math.floor(diffInMinutes / 1440);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }, []);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

  const fetchGitHubData = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/github-events`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unknown error");
      const formatted = json.commits.map(
        (c: { hash: string; message: string; date: string; repo: string }) => ({
          ...c,
          date: formatDate(c.date),
        })
      );
      setCommits(formatted);
      setTotalCommits(json.totalCount);
    } catch {
      setTotalCommits(350);
    }
  }, [formatDate, API_BASE]);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isTouchDevice &&
        isMobileModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsMobileModalOpen(false);
      }
    };
    if (isMobileModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileModalOpen, isTouchDevice]);

  useEffect(() => {
    setLoading(true);
    fetchGitHubData().finally(() => setLoading(false));
  }, [fetchGitHubData]);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      setShowCommits(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      hideTimeoutRef.current = setTimeout(() => setShowCommits(false), 300);
    }
  };

  return (
    <div
      className="commit-activity"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => isTouchDevice && setIsMobileModalOpen(!isMobileModalOpen)}
    >
      <IconGitBranch size={16} />
      <span>{loading ? "..." : `${totalCommits.toLocaleString()}+`} commits this year</span>

      {(showCommits || isMobileModalOpen) && (
        <div ref={modalRef} className="commit-modal">
          <div className="commit-modal-header">
            <span>Recent Commits</span>
            <span className="commit-count">{commits.length} shown</span>
          </div>
          <div className="commit-list">
            {loading ? (
              <div className="commit-loading">Fetching commits…</div>
            ) : (
              commits.map((commit, i) => (
                <div key={i} className="commit-item">
                  <div className="commit-hash">#{commit.hash}</div>
                  <div className="commit-content">
                    <div className="commit-message">{commit.message}</div>
                    <div className="commit-meta">
                      <span className="commit-repo">{commit.repo}</span>
                      <span className="commit-date">{commit.date}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-inner">
        <div className="footer-links">
          <a href={`mailto:${personalInfo.email}`} className="footer-link">
            <IconMail size={18} />
            <span>{personalInfo.email}</span>
          </a>
          <a
            href={personalInfo.github}
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandGithub size={18} />
            <span>GitHub</span>
          </a>
          <a
            href={personalInfo.linkedin}
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
          <CommitActivity />
        </div>
        <p className="footer-location">📍 {personalInfo.location}</p>
        <p className="footer-credit">Designed and built by Alan Jones.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <WhatIDo />
      <SelectedWork />
      <TechnicalStrengths />
      <About />
      <Footer />
    </div>
  );
}

export default App;
