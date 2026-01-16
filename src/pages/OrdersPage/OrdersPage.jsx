import SuccessMessage from '../../components/Order/SuccessMessage';
import OrderSummary from '../../components/Order/OrderSummary';
import OrderItems from '../../components/Order/OrderItems';
import PriceDetails from '../../components/Order/PriceDetails';
import OrderButtons from '../../components/Order/OrderButtons';
import './OrdersPage.css';
export default function OrdersPage() {
  return (
    <div className="orders-container">
      <SuccessMessage />
      <OrderSummary />
      <OrderItems />
      <OrderItems />
      <PriceDetails />
      <OrderButtons />
    </div>
  );
}
