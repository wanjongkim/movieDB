const latestMovieTrailers_api_path = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`;
const trending_api_path = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_API_KEY}`;
const popular_api_path = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=`
const movie_api_path = 'https://api.themoviedb.org/3/movie/'
const playing_api_path = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=`;
const upcoming_api_path = `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=`;
const top_rated_api_path = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=`;

const genresList = [{
    "action": "28",
    "adventure": "12",
    "animation": "16",
    "comedy": "35",
    "crime": "80",
    "documentary": "99",
    "drama": "18",
    "family": "10751",
    "fantasy": "14",
    "history": "36",
    "horror": "27",
    "music": "10402",
    "mystery": "9648",
    "romance": "10749",
    "science-fiction": "878",
    "tv-movie": "10770",
    "thriller": "53",
    "war": "10752",
    "western": "37"
}]

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
            api_path = popular_api_path + req.query.page;
            break;
        }
        case 'playing': {
            api_path = playing_api_path + req.query.page;
            break;
        }
        case 'upcoming': {
            api_path = upcoming_api_path + req.query.page;
            break;
        }
        case 'top-rated': {
            api_path = top_rated_api_path + req.query.page;
            break;
        }
        case 'movie': {
            api_path = movie_api_path + req.query.id + `?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos,images,credits,keywords,recommendations,reviews`
            const response = await fetch(api_path);
            const data = await response.json();
            res.status(200).json(data);
            return;
        }
        case 'filter': {
            const page = req.query.page;
            const genre = req.query.genre;
            const sort = req.query.sort;
            const discover_api_path = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&with_watch_monetization_types=flatrate&page=${page}`
            api_path = discover_api_path + req.query.page;

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