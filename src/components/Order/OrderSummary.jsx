import './OrderSummary.css';
export default function OrderSummary({ order }) {
  return (
    <div className="order-summary-container">
      <h2 className="order-id title">Order Summary</h2>
      <div className="order-summary">
        <div className="order-summary-id">
          <span> Order ID</span>
          <h3 className="h3">{order.id}</h3>
        </div>
        <div className="order-summary-placed">
          <span> Order Placed</span>
          <h3 className="h3">{order.day}</h3>
        </div>
        <div className="order-summary-total">
          <span>Total</span>
          <h3 className="h3 total">${order.priceDetails.total}</h3>
        </div>
      </div>
      <hr />
      <h3 className="order-address title">Delivery Address</h3>
      {/* JUST UI, no Utility */}
      {/* Address */}
      <div className="address-container">
        <p>
          John Doe <br />
          123 Main Street, Apt 4B <br />
          New York, NY 10001 <br />
          United States
        </p>
      </div>
      <hr />
      {/* Payment */}
      <div className="payment">
        <h3 className="order-payment title">Payment Method</h3>
        <p>Visa ending in *4242</p>
      </div>
    </div>
  );
}
