import { useRef, useState } from "react";

const Filter = ({movies, setMovies, dummy}) => {

    const sortRef = useRef(null);
    const [sortFilter, setSortFilter] = useState("popDesc");

    const showOrHide = (e) => {
        const id = e.currentTarget.id
        switch (id) {
            case "sort":
                if (sortRef.current.classList.contains("hidden")) {
                    sortRef.current.classList.remove("hidden")
                    sortRef.current.classList.add("flex")
                }
                else {
                    sortRef.current.classList.remove("flex")
                    sortRef.current.classList.add("hidden")
                }
        }
    }

    const handleSort = (value) => {



        switch (value) {
            case "popDesc": {
                setMovies(movies => {
                    let copy = [...movies];
                    copy.sort((a,b) => {
                        return b.popularity - a.popularity;
                    })
                    return copy;
                })
                break;
            }
            case "popAsce": {
                setMovies(movies => {
                    let copy = [...movies];
                    copy.sort((a,b) => {
                        return a.popularity - b.popularity;
                    })
                    return copy;
                })
                break;
            }
            case "rateDesc":
                setMovies(movies => {
                    let copy = [...movies];
                    copy.sort((a,b) => {
                        return b.vote_average - a.vote_average;
                    })
                    return copy;
                })
                break;
            case "rateAsce": {
                setMovies(movies => {
                    let copy = [...movies];
                    copy.sort((a,b) => {
                        return a.vote_average - b.vote_average;
                    })
                    return copy;
                })
                break;
            }
            case "releaseDesc":
                setMovies(movies => {
                    let copy = [...movies];
                    copy.sort((a,b) => {
                        return new Date(b.release_date) - new Date(a.release_date)
                    })
                    return copy;
                })
                break;
            case "releaseAsce":
                setMovies(movies => {
                    let copy = [...movies];
                    copy.sort((a,b) => {
                        return new Date(a.release_date) - new Date(b.release_date)
                    })
                    return copy;
                })
                break;
            case "titleAZ":
                setMovies(movies => {
                    let copy = [...movies];
                    copy.sort((a,b) => {
                        return a.original_title > b.original_title
                    })
                    return copy;
                })
                break;
            case "titleZA":
                setMovies(movies => {
                    let copy = [...movies];
                    copy.sort((a,b) => {
                        return (a.original_title.localeCompare(b.original_title)) * -1
                    })
                    return copy;
                })
                break;
        }
        setSortFilter(value);
    }

    return (
        <div className="flex flex-col min-w-[270px] gap-y-3 mr-6 font-semibold">
            <div className="divide-[#737373] divide-y box_shadow rounded-lg">
                <div id="sort" onClick={(e)=>showOrHide(e)} className="cursor-pointer px-5 py-4 flex flex-wrap justify-between items-center ">
                    <span>Sort</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                    
                </div>
                <div ref={sortRef} className="px-5 py-4 hidden flex-col items-start w-full">
                    
                    <span className=" font-thin my-2">Sort Results By</span>
                    <select className=" font-light px-2 py-2 rounded-lg cursor-pointer" onChange={(e) => handleSort(e.target.value)} value={sortFilter}>
                        <option value="popDesc">Popularity Descending</option>
                        <option value="popAsce">Popularity Ascending</option>
                        <option value="rateDesc">Rating Descending</option>
                        <option value="rateAsce">Rating Ascending</option>
                        <option value="releaseDesc">Release Date Descending</option>
                        <option value="releaseAsce">Release Date Ascending</option>
                        <option value="titleAZ">Title (A-Z)</option>
                        <option value="titleZA">Title (Z-A)</option>
                    </select>
                </div>
            </div>
            
            <button>
                <div className="box_shadow px-5 py-4 rounded-lg flex flex-wrap justify-between items-center">
                    <span>Filters</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                </div>
            </button>
        </div>
    );
}

export default Filter