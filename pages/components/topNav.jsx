import Link from "next/link";

const TopNav = () => {
    return (
        <div className="bg-[#032541]">
            <nav className="flex max-w-screen-2xl min-w-screen-2xl justify-between h-16 text-white font-semibold px-5" style={{margin: "0 auto"}}>
                <ul className="flex ml-5 gap-x-6 items-center">
                    <li className="text-3xl home_icon font-bold"><Link href="/">TMDB</Link></li>
                    <li>Movies</li>
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