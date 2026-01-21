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
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(null);

  function addToCard(product) {
    setCart((prev) => [...prev, product]);

    // Added PopUp Message
    setAddedMessage(product.title);

    setTimeout(() => {
      setAddedMessage(null);
    }, 2000);
  }

  function deleteFromCard(indexToDelete) {
    setCart((prev) => prev.filter((_, index) => index !== indexToDelete));
  }
  // Shipping
  const shippingCost = shippingMethod === 'fast' ? 9.99 : 0;

  function getDateDelivery() {
    const today = new Date();
    const daysToAdd = shippingMethod === 'fast' ? 3 : 7;
    // setDate() change the object today
    today.setDate(today.getDate() + daysToAdd);

    return today.toLocaleString('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
    });
  }
  const deliveryDate = getDateDelivery();

  const subTotalCents = cart.reduce(
    (acc, nextItem) => acc + nextItem.priceCents,
    0,
  );

  const subTotal = subTotalCents / 100;
  const tax = subTotal * 0.1;
  const totalPrice = subTotal + tax + shippingCost;

  // Place Order
  async function placeOrder() {
    //Snapshot
    const newOrderSnapShot = {
      id: crypto.randomUUID(),
      day: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      orderItems: [...cart],
      priceDetails: {
        subTotal: subTotal.toFixed(2),
        shippingCost: shippingCost.toFixed(2),
        tax: tax.toFixed(2),
        total: totalPrice.toFixed(2),
      },
    };

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5001/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrderSnapShot),
      });

      if (!response.ok) {
        throw new Error('Can not save the order...');
      }

      setCart([]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  }

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
          placeOrder,
        }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
}

// Custom HOOK
export const useCart = () => useContext(CartContext);
