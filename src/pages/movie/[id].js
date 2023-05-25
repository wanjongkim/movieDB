import Image from "next/image";
import TopNav from "../components/topNav";
import styles from "../../styles/Home.module.css"
import TopBilledCast from "../../components/topBilledCast";
import Link from "next/link";

const Movie = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    });

    function getFormattedDate(date) {
        var year = date.getFullYear();
        
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return month + '/' + day + '/' + year;
    }
    let authorDate;
    if(props.reviews[0] !== undefined) {
        authorDate = getFormattedDate(new Date(props.reviews[0].created_at));
    }
    return (
        <div className="pb-20">
            <TopNav />
            <div className= {[styles.movie_backdrop, 'bg-slate-100', 'text-white', 'mb-5'].join(" ")} style={ props.backdrop_path != null ?{ backgroundImage: `url("https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)${props.backdrop_path}")`} : {}}>
                <div className="flex md:flex-row flex-col pb-10 max-w-screen-2xl justify-center align-center content-center" style={{margin:"0 auto", width:"100%"}}>
                    <div className="ml-10 mt-6 relative self-center max-w-xs w-full">
                        {
                            props.image ? <img src={props.image} alt="loading..." fill="true" priority="true"/> : <></>
                        }
                    </div>
                    <div className="pt-10 pl-8">
                        <div className="flex flex-col flex-wrap">
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
                                            <div key={person.name}>
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
            <div className="max-w-screen-2xl px-10" style={{margin: "0 auto"}}>
                <TopBilledCast cast={props.cast}/>
                <div className="flex gap-x-5 max-w-full flex-wrap">
                    <div>
                        <b>Status</b>
                        <p>{props.status}</p>
                    </div>
                    <div>
                        <b>Original Language</b>
                        <p>{props.original_language}</p>
                    </div>
                    <div>
                        <b>Budget</b>
                        <p>{props.budget <= 0 ? '-' : formatter.format(props.budget)}</p>
                    </div>
                    <div>
                        <b>Revenue</b>
                        <p>{
                        props.revenue <= 0 ? '-' : formatter.format(props.revenue)}</p>
                    </div>
                    <br/>
                
                </div>
                <div className="mt-6">
                    <b>Keywords</b>
                    <div className="flex flex-wrap gap-x-3 gap-y-3 mt-2">
                    {props.keywords.map((keyword, index) => {
                        return <h2 key={keyword.name} className="rounded-2xl bg-slate-400 px-2 py-1">{keyword.name}</h2>
                    })}
                    </div>
                </div>
            </div>
            <div className="max-w-screen-2xl px-10" style={{margin: "0 auto"}}>
                <div className="mt-10">
                    <hr className=" border-t-1 mb-10 border-slate-600"/>
                    <div className="flex items-end gap-5">
                        <b className="text-2xl">Social</b>
                        <b className="text-md border-b-4 border-black">Reviews {props.reviews[0] !== undefined ? props.reviews.length: "0"}</b>
                    </div>
                    {
                        props.reviews[0] !== undefined ?
                    <>    
                    <div className="flex flex-col box_shadow mt-5 rounded-lg p-5 mb-5">
                        <div className="flex items-end gap-x-7">
                            <b className="text-xl">A review by {props.reviews[0].author}</b>
                            <div className="text-white bg-black flex items-center gap-x-1 rounded-lg px-2 py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                </svg>
                                <p>{props.reviews[0].author_details.rating}</p>
                            </div>
                            
                        </div>
                        
                        <div>
                            <p className=" text-gray-400 font-thin text-base">Written by {props.reviews[0].author} on {authorDate}</p>
                        </div>
                        <div className="mt-8">
                            <p className="" style={{whiteSpace: "pre-line"}}>{props.reviews[0].content}</p>
                            
                        </div>
                    
                    </div>
                    <Link className="font-semibold text-lg" href={`${props.id}/reviews`}>Read All Reviews</Link>
                    </> : <></>
                    }

                    
                </div>
            </div>

            <div className="max-w-screen-2xl px-10" style={{margin: "0 auto"}}>
                <div className="mt-10">
                    <hr className=" border-t-1 mb-10 border-slate-400"/>
                    <b className="text-2xl">Recommendations</b>
                    <div className="flex overflow-x-auto gap-x-3 gap-y-3 mt-6">
                    
                    {props.recommendations.length <= 0 ? <div>We don't have enough data to suggest any movies based on {props.title}. You can help by rating movies you've seen.</div> :
                    props.recommendations.map((movie, index) => {
                        if (movie.poster_path === null || movie.poster_path === undefined) {
                            return <></>
                        }
                        return (
                            <div key={movie.id} className="relative min-w-fit">
                                <Image src={'https://www.themoviedb.org/t/p/original' + movie.poster_path} alt="loading..." width={200} height={300} />
                                <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end px-2 py-2">
                                    <h2 className="text-white font-semibold">{movie.title}</h2>
                                    <h2 className="text-white font-thin">{movie.release_date}</h2>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div>
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
    return {
        props: {
            id: movieInfo.id,
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
            keywords: movieInfo.keywords.keywords,
            recommendations: movieInfo.recommendations.results,
            reviews: movieInfo.reviews.results,
            backdrop_path: movieInfo.backdrop_path
        }
    }
}