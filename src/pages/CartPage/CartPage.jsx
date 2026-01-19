import PaymentSummary from '../../components/PaymentSummary/PaymentSummary';
import PreviewOrder from '../../components/PreviewOrder/PreviewOrder';
import ShippingOptions from '../../components/ShippingOptions/ShippingOptions';
import './CartPage.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cart } = useCart();

  if (cart.length === 0) {
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
        Checkout <span className="art-title-quantity">({cart.length})</span>
      </h1>
      <h2 className="cart-preview-text">Review your order</h2>
      <div className="cart-grid-layout">
        <main className="cart-left">
          <div className="cart-items">
            {cart.map((item) => {
              return <PreviewOrder key={cart.id} product={item} />;
            })}

            {/* <PreviewOrder />
            <PreviewOrder />
            <PreviewOrder />
            <PreviewOrder />
            <PreviewOrder /> */}
          </div>
          <ShippingOptions />
        </main>
        <aside className="cart-right">
          <PaymentSummary />
        </aside>
      </div>
    </div>
  );
}
