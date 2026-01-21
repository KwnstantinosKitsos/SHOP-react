import './PriceDetails.css';

export default function PriceDetails({ priceDetails, totalItems }) {
  return (
    <div className="price-details-container">
      <h3 className="price-details-h3">Price Details</h3>
      <div className="price-details-info">
        <div className="price-details-info-container">
          {/* row 1 */}
          <div className="price-details-row1 row">
            <div className="price-details-row1-subtotal label">
              Subtotal ({totalItems})
            </div>
            <div className="price-details-row1-price price ">
              ${priceDetails.subTotal}
            </div>
          </div>
          {/* row 2 */}
          <div className="price-details-row2 row">
            <div className="price-details-row2-shipping label">
              Shipping & Handling
            </div>
            <div className="price-details-row2-price price">
              ${priceDetails.shippingCost}
            </div>
          </div>
          {/* row 3 */}
          <div className="price-details-row3 row">
            <div className="price-details-row3-tax label">Tax (10%)</div>
            <div className="price-details-row3-price price ">
              ${priceDetails.tax}
            </div>
          </div>
          <hr className="horizontal" />
          {/* row 4 */}
          <div className="price-details-row4 row">
            <div className="price-details-row4-total">Total</div>
            <div className="price-details-row4-price">
              ${priceDetails.total}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
