import PaymentSummary from '../../components/PaymentSummary/PaymentSummary';
import PreviewOrder from '../../components/PreviewOrder/PreviewOrder';
import './CartPage.css';
import { Link } from 'react-router-dom';
export default function CartPage() {
  const itemList = [1, 2, 3, 4, 5, 6];

  if (itemList.length === 0) {
    return (
      <>
        <div className="cart-empty">
          <h1>Your cart is empty</h1>
          <p>Add some products to get started!</p>
          <Link to="/">Continue shopping</Link>
        </div>
      </>
    );
  }
  return (
    <div className="cart-page">
      <h1 className="cart-title">
        Checkout <span className="art-title-quantity">(1)</span>
      </h1>
      <h2 className="cart-preview-text">Review your order</h2>
      <div className="cart-grid-layout">
        <main className="cart-left">
          <div className="cart-items">
            <PreviewOrder />
            <PreviewOrder />
            <PreviewOrder />
            <PreviewOrder />
            <PreviewOrder />
            <PreviewOrder />
          </div>
        </main>
        <aside className="cart-right">
          <PaymentSummary />
        </aside>
      </div>
    </div>
  );
}
