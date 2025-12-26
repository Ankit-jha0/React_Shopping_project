
import './App.css'
import Navbar from './Component/Navbar'
import ProductList from './pages/ProductList'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import ProductDetail from './pages/ProductDetail'
import Footer from './Component/Footer'   

import {Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <div className='min-h-screen bg-gray-950 font-sans text-white'>

      <Navbar />
      
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path='/product/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
     

      <Footer />


     
    </div>

    </>
  )
}

export default App
