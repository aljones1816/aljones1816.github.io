// Edit this file to update the article content.
// meta fields control the title, description, date, and tags shown on the site.

export const meta = {
  slug: "make-retries-safe",
  title: "Make Retries Safe",
  description:
    "Retries are not just an operational detail. In data platforms, unsafe retries create duplicates, hidden state, and late-night recovery work.",
  date: "2026-06-01",
  tags: ["reliability", "architecture", "operations"],
  draft: false,
  readingTime: "6 min",
};

export default function Article() {
  return (
    <>
      <p>
        It's 3 a.m. A pipeline failed at step four of twelve. The alert fired.
        Someone is now staring at a terminal, tired, trying to answer one
        question: <em>can I just click retry?</em>
      </p>
      <p>
        If the answer depends on which job it is, what time it failed, and
        whether it made it past the write step — you have a retry problem. Not
        an operations problem. A design problem.
      </p>

      <h2>The operational pain</h2>
      <p>
        In fragile ETL systems, retrying a failed job can make things worse. A
        job that crashed halfway through a batch insert might have written half
        the rows. Retrying it writes them again, and now your downstream
        analytics has duplicates. Or the job held a lock that wasn't released.
        Or it made an API call that already completed, and calling it again
        triggers a side effect you didn't expect.
      </p>
      <p>
        So engineers learn to be cautious. They investigate before retrying.
        They check for partial writes. They run cleanup scripts. They write
        runbooks. On-call becomes a manual data recovery practice, not an
        operational escalation system.
      </p>
      <p>
        This is expensive. Not just in engineer time — in confidence. When
        people don't trust retries, they slow down. Every failure becomes a
        potential incident. Deployments get riskier. Changes get smaller. The
        platform becomes brittle not because of any single failure, but because
        of accumulated caution.
      </p>

      <h2>Why naive retries are dangerous</h2>
      <p>
        The core problem is that most pipelines accumulate state in a way that
        is not safe to replay. They write incrementally without checkpointing.
        They call external systems without recording the call. They process
        records without tracking which ones have been handled. When something
        goes wrong, there is no clean answer to "where did we leave off?"
      </p>
      <p>
        Non-idempotent writes make this worse. If your job inserts rows into a
        table without checking for duplicates, retrying it inserts them twice.
        If it updates a counter, retrying updates it twice. The job completes
        successfully — and leaves behind corrupted data.
      </p>
      <p>
        The failure mode here is subtle. The job didn't fail on retry. It
        succeeded. That's the problem.
      </p>

      <h2>What safe retries require</h2>
      <p>
        Making retries safe is mostly a matter of three things: idempotency,
        durable execution state, and quarantine for bad data.
      </p>
      <p>
        <strong>Idempotency</strong> means that running a job more than once
        produces the same result as running it once. For data pipelines, this
        usually means writing with upsert semantics instead of appends, tracking
        processed records with a durable key, and making sure that any external
        calls are either safe to repeat or guarded against double execution.
      </p>
      <p>
        <strong>Durable execution state</strong> means that the platform knows
        what a job was doing and how far it got. When a job fails, there should
        be a record: what batch was being processed, what checkpoints were
        reached, what writes completed. That record should be queryable by the
        operator and used by the retry logic to pick up from the right place —
        not start over from scratch.
      </p>
      <p>
        <strong>Quarantine</strong> means that bad data should not block
        retries. If a batch contains a malformed record, the job should be able
        to isolate it, route it to a dead-letter store, and continue processing
        the rest. Operators can inspect and reprocess quarantined records
        separately, without touching the healthy pipeline.
      </p>

      <h2>What changed when retries became safe</h2>
      <p>
        When we rebuilt our ingestion framework around these principles, the
        practical difference was immediate. On-call incidents dropped sharply.
        Not because failures stopped happening — but because operators could
        handle them in minutes instead of hours. Click retry. The job picks up
        where it left off. No cleanup scripts. No manual row deletion. No
        investigation into whether the write completed.
      </p>
      <p>
        Engineers started deploying more confidently. Rollbacks became less
        scary. The platform felt stable in a different way — not because it
        never failed, but because failures were recoverable.
      </p>
      <p>
        There was a secondary effect too: visibility improved. When you track
        execution state seriously, you end up with a lot of useful data about
        what your pipelines are actually doing. Latency patterns. Failure
        distributions. Batch sizes over time. You start to see things you
        couldn't see before, because the instrumentation that makes retries safe
        also makes operations observable.
      </p>

      <h2>Design for recovery before failure happens</h2>
      <p>
        Safe retries are not an ops concern layered on top of a finished system.
        They are an architectural requirement that shapes how you write, how you
        track state, and how you handle partial failure. They have to be
        designed in — not retrofitted after the first bad incident.
      </p>
      <p>
        The question to ask when designing a pipeline is not "what happens when
        it succeeds?" It's "what happens when it fails halfway through, and
        someone runs it again?"
      </p>
      <p>
        If the answer is uncertain, that's the thing to fix first.
      </p>
    </>
  );
}
