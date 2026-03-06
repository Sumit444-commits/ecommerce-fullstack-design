import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../../store/AppContext'; // Adjust path if needed

import Breadcrumb from '../../components/Products utils/Breadcrumb';
import ProductDetail from './ProductDetail';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import PromoBanner from '../../components/Products utils/PromoBanner';

const ProductPageWrapper = () => {
  const { id } = useParams(); // Get product ID from /product/:id
  const { Api } = useStore();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Adjust this endpoint to match your backend route
        const response = await fetch(`${Api}/api/data/product/get/${id}`,{
          method:"GET",
        });
        
        if (response.ok) {
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, Api]);

  // Loading state (You can replace this with a nice Skeleton loader later)
  if (loading) {
    return <div className="min-h-screen bg-[#f7f9fa] flex items-center justify-center">Loading product details...</div>;
  }

  // Not found state
  if (!product) {
    return <div className="min-h-screen bg-[#f7f9fa] flex items-center justify-center">Product not found.</div>;
  }

  return (
    <div className="min-h-screen bg-[#f7f9fa] pb-10">
      <div className="max-w-7xl mx-auto px-4 pt-2">
        
        {/* Pass category dynamically to Breadcrumb if needed */}
        <Breadcrumb items={['Home', product.category, product.title]} />

        {/* Pass the fetched product data down as props */}
        <ProductDetail product={product} />

        <ProductDescription product={product} />

        <RelatedProducts />
        <PromoBanner />
      </div>
    </div>
  );
};

export default ProductPageWrapper;