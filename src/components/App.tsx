import { useState, useEffect, useRef, useCallback } from "react";
import "../styles/App.css";
import {
  IconExternalLink,
  IconChevronDown,
  IconBrandLinkedin,
  IconBrandGithub,
  IconMail,
  IconNews,
  IconCode,
  IconGitBranch,
  IconClock,
} from "@tabler/icons-react";
import { experiences, personalInfo, Experience } from "../assets/content";
import profilePic from "../assets/me.jpeg";

interface FormattedCommit {
  hash: string;
  message: string;
  date: string;
  repo: string;
}

function StatsCard() {
  const [showCommits, setShowCommits] = useState(false);
  const [commits, setCommits] = useState<FormattedCommit[]>([]);
  const [loading, setLoading] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const hideTimeoutRef = useRef<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [totalCommits, setTotalCommits] = useState(0);

  const formatDate = useCallback((dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60),
    );

    if (diffInMinutes < 60) {
      return `${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInMinutes / 1440);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  }, []);

  const fetchGitHubData = useCallback(async (): Promise<{
    commits: FormattedCommit[];
    totalCount: number;
  }> => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    const username = import.meta.env.VITE_GITHUB_USERNAME || "aljones1816";

    if (!token) {
      setTotalCommits(350); // Fallback estimate for yearly commits
      return {
        commits: [
          {
            hash: "a7b3c2d",
            message: "feat: implement user authentication system",
            date: "2 hours ago",
            repo: "sojourness",
          },
          {
            hash: "f4e5d6a",
            message: "fix: resolve timeline rendering bug",
            date: "1 day ago",
            repo: "portfolio",
          },
          {
            hash: "2c8b9e1",
            message: "refactor: optimize database queries",
            date: "3 days ago",
            repo: "data-platform",
          },
          {
            hash: "9d5a1f2",
            message: "feat: add dark mode toggle",
            date: "1 week ago",
            repo: "react-components",
          },
          {
            hash: "6e2f7b8",
            message: "docs: update API documentation",
            date: "2 weeks ago",
            repo: "api-server",
          },
        ],
        totalCount: 350,
      };
    }

    try {
      // First, get the user's repositories
      const reposUrl = `https://api.github.com/users/${username}/repos`;

      const reposResponse = await fetch(reposUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github.v3+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (!reposResponse.ok) {
        throw new Error(
          `Failed to fetch repositories: ${reposResponse.status}`,
        );
      }

      const repos = await reposResponse.json();

      // Get commits from this year
      const startOfYear = new Date(new Date().getFullYear(), 0, 1);
      const since = startOfYear.toISOString();

      const recentCommits: FormattedCommit[] = [];
      let yearlyCommitCount = 0;
      const reposToCheck = repos.slice(0, 15); // Check more repos for yearly count

      for (const repo of reposToCheck) {
        try {
          const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits`;

          // Get commits from this year
          const commitsResponse = await fetch(
            commitsUrl + `?since=${since}&per_page=100`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/vnd.github.v3+json",
                "X-GitHub-Api-Version": "2022-11-28",
              },
            },
          );

          if (commitsResponse.ok) {
            const commits = await commitsResponse.json();
            yearlyCommitCount += commits.length;

            // Add recent commits to display list (only the most recent ones)
            for (const commit of commits.slice(0, 2)) {
              // Take up to 2 commits per repo
              if (recentCommits.length < 5) {
                recentCommits.push({
                  hash: commit.sha.slice(0, 7),
                  message: commit.commit.message.split("\n")[0],
                  date: formatDate(commit.commit.author.date),
                  repo: repo.name,
                });
              }
            }
          }
        } catch (repoError) {
          // Skip repos that can't be accessed
        }

        if (recentCommits.length >= 5) break;
      }

      // Sort by date (most recent first)
      recentCommits.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );

      return {
        commits: recentCommits.slice(0, 5),
        totalCount: yearlyCommitCount,
      };
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      // Fallback to mock data
      setTotalCommits(350);
      return {
        commits: [
          {
            hash: "a7b3c2d",
            message: "feat: implement user authentication system",
            date: "2 hours ago",
            repo: "sojourness",
          },
          {
            hash: "f4e5d6a",
            message: "fix: resolve timeline rendering bug",
            date: "1 day ago",
            repo: "portfolio",
          },
          {
            hash: "2c8b9e1",
            message: "refactor: optimize database queries",
            date: "3 days ago",
            repo: "data-platform",
          },
        ],
        totalCount: 350,
      };
    }
  }, [formatDate]);

  // Detect touch device
  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  // Handle click outside to close modal on mobile
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
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMobileModalOpen, isTouchDevice]);

  // Load commits and total count
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const { commits: fetchedCommits, totalCount } = await fetchGitHubData();
      setCommits(fetchedCommits);
      setTotalCommits(totalCount);
      setLoading(false);
    };

    loadData();
  }, [fetchGitHubData]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
      }
    };
  }, []);

  // Hover handlers with delay
  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      if (hideTimeoutRef.current) {
        clearTimeout(hideTimeoutRef.current);
        hideTimeoutRef.current = null;
      }
      setShowCommits(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isTouchDevice) {
      hideTimeoutRef.current = setTimeout(() => {
        setShowCommits(false);
      }, 300); // 300ms delay before hiding
    }
  };

  const handleModalMouseEnter = () => {
    if (!isTouchDevice && hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  };

  const handleModalMouseLeave = () => {
    if (!isTouchDevice) {
      hideTimeoutRef.current = setTimeout(() => {
        setShowCommits(false);
      }, 200); // Shorter delay when leaving modal
    }
  };

  // Mobile tap handler
  const handleMobileTap = () => {
    if (isTouchDevice) {
      setIsMobileModalOpen(!isMobileModalOpen);
    }
  };

  const stats = [
    {
      icon: <IconCode size={20} />,
      label: "Years Coding",
      value: "9+",
      hasModal: false,
    },
    {
      icon: <IconGitBranch size={20} />,
      label: "Commits This Year",
      value: loading ? "..." : `${totalCommits.toLocaleString()}+`,
      hasModal: true,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleMobileTap,
    },
    {
      icon: <IconClock size={20} />,
      label: "Coffee Consumed",
      value: "∞",
      hasModal: false,
    },
  ];

  return (
    <div className="stats-card">
      <h3 className="stats-title">Coding Stats</h3>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`stat-item ${stat.hasModal ? "stat-item-hoverable" : ""}`}
            onMouseEnter={stat.onMouseEnter}
            onMouseLeave={stat.onMouseLeave}
            onClick={stat.onClick}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      
      {(showCommits || isMobileModalOpen) && (
        <div
          ref={modalRef}
          className="commit-modal"
          onMouseEnter={handleModalMouseEnter}
          onMouseLeave={handleModalMouseLeave}
        >
          <div className="commit-modal-header">
            <h4>Recent Commits</h4>
            <span className="commit-count">
              {loading ? "Loading..." : `${commits.length} shown`}
            </span>
          </div>
          <div className="commit-list">
            {loading ? (
              <div className="commit-loading">
                Fetching latest commits...
              </div>
            ) : (
              commits.map((commit, commitIndex) => (
                <div key={commitIndex} className="commit-item">
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

function ExperienceCard({ item }: { item: Experience }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`timeline-card ${isExpanded ? "expanded" : ""}`}
      onClick={toggleExpanded}
    >
      <div className="card-header">
        <div className="card-info">
          <h3 className="card-title">{item.title}</h3>
          <div className="card-subtitle">{item.subtitle}</div>
          <p className="card-description">{item.description}</p>
          {item.location && (
            <div className="card-location">📍 {item.location}</div>
          )}
        </div>
        <div className="card-year">{item.year}</div>
      </div>

      <div className="expanded-content">
        <p className="expanded-text">{item.expandedContent}</p>

        {item.image && (
          <div className="card-image">
            <img src={item.image} alt={item.title} />
          </div>
        )}

        {item.technologies && item.technologies.length > 0 && (
          <div className="card-technologies">
            {item.technologies.map((tech) => (
              <div key={tech.name} className="tech-badge">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="tech-icon"
                  style={{
                    filter: tech.color === "#000000" ? "invert(1)" : "none",
                  }}
                />
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        )}

        {item.link && (
          <a
            href={item.link}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <IconExternalLink size={16} />
            View
          </a>
        )}
      </div>

      <div className="expand-indicator">
        <IconChevronDown size={18} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      {/* Personal Introduction */}
      <section className="personal-intro">
        <div className="intro-card">
          <div className="intro-content">
            <div className="intro-header">
              <div className="name-and-photo">
                <div className="name-container">
                  <h1 className="first-name">Alan</h1>
                  <h1 className="last-name">Jones</h1>
                </div>
                <div className="profile-photo-container">
                  <img
                    src={profilePic}
                    alt={personalInfo.name}
                    className="profile-photo"
                  />
                </div>
              </div>
              <div className="intro-tagline">
                Building data-driven experiences for the modern web
              </div>
              <div className="intro-status-location">
                <div className="profile-status">
                  <div className="status-dot"></div>
                  <span>Open to work</span>
                </div>
                <div className="intro-location">📍 {personalInfo.location}</div>
              </div>
            </div>
            <p className="intro-bio">{personalInfo.bio}</p>
            <div className="intro-interests">
              {personalInfo.interests.map((interest, index) => (
                <span key={index} className="interest-tag">
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="intro-contacts">
            <a
              href="https://www.linkedin.com/in/almjones/"
              className="contact-btn linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/aljones1816"
              className="contact-btn github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandGithub size={20} />
              <span>GitHub</span>
            </a>
            <a href="mailto:me@alanjones.dev" className="contact-btn email">
              <IconMail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://blog.alanjones.dev"
              className="contact-btn blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconNews size={20} />
              <span>Blog</span>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-container">
        <div className="timeline-line"></div>

        {experiences.map((item) => (
          <div key={item.id} className="timeline-item">
            <div className={`timeline-node ${item.type}`}></div>
            <div className="timeline-content">
              <ExperienceCard item={item} />
            </div>
          </div>
        ))}

        {/* Floating Stats Card */}
        <StatsCard />
      </section>
    </div>
  );
}

export default App;
