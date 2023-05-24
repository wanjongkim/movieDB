import Link from "next/link";
import { useState } from "react";
import Popular from "../popular";

const TopNav = () => {

    const [showMovieMenu, setShowMovieMenu] = useState(false);
    const [mobileShowMenu, setMobileShowMenu] = useState(false);
    const [showMobileMoviesSubcategory, setShowMobileMoviesSubcategory] = useState(false);

    return (
        <div className="bg-[#032541] relative">
            <nav className="flex max-w-screen-2xl min-w-screen-2xl justify-between h-16 text-white font-semibold px-5" style={{margin: "0 auto"}}>
                <ul className="flex ml-5 gap-x-6 items-center">
                    <li className="text-3xl home_icon font-bold"><Link href="/">TMDB</Link></li>
                    <li className="md:inline hidden cursor-pointer" onMouseEnter={() => setShowMovieMenu(true)}>
                        Movies
                        {
                            showMovieMenu ?
                            <ul className="z-50 absolute flex flex-col gap-y-2 py-2 bg-[#ffffff] text-black w-[200px] rounded-lg mt-2 font-normal border border-slate-300">
                                <Link href="/popular" className="hover:bg-slate-100 py-1 pl-7">Popular</Link>
                                <Link href="/playing" className="hover:bg-slate-100 py-1 pl-7">Now Playing</Link>
                                <Link href="/upcoming" className="hover:bg-slate-100 py-1 pl-7">Upcoming</Link>
                                <Link href="/top-rated" className="hover:bg-slate-100 py-1 pl-7">Top Rated</Link>
                            </ul> : <></>
                        }
                    </li>
                    <li className="hidden md:inline">TV Shows</li>
                    <li className="hidden md:inline">People</li>
                    <li className="hidden md:inline">More</li>
                </ul>
                <ul className="md:hidden flex items-center gap-x-6 mr-5 cursor-pointer" onClick={() => setMobileShowMenu(!mobileShowMenu)}>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </li>
                </ul>
            </nav>

            {
                mobileShowMenu ?
                <div className="fixed bg-[#032541] h-screen md:min-w-[400px] min-w-[80%] top-0 z-30 text-white">
                    <div className="flex mt-20 ml-10 gap-y-8 flex-col">
                        <ul className="flex flex-col gap-y-3">
                            <li className="text-2xl cursor-pointer" onClick={() => setShowMobileMoviesSubcategory(!showMobileMoviesSubcategory)}>Movies</li>
                            {
                                showMobileMoviesSubcategory ?
                                <>
                                    <Link href="/popular"><li>Popular</li></Link>
                                    <Link href="/top-rated"><li>Top Rated</li></Link>
                                    <Link href="/upcoming"><li>Upcoming</li></Link>
                                    <Link href="/playing"><li>Now Playing</li></Link>
                                </> : <></>
                            }
                        </ul>
                        <ul className="flex flex-col gap-y-3">
                            <li className="text-2xl cursor-pointer">TV Shows</li>
                        </ul>
                        <ul className="flex flex-col gap-y-3">
                            <li className="text-2xl cursor-pointer">People</li>
                        </ul>
                    </div>
                </div> : <></>
            }
        </div>
    );
}

export default TopNav;