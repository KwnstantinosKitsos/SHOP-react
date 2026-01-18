import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext';
import { useCart } from '../../context/CartContext';
export default function Navbar() {
  const { searchItems, setSearchItems } = useSearch();
  const { cart } = useCart();

  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="con1">
            {/* Logo */}
            <div className="logo">
              <span className="logo-text">
                <Link to="/" className="logo-text link">
                  SHOP
                </Link>
              </span>
            </div>
          </div>
          {/* Search Bar */}
          <div className="con2">
            <div className="search-container">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
              </svg>
              <input
                type="text"
                className="input"
                placeholder="Search..."
                value={searchItems}
                onChange={(event) => setSearchItems(event.target.value)}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="con3">
            <Link to="/orders" className="btn-orders">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M560.3 301.2C570.7 313 588.6 315.6 602.1 306.7C616.8 296.9 620.8 277 611 262.3L563 190.3C560.2 186.1 556.4 182.6 551.9 180.1L351.4 68.7C332.1 58 308.6 58 289.2 68.7L88.8 180C83.4 183 79.1 187.4 76.2 192.8L27.7 282.7C15.1 306.1 23.9 335.2 47.3 347.8L80.3 365.5L80.3 418.8C80.3 441.8 92.7 463.1 112.7 474.5L288.7 574.2C308.3 585.3 332.2 585.3 351.8 574.2L527.8 474.5C547.9 463.1 560.2 441.9 560.2 418.8L560.2 301.3zM320.3 291.4L170.2 208L320.3 124.6L470.4 208L320.3 291.4zM278.8 341.6L257.5 387.8L91.7 299L117.1 251.8L278.8 341.6z" />
              </svg>
            </Link>
            <Link className="btn-cart" to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <path d="M24 48C10.7 48 0 58.7 0 72C0 85.3 10.7 96 24 96L69.3 96C73.2 96 76.5 98.8 77.2 102.6L129.3 388.9C135.5 423.1 165.3 448 200.1 448L456 448C469.3 448 480 437.3 480 424C480 410.7 469.3 400 456 400L200.1 400C188.5 400 178.6 391.7 176.5 380.3L171.4 352L475 352C505.8 352 532.2 330.1 537.9 299.8L568.9 133.9C572.6 114.2 557.5 96 537.4 96L124.7 96L124.3 94C119.5 67.4 96.3 48 69.2 48L24 48zM208 576C234.5 576 256 554.5 256 528C256 501.5 234.5 480 208 480C181.5 480 160 501.5 160 528C160 554.5 181.5 576 208 576zM432 576C458.5 576 480 554.5 480 528C480 501.5 458.5 480 432 480C405.5 480 384 501.5 384 528C384 554.5 405.5 576 432 576z" />
              </svg>
              {cart.length > 0 && (
                <span className="cart-number">
                  {cart.length}
                  {console.log(cart)}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
      <hr className="line" />
    </>
  );
}
