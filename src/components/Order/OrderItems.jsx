import './OrderItems.css';
import gpuImg from '../../assets/gpu.avif';
export default function OrderItems() {
  return (
    <div className="order-itmems-container">
      <h2 className="order-items-title">Order Items</h2>
      <div className="order-item-container">
        {/* map() */}
        <div className="order-item">
          {/* Product Image */}
          <div className="order-item-img-container">
            <img className="order-item-img" src={gpuImg}></img>
          </div>

          <div className="order-item-info">
            <div className="order-item-info-product">
              <h3>Smart Watch</h3>
              {/* <span className="order-item-total">$799.99</span> */}
            </div>
            <p className="order-item-descreption">
              Ergonomic aluminum laptop stand for better posture and cooling
            </p>
            <div className="order-item-details">
              <span className="order-item-quantity">Qty: 1</span>
              <span className="order-item-dot">•</span>
              <span className="order-item-price">$799.99</span>
            </div>
            <div className="order-item-arrival-container">
              <span className="order-item-arrival">
                {' '}
                Arriving by Jun 16, 2026
              </span>
            </div>
          </div>
          <div className="order-item-total">$799.99</div>
        </div>
      </div>
    </div>
  );
}
