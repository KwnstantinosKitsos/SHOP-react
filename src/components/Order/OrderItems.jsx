import './OrderItems.css';

export default function OrderItems({ orderItems }) {
  return (
    <div className="order-itmems-container">
      <h2 className="order-items-title">Order Items</h2>
      <div className="order-item-container">
        {/* map() */}
        {orderItems.map((orderItem, index) => {
          return (
            <div className="order-item" key={orderItem.id || index}>
              {/* Product Image */}
              <div className="order-item-img-container">
                <img
                  className="order-item-img"
                  src={orderItem.thumbnail}
                  alt={orderItem.title}
                ></img>
              </div>

              <div className="order-item-info">
                <div className="order-item-info-product">
                  <h3>{orderItem.title}</h3>
                  {/* <span className="order-item-total">$799.99</span> */}
                </div>
                <p className="order-item-descreption">
                  {orderItem.description}
                </p>
                <div className="order-item-details">
                  <span className="order-item-quantity">Qty: 1</span>
                  <span className="order-item-dot">•</span>
                  <span className="order-item-price">
                    ${(orderItem.priceCents / 100).toFixed(2)}
                  </span>
                </div>
                <div className="order-item-arrival-container">
                  <span className="order-item-arrival">
                    {' '}
                    Arriving by {orderItem.deliveryDate}
                  </span>
                </div>
              </div>
              <div className="order-item-total">
                ${(orderItem.priceCents / 100).toFixed(2)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
