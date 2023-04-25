import Image from "next/image";

const CastCard = ({ actor }) => {
    return (
        <div className="flex flex-col min-w-[11rem] min-h-[18rem] rounded-lg relative box_shadow mb-5" key={actor.id}>                          
            <div className="relative">
                <Image src={`https://image.tmdb.org/t/p/w276_and_h350_face${actor.profile_path}`} alt={actor.name} className="rounded-t-lg min-h-[14rem]" fill={true}/>
            </div>
            <div className="absolute bottom-0 mx-3 mb-3 overflow-hidden max-h-[3rem]">
                <h3 className="font-semibold">{actor.name}</h3>
                <h4 className="font-extralight text-gray-400">{actor.character}</h4>
            </div>
        </div>
    )
}

export default CastCard;