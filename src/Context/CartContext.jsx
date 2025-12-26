
import { createContext ,useContext, useMemo, useState} from 'react'
const CartContext = createContext();

import { initialProducts } from '../data/product';


export const CartProvider = (props) => {

    const products = initialProducts;

    const [cart, setCart] = useState([]);

// addToCart is a function.
// It receives a product object as an argument.
// setCart is a state setter from useState.
// prevCart is the current cart state.

    const AddToCart = (products) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === products.id); 
        //find() searches the cart. 
        // If a product with the same id exists, it returns that item.  
        // If not, it returns undefined
        if (existingProduct){
          return prevCart.map((item) => item.id === products.id ? {...item , quantity: item.quantity + 1} : item);
          // map() creates a new cart array (important for React).
          // Spread old item (...item) and update quantity if id matches
          // Increase quantity by 1
        }
        return [...prevCart, {...products, quantity: 1}];
        // Adds the product to the cart.
        // Sets initial quantity: 1.
      })
    };

    const RemoveFromCart = (productsId, removeAll = false) => {
      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === productsId);
        if (!existingProduct) return prevCart;

        if (removeAll || existingProduct.quantity === 1) {
          return prevCart.filter((item) => item.id !== productsId);
        }else {
          return prevCart.map((item) => item.id === productsId ? {...item, quantity: item.quantity - 1} : item);
        }

      })
    }

    

    const clearCart = () => {
      setCart([]);
    }

    const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0),[cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart]);
    console.log("Cart Items:", cart);

  return (




    <CartContext.Provider value={
      {
        products,
        cart,
        AddToCart,
        RemoveFromCart,
        clearCart,
        cartCount,
        cartTotal
      }
      }>
        {props.children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext);