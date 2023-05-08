const latestMovieTrailers_api_path = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
const trending_api_path = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`;
const popular_api_path = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
const movie_api_path = 'https://api.themoviedb.org/3/movie/'
const playing_api_path = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
const upcoming_api_path = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
const top_rated_api_path = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;

export default async function handler(req, res) {

    const {tmdbData} = req.query;
    var api_path = '';

    switch(tmdbData) {
        case 'latest_movie_trailers': {
            api_path = latestMovieTrailers_api_path;
            break;
        }
        case 'trending': {
            api_path = trending_api_path;
            break;
        }
        case 'popular': {
            api_path = popular_api_path;
            break;
        }
        case 'playing': {
            api_path = playing_api_path;
            break;
        }
        case 'upcoming': {
            api_path = upcoming_api_path;
            break;
        }
        case 'top-rated': {
            api_path = top_rated_api_path;
            break;
        }
        case 'movie': {
            api_path = movie_api_path + req.query.id + `?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos,images,credits,keywords,recommendations,reviews`
            const response = await fetch(api_path);
            const data = await response.json();
            res.status(200).json(data);
            return;
        }
        default: {
            break;
        }
    }

    if(api_path !== '') {
        const response = await fetch(api_path);
        const data = await response.json();
        res.status(200).json(data.results);
    }
    else {
        return;
    }
}