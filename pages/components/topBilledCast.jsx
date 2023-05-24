import CastCard from "@/components/castCard";

const TopBilledCast = ({ cast }) => {
    

    if(cast !== undefined) {
        cast.sort(function (x,y) {
            return y.popularity - x.popularity;
        })
        for(var i=0; i<cast.length; i++) {
            if(cast[i].profile_path === null) {
                cast.splice(i,1);
                i--;
            }
        }
    }
    
    return (
        <div>
            <h2 className="font-bold text-2xl mb-6">Top Popular Cast</h2>
            <div className="flex flex-row overflow-x-auto gap-x-5 gap-y-5 ">
                {
                    cast !== undefined ? (
                        cast.map((actor) => {
                            return (
                                <CastCard key={actor.name} actor={actor}/>
                            )}
                        )
                    ) : <></>
                }
            </div>
        </div>
    )
}

export default TopBilledCast;

