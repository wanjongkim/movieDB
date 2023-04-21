const api_path = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;

export default async function handler(req, res) {
    const response = await fetch(api_path);
    const data = await response.json();
    res.status(200).json(data);
}