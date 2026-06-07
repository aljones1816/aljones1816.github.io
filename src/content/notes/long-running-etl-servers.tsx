export const meta = {
  slug: "long-running-etl-servers",
  title: "Why We Moved Away From Long-Running ETL Servers",
  description:
    "Long-running servers quietly accumulate operational risk. Ephemeral workloads make ownership, recovery, and security much clearer.",
  date: "2026-05-18",
  tags: ["infrastructure", "modernization", "reliability"],
  draft: false,
  readingTime: "5 min",
};

export default function Article() {
  return (
    <>
      <p>
        The server had been running continuously for three years. At some point,
        someone had added a cron job directly to the host to handle a one-off
        data fix. The Python version was pinned because upgrading it broke the
        Oracle client. Two engineers knew how to log into it. One of them no
        longer worked there.
      </p>
      <p>
        This is not an unusual story. Long-running ETL servers tend to
        accumulate exactly this kind of invisible complexity. They start as a
        reasonable deployment choice and slowly become systems that nobody fully
        understands and everyone is afraid to touch.
      </p>

      <h2>What long-running servers get wrong over time</h2>
      <p>
        The problem is not the initial setup. A dedicated server running ETL
        jobs is a reasonable starting point. The problem is what happens over
        months and years of operational use.
      </p>
      <p>
        Configuration drift sets in. Jobs get added directly to the host. Cron
        entries pile up without documentation. A dependency gets pinned to avoid
        a breakage and the pin is never revisited. The host accumulates state
        that is not captured in any configuration management system — it only
        exists on the machine itself.
      </p>
      <p>
        Eventually the server becomes what engineers call a snowflake: a unique,
        hand-crafted system that cannot be reproduced from code. You cannot spin
        up a second one and expect it to behave the same way. You cannot rebuild
        it from scratch with confidence. Any change carries risk, because you
        don't fully know what's running.
      </p>

      <h2>Operational and security pain</h2>
      <p>
        Recovery on a snowflake server is slow. When a job fails, you SSH into
        the box, find the log file, try to understand what state the job was in
        when it stopped, manually determine what cleanup is needed, and then
        decide whether it's safe to restart. Every incident requires someone who
        knows the system — and that knowledge is tribal, not documented.
      </p>
      <p>
        Patching is its own risk. Applying OS updates or rotating credentials on
        a long-running host means potentially breaking something that was in a
        fragile but functional state. Teams defer patches. Security debt
        accumulates. When you finally have to patch, you don't know what you're
        going to break.
      </p>
      <p>
        Access control gets messy too. A shared server running dozens of jobs
        means broad permissions. If the server's credentials are compromised, a
        lot of systems are exposed. Least-privilege is hard to enforce when
        everything runs on one host with one identity.
      </p>

      <h2>Why ephemeral workloads help</h2>
      <p>
        The shift to containerized, ephemeral tasks solves most of these
        problems at the infrastructure level. Each job run spins up a fresh
        container, executes, and exits. There is no persistent state on the
        compute side — state lives in the database, the queue, or the object
        store, where it belongs.
      </p>
      <p>
        This changes the recovery model entirely. A failed task is just a
        failed task. You don't need tribal knowledge to understand what state
        the container was in — it's gone. You retry the task, a new container
        starts fresh, and it picks up from where the data says it left off. The
        recovery logic lives in the platform, not in someone's head.
      </p>
      <p>
        Security becomes much cleaner. Each task can run with a scoped IAM role
        or service identity that grants only what that specific job needs. There
        is no shared server credential. Compromise of one job's identity doesn't
        expose everything else.
      </p>
      <p>
        Patching the runtime is trivial — you update the container image and
        redeploy. The next execution uses the new image automatically. No
        change freeze. No SSH. No prayer.
      </p>

      <h2>Tradeoffs and what still needs care</h2>
      <p>
        Ephemeral execution does not eliminate complexity. It moves it.
      </p>
      <p>
        Cold starts add latency. If your jobs are very short-lived and
        high-frequency, container overhead matters. Workloads with tight latency
        requirements need to account for startup time in their architecture.
      </p>
      <p>
        State management becomes more important, not less. If compute is
        disposable, the state that tells you where you left off has to live
        somewhere reliable and queryable. Designing that state model carefully
        is a prerequisite for the whole approach to work.
      </p>
      <p>
        Observability also needs deliberate investment. With a single server,
        all your logs are in one place. With containerized tasks running at
        scale, you need structured logging, centralized aggregation, and clear
        correlation between task runs and their outputs. The visibility doesn't
        come for free — but the tools to build it are much better than they used
        to be.
      </p>

      <h2>Make execution disposable, make state durable</h2>
      <p>
        The shift from long-running servers to ephemeral containers is not
        primarily a technology choice. It is an architectural principle: compute
        should be replaceable, and state should be explicit, queryable, and
        owned.
      </p>
      <p>
        When you design toward that principle, you get recovery for free. You
        get better security as a side effect. You get a platform that new
        engineers can understand without needing to inherit years of tribal
        knowledge.
      </p>
      <p>
        The server that has been running for three years is not a success story.
        It's technical debt that has been deferred long enough to become
        invisible.
      </p>
    </>
  );
}
