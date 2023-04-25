import Head from 'next/head'
import MovieCard from './components/movieCard';
import styles from "../styles/Home.module.css"
import TopNav from './components/topNav';
import LatestTrailers from './components/latestTrailers';
import PopularMovies from './components/popularMovies';

export default function Home({trendingMovies, latestMovieTrailers, popular}) {

  return (
    <>
      <Head>
        <title>MoviesDB</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <TopNav />
        <main className='px-5 max-w-screen-xl' style={{margin: "0 auto"}}>
          <div className={[styles.searchbar, "h-80", "flex", "flex-col", "text-white", "px-10", "pt-20", "monterrat", ""].join(" ")} >
            <span>Welcome.</span>
            <span>Millions of movies, TV shows and people to discover. Explore now.</span>
            <form className='mt-6'>
              <input type="text" className="w-full h-12 mt-5 px-5 rounded-3xl outline-none" placeholder="Search for a movie, tv show, person..." />
            </form>
          </div>
          <div>
            <h1 className='mb-4 mt-6 font-semibold text-2xl monterrat'>Trending</h1>
          </div>
          <div className='flex justify-center'>
            <div className='max-w-screen-2xl flex flex-row overflow-x-auto gap-x-5 gap-y-5 pb-10'>
              {
                trendingMovies.length <= 0 ? <></> : (
                  trendingMovies.map((movie) => {
                    return <MovieCard id={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} key={movie.id}/>
                  })
                )
              }
            </div>
          </div>
          <LatestTrailers latestMovieTrailers={latestMovieTrailers}/>
          <PopularMovies popular={popular}/>
        </main>
      </div>
    </>
  )

}

export async function getServerSideProps() {
    const trendingResponse = await fetch(`${process.env.API_PATH}/api/trending`);
    const trendingMovies = await trendingResponse.json();
    
    const latestMovies = await fetch(`${process.env.API_PATH}/api/latest_movie_trailers`);
    const latestMoviesData = await latestMovies.json();
    const latestMovieTrailers = [];

    async function getTrailer(latestMoviesData) {
      for(var i=0; i<latestMoviesData.length; i++) {
        
        const latestMoviesVideos = await fetch(`${process.env.API_PATH}/api/videos/${latestMoviesData[i].id}`)
        const videosData = await latestMoviesVideos.json();
        
        for(var j=0; j<videosData.length; j++) {
          if(videosData[j].type === "Trailer" && videosData[j].site === "YouTube" && videosData[j].official === true) {
            latestMovieTrailers.push({
              id: latestMoviesData[i].id,
              bg: latestMoviesData[i].backdrop_path,
              videoKey: videosData[j].key,
              original_title: latestMoviesData[i].title,
              type: videosData[j].type,
            });
            break;
          }
        }
      }
    }
    await getTrailer(latestMoviesData);
    
    const data = await fetch(`${process.env.API_PATH}/api/popular`)
    const popular = await data.json();

    return {
      props: {
        trendingMovies,
        latestMovieTrailers: latestMovieTrailers,
        popular: popular
      }
    }
}
