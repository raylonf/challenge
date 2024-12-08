import { getGithubRepos } from '../services/githubService.js';

export async function getUserRepos(req, res) {
  const { username } = req.params;

  try {
    const repos = await getGithubRepos(username);
    res.json(repos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
}