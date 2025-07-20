export default async function handler(req, res) {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  const response = await fetch(
    "https://api.github.com/users/aljones1816/events",
    {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "User-Agent": "MyVercelApp",
      },
    },
  );

  const data = await response.json();

  return res.status(response.status).json(data);
}
