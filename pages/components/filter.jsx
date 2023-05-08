import { useRef } from "react";

const Filter = () => {

    const sortRef = useRef(null);
    const filterRef = useRef(null);

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

    return (
        <div className="flex flex-col min-w-[270px] gap-y-3 mr-6 font-semibold">
            <button id="sort" onClick={(e)=>showOrHide(e)}>
                <div className="shadow-lg px-5 py-4 rounded-lg flex flex-wrap justify-between items-center">
                    <span>Sort</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                    <div ref={sortRef} className="hidden mt-4 flex-col items-start w-full">
                        <hr className="w-full"/>
                        <span className=" font-thin my-2">Sort Results By</span>
                        <select className=" font-light px-2 py-2 rounded-lg">
                            <option>Popularity Descending</option>
                            <option>Popularity Ascending</option>
                            <option>Rating Descending</option>
                            <option>Rating Ascending</option>
                            <option>Release Date Descending</option>
                            <option>Release Date Ascending</option>
                            <option>Title (A-Z)</option>
                            <option>Title (Z-A)</option>
                        </select>
                    </div>
                </div>
                
            </button>
            
            <button>
                <div className="shadow-lg px-5 py-4 rounded-lg flex flex-wrap justify-between items-center">
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