import React from 'react'
import { Search } from 'lucide-react';

const SearchFilter = ({searchTerm, setSearchTerm}) => {
    return (
        <div className=' mb-5  p-5 flex justify-center items-center  shadow-xl  bg-gray-900 rounded-2xl border-y-gray-800 '>
            <div className='w-full  bg-gray-800 h-2 p-6 flex justify-center items-center border border-gray-700 rounded-xl overflow-hidden'>
                <Search className='w-5 h-5 text-gray-500 ml-4' />
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className=' w-full outline-none text-base font-medium text-white  bg-gray-800 p-4 focus-within:4 focus-within:ring-orange-600/500 transition-duration-300 rounded-lg' placeholder='Search high-performance electronics by name or feature...' />

            </div>
        </div>
    )
}

export default SearchFilter