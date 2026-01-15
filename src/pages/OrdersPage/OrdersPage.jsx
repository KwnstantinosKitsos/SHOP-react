import SuccessMessage from '../../components/Order/SuccessMessage';
import OrderSummary from '../../components/Order/OrderSummary';
import OrderItems from '../../components/Order/OrderItems';
import './OrdersPage.css';
export default function OrdersPage() {
  return (
    <>
      <SuccessMessage />
      <OrderSummary />
      <OrderItems />
    </>
  );
}
