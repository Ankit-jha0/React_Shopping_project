import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../Context/CartContext';

const ProductCart = ({ product }) => {
    const { AddToCart } = useCart();
  return (
    <div className='bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 transform border-gray-800 group hover:scale-[1.03] hover:shadow-orange-900/40' >
        <Link to={`/product/${product.id}`} className="relative cursor-pointer overflow-hidden ">
        <img src={product.image} alt={product.name} className='w-full h-56 object-cover  transition duration-500 group-hover:scale-110 group-hover:opacity-90' />
        <div className='absolute bottom-0 left-0 bg-orange-500 text-white py-2 px-5 text-xl font-extrabold rounded-tr-xl shadow-lg'>
            ₹{product.price}.00
        </div>
        </Link>
        <div className='p-4 flex-grow'>
            <h2 className='text-white text-xl font-bold mb-2 line-clamp-1'>{product.name}</h2>
            <p className='text-gray-400 text-sm'>{product.description}</p>
            <div className='flex items-center text-xs  text-gray-500 mt-3 mb-4 '>

            <span className=' px-3 py-1 border-gray-700 bg-slate-600 text-gray-800  text-sm font-semibold rounded-full'>{product.category}</span>
            </div>
        </div>

        

        <button
        onClick={() => AddToCart(product)}
         className='bg-orange-500 hover:bg-orange-600 mb-2 text-white py-2 px-4 rounded-lg font-semibold transition duration-300'>
          <ShoppingCart className="inline mr-2" />  Add to Cart
        </button>

    </div>
  )
}

export default ProductCart