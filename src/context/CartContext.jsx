import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCard(product) {
    return setCart((prev) => [...prev, cart]);
  }
  return (
    <>
      <CartContext.Provider value={{ cart, setCart, addToCard }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export const useCart = () => useContext(CartContext);
