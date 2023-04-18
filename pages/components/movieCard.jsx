import Image from "next/image";


const MovieCard = ({poster_path, title, release_date}) => {
    
    const full_poster_path = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div style={{maxWidth: "200px", minWidth: "200px"}}>
            <Image src={full_poster_path} alt={title} width={200} height={200}/>
            <h1 className="font-bold">{title}</h1>
            <h3 className="font-extralight text-gray-400">{release_date}</h3>
        </div>
    )
}

export default MovieCard;