import './PaymentSummary.css';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
export default function PaymentSummary() {
  const { cart, shippingCost, placeOrder } = useCart();
  const navigate = useNavigate();

  // Total
  const itemsTotalCents = cart.reduce(
    (previousTotal, nextItem) => previousTotal + nextItem.priceCents,
    0,
  );
  const itemsTotal = itemsTotalCents / 100;

  // Shipping
  const totalBeforeTax = itemsTotal + shippingCost;

  const estimatedTax = totalBeforeTax * 0.1;

  const orderTotal = totalBeforeTax + estimatedTax;

  async function handlePlaceOrder() {
    try {
      await placeOrder();

      navigate('/orders');
    } catch (error) {
      console.error(error);
      alert('Something gone wrong');
    }
  }
  return (
    <>
      <div className="payment-container">
        <h2 className="payment-text">Payment Summary</h2>
        {/* Payment Details */}
        <div className="payment-info">
          {/* Items */}
          <div className="payment-info-items space">
            <div className="payment-item-text">
              Items
              <span className="payment-item-quantity"> ({cart.length})</span>:
            </div>
            <div className="payment-item-price">
              <span className="">${itemsTotal.toFixed(2)}</span>
            </div>
          </div>
          {/* Shipping */}
          <div className="payment-info-shipping space">
            <div className="payment-info-shipping-text">
              Shipping & handling:
            </div>
            <div className="payment-info-shipping-price">
              ${shippingCost.toFixed(2)}
            </div>
          </div>
          <hr className=" horizontal" />
          {/* Before TAX */}
          <div className="payment-info-b-tax space">
            <div className="payment-info-b-tax-text">Total before tax:</div>
            <div className="payment-info-b-tax-price">
              ${totalBeforeTax.toFixed(2)}
            </div>
          </div>
          {/* After TAX */}
          <div className="payment-info-a-tax space">
            <div className="payment-info-a-tax-text">Estimated tax (10%):</div>
            <div className="payment-info-a-tax-price">
              ${estimatedTax.toFixed(2)}
            </div>
          </div>
          <hr className=" horizontal" />
          {/* Total */}
          <div className="payment-info-total space">
            <div className="payment-info-total-text">Order total:</div>
            <div className="payment-info-total-price">
              ${orderTotal.toFixed(2)}
            </div>
          </div>
        </div>
        <div className="payment-container-btn">
          <button className="payment-btn" onClick={handlePlaceOrder}>
            Place your order
          </button>
        </div>
      </div>
    </>
  );
}
