import './OrderButtons.css';
import { Link } from 'react-router-dom';
export default function OrderButtons() {
  return (
    <>
      <div className="orders-btns">
        <Link className="btn-continue" to="/">
          Continue Shopping
        </Link>
        <button className="btn-print" onClick={() => window.print()}>
          Print Order
        </button>
      </div>
    </>
  );
}
