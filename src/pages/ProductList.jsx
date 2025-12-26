import React from 'react'
import SearchFilter from '../Component/SearchFilter'
import Categoryfilter from '../Component/Categoryfilter'
import ProductCart from '../Component/ProductCart'
import { useCart } from '../Context/CartContext'
import { useState } from 'react'

const ProductList = () => {

  const {products } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState('All');


const filterProducts = products.filter((product) => {
  const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

  return matchesSearch && matchesCategory;
})
  

  return (
    <>
    <div className='container mx-auto px-4 md:px:8 pt-8'>

    <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Categoryfilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

    <h2 className='text-2xl font-extrabold ml-20' >Feature Gear {products.length} Items</h2>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center'>
      {filterProducts.map((product, index) => (<ProductCart key={index} product={product} />))}
    </div>

    </div>
    </>
  )
}

export default ProductList