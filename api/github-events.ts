export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://alanjones.dev");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end(); // Respond to preflight
  }

  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || "aljones1816";

  if (!token) {
    return res.status(200).json({
      totalCount: 350,
      commits: [
        {
          hash: "a7b3c2d",
          message: "feat: implement user authentication system",
          date: "2 hours ago",
          repo: "sojourness",
        },
        {
          hash: "f4e5d6a",
          message: "fix: resolve timeline rendering bug",
          date: "1 day ago",
          repo: "portfolio",
        },
        {
          hash: "2c8b9e1",
          message: "refactor: optimize database queries",
          date: "3 days ago",
          repo: "data-platform",
        },
        {
          hash: "9d5a1f2",
          message: "feat: add dark mode toggle",
          date: "1 week ago",
          repo: "react-components",
        },
        {
          hash: "6e2f7b8",
          message: "docs: update API documentation",
          date: "2 weeks ago",
          repo: "api-server",
        },
      ],
    });
  }

  try {
    const reposUrl = `https://api.github.com/users/${username}/repos`;

    const reposResponse = await fetch(reposUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    if (!reposResponse.ok) {
      throw new Error(`Failed to fetch repositories: ${reposResponse.status}`);
    }

    const repos = await reposResponse.json();
    const since = new Date(new Date().getFullYear(), 0, 1).toISOString();

    const recentCommits = [];
    let yearlyCommitCount = 0;
    const reposToCheck = repos.slice(0, 15);

    for (const repo of reposToCheck) {
      try {
        const commitsUrl = `https://api.github.com/repos/${username}/${repo.name}/commits?since=${since}&per_page=100`;

        const commitsResponse = await fetch(commitsUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json",
            "X-GitHub-Api-Version": "2022-11-28",
          },
        });

        if (commitsResponse.ok) {
          const commits = await commitsResponse.json();
          yearlyCommitCount += commits.length;

          for (const commit of commits.slice(0, 2)) {
            if (recentCommits.length < 5) {
              recentCommits.push({
                hash: commit.sha.slice(0, 7),
                message: commit.commit.message.split("\n")[0],
                date: commit.commit.author.date,
                repo: repo.name,
              });
            }
          }
        }
      } catch (err) {
        continue; // skip repo on error
      }

      if (recentCommits.length >= 5) break;
    }

    recentCommits.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return res.status(200).json({
      totalCount: yearlyCommitCount,
      commits: recentCommits.slice(0, 5),
    });
  } catch (err) {
    console.error("GitHub API error:", err);
    return res.status(500).json({ error: "Failed to fetch GitHub data" });
  }
}
