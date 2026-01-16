import './OrderButtons.css';
import { useNavigate } from 'react-router-dom';
export default function OrderButtons() {
  const navigate = useNavigate();
  return (
    <>
      <div className="orders-btns">
        <button className="btn-continue" onClick={() => navigate('/')}>
          Continue Shopping
        </button>
        <button className="btn-print" onClick={() => window.print()}>
          Print Order
        </button>
      </div>
    </>
  );
}
