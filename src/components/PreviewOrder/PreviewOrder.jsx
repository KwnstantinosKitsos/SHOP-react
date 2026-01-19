import './PreviewOrder.css';

export default function PreviewOrder({ product }) {
  return (
    /* Review Your Order */
    <div className="preview-container">
      {/* Left Side - Details */}
      <div className="preview-left-info">
        <p className="preview-delivery-time"> Delivery time: Feb 12 2026 </p>
        <div className="preview-img">
          <img src={product.thumbnail} alt={product.title} />
        </div>
      </div>
      {/* Right Side - Details */}
      <div className="preview-right">
        <div className="preview-details">
          <h3 className="preview-details-title">{product.title}</h3>
          <p className="preview-details-description">{product.description}</p>
        </div>
        <div className="preview-info">
          <span className="preview-info-price">
            ${(product.priceCents / 100).toFixed(2)}
          </span>
          <span className="preview-info-quantity">
            {/* TO DO: dynamic quantity */}
            Quantity: 1
          </span>
        </div>
      </div>
    </div>
  );
}
