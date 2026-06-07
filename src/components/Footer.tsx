import { useState, useEffect, useRef, useCallback } from "react";
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconGitBranch } from "@tabler/icons-react";
import { personalInfo } from "../assets/content";

interface FormattedCommit {
  hash: string;
  message: string;
  date: string;
  repo: string;
}

function CommitActivity() {
  const [showCommits, setShowCommits] = useState(false);
  const [commits, setCommits] = useState<FormattedCommit[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalCommits, setTotalCommits] = useState(0);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const formatDate = useCallback((dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  }, []);

  const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/api/github-events`);
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setCommits(json.commits.map((c: FormattedCommit) => ({ ...c, date: formatDate(c.date) })));
      setTotalCommits(json.totalCount);
    } catch {
      setTotalCommits(350);
    }
  }, [formatDate, API_BASE]);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (isTouchDevice && isMobileModalOpen && modalRef.current && !modalRef.current.contains(e.target as Node))
        setIsMobileModalOpen(false);
    };
    if (isMobileModalOpen) {
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
  }, [isMobileModalOpen, isTouchDevice]);

  useEffect(() => {
    setLoading(true);
    fetchData().finally(() => setLoading(false));
  }, [fetchData]);

  const handleMouseEnter = () => {
    if (!isTouchDevice) {
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      setShowCommits(true);
    }
  };
  const handleMouseLeave = () => {
    if (!isTouchDevice)
      hideTimeoutRef.current = setTimeout(() => setShowCommits(false), 300);
  };

  return (
    <div
      className="commit-activity"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => isTouchDevice && setIsMobileModalOpen(!isMobileModalOpen)}
    >
      <IconGitBranch size={14} />
      <span>{loading ? "…" : `${totalCommits.toLocaleString()}+`} commits this year</span>

      {(showCommits || isMobileModalOpen) && (
        <div ref={modalRef} className="commit-modal">
          <div className="commit-modal-header">
            <span>Recent Commits</span>
            <span className="commit-count">{commits.length} shown</span>
          </div>
          <div className="commit-list">
            {loading ? (
              <div className="commit-loading">fetching commits…</div>
            ) : (
              commits.map((c, i) => (
                <div key={i} className="commit-item">
                  <div className="commit-hash">#{c.hash}</div>
                  <div className="commit-content">
                    <div className="commit-message">{c.message}</div>
                    <div className="commit-meta">
                      <span className="commit-repo">{c.repo}</span>
                      <span className="commit-date">{c.date}</span>
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

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-links">
          <a href={`mailto:${personalInfo.email}`} className="footer-link">
            <IconMail size={15} /><span>{personalInfo.email}</span>
          </a>
          <a href={personalInfo.github} className="footer-link" target="_blank" rel="noopener noreferrer">
            <IconBrandGithub size={15} /><span>GitHub</span>
          </a>
          <a href={personalInfo.linkedin} className="footer-link" target="_blank" rel="noopener noreferrer">
            <IconBrandLinkedin size={15} /><span>LinkedIn</span>
          </a>
          <CommitActivity />
        </div>
        <p className="footer-meta">📍 {personalInfo.location} &nbsp;·&nbsp; Designed and built by Alan Jones.</p>
      </div>
    </footer>
  );
}
