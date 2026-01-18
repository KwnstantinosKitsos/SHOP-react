import './ProductCard.css';
import StarRating from '../StarRating/StarRating';
import { useCart } from '../../context/CartContext';
export default function ProductCard({ product }) {
  const stars = [1, 2, 3, 4, 5];
  // const mockProduct = {
  //   title: 'GTX 1080 Ti',
  //   description: 'RGB backlit mechanical keyboard with customizable keys',
  //   rating: 4,
  //   ratingCount: 18,
  //   price: 799.99,
  // };
  const { addToCard } = useCart();
  return (
    <>
      <div className="product-container">
        <div className="product-container-img">
          <img
            src={product.thumbnail}
            className="product-img"
            alt={product.title}
          />
        </div>
        <div className="product-info-container">
          <h2 className="product-info-title">{product.title}</h2>
          <p className="product-info-text">{product.description}</p>
        </div>
        <div className="product-rating-container">
          {stars.map((star) => {
            return <StarRating key={star} filled={star <= product.rating} />;
          })}
          <span className="product-rating-count">({product.ratingCount})</span>
        </div>
        <div className="product-price">
          ${(product.priceCents / 100).toFixed(2)}
        </div>
        <button className="product-btn" onClick={() => addToCard(product)}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
