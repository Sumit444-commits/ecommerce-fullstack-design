import React from 'react';

const RelatedProducts = () => {
  // Mock data for the 6 related products
  const products = Array(6).fill({
    title: 'Xiaomi Redmi 8 Original',
    price: '$32.00-$40.00',
    img: '/images/tech/1.svg', // Replace with your actual image path
  });

  return (
    <div className="w-full max-w-7xl mx-auto font-sans mb-6">
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <h3 className="text-lg font-semibold text-gray-900 mb-5">
          Related products
        </h3>
        
        {/* Responsive Grid: 2 columns mobile, 3 tablet, 6 desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Image Container */}
              <div className="w-full aspect-square bg-[#f2f4f5] rounded-md mb-3 flex items-center justify-center p-4 transition-colors group-hover:bg-gray-200">
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                />
              </div>
              
              {/* Product Info */}
              <h4 className="text-sm text-gray-800 mb-1 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                {product.title}
              </h4>
              <span className="text-sm text-gray-500">
                {product.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;