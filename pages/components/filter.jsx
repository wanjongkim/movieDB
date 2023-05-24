import { useRef, useState } from "react";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";

const Filter = ({movies, setMovies}) => {

    const sortRef = useRef(null);
    const dateRef = useRef(null);
    const genresRef = useRef(null);
    const certificationRef = useRef(null);
    const [sortFilter, setSortFilter] = useState("popDesc");
    const [dateFilter, setDateFilter] = useState("all");
    const [genresFilter, setGenresFilter] = useState([]);
    const [certifFilter, setCertifFilter] = useState([]);
    const [firstReleaseDate, setFirstReleaseDate] = useState(new Date())
    const [secondReleaseDate, setSecondReleaseDate] = useState(new Date())

    const genresList = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance',
                        'Science Fiction', 'TV Movie', 'Thriller', 'War', 'Western']
    
    const certificationList = ['NR', 'G', 'PG', 'PG-13', 'R', 'NC-17']

    const handleFilter = async (e) => {
        e.preventDefault();
        const data = {
            page: 1,
            genresFilter: genresFilter,
            certifFilter: certifFilter,
            firstDate: firstReleaseDate,
            secondDate: secondReleaseDate,
        }
        const response = await fetch('/api/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const newData = await response.json();
        setMovies(newData);
    }

    const handleGenresFilter = (e) => {
        const id = e.currentTarget.id;
        if (genresFilter.includes(id)) {
            e.currentTarget.classList.remove("blue_background");
            setGenresFilter((copy) => copy.filter(genre => genre !== id))
        }
        else {
            e.currentTarget.classList.add("blue_background");
            setGenresFilter((genresFilter) => [...genresFilter, id])
        }
    }

    const handleCertifFilter = (e) => {
        const id = e.currentTarget.id;
        if (certifFilter.includes(id)) {
            e.currentTarget.classList.remove("blue_background");
            setCertifFilter((copy) => copy.filter(certif => certif !== id))
        }
        else {
            e.currentTarget.classList.add("blue_background");
            setCertifFilter((certifFilter) => [...certifFilter, id])
        }
    }

    const showOrHide = (e) => {
        const id = e.currentTarget.id
        switch (id) {
            case "sort": {
                if (sortRef.current.classList.contains("hidden")) {
                    sortRef.current.classList.remove("hidden")
                    sortRef.current.classList.add("flex")
                    break;
                }
                else {
                    sortRef.current.classList.remove("flex")
                    sortRef.current.classList.add("hidden")
                    break;
                }
            }
            case "filter": {
                if (dateRef.current.classList.contains("hidden")) {
                    dateRef.current.classList.remove("hidden")
                    dateRef.current.classList.add("flex")
                    genresRef.current.classList.add("block")
                    genresRef.current.classList.remove("hidden")
                    certificationRef.current.classList.add("block")
                    certificationRef.current.classList.remove("hidden")
                    break;
                }
                else {
                    dateRef.current.classList.remove("flex")
                    dateRef.current.classList.add("hidden")
                    genresRef.current.classList.remove("block")
                    genresRef.current.classList.add("hidden")
                    certificationRef.current.classList.remove("block")
                    certificationRef.current.classList.add("hidden")
                    break;
                }
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
        <form className="mb-8">
            <div className="flex flex-col min-w-[270px] max-w-[270px] gap-y-3 mr-6 font-semibold">
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
                
                <div className="divide-[#737373] divide-y box_shadow rounded-lg">
                    <div id="filter" onClick={(e)=>showOrHide(e)} className="cursor-pointer px-5 py-4 flex justify-between items-center">
                        <span>Filters</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div ref={dateRef} className="px-5 py-4 hidden flex-col items-start w-full">
                        <div>
                            <span className=" my-2">Release Dates</span>
                            <div className="mt-4 font-normal">
                                <span>From</span>
                                <DatePicker
                                    value={firstReleaseDate}
                                    onChange={value => setFirstReleaseDate(value)}
                                    valueFormat={{ dateStyle: "medium" }}
                                />
                                <span>To</span>
                                <DatePicker
                                    value={secondReleaseDate}
                                    onChange={value => setSecondReleaseDate(value)}
                                    valueFormat={{ dateStyle: "medium" }}
                                />
                            </div>
                        </div>
                        
                    </div>
                    <div ref={genresRef} className="hidden py-4 px-5">
                        <span>Genres</span>
                        <div className="flex flex-row flex-wrap mt-4 gap-2">
                            {
                                genresList.map((genre, index) => {
                                    return (
                                        <div onClick={e=>handleGenresFilter(e)} id={genre} key={index} className="rounded-2xl cursor-pointer w-fit border-[#737373] border-solid border-[1px] py-1 px-2 hover:bg-[#01b4e4] hover:text-white">
                                            <span className="font-light">{genre}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div ref={certificationRef} className="hidden py-4 px-5">
                        <span>Certification</span>
                        <div className="flex flex-row flex-wrap mt-4 gap-2">
                            {
                                certificationList.map((certification, index) => {
                                    return (
                                        <div onClick={e=>handleCertifFilter(e)} id={certification} key={index} className="rounded-2xl cursor-pointer w-fit border-[#737373] border-solid border-[1px] py-1 px-2 hover:bg-[#01b4e4] hover:text-white">
                                            <span className="font-light">{certification}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <span></span>
                    </div>

                </div>
                <button onClick={handleFilter}>
                    <div className="flex justify-center w-full rounded-3xl mt-3 border-[1px] border-solid py-3 text-white bg-[#01b4e4]">
                        <span>Search</span>
                    </div>
                </button>
            </div>
        </form>
    );
}

export default Filter