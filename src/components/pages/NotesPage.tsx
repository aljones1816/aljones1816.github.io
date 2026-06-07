import { useState } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from "@tabler/icons-react";
import { publishedNotes } from "../../content/registry";
import "../../styles/notes.css";

export default function NotesPage() {
  const allNotes = publishedNotes();
  const allTags = Array.from(new Set(allNotes.flatMap(n => n.meta.tags))).sort();
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? allNotes.filter(n => n.meta.tags.includes(activeTag))
    : allNotes;

  return (
    <div className="page notes-page">
      <div className="page-inner">
        <div className="page-header">
          <h1 className="page-title">Notes</h1>
          <p className="page-subtitle">
            Short essays on data platforms, architecture, operations, and
            AI-assisted engineering.
          </p>
        </div>

        <div className="tag-filter">
          <button
            className={`tag-btn ${!activeTag ? "active" : ""}`}
            onClick={() => setActiveTag(null)}
          >
            all
          </button>
          {allTags.map(t => (
            <button
              key={t}
              className={`tag-btn ${activeTag === t ? "active" : ""}`}
              onClick={() => setActiveTag(activeTag === t ? null : t)}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="notes-list">
          {filtered.map(n => (
            <Link key={n.meta.slug} to={`/notes/${n.meta.slug}`} className="note-row">
              <div className="note-row-meta">
                <span className="note-date">{n.meta.date}</span>
                <span className="note-reading-time">{n.meta.readingTime}</span>
              </div>
              <div className="note-row-content">
                <h2 className="note-title">{n.meta.title}</h2>
                <p className="note-desc">{n.meta.description}</p>
                <div className="note-tags">
                  {n.meta.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
              <span className="note-arrow"><IconArrowRight size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
