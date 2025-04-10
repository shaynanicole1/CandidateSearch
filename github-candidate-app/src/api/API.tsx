const GITHUB_URL = 'https://api.github.com/users';

export async function fetchGitHubUser(username: string) {
  const res = await fetch(`${GITHUB_URL}/${username}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error('GitHub user not found');
  }

  return await res.json();
}
