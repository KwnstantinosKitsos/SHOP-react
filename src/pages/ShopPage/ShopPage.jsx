import ProductCard from '../../components/ProductCard/ProductCard';
import './ShopPage.css';
import { useEffect, useState } from 'react';
export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5001/products');

        if (!response.ok) {
          throw new Error('API Error:', Error);
        }
        const data = await response.json();

        // Upadte State
        setProducts(data);
      } catch (error) {
        setError('Αδυναμία φόρτωσης προϊόντων. Παρακαλώ δοκιμάστε αργότερα.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  // Error
  if (error) {
    return <div className="error-container">Σφάλμα: {error}</div>;
  }
  // Loading
  if (loading) {
    return <div className="loading-container">Φόρτωση προϊόντων...</div>;
  }

  // Main return
  return (
    <>
      <div className="product-grid">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}

        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </>
  );
}
