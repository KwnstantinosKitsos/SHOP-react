import './PaymentSummary.css';
export default function PaymentSummary() {
  return (
    <>
      <div className="payment-container">
        <h2 className="payment-text">Payment Summary</h2>
        {/* Payment Details */}
        <div className="payment-info">
          {/* Items */}
          <div className="payment-info-items space">
            <div className="payment-item-text">
              Items<span className="payment-item-quantity"> (1)</span>:
            </div>
            <div className="payment-item-price">
              <span className="">$799.99</span>
            </div>
          </div>
          {/* Shipping */}
          <div className="payment-info-shipping space">
            <div className="payment-info-shipping-text">
              Shipping & handling:
            </div>
            <div className="payment-info-shipping-price">$0.00</div>
          </div>
          <hr className=" horizontal" />
          {/* Before TAX */}
          <div className="payment-info-b-tax space">
            <div className="payment-info-b-tax-text">Total before tax:</div>
            <div className="payment-info-b-tax-price">$799.97</div>
          </div>
          {/* After TAX */}
          <div className="payment-info-a-tax space">
            <div className="payment-info-a-tax-text">Estimated tax (10%):</div>
            <div className="payment-info-a-tax-price">$79.99</div>
          </div>
          <hr className=" horizontal" />
          {/* Total */}
          <div className="payment-info-total space">
            <div className="payment-info-total-text">Order total:</div>
            <div className="payment-info-total-price">$880.00</div>
          </div>
        </div>
        <div className="payment-container-btn">
          <button className="payment-btn">Place your order</button>
        </div>
      </div>
    </>
  );
}
