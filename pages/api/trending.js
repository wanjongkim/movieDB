// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`;
  const response = await fetch(URL);
  const data = await response.json();
  res.status(200).json(data.results)
}
