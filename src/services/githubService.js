import fetch from 'node-fetch';

export async function getGithubRepos(username) {
  const url = `https://api.github.com/users/${username}/repos?per_page=10&sort=created&direction=asc`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': 'raylonf',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const repos = await response.json();
    return repos.filter((repo) => repo.language === 'C#');
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}