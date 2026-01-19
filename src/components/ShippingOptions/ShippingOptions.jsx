import './ShippingOptions.css';
import { useCart } from '../../context/CartContext';
export default function ShippingOptions() {
  const { shippingMethod, setShippingMethod } = useCart();
  return (
    <>
      {/* Shipping Options */}
      <div className="preview-shipping">
        <p className="preview-shipping-text">Shipping:</p>

        <div className="preview-shipping-radio">
          <label className="preview-shipping-free">
            <input
              type="radio"
              className="preview-shipping-free-input radio"
              name="order-shipping"
              checked={shippingMethod === 'free' || shippingMethod === ''}
              onChange={() => setShippingMethod('free')}
            />
            <span className="preview-shipping-free-text">
              Free Shipping (5-7 days)
            </span>
          </label>
          <label className="preview-shipping-paid">
            <input
              type="radio"
              className="preview-shipping-paid-input radio"
              name="order-shipping"
              checked={shippingMethod === 'fast'}
              onChange={() => setShippingMethod('fast')}
            />
            <span className="preview-shipping-paid-text">
              Fast Shipping - $9.99 (2-3 days)
            </span>
          </label>
        </div>
      </div>
    </>
  );
}
