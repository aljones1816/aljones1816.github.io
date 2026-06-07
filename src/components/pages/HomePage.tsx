import { Link } from "react-router-dom";
import { IconMail, IconBrandGithub, IconBrandLinkedin, IconArrowRight } from "@tabler/icons-react";
import { personalInfo, principles, impactMetrics } from "../../assets/content";
import { publishedNotes } from "../../content/registry";
import profilePic from "../../assets/me.jpeg";
import "../../styles/home.css";

function ArticleCard({ meta }: { meta: ReturnType<typeof publishedNotes>[number]["meta"] }) {
  return (
    <Link to={`/notes/${meta.slug}`} className="article-card">
      <div className="article-card-inner">
        <div className="article-card-body">
          <div className="article-card-tags">
            {meta.tags.slice(0, 2).map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
            <span className="article-card-meta">{meta.date} · {meta.readingTime}</span>
          </div>
          <h3 className="article-card-title">{meta.title}</h3>
          <p className="article-card-desc">{meta.description}</p>
          <span className="article-card-read">Read more <IconArrowRight size={12} /></span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const featured = publishedNotes().slice(0, 3);

  return (
    <div className="page home-page">

      <section className="hero-section">
        <div className="hero-inner">
          <img src={profilePic} alt={personalInfo.name} className="hero-photo" />
          <div className="hero-text">
            <p className="hero-meta">{personalInfo.location}</p>
            <h1 className="hero-name">
              {personalInfo.name}
              <span className="hero-cursor" aria-hidden="true" />
            </h1>
            <p className="hero-title">{personalInfo.title}</p>
            <p className="hero-copy">{personalInfo.heroCopy}</p>
            <div className="hero-ctas">
              <a href={`mailto:${personalInfo.email}`} className="cta-btn cta-email">
                <IconMail size={14} /><span>Email me</span>
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
      </section>

      <section className="home-section">
        <div className="section-inner">
          <div className="section-header-row">
            <h2 className="section-label">Latest notes</h2>
            <Link to="/notes" className="section-more">View all <IconArrowRight size={12} /></Link>
          </div>
          <p className="section-subtext">Short essays on data platforms, architecture, operations, and AI-assisted engineering.</p>
          <div className="article-cards-grid">
            {featured.map(n => <ArticleCard key={n.meta.slug} meta={n.meta} />)}
          </div>
        </div>
      </section>

      <section className="home-section metrics-section">
        <div className="section-inner">
          <h2 className="section-label">By the numbers</h2>
          <div className="metrics-strip" style={{ marginTop: "1rem" }}>
            {impactMetrics.map(m => (
              <div key={m.label} className="metric-tile">
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
          <Link to="/work" className="section-more" style={{ marginTop: "1.5rem", display: "inline-flex" }}>
            View case studies <IconArrowRight size={12} />
          </Link>
        </div>
      </section>

      <section className="home-section">
        <div className="section-inner">
          <div className="section-header-row">
            <h2 className="section-label">Engineering principles</h2>
            <Link to="/principles" className="section-more">View all <IconArrowRight size={12} /></Link>
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
