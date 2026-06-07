import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import { principles } from "../../assets/content";
import "../../styles/principles.css";

export default function PrinciplesPage() {
  return (
    <div className="page principles-page">
      <div className="page-inner">
        <div className="page-header">
          <h1 className="page-title">Engineering Principles</h1>
          <p className="page-subtitle">
            Things I've found to be reliably true when designing, operating, and
            modernizing data platforms.
          </p>
        </div>
        <div className="principles-list">
          {principles.map(p => (
            <div key={p.number} className="principle-card">
              <span className="principle-num">{p.number}</span>
              <div className="principle-content">
                <h2 className="principle-title">{p.title}</h2>
                <p className="principle-body">{p.body}</p>
                {p.relatedSlug && (
                  <Link to={`/notes/${p.relatedSlug}`} className="principle-link">
                    related note <IconArrowRight size={13} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
