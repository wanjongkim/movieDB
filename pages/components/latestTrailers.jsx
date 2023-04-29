import Image from "next/image";
import { useState } from "react";
import YoutubeEmbed from "./embedVideo";
import { useRouter } from 'next/router'
import Overlay from "./overlay";

const LatestTrailers = ({latestMovieTrailers}) => {

    const [bgImageUrl, setBgImageUrl] = useState(latestMovieTrailers[0].bg); 
    const router = useRouter();
    const [showMovie, setShowMovie] = useState(false);
    const [vkey, setVkey] = useState("");

    const handleClickedMovie = (e, id) => {
        e.preventDefault();
        setShowMovie(true);
        setVkey(id);
    }

    return (
        <div className="relative h-96 max-h-96 text-white pt-7" style={{maxHeight: "384px", height: "384px"}}>
            {  
                showMovie ? 
                <Overlay embedId={vkey} setShowMovie={setShowMovie}></Overlay>:
                <></>
            } 
            <Image className="transparent_bg object-fill" src={`https://image.tmdb.org/t/p/original${bgImageUrl}`} alt="img" fill={true}/>
            <span className="font-semibold text-2xl ml-7">Latest Trailers</span>
            <div className="pt-5 w-full flex flex-row overflow-x-auto gap-x-5" style={{height: "91%", maxHeight: "91%"}}>
                {
                    latestMovieTrailers !== undefined && latestMovieTrailers.length > 0 ? latestMovieTrailers.map((movie, index) => {
                        return (
                            <div key={movie.videoKey} className="monterrat flex flex-col text-center ml-7" onClick={(e)=>handleClickedMovie(e, movie.videoKey)}>
                                <div onMouseEnter={()=> {setBgImageUrl(latestMovieTrailers[index].bg)}} className="relative w-[300px] h-[168px] rounded-xl overflow-hidden hover:scale-105 transform transition duration-200">
                                    <Image className="object-fill rounded-xl" src={`https://img.youtube.com/vi/${movie.videoKey}/mqdefault.jpg`} alt="img" fill={true}/>
                                    
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