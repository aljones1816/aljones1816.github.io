import { Link } from "react-router-dom";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconArrowRight } from "@tabler/icons-react";
import { personalInfo, principles, impactMetrics } from "../../assets/content";
import { publishedNotes } from "../../content/registry";
import profilePic from "../../assets/me.jpeg";
import "../../styles/home.css";

function WinTitlebar({ title }: { title: string }) {
  return (
    <div className="win-titlebar" aria-hidden="true">
      <span className="win-titlebar-icon">▣</span>
      <span className="win-titlebar-title">{title}</span>
      <div className="win-titlebar-btns">
        <span className="win-btn">_</span>
        <span className="win-btn">□</span>
        <span className="win-btn">×</span>
      </div>
    </div>
  );
}

function ArticleCard({ meta }: { meta: ReturnType<typeof publishedNotes>[number]["meta"] }) {
  return (
    <Link to={`/notes/${meta.slug}`} className="article-card">
      <div className="article-card-inner">
        <WinTitlebar title={meta.slug.toUpperCase() + ".TXT"} />
        <div className="article-card-body">
          <div className="article-card-tags">
            {meta.tags.slice(0, 2).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
            <span className="article-card-meta">{meta.date} · {meta.readingTime}</span>
          </div>
          <h3 className="article-card-title">{meta.title}</h3>
          <p className="article-card-desc">{meta.description}</p>
          <span className="article-card-read">open <IconArrowRight size={12} /></span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const featured = publishedNotes().slice(0, 3);

  return (
    <div className="page home-page">

      {/* Hero window */}
      <section className="hero-section">
        <div className="hero-inner">
          <div className="win-window hero-window">
            <WinTitlebar title="ALAN_JONES.EXE" />
            <div className="win-body hero-body">
              <div className="hero-profile">
                <img src={profilePic} alt={personalInfo.name} className="hero-photo" />
                <div className="hero-text">
                  <div className="hero-meta">C:\USERS\ALAN&gt; whoami</div>
                  <h1 className="hero-name">
                    {personalInfo.name}
                    <span className="hero-cursor" aria-hidden="true" />
                  </h1>
                  <h2 className="hero-title">{personalInfo.title}</h2>
                  <p className="hero-copy">{personalInfo.heroCopy}</p>
                </div>
              </div>
              <div className="hero-ctas">
                <a href={`mailto:${personalInfo.email}`} className="cta-btn cta-email">
                  <IconMail size={14} /><span>Email</span>
                </a>
                <a href={personalInfo.github} className="cta-btn cta-github" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub size={14} /><span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} className="cta-btn cta-linkedin" target="_blank" rel="noopener noreferrer">
                  <IconBrandLinkedin size={14} /><span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured notes */}
      <section className="home-section">
        <div className="section-inner">
          <div className="section-header-row">
            <h2 className="section-label">► LATEST_NOTES</h2>
            <Link to="/notes" className="section-more">VIEW ALL <IconArrowRight size={12} /></Link>
          </div>
          <p className="section-subtext">Short essays on data platforms, architecture, operations, and AI-assisted engineering.</p>
          <div className="article-cards-grid">
            {featured.map(n => <ArticleCard key={n.meta.slug} meta={n.meta} />)}
          </div>
        </div>
      </section>

      {/* Impact strip */}
      <section className="home-section metrics-section">
        <div className="section-inner">
          <h2 className="section-label">► BY_THE_NUMBERS</h2>
          <div className="metrics-strip">
            {impactMetrics.map(m => (
              <div key={m.label} className="metric-tile">
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
          <Link to="/work" className="section-more" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
            VIEW CASE STUDIES <IconArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Principles teaser */}
      <section className="home-section">
        <div className="section-inner">
          <div className="section-header-row">
            <h2 className="section-label">► ENGINEERING_PRINCIPLES</h2>
            <Link to="/principles" className="section-more">VIEW ALL <IconArrowRight size={12} /></Link>
          </div>
          <div className="principles-teaser">
            {principles.slice(0, 3).map(p => (
              <div key={p.number} className="principle-teaser-row">
                <span className="principle-number">{p.number}</span>
                <div>
                  <strong className="principle-title">{p.title}</strong>
                  <p className="principle-body">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
