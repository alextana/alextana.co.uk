import { json } from '@sveltejs/kit'

export async function GET() {
  const clientID = import.meta.env.VITE_GITHUB_CLIENT_ID
  const clientSecret = import.meta.env.VITE_GITHUB_CLIENT_SECRET
  const requestURL = `https://api.github.com/users/alextana/repos?per_page=8&sort=created&type=owner`
  const res = await fetch(
    requestURL, {
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(clientID + ':' + clientSecret).toString('base64'))
    }
  })

  const repos = await res.json()

  return json(repos)
}