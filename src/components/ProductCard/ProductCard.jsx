import './ProductCard.css';
import gpuImg from '../../assets/gpu.avif';
import StarRating from '../StarRating/StarRating';
export default function ProductCard() {
  const stars = [1, 2, 3, 4, 5];
  const mockProduct = {
    title: 'GTX 1080 Ti',
    description: 'RGB backlit mechanical keyboard with customizable keys',
    rating: 4,
    ratingCount: 18,
    price: 799.99,
  };
  return (
    <>
      <div className="product-container">
        <div className="product-container-img">
          <img src={gpuImg} className="product-img" alt="Product Image" />
        </div>
        <div className="product-info-container">
          <h2 className="product-info-title">{mockProduct.title}</h2>
          <p className="product-info-text">{mockProduct.description}</p>
        </div>
        <div className="product-rating-container">
          {stars.map((star) => {
            return (
              <StarRating key={star} filled={star <= mockProduct.rating} />
            );
          })}
          <span className="product-rating-count">
            ({mockProduct.ratingCount})
          </span>
        </div>
        <div className="product-price">${mockProduct.price}</div>
        <button className="product-btn">Add to Cart</button>
      </div>
    </>
  );
}
