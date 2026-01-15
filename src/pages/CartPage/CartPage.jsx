import PaymentSummary from '../../components/PaymentSummary/PaymentSummary';
import PreviewOrder from '../../components/PreviewOrder/PreviewOrder';
import './CartPage.css';
export default function CartPage() {
  return (
    <div className="cart-page">
      <h1 className="cart-title">Checkout (1)</h1>
      <h2 className="cart-preview-text">Review your order</h2>
      <div className="cart-grid-layout">
        <main className="cart-left">
          <PreviewOrder />
        </main>
        <aside className="cart-right">
          <PaymentSummary />
        </aside>
      </div>
    </div>
  );
}
