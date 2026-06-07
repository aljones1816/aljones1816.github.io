import { useState, useEffect, Suspense, ComponentType } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import { getNoteBySlug } from "../../content/registry";
import "../../styles/article.css";

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const entry = slug ? getNoteBySlug(slug) : undefined;

  const [ArticleComponent, setArticleComponent] = useState<ComponentType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!entry) return;
    setLoading(true);
    entry.load().then(mod => {
      setArticleComponent(() => mod.default);
      setLoading(false);
    });
  }, [entry]);

  if (!entry) return <Navigate to="/notes" replace />;

  const { meta } = entry;

  return (
    <div className="page article-page">
      <div className="article-inner">

        <Link to="/notes" className="back-link">
          <IconArrowLeft size={15} /> notes
        </Link>

        <header className="article-header">
          <div className="article-header-titlebar" aria-hidden="true">
            <span className="article-header-titlebar-icon">▣</span>
            <span className="article-header-titlebar-name">{meta.slug.toUpperCase()}.TXT</span>
            <div className="article-header-titlebar-btns">
              <span className="win-btn">_</span>
              <span className="win-btn">□</span>
              <span className="win-btn">×</span>
            </div>
          </div>
          <div className="article-header-body">
            <div className="article-header-meta">
              <span className="article-date">{meta.date}</span>
              <span className="article-sep">·</span>
              <span className="article-reading-time">{meta.readingTime}</span>
            </div>
            <h1 className="article-title">{meta.title}</h1>
            <p className="article-description">{meta.description}</p>
            <div className="article-tags">
              {meta.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </header>

        <div className="article-prose">
          {loading ? (
            <div className="article-loading">loading…</div>
          ) : ArticleComponent ? (
            <Suspense fallback={<div className="article-loading">loading…</div>}>
              <ArticleComponent />
            </Suspense>
          ) : null}
        </div>

        <div className="article-footer">
          <Link to="/notes" className="back-link">
            <IconArrowLeft size={15} /> back to notes
          </Link>
        </div>

      </div>
    </div>
  );
}
