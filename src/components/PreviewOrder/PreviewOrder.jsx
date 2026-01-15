import gpuImg from '../../assets/gpu.avif';
import './PreviewOrder.css';

export default function PreviewOrder() {
  return (
    /* Review Your Order */
    <div className="preview-container">
      {/* Left Side - Details */}
      <div className="preview-left-info">
        <p className="preview-delivery-time"> Delivery time: Feb 12 2026 </p>
        <div className="preview-img">
          <img src={gpuImg} />
        </div>
      </div>
      {/* Right Side - Details */}
      <div className="preview-right">
        <div className="preview-details">
          <h3 className="preview-details-title">GTX 1080 Ti</h3>
          <p className="preview-details-description">
            RGB backlit mechanical keyboard with customizable keys
          </p>
        </div>
        <div className="preview-info">
          <span className="preview-info-price">$799.99</span>
          <span className="preview-info-quantity">Quantity: 3</span>
        </div>
        {/* Shipping Options */}
        <div className="preview-shipping">
          <p className="preview-shipping-text">Shipping:</p>

          <div className="preview-shipping-radio">
            <label className="preview-shipping-free">
              <input
                type="radio"
                className="preview-shipping-free-input radio"
              />
              <span className="preview-shipping-free-text">
                Free Shipping (5-7 days)
              </span>
            </label>
            <label className="preview-shipping-paid">
              <input
                type="radio"
                className="preview-shipping-paid-input radio"
              />
              <span className="preview-shipping-paid-text">
                Fast Shipping - $9.99 (2-3 days)
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
