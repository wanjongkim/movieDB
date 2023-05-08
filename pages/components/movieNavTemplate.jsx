import Filter from "./filter";
import MovieCard from "./movieCard";
import TopNav from "./topNav";

const MovieNavTemplate = ({ data, title }) => {
    return (
        <div className="pb-10">
            <TopNav />
            <div className="max-w-screen-2xl px-10 pt-10" style={{margin: "0 auto"}}>
                <h1 className="font-normal text-3xl">{title}</h1>
                <div className="flex mt-8">
                    <Filter />
                    <div className="flex justify-center flex-wrap gap-5" >
                        {
                            
                            data.map((movie, index) => {
                                return <MovieCard id={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} key={movie.id} minWidth={"240px"} width={"240"} height={"400"} minHeight={"460px"}/>
                            })
                            
                           
                        }
                        
                        <button className="min-w-[240px] bg-[#46acdb] py-4 rounded-xl">
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