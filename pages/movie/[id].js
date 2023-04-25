import Image from "next/image";
import TopNav from "../components/topNav";
import styles from "../../styles/Home.module.css"
import TopBilledCast from "../components/topBilledCast";

const Movie = (props) => {
    return (
        <div>
            <TopNav />
            <div className= {[styles.searchbar, 'bg-slate-100', 'text-white', 'mb-5'].join(" ")}>
                <div className="flex max-w-screen-xl min-w-screen-xl" style={{margin:"0 auto", width:"100%", height: "570px"}}>
                    <div className="ml-10 my-6 relative max-w-xs w-full">
                        {
                            props.image ? <Image src={props.image} alt="loading..." fill={true} priority={true}/> : <></>
                        }
                    </div>
                    <div className="my-6 pt-10 pl-8">
                        <div className="flex flex-col">
                            <h2 className="font-bold text-4xl">
                                {props.title}
                            </h2>
                            <h2 className="font-thin text-md mt-1">
                                {props.release_date} • {
                                    props.genres.map((genre, index) => {
                                        if(index === props.genres.length-1) {
                                            return genre.name
                                        }
                                        return genre.name + ", "
                                    })
                                } • {props.runtime} min
                            </h2>
                            <h2 className=" font-thin text-md italic text-[#dbdbdb] mt-2">{props.tagline}</h2>
                            <h2 className="text-2xl my-3 mt-10">Overview</h2>
                            <h2 className=" font-extralight text-md">{props.overview}</h2>
                            <div className="flex flex-row gap-x-20 gap-y-8 mt-7 flex-wrap">
                                
                                    {
                                        props.crew.map((person) => {
                                        return (
                                            <div>
                                                <h2 className=" font-semibold">
                                                    {person.name}
                                                </h2>
                                                <h2 className="font-thin">
                                                    {person.job}
                                                </h2>
                                            </div>
                                        )})
                                    }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-screen-xl pl-10" style={{margin: "0 auto"}}>
                <TopBilledCast cast={props.cast}/>
            </div>
        </div>
    )
}

export default Movie;

export async function getServerSideProps(context) {
    const {params} = context;
    const {id} = params;

    const data = await fetch(`${process.env.API_PATH}/api/movie?id=${id}`)
    const movieInfo = await data.json();
    const crew = [];
    movieInfo.credits.crew.forEach((person) => {
        if(person.job === "Director" || person.job === "Writer") {
            crew.push({
                name:person.name,
                job:person.job
            });
        }
    })
    //console.log(movieInfo)
    return {
        props: {
            image: 'https://www.themoviedb.org/t/p/original/' + movieInfo.poster_path,
            title: movieInfo.title,
            release_date: movieInfo.release_date,
            overview: movieInfo.overview,
            genres: movieInfo.genres,
            runtime: movieInfo.runtime,
            vote_average: movieInfo.vote_average,
            production_companies: movieInfo.production_companies,
            tagline: movieInfo.tagline,
            crew: crew,
            cast: movieInfo.credits.cast,
            revenue: movieInfo.revenue,
            budget: movieInfo.budget,
            status: movieInfo.status,
            original_language: movieInfo.original_language,
        }
    }
}