import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [shippingMethod, setShippingMethod] = useState('');
  const shippingCost = shippingMethod === 'fast' ? 9.99 : 0;

  function addToCard(product) {
    setCart((prev) => [...prev, product]);
  }
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addToCard,
          shippingMethod,
          setShippingMethod,
          shippingCost,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export const useCart = () => useContext(CartContext);
