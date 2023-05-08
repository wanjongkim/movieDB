import Link from "next/link";
import { useState } from "react";

const TopNav = () => {

    const [showMovieMenu, setShowMovieMenu] = useState(false);

    return (
        <div className="bg-[#032541]">
            <nav className="flex max-w-screen-2xl min-w-screen-2xl justify-between h-16 text-white font-semibold px-5" style={{margin: "0 auto"}}>
                <ul className="flex ml-5 gap-x-6 items-center">
                    <li className="text-3xl home_icon font-bold"><Link href="/">TMDB</Link></li>
                    <li onMouseEnter={() => setShowMovieMenu(true)}>
                        Movies
                        {
                            showMovieMenu ?
                            <ul className="z-50 absolute flex flex-col gap-y-2 py-2 bg-[#ffffff] text-black w-[200px] rounded-lg mt-2 font-normal">
                                <Link href="/popular" className="hover:bg-slate-100 py-1 pl-7">Popular</Link>
                                <Link href="/playing" className="hover:bg-slate-100 py-1 pl-7">Now Playing</Link>
                                <Link href="/upcoming" className="hover:bg-slate-100 py-1 pl-7">Upcoming</Link>
                                <Link href="/top-rated" className="hover:bg-slate-100 py-1 pl-7">Top Rated</Link>
                            </ul> : <></>
                        }
                    </li>
                    <li>TV Shows</li>
                    <li>People</li>
                    <li>More</li>
                </ul>
                <ul className="flex items-center gap-x-6 mr-5">
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default TopNav;