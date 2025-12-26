import React from 'react'
import { initialProducts } from '../data/product'

import {Tag} from 'lucide-react'

const Categoryfilter = ({selectedCategory, setSelectedCategory}) => {
    
    const availableCategories = [
        "All", ...new Set(initialProducts.map(p=>p.category))
    ]

  return (
    <>
    <div className='flex ml-8  gap-3 border-b border-gray-800 pb-6  '>
        <Tag className='w-5 h-5 text-orange-500 mt-2 mr-2 ' />
        {availableCategories.map(category => (<button onClick={(e) => setSelectedCategory(category)} key={category} className={`px-5 py-3 text-sm font-bold rounded-full transition-duration-200 shadow-md ${selectedCategory === category ? 'bg-orange-600 text-white' : 'bg-slate-600 text-white'}`} >{category}</button>))}
    </div>
    </>
  )
}

export default Categoryfilter