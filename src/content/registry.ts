import type { ComponentType } from "react";

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  draft: boolean;
  readingTime: string;
}

export interface ArticleEntry {
  meta: ArticleMeta;
  load: () => Promise<{ default: ComponentType }>;
}

// ─── Article registry ───────────────────────────────────────────────────────
// To add a new article:
//   1. Create src/content/notes/your-slug.tsx
//   2. Add an entry here following the same pattern
// ─────────────────────────────────────────────────────────────────────────────

export const notes: ArticleEntry[] = [
  {
    meta: {
      slug: "make-retries-safe",
      title: "Make Retries Safe",
      description:
        "Retries are not just an operational detail. In data platforms, unsafe retries create duplicates, hidden state, and late-night recovery work.",
      date: "2026-06-01",
      tags: ["reliability", "architecture", "operations"],
      draft: false,
      readingTime: "6 min",
    },
    load: () => import("./notes/make-retries-safe"),
  },
  {
    meta: {
      slug: "long-running-etl-servers",
      title: "Why We Moved Away From Long-Running ETL Servers",
      description:
        "Long-running servers quietly accumulate operational risk. Ephemeral workloads make ownership, recovery, and security much clearer.",
      date: "2026-05-18",
      tags: ["infrastructure", "modernization", "reliability"],
      draft: false,
      readingTime: "5 min",
    },
    load: () => import("./notes/long-running-etl-servers"),
  },
  {
    meta: {
      slug: "ai-makes-implementation-cheap",
      title: "AI Makes Implementation Cheap. Judgment Becomes More Important.",
      description:
        "AI can generate code remarkably well. The harder problem is deciding what should be built in the first place.",
      date: "2026-05-04",
      tags: ["ai", "architecture", "engineering"],
      draft: false,
      readingTime: "3 min",
    },
    load: () => import("./notes/ai-reduce-toil"),
  },
  {
    meta: {
      slug: "architecture-follows-ownership",
      title: "Architecture Follows Ownership",
      description:
        "Systems become easier to operate when team responsibilities match the shape of the architecture. Conway's Law as a design tool.",
      date: "2026-04-20",
      tags: ["architecture", "team-design", "platform"],
      draft: false,
      readingTime: "6 min",
    },
    load: () => import("./notes/architecture-follows-ownership"),
  },
];

export function getNoteBySlug(slug: string): ArticleEntry | undefined {
  return notes.find((n) => n.meta.slug === slug);
}

export function publishedNotes(): ArticleEntry[] {
  return notes
    .filter((n) => !n.meta.draft)
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
}
