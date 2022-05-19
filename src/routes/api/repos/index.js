export async function get() {

  const clientID = import.meta.env.VITE_GITHUB_CLIENT_ID
  const clientSecret = import.meta.env.VITE_GITHUB_CLIENT_SECRET

  const requestURL = `https://api.github.com/users/alextana/repos?client-id=${clientID}&client-secret=${clientSecret}&per_page=6&sort=created&type=owner`
  const res = await fetch(
    requestURL,
  )

  console.log(clientID, clientSecret)

  const repos = await res.json()

  return {
    status: 200,
    body: repos,
  }
}