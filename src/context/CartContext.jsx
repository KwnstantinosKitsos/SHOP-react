import { createContext, useContext, useState } from 'react';

// 1. Create Context
const CartContext = createContext(null);
if (!CartContext) {
  throw new Error('Be careful, useSearch must be used within SearchProvider!');
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [shippingMethod, setShippingMethod] = useState('');
  const [addedMessage, setAddedMessage] = useState(null);

  // Add / Delete
  function addToCard(product) {
    setCart((prev) => [...prev, product]);

    // Added Message
    setAddedMessage(product.title);

    setTimeout(() => {
      setAddedMessage(null);
    }, 2000);
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
    // setDate() change the object today
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
          addedMessage,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

// Custom HOOK
export const useCart = () => useContext(CartContext);
