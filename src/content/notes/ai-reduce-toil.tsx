tsx;
export const meta = {
  slug: "ai-makes-implementation-cheap",
  title: "AI Makes Implementation Cheap. Judgment Becomes More Important.",
  description:
    "AI can generate code remarkably well. The harder problem is deciding what should be built in the first place.",
  date: "2026-05-04",
  tags: ["ai", "architecture", "engineering"],
  draft: false,
  readingTime: "3 min",
};

export default function Article() {
  return (
    <>
      <p>
        One of the most surprising things about AI-assisted development is how
        quickly implementation stops being the bottleneck.
      </p>

      <p>
        Given a reasonably clear specification, modern models can generate
        working code, tests, documentation, infrastructure definitions, and
        migration plans at a pace that would have seemed absurd only a few years
        ago.
      </p>

      <p>
        The challenge is that AI is much better at optimizing within a frame
        than questioning the frame itself.
      </p>

      <p>
        If you ask an LLM how to make a system more reliable, it will generally
        assume that making the system more reliable is the correct goal. If you
        ask it how to scale an architecture, it will focus on scaling the
        architecture. What it usually won't do is ask whether the system or
        architecture should exist at all.
      </p>

      <h2>A well-engineered solution to the wrong problem</h2>

      <p>I ran into this during a platform modernization effort.</p>

      <p>
        We had an existing architecture built around orchestrators SSH'ing into
        long-lived EC2 hosts to execute workloads. There were plenty of
        legitimate engineering problems to solve within that model: retries,
        observability, deployment consistency, failure recovery, and operational
        complexity.
      </p>

      <p>
        AI was extremely effective at helping improve those areas. It could
        generate implementation plans, monitoring strategies, recovery
        workflows, and infrastructure changes with remarkable speed.
      </p>

      <p>The problem wasn't that the solutions were bad.</p>

      <p>The problem was that they were answers to the wrong question.</p>

      <p>We were asking, "How do we make SSH-based execution more reliable?"</p>

      <p>
        The more important question was, "Why are we still designing around
        SSH-based execution at all?"
      </p>

      <p>
        Once we challenged that assumption, an entirely different set of options
        became available. Instead of improving the machinery around long-lived
        hosts, we could move toward ephemeral compute, containerized workloads,
        and architectures that eliminated entire categories of operational
        concerns.
      </p>

      <h2>The bottleneck moved</h2>

      <p>
        Historically, implementation was expensive. A questionable architectural
        decision still had to survive weeks or months of engineering effort
        before it became reality.
      </p>

      <p>Today, implementation is increasingly cheap.</p>

      <p>
        That means teams can build a very well-engineered solution to the wrong
        problem much faster than before.
      </p>

      <p>
        The scarce skill is no longer writing code. It's framing problems,
        evaluating tradeoffs, and questioning assumptions.
      </p>

      <p>
        AI is remarkably good at helping execute a plan. It is much less
        reliable at telling you whether the plan is worth pursuing.
      </p>

      <p>
        As implementation gets cheaper, engineering judgment becomes more
        valuable, not less.
      </p>
    </>
  );
}
