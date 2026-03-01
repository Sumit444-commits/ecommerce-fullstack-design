import React from 'react';

const RecommendedItems = () => {
  // Mock data representing the 10 products
  const recommendations = [
    { price: '$10.30', name: 'T-shirts with multiple colors, for men', img: '/images/cloth/1.svg' },
    { price: '$10.30', name: 'Jeans shorts for men blue color', img: '/images/cloth/2.svg' },
    { price: '$12.50', name: 'Brown winter coat medium size', img: '/images/cloth/3.svg' },
    { price: '$34.00', name: 'Jeans bag for travel for men', img: '/images/cloth/4.svg' },
    { price: '$99.00', name: 'Leather wallet', img: '/images/cloth/5.svg' },
    { price: '$9.99', name: 'Canon camera black, 100x zoom', img: '/images/cloth/6.svg' },
    { price: '$8.99', name: 'Headset for gaming with mic', img: '/images/cloth/7.svg' },
    { price: '$10.30', name: 'Smartwatch silver color modern', img: '/images/cloth/1.svg' },
    { price: '$10.30', name: 'Blue wallet for men leather metarfial', img: '/images/cloth/2.svg' },
    { price: '$80.95', name: 'Jeans bag for travel for men', img: '/images/cloth/4.svg' },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto  font-sans mb-10">
      <h3 className="text-xl font-semibold text-gray-900 mb-5">
        Recommended items
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recommendations.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Product Image */}
            <div className="h-40 w-full mb-4 flex items-center justify-center bg-white">
              {/* Replace src with your actual image paths */}
              <img 
                src={item.img} 
                alt={item.name} 
                className="object-contain h-full w-full" 
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col mt-auto">
              <span className="text-base font-semibold text-gray-900 mb-1">
                {item.price}
              </span>
              <p className="text-sm text-gray-500 leading-snug line-clamp-2">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedItems;