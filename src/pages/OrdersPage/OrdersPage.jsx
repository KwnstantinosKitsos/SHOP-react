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
                <div className="orders-container-display" key={order.id}>
                  <OrderSummary order={order} />
                  <OrderItems orderItems={order.orderItems} />
                  <PriceDetails
                    priceDetails={order.priceDetails}
                    totalItems={order.orderItems.length}
                  />
                </div>
              </>
            );
          })}
          <OrderButtons />
        </>
      )}
    </div>
  );
}
