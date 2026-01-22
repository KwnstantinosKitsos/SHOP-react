import SuccessMessage from '../../components/Order/SuccessMessage';
import OrderSummary from '../../components/Order/OrderSummary';
import OrderItems from '../../components/Order/OrderItems';
import PriceDetails from '../../components/Order/PriceDetails';
import OrderButtons from '../../components/Order/OrderButtons';
import './OrdersPage.css';
import { useCart } from '../../context/CartContext';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrdersPage() {
  const { orders, setOrders, setLoading } = useCart();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5001/orders');

        if (!response.ok) {
          throw new Error('Error: Something gone wrong');
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function handleClearButton() {
    setOrders([]);
  }
  return (
    <div className="orders-container">
      {orders.length === 0 ? (
        <div className="no-order">
          <h2>No order yet...</h2>
          <Link to="/">Continue shopping</Link>
        </div>
      ) : (
        <>
          <SuccessMessage />
          {orders.map((order) => {
            return (
              <>
                <button className="clear-all" onClick={handleClearButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
                  </svg>
                </button>
                <div className="orders-container-display" key={order.id}>
                  <OrderSummary order={order} />
                  <OrderItems orderItems={order.orderItems} />
                  <PriceDetails
                    priceDetails={order.priceDetails}
                    totalItems={order.orderItems.length}
                  />
                </div>
                <hr className="horizontal"></hr>
              </>
            );
          })}
          <OrderButtons />
        </>
      )}
    </div>
  );
}
