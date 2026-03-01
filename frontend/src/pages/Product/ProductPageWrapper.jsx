import React, { useState } from 'react';

// Assuming you have saved these components in the same folder or adjust paths accordingly
import Breadcrumb from '../../components/Products utils/Breadcrumb';
import Sidebar from '../../components/Products utils/Sidebar';
import TopControls from '../../components/Products utils/TopControls';
import ProductCardList from '../../components/Products utils/ProductCardList';
import ProductCardGrid from '../../components/Products utils/ProductCardGrid';
import Pagination from '../../components/Products utils/Pagination';
import ProductDetail from './ProductDetail';
import ProductDescription from './ProductDescription';
import RelatedProducts from './RelatedProducts';
import PromoBanner from '../../components/Products utils/PromoBanner';

const ProductPageWrapper = () => {

  return (
    <div className="min-h-screen bg-[#f7f9fa] pb-10">
      <div className="max-w-7xl mx-auto px-4 pt-2">
        
        <Breadcrumb items={['Home', 'Clothings', "Men's wear", 'Summer clothing']} />

        <ProductDetail />

        <ProductDescription/>

        <RelatedProducts />
        <PromoBanner />
      </div>
    </div>
  );
};

export default ProductPageWrapper;