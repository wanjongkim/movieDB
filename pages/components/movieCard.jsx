import Image from "next/image";
import Link from "next/link";

const MovieCard = ({id, poster_path, title, release_date}) => {

    const full_poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <Link href={`/movie/${id}`}>
            <div style={{minWidth: "160px", maxWidth: "160px"}} >
                <Image src={full_poster_path} alt={title} width={160} height={200}/>
                <h1 className="font-bold">{title}</h1>
                <h3 className="font-extralight text-gray-400">{release_date}</h3>
            </div>
        </Link>
    )
}

export default MovieCard;