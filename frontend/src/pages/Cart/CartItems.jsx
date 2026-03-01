import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CartItems = () => {
  // Mock data based on your screenshot
  const cartData = [
    {
      id: 1,
      title: 'T-shirts with multiple colors, for men and lady',
      properties: 'Size: medium, Color: blue, Material: Plastic',
      seller: 'Artel Market',
      price: '$78.99',
      qty: 9,
      img: '/images/tech/1.svg' // Replace with your image
    },
    {
      id: 2,
      title: 'T-shirts with multiple colors, for men and lady',
      properties: 'Size: medium, Color: blue, Material: Plastic',
      seller: 'Best factory LLC',
      price: '$39.00',
      qty: 3,
      img: '/images/tech/2.svg'
    },
    {
      id: 3,
      title: 'T-shirts with multiple colors, for men and lady',
      properties: 'Size: medium, Color: blue, Material: Plastic',
      seller: 'Artel Market',
      price: '$170.50',
      qty: 1,
      img: '/images/cloth/4.svg'
    }
  ];

  return (
    <div className="w-full font-sans">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">My cart (3)</h2>
      
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Items List */}
        <div className="flex flex-col">
          {cartData.map((item, index) => (
            <div 
              key={item.id} 
              className={`p-5 flex flex-col sm:flex-row gap-4 ${index !== cartData.length - 1 ? 'border-b border-gray-200' : ''}`}
            >
              {/* Product Image */}
              <div className="w-20 h-20 shrink-0 border border-gray-200 rounded-md bg-[#f7f8fa] flex items-center justify-center p-2">
                <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="text-gray-900 font-medium mb-1 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-sm mb-1">{item.properties}</p>
                <p className="text-gray-500 text-sm mb-3">Seller: {item.seller}</p>
                
                <div className="flex gap-3">
                  <button className="text-red-500 border border-gray-200 hover:bg-red-50 bg-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Remove
                  </button>
                  <button className="text-blue-600 border border-gray-200 hover:bg-blue-50 bg-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                    Save for later
                  </button>
                </div>
              </div>

              {/* Price & Quantity */}
              <div className="flex flex-col items-end justify-start gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                <span className="text-lg font-bold text-gray-900 leading-none">{item.price}</span>
                <select 
                  defaultValue={item.qty}
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-blue-500 bg-white cursor-pointer shadow-sm w-24"
                >
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>Qty: {i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-gray-200 flex items-center justify-between">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors text-sm shadow-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to shop
          </button>
          <button className="text-blue-600 font-medium px-4 py-2 hover:bg-blue-50 rounded-md transition-colors text-sm">
            Remove all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;