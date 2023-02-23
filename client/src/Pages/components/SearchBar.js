import React from 'react'
import { FaSearch, FaSlidersH } from 'react-icons/fa'

const SearchBar = () => {
    return (
        <div className="flex w-min space-x-2 items-center h-min bg-white px-4 rounded-2xl text-xl shadow-slate-400 shadow-md my-4">
            <label htmlFor="search" className="cursor-pointer border-r-2 border-black pr-3"><FaSearch /></label>
            <div>
                <input type="text" id="search" placeholder='Search' className='text-xl px-3 transition ease-in-out focus:outline-none border-none border-black' />
            </div>
            <div className="cursor-pointer border-l-2 border-black pl-3">
                <FaSlidersH />
            </div>
        </div>
    )
}

export default SearchBar
