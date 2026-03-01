import React, { useState } from 'react';

// Assuming you have saved these components in the same folder or adjust paths accordingly
import Breadcrumb from '../../components/Products utils/Breadcrumb';
import Sidebar from '../../components/Products utils/Sidebar';
import TopControls from '../../components/Products utils/TopControls';
import ProductCardList from '../../components/Products utils/ProductCardList';
import ProductCardGrid from '../../components/Products utils/ProductCardGrid';
import Pagination from '../../components/Products utils/Pagination';
import Newsletter from '../Home/Newsletter';

const PageWrapper = () => {
  // 1. State for managing the view layout
  const [viewMode, setViewMode] = useState('list'); // 'list' | 'grid'
  
  // 2. State for active filters (can be expanded into a real filter logic later)
  const [activeFilters, setActiveFilters] = useState(['Samsung', 'Apple', 'Poco', 'Metallic']);

  // 3. Mock data for the products
  const products = [
    {
      title: 'Canon Camera EOS 2000, Black 10x zoom',
      price: '$998.00',
      oldPrice: '$1128.00',
      rating: 4.5, // Used 4.5 so it shows half/partial stars
      orders: 154,
      shipping: 'Free Shipping',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      img: '/images/tech/1.svg'
    },
    {
      title: 'GoPro HERO6 4K Action Camera - Black',
      price: '$998.00',
      oldPrice: '$1128.00',
      rating: 4.0,
      orders: 154,
      shipping: 'Free Shipping',
      desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.',
      img: '/images/tech/2.svg'
    },
    {
      title: 'Apple iPhone 12 Pro Max - 256GB',
      price: '$998.00',
      oldPrice: '$1128.00',
      rating: 4.8,
      orders: 320,
      shipping: 'Free Shipping',
      desc: 'The ultimate iPhone. Super Retina XDR display, A14 Bionic chip, and a Pro camera system for next-level photography.',
      img: '/images/tech/3.svg'
    },
    {
      title: 'Apple MacBook Pro 13" M1 Chip',
      price: '$1299.00',
      oldPrice: '$1499.00',
      rating: 4.9,
      orders: 89,
      shipping: 'Free Shipping',
      desc: 'Powerful Apple M1 chip. 8-core CPU and 8-core GPU to tackle everyday tasks and heavier workflows with ease.',
      img: '/images/tech/4.svg'
    },
    {
      title: 'Smart Watch Series 7 - Aluminum Case',
      price: '$399.00',
      oldPrice: '$429.00',
      rating: 4.2,
      orders: 412,
      shipping: 'Free Shipping',
      desc: 'Always-On Retina display. Blood oxygen app and ECG app. The most durable Apple Watch ever built.',
      img: '/images/tech/5.svg'
    },
    {
      title: 'Noise Cancelling Wireless Headphones',
      price: '$299.00',
      oldPrice: '$349.00',
      rating: 4.6,
      orders: 231,
      shipping: 'Free Shipping',
      desc: 'Industry-leading noise cancellation. Up to 30 hours of battery life. Premium sound quality with deep bass.',
      img: '/images/tech/6.svg'
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-[#f7f9fa] pb-10">
      <div className="max-w-7xl mx-auto px-4 pt-2">
        
        <Breadcrumb items={['Home', 'Clothings', "Men's wear", 'Summer clothing']} />

        <div className="flex flex-col lg:flex-row gap-6 mt-2">
          
          {/* Left Sidebar */}
          <Sidebar />

          {/* Right Main Content */}
          <main className="flex-1 flex flex-col gap-4">
            
            <TopControls 
              viewMode={viewMode} 
              setViewMode={setViewMode} 
              activeFilters={activeFilters}
            />

            {/* Dynamic Product Rendering based on state */}
            {viewMode === 'list' ? (
              // List View Layout
              <div className="flex flex-col gap-4">
                {products.map((product, index) => (
                  <ProductCardList key={index} product={product} />
                ))}
              </div>
            ) : (
              // Grid View Layout
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                {products.map((product, index) => (
                  <ProductCardGrid key={index} product={product} />
                ))}
              </div>
            )}

            <Pagination />

          </main>
        </div>
      </div>
    </div>
    <Newsletter />
    </>
  );
};

export default PageWrapper;