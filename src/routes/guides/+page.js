export async function load({ fetch }) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const guides = await res.json()

  if (res.ok) {
    return {
      props: {
        guides
      }
    }
  }
  return {
    status: res.status,
    error: new Error('could not fetch the guides')
  }
}