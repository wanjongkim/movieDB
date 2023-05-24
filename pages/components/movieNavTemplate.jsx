import { useEffect, useState } from "react";
import Filter from "./filter";
import MovieCard from "./movieCard";
import TopNav from "./topNav";

const MovieNavTemplate = ({ data, title, type }) => {

    let page = 1;
    
    const [movies, setMovies] = useState(data)
    const [pageNum, setPageNum] = useState(1);

    const loadMore = async () => {
        const api_url = `/api/${type}?page=${pageNum+1}`
        const fetchData = await fetch(api_url)
        const newData = await fetchData.json();
        setMovies([...movies, ...newData])
        setPageNum(pageNum + 1)
    }

    const dummyFunction = (sortedMovies) => {
        setMovies(sortedMovies);
    }

    return (
        <div className="pb-10">
            <TopNav />
            <div className="max-w-screen-2xl px-10 pt-10" style={{margin: "0 auto"}}>
                <h1 className="font-normal text-3xl text-center lg:text-start">{title}</h1>
                <div className="flex flex-col lg:flex-row items-center lg:items-start mt-8">
                    <Filter movies={movies} setMovies={setMovies} dummy={dummyFunction}/>
                    <div className="flex justify-center flex-wrap gap-5" >
                        {
                            
                            movies.map((movie, index) => {
                                return movie.poster_path === null ? <></> : <MovieCard id={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} key={movie.id} minWidth={"240px"} width={"240"} height={"400"} minHeight={"460px"}/>
                            })
                            
                        }
                        <div className="break">
                            
                        </div>
                        <button className="min-w-[240px] bg-[#46acdb] py-4 rounded-xl" onClick={loadMore}>
                            <div className="text-white text-xl font-bold" >
                                Load More
                            </div>
                        </button>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default MovieNavTemplate;