import MovieCard from "../pages/components/movieCard";

const PopularMovies = ({popular}) => {
    return (
        <>
            <div className="ml-3 md:ml-0">
                <h1 className='mb-4 mt-6 font-semibold text-2xl monterrat'>What's Popular</h1>
            </div>
            <div className='ml-3 md:ml-0 flex justify-center'>
                <div className='max-w-screen-2xl flex flex-row overflow-x-auto gap-x-5 gap-y-5 pb-10 pl-1'>
                {
                    popular.length <= 0 ? <></> : (
                        popular.map((movie) => {
                            return <MovieCard poster_path={movie.poster_path} title={movie.title} id={movie.id} release_date={movie.release_date} key={movie.id} width={"160"} height={"200"} minHeight={"380px"}/>
                        })
                    )
                }
                </div>
            </div>
        </>
    );
}

export default PopularMovies;