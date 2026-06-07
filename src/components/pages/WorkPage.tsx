import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { caseStudies } from "../../assets/content";
import "../../styles/work.css";

function CaseStudyCard({ study }: { study: typeof caseStudies[number] }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      className={`case-study-card ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="case-study-header">
        <h3 className="case-study-title">{study.title}</h3>
        <span className="case-study-chevron"><IconChevronDown size={17} /></span>
      </div>
      <p className="case-study-desc">{study.description}</p>
      <div className="case-study-bullets">
        <ul>
          {study.bullets.map(b => <li key={b}>{b}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="page work-page">
      <div className="page-inner">
        <div className="page-header">
          <h1 className="page-title">Selected Work</h1>
          <p className="page-subtitle">
            High-level case studies from enterprise data platform work. Details
            are kept generic to protect confidential employer information.
          </p>
        </div>
        <div className="case-studies-list">
          {caseStudies.map(s => <CaseStudyCard key={s.id} study={s} />)}
        </div>
      </div>
    </div>
  );
}
