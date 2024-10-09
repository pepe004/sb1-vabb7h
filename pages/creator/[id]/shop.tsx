import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { databases } from '@/lib/appwrite';

export default function CreatorShop() {
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetchProducts();
    }
  }, [id]);

  const fetchProducts = async () => {
    try {
      const response = await databases.listDocuments('YOUR_DATABASE_ID', 'products', [
        Query.equal('creatorId', id),
      ]);
      setProducts(response.documents);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h1>Creator Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.$id} className="border p-4 rounded">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}