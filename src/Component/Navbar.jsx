
import { Home } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Link } from "react-router-dom";
import { useCart } from '../Context/CartContext';



const Navbar = () => {

  const {cartCount} = useCart();
 

  return (
    <div className="bg-gray-950/95 z-50 sticky top-0 backdrop-blur-md text-white shadow-2xl shadow-gray-950/70 border-b border-gray-800  p-4">

      <div className='flex justify-between w-3/4'>

      <Link to={'/'}>

        <div className='flex gap-4 justify-center items-center cursor-pointer'>
        <Home className='w-8 h-8 text-orange-400' />
        <h1 className='text-4xl font-extrabold'>WDM <span className='text-orange-500' >STORE</span></h1>
      </div>
      </Link>

      <nav className='absolute top-4 right-20 flex'>
        <Link to={'/cart'} 
        className='relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 
        transition-duration-200 border border-orange-400/50 shadow-lg cursor-pointer '>
        <ShoppingCart className='w-6 h-6 text-orange-400' />    
        { cartCount > 0 && <span className='absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'> {cartCount}</span>}
        </Link>
      </nav>
      </div>

    </div>
  )
}

export default Navbar