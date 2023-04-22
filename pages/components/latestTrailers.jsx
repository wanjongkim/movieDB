import Image from "next/image";
import { useState } from "react";
import YoutubeEmbed from "./embedVideo";

const LatestTrailers = ({latestMovieTrailers}) => {

    const [bgImageUrl, setBgImageUrl] = useState(latestMovieTrailers[0].bg); 

    return (
        <div className="relative h-96 max-h-96 text-white pt-7" style={{maxHeight: "384px", height: "384px"}}> 
            <Image className="transparent_bg object-fill" src={`https://image.tmdb.org/t/p/original${bgImageUrl}`} alt="img" fill={true}/>
            <span className="font-semibold text-2xl ml-7">Latest Trailers</span>
            <div className="pt-5 w-full flex flex-row overflow-x-auto gap-x-5" style={{height: "91%", maxHeight: "91%"}}>
                {
                    latestMovieTrailers !== undefined && latestMovieTrailers.length > 0 ? latestMovieTrailers.map((movie, index) => {
                        return (
                            <div className="monterrat flex flex-col text-center ml-7">
                                <div onMouseEnter={()=> {setBgImageUrl(latestMovieTrailers[index].bg)}} className="relative w-[300px] h-[168px] rounded-xl overflow-hidden hover:scale-105 transform transition duration-200">
                                    <Image className="object-fill rounded-xl" src={`https://img.youtube.com/vi/${movie.videoKey}/mqdefault.jpg`} alt="img" fill={true}/>
                                    {/*<YoutubeEmbed embedId={latestMovieTrailers[index]} width={300} height={168}/>*/}
                                </div>
                                <h2 className="font-semibold mt-4">{movie.original_title}</h2>
                                
                            </div>
                        )
                    }) : <h1>Loading...</h1>
                }
            </div>
        </div>
    );
}

export default LatestTrailers;