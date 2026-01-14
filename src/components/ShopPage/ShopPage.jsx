import ProductCard from '../ProductCard/ProductCard';
import './ShopPage.css';
export default function ShopPage() {
  return (
    <>
      <div className="product-grid">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}
