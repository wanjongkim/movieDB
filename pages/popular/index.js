import MovieCard from "../components/movieCard";
import TopNav from "../components/topNav";

const Popular = (props) => {
    return (
        <div>
            <TopNav />
            <div className="max-w-screen-2xl px-10 pt-10" style={{margin: "0 auto"}}>
                <h1 className=" font-normal text-3xl">Popular Movies</h1>
                <div className="flex mt-8">
                    <div className="flex flex-col max-w-screen-lg min-w-fit gap-y-3">
                        <div className="box_shadow">
                            sort
                        </div>
                        <div className="box_shadow">
                            where to watch
                        </div>
                        <div className="box_shadow">
                            filters
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-10">
                        {
                            props.popular.map((movie) => {
                                return <MovieCard id={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} key={movie.id}/>
                            })
                        }
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