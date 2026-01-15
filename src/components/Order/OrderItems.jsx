import './OrderItems.css';
import gpuImg from '../../assets/gpu.avif';
export default function OrderItems() {
  return (
    <div className="order-itmems-container">
      <h2 className="order-items-title">Order Items</h2>
      <div className="order-left">
        <div className="order-left-container">
          <div className="order-left-img">
            <img src={gpuImg}></img>
          </div>
          <div className="order-left-details">
            <div className="order-left-details-title">
              <h2>Wireless Headphones</h2>
              <p>
                Premium noise-canceling wireless headphones with superior sound
                quality
              </p>
            </div>
            <div className="order-left-details-info">
              <p>
                Qty: <span>1</span>
              </p>
              <span>•</span>
              <span>$129.99</span>
            </div>
          </div>
          <p>Arriving by Jun 16, 2026</p>
        </div>
      </div>
      <div className="order-right"></div>
    </div>
  );
}
