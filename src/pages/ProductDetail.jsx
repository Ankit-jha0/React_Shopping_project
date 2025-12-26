// import React, { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { initialProducts } from "../data/product";

// import { ShoppingCart, ChevronLeft, Tag, Zap } from "lucide-react";

// import { useCart } from "../context/CartContext";

// const ProductDetail = () => {
//   // console.log("data from id = ",useParams())

//   const { id } = useParams();
//   const [product, setproduct] = useState();

//   const { addToCart } = useCart();

//   useEffect(() => {
//     setproduct(initialProducts.find((data) => data.id == id));
//   }, [id]);

//   // console.log("my product = ", product);

//   return (
//     <>
//       <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800">
//         <Link to={"/"}>
//           <button className="cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg">
//             <ChevronLeft className="w-6 h-6 mr-1" />
//             <span>Back to All Products</span>
//           </button>
//         </Link>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
//           <div className="w-full">
//             <img
//               src={product?.image}
//               alt={product?.name}
//               className="w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-4 border-gray-800"
//             />
//           </div>

//           <div className="flex flex-col justify-between">
//             <div>
//               <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight tracking-tighter">
//                 {product?.name}
//               </h1>
//             </div>
//             <p className="text-3xl font-extrabold text-orange-400 mb-4">
//               ₹{product?.price.toFixed(2)}
//             </p>

//             <h2 className="text-xl font-bold text-gray-200 mb-2 border-b border-e-orange-900/50 pb-2 flex items-center space-x-2">
//               <Tag className="w-5 h-5 text-orange-500" />
//               <span>Product Overview</span>
//             </h2>

//             <p className="text-gray-500 text-lg leading-relaxed mb-3">
//               {product?.description}
//             </p>

//             <ul className="space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700">
//               <li className="flex items-center space-x-3 text-lg">
//                 <Zap className="w-5 h-5 text-orange-500" />
//                 <span>High-Quality, Professional Grade Materials</span>
//               </li>
//               <li className="flex items-center space-x-3 text-lg">
//                 <Zap className="w-5 h-5 text-orange-500" />
//                 <span>Comprehensive 1-Year Manufacturer Warranty</span>
//               </li>
//               <li className="flex items-center space-x-3 text-lg">
//                 <Zap className="w-5 h-5 text-orange-500" />
//                 <span>Immediate Shipping for In-Stock Items</span>
//               </li>
//             </ul>

//             <div className="mt-5 space-y-4 flex justify-center items-center flex-col">
//               <button
//                 onClick={() => addToCart(product)}
//                 className="w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider"
//               >
//                 <ShoppingCart className="w-6 h-6" />
//                 <span>Add to Cart</span>
//               </button>

//               <Link
//                 to={"/"}
//                 className="w-full py-3 border-2 border-orange-600 text-orange-400 font-bold rounded-full cursor-pointer hover:bg-orange-900/50 transition duration-300 uppercase tracking-wider text-center"
//               >
//                 Keep Shopping
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ProductDetail;












import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { initialProducts } from '../data/product';
import { Link } from 'react-router-dom';
import { ArrowBigLeftDash, Tag, Zap, ShoppingCart } from 'lucide-react';
import { useCart } from '../Context/CartContext';

const ProductDetail = () => {


  const { id } = useParams();
  const [products, setProducts] = useState();
  const { AddToCart } = useCart();
  

  useEffect(() => {
    setProducts(initialProducts.find((data) => data.id == id));
  }, [id]);

  console.log("Product ID:", id);
  console.log("My Product :", products);

  return (
    <>
      <div className="container  w-3/4 min-h-screen mx-auto px-4 md:px-8 mt-4 shadow-2xl border-gray-800  border h-100 bg-gray-900 rounded-2xl">

        <Link to="/" className='flex items-center'>

          <button className='flex gap-2 items-center text-sm font-semibold hover:text-orange-600'>
            <ArrowBigLeftDash />
            <span>
              Back to All Products
            </span>
          </button>
        </Link>



        <div className='  mt-10   '>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div className="w-full">
              <img className='rounded-lg w-[400px] h-[400] object-cover shadow-2xl shadow-gray-950' src={products ? products.image : 'Product not selected'} alt="" />
            </div>



            <div className='ml-10 text-gray-200   '>
              <div className='h-[400px] w-[400px] text-center rounded-md '>
                <h2 className='text-4xl mb-4 leading-tight font-extrabold text-gray-200 line-clamp-1 '>{products ? products.name : 'Product not selected'}</h2>
                <h3 className='left-4  text-3xl mb-4 font-extrabold text-orange-400 '>₹{products ? products.price : 'Product not selected'}.00</h3>
                <h2 className=' flex items-center text-sm justify-center font-bold gap-2 text-gray-200' ><Tag className='w-5 h-5  text-orange-500' /> <span >Product Overview</span></h2>
              

              <p className='text-sm text-gray-400 leading-relaxed mb-3' >{products ? products.description : 'Product not selected'}</p>

              <ul className="space-y-3 text-gray-300 p-4 mb-2 bg-gray-800 rounded-xl border border-gray-700">
                <li className="flex items-center space-x-3 text-lg">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className='text-sm'>High-Quality, Professional Grade Materials</span>
                </li>               <li className="flex items-center space-x-3 text-lg">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className='text-sm'>Comprehensive 1-Year Manufacturer Warranty</span>
                </li>
                <li className="flex items-center space-x-3 text-lg">
                  <Zap className="w-5 h-5 text-orange-500" />
                  <span className='text-sm'>Immediate Shipping for In-Stock Items</span>
                </li>
              </ul>

              <div>
                <button onClick={() => AddToCart(products)} 
                className='bg-orange-500 hover:bg-orange-600 mb-2 w-full text-white py-2 px-4 rounded-lg 
                font-semibold transition duration-300'>
                  <ShoppingCart className="inline mr-2" />  Add to Cart
                </button>

                <button className='rounded-lg border-2 border-orange-600 hover:bg-orange-500/50 mb-2 w-full 
                text-white py-2 px-4    font-semibold transition duration-300'>
                  Keep Shopping
                </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      

    </>
  )
}

export default ProductDetail