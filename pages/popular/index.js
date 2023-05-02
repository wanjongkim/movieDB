import MovieCard from "../components/movieCard"
import TopNav from "../components/topNav"
import Filter from "../components/filter"

const Popular = (props) => {
    return (
        <div className="pb-10">
            <TopNav />
            <div className="max-w-screen-2xl px-10 pt-10" style={{margin: "0 auto"}}>
                <h1 className="font-normal text-3xl">Popular Movies</h1>
                <div className="flex mt-8">
                    <Filter />
                    <div className="flex flex-wrap gap-10 overflow-hidden" style={{border: "1px solid red"}}>
                        {
                            props.popular.map((movie) => {
                                return <MovieCard id={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} key={movie.id} minWidth={"240px"} width={"240"} height={"400"} minHeight={"460px"}/>
                            })
                        }
                        <div className="w-full bg-[#46acdb] flex justify-center py-4 rounded-xl" >
                            <button className="w-full text-white text-xl font-bold">Load More</button>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export async function getServerSideProps() {
    const data = await fetch(`${process.env.API_PATH}/api/popular`)
    const popular = await data.json();

    return {
        props: {
            popular
        }
    }
}

export default Popular;