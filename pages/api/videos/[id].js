

export default async function handler(req, res) {

    const {id} = req.query;

    const movie_api_path = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    const response = await fetch(movie_api_path);
    const data = await response.json();
    res.status(200).json(data.results);
}