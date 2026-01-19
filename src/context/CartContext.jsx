import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [shippingMethod, setShippingMethod] = useState('');

  function addToCard(product) {
    setCart((prev) => [...prev, product]);
  }
  function deleteFromCard(indexToDelete) {
    setCart((prev) => prev.filter((_, index) => index !== indexToDelete));
  }
  // Shipping
  // 1. Add cost for delivery
  const shippingCost = shippingMethod === 'fast' ? 9.99 : 0;

  // 2. Add delivery dates
  function getDateDelivery() {
    const today = new Date();
    const daysToAdd = shippingMethod === 'fast' ? 3 : 7;
    today.setDate(today.getDate() + daysToAdd);

    return today.toLocaleString('en-US', {
      weekday: 'long', // π.χ. Monday
      month: 'short', // π.χ. Jan
      day: 'numeric',
    });
  }
  const deliveryDate = getDateDelivery();
  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          addToCard,
          deleteFromCard,
          shippingMethod,
          setShippingMethod,
          shippingCost,
          deliveryDate,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

export const useCart = () => useContext(CartContext);
