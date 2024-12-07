import express from 'express';
import fetch from 'node-fetch';

const app = express();
app.use(express.json());

async function getGithubRepos(username) {
  const url = `https://api.github.com/users/${username}/repos?per_page=5&sort=created&direction=asc&lang=c%23`;

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

app.get('/getdata/:username', async (req, res) => {
  const { username } = req.params;

  try {
    const repos = await getGithubRepos(username);
    res.json(repos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

app.listen(3000, () => console.log('Server listening on port 3000'));