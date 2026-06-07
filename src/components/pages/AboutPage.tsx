import { IconMail, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { personalInfo, skillGroups } from "../../assets/content";
import profilePic from "../../assets/me.jpeg";
import "../../styles/about.css";

export default function AboutPage() {
  return (
    <div className="page about-page">
      <div className="page-inner">

        <div className="about-profile">
          <img src={profilePic} alt={personalInfo.name} className="about-photo" />
          <div className="about-header-text">
            <h1 className="page-title">{personalInfo.name}</h1>
            <p className="about-title-line">{personalInfo.title}</p>
            <p className="about-location">📍 {personalInfo.location}</p>
            <div className="about-contact-links">
              <a href={`mailto:${personalInfo.email}`} className="about-link">
                <IconMail size={16} />{personalInfo.email}
              </a>
              <a href={personalInfo.github} className="about-link" target="_blank" rel="noopener noreferrer">
                <IconBrandGithub size={16} />GitHub
              </a>
              <a href={personalInfo.linkedin} className="about-link" target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin size={16} />LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="about-rule" />

        <div className="about-bio-section">
          {personalInfo.bio.split(". ").reduce<string[][]>((acc, s, i) => {
            const groupIndex = Math.floor(i / 3);
            if (!acc[groupIndex]) acc[groupIndex] = [];
            acc[groupIndex].push(s);
            return acc;
          }, []).map((sentences, i) => (
            <p key={i} className="about-bio-para">
              {sentences.join(". ").trim()}{sentences[sentences.length - 1].endsWith(".") ? "" : "."}
            </p>
          ))}
        </div>

        <div className="about-rule" />

        <section className="about-section">
          <h2 className="about-section-heading">Education</h2>
          <ul className="about-education">
            {personalInfo.education.map(e => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </section>

        <div className="about-rule" />

        <section className="about-section">
          <h2 className="about-section-heading">Technical Skills</h2>
          <div className="about-skills-grid">
            {skillGroups.map(group => (
              <div key={group.label} className="about-skill-group">
                <h3 className="about-skill-label">{group.label}</h3>
                <div className="skill-tags">
                  {group.skills.map(s => (
                    <span key={s} className="skill-tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
