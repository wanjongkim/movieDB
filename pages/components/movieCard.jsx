import Image from "next/image";
import Link from "next/link";

const MovieCard = ({id, poster_path, title, release_date, width, height, minHeight="200px", minWidth="160px"}) => {

    const full_poster_path = `https://image.tmdb.org/t/p/original/${poster_path}`
    
    return (
        <Link href={`/movie/${id}`}>
            <div style={{minWidth: `${minWidth}`, maxWidth: `${minWidth}`, minHeight: `${minHeight}`, height: `${height}px`, maxHeight: `${minHeight}`, border: ""}} className={`box_shadow rounded-xl flex flex-col overflow-hidden`}>
                    <Image src={full_poster_path} alt={title} width={width} height={height}/>
                <div className="px-2 pt-2">
                <h1 className="font-bold">{title}</h1>
                <h3 className="font-extralight text-gray-400">{release_date}</h3></div>
            </div>
        </Link>
    )
}

export default MovieCard;