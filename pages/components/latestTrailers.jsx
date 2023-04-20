import Image from "next/image";

const LatestTrailers = () => {
    return (
        <div className="relative h-96 max-h-96 text-white px-10 pt-7" style={{maxHeight: "384px", height: "384px"}}> 
            <Image className="transparent_bg" src={"https://www.themoviedb.org/t/p/w1920_and_h427_multi_faces/tOUuPbywu4CW9ktyENijSxdJ5IZ.jpg"} alt="img" fill={true}/>
            <span className="font-semibold text-2xl">Latest Trailers</span>
            <div className="pt-5 w-full flex flex-row overflow-x-auto gap-x-5" style={{height: "91%", maxHeight: "91%"}}>
                <div className="monterrat flex flex-col text-center">
                    <div className="relative w-[300px] h-[168px] rounded-xl">
                        <Image className="object-fill rounded-xl" src={"https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tOUuPbywu4CW9ktyENijSxdJ5IZ.jpg"} alt="img" fill={true}/>
                    </div>
                    <h2 className="font-semibold mt-2">Heaven's Gate</h2>
                    <h2>Official Trailer</h2>
                </div>
                <div className="monterrat flex flex-col text-center">
                    <div className="relative w-[300px] h-[168px] rounded-xl">
                        <Image className="object-fill rounded-xl" src={"https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tOUuPbywu4CW9ktyENijSxdJ5IZ.jpg"} alt="img" fill={true}/>
                    </div>
                    <h2 className="font-semibold mt-2">Heaven's Gate</h2>
                    <h2>Official Trailer</h2>
                </div>
                <div className="monterrat flex flex-col text-center">
                    <div className="relative w-[300px] h-[168px] rounded-xl">
                        <Image className="object-fill rounded-xl" src={"https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tOUuPbywu4CW9ktyENijSxdJ5IZ.jpg"} alt="img" fill={true}/>
                    </div>
                    <h2 className="font-semibold mt-2">Heaven's Gate</h2>
                    <h2>Official Trailer</h2>
                </div>
                <div className="monterrat flex flex-col text-center">
                    <div className="relative w-[300px] h-[168px] rounded-xl">
                        <Image className="object-fill rounded-xl" src={"https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tOUuPbywu4CW9ktyENijSxdJ5IZ.jpg"} alt="img" fill={true}/>
                    </div>
                    <h2 className="font-semibold mt-2">Heaven's Gate</h2>
                    <h2>Official Trailer</h2>
                </div>
                <div className="monterrat flex flex-col text-center">
                    <div className="relative w-[300px] h-[168px] rounded-xl">
                        <Image className="object-fill rounded-xl" src={"https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tOUuPbywu4CW9ktyENijSxdJ5IZ.jpg"} alt="img" fill={true}/>
                    </div>
                    <h2 className="font-semibold mt-2">Heaven's Gate</h2>
                    <h2>Official Trailer</h2>
                </div>
                <div className="monterrat flex flex-col text-center">
                    <div className="relative w-[300px] h-[168px] rounded-xl">
                        <Image className="object-fill rounded-xl" src={"https://www.themoviedb.org/t/p/w533_and_h300_bestv2/tOUuPbywu4CW9ktyENijSxdJ5IZ.jpg"} alt="img" fill={true}/>
                    </div>
                    <h2 className="font-semibold mt-2">Heaven's Gate</h2>
                    <h2>Official Trailer</h2>
                </div>
            </div>
        </div>
    );
}

export default LatestTrailers;