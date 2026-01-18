import ProductCard from '../../components/ProductCard/ProductCard';
import './ShopPage.css';
import { useEffect, useState } from 'react';
import { useSearch } from '../../context/SearchContext';

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { searchItems } = useSearch();

  // Search only by title
  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchItems.toLowerCase());
  });

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

  return (
    <>
      <div className="product-grid">
        {filteredProducts.map((product) => {
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
