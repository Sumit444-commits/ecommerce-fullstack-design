import React from 'react';
import { ShoppingCart } from 'lucide-react';

const SavedForLater = () => {
  // Mock data representing the saved items
  const savedItems = [
    {
      id: 1,
      price: '$99.50',
      title: 'GoPro HERO6 4K Action Camera - Black',
      img: '/images/tech/7.svg', // Replace with actual image paths
    },
    {
      id: 2,
      price: '$99.50',
      title: 'GoPro HERO6 4K Action Camera - Black',
      img: '/images/tech/8.svg',
    },
    {
      id: 3,
      price: '$99.50',
      title: 'GoPro HERO6 4K Action Camera - Black',
      img: '/images/tech/9.svg',
    },
    {
      id: 4,
      price: '$99.50',
      title: 'GoPro HERO6 4K Action Camera - Black',
      img: '/images/tech/10.svg',
    }
  ];

  return (
    <div className="w-full font-sans mt-6">
      <div className="bg-white border border-gray-200 rounded-lg p-5 md:p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          Saved for later
        </h3>
        
        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {savedItems.map((item) => (
            <div key={item.id} className="flex flex-col group">
              {/* Product Image Container */}
              <div className="w-full aspect-square bg-[#f2f4f5] rounded-lg mb-4 flex items-center justify-center p-6 transition-colors group-hover:bg-gray-200">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="max-w-full max-h-full object-contain mix-blend-multiply" 
                />
              </div>
              
              {/* Product Price */}
              <span className="text-lg font-bold text-gray-900 mb-1 leading-none">
                {item.price}
              </span>
              
              {/* Product Title */}
              <p className="text-sm text-gray-500 leading-snug mb-4 line-clamp-2 min-h-[40px]">
                {item.title}
              </p>
              
              {/* Action Button */}
              <button className="flex items-center justify-center gap-2 text-blue-600 border border-gray-300 bg-white hover:bg-blue-50 rounded-md py-2 px-4 transition-colors font-medium text-sm mt-auto w-max shadow-sm">
                <ShoppingCart className="w-4 h-4" />
                Move to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedForLater;