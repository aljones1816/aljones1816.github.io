export const meta = {
  slug: "ai-reduce-toil",
  title: "AI Should Reduce Toil, Not Engineering Judgment",
  description:
    "AI-assisted engineering is most useful when it strengthens existing engineering practices: testing, review, documentation, migration.",
  date: "2026-05-04",
  tags: ["ai", "engineering-practices", "workflow"],
  draft: false,
  readingTime: "5 min",
};

export default function Article() {
  return (
    <>
      <p>
        The tempting frame is: AI writes code, engineers review it. Ship faster,
        think less. But that frame quietly shifts engineering responsibility in a
        direction that tends to end badly.
      </p>
      <p>
        AI-assisted development is genuinely useful. We've used it to
        accelerate work that would have taken months and compressed it into
        weeks. But the usefulness came from using it in specific ways — not as a
        replacement for judgment, but as a tool that makes disciplined
        engineering faster.
      </p>

      <h2>Where the wrong model leads</h2>
      <p>
        When teams adopt AI tools without a clear model for how to use them,
        what tends to happen is this: engineers stop reviewing code as carefully
        because "the AI checked it." Test coverage drops because "the AI will
        catch issues." Architectural decisions get deferred because "we can
        always refactor with AI later."
      </p>
      <p>
        Each of these choices feels like an efficiency gain. Most of them are
        actually discipline losses. And unlike individual bugs, discipline losses
        compound quietly. You don't notice them until something goes wrong at a
        scale that makes them obvious.
      </p>
      <p>
        The specific failure mode I worry about is this: AI tools are good at
        producing code that looks correct. They are not good at understanding
        whether the code is correct for your specific system, your specific data
        contracts, your specific failure modes, or your specific operational
        context. That understanding still has to come from the engineer. If the
        engineer has been trained to trust the output rather than evaluate it,
        the confidence gap between "looks right" and "is right" grows.
      </p>

      <h2>Where AI has been genuinely useful</h2>
      <p>
        The highest-value uses we've found are in work that is repetitive,
        well-defined, and tedious — exactly the category where engineers are
        most likely to make mistakes from fatigue or inattention.
      </p>
      <p>
        <strong>Migration work</strong> is the clearest example. Moving 300+
        ingestion pipelines from a legacy framework to a new one involves
        applying the same transformation pattern to hundreds of similar files.
        The pattern is knowable and describable. The work is important but not
        intellectually interesting. AI tools can execute this kind of migration
        at a pace no team of engineers can match — and because the output is
        reviewed against a known pattern, the review process is fast and
        structured.
      </p>
      <p>
        <strong>Test generation</strong> is valuable for a different reason.
        When you ask an AI to generate tests for a function, you have to specify
        what correct behavior looks like. That forcing function — describing
        expected outputs, edge cases, and failure modes precisely enough for a
        test to capture them — often reveals gaps in your own understanding of
        the system. The tests are useful. The act of specifying them is often
        more useful.
      </p>
      <p>
        <strong>PR review assistance</strong> works well as a first pass. Not
        as a replacement for human review, but as a way to catch the obvious
        things — missing error handling, inconsistent naming, broken logging
        patterns — before the human reviewer spends time on them. It raises the
        floor, which makes the human review more focused.
      </p>
      <p>
        <strong>Documentation</strong> is one of the easiest wins. Generating
        docstrings, README sections, runbook drafts, and inline comments from
        code is exactly the kind of structured, pattern-following work where AI
        output is reliable enough to edit rather than write from scratch.
      </p>

      <h2>The guardrails that matter</h2>
      <p>
        Useful AI-assisted workflows need some structure around them. In
        practice, the things that matter most are access controls, review
        requirements, and scope.
      </p>
      <p>
        Access controls determine what the tool can touch. We give AI agents
        read access to code and narrow read access to infrastructure for context
        — not write access to production systems, not credentials, not anything
        that could cause side effects outside the developer's local environment.
        The boundary between "AI can look at this" and "AI can change this" has
        to be explicit and enforced.
      </p>
      <p>
        Review requirements mean that AI-generated output goes through the same
        review process as human-written code. No exceptions. The fact that AI
        produced it is not a reason to trust it more — it is, if anything, a
        reason to review it with more specific attention to correctness at the
        boundaries.
      </p>
      <p>
        Scope means being clear about what problem the tool is solving. AI
        assistance during migration, test writing, or documentation is
        well-defined. "Use AI for architecture decisions" is not.
      </p>

      <h2>AI should increase rigor, not bypass it</h2>
      <p>
        The teams I've seen use AI tools well are the ones where engineering
        standards were already strong. They use AI to move faster within those
        standards — not to lower the bar.
      </p>
      <p>
        When we introduced AI-assisted migration tooling, the first thing we did
        was define what a correct migration looked like. We wrote tests. We
        reviewed output systematically. We built a checklist. The AI did not
        replace any of that — it accelerated the parts that were mechanical,
        which freed up time for the parts that required judgment.
      </p>
      <p>
        That is the model that holds up. Not AI as engineer, but AI as a tool
        that makes disciplined engineers faster at the work that doesn't require
        them to think hard.
      </p>
    </>
  );
}
