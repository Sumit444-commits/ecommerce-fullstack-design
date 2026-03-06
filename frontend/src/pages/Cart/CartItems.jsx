import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartItems = ({ items = [], loading, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="w-full font-sans bg-white border border-gray-200 rounded-lg p-10 flex justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full font-sans">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        My cart ({items.length})
      </h2>
      
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        
        {/* Empty Cart State */}
        {items.length === 0 ? (
          <div className="p-10 text-center text-gray-500 flex flex-col items-center">
            <p className="mb-4">Your cart is currently empty.</p>
            <button 
              onClick={() => navigate('/products')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-colors"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col">
            {items.map((item, index) => (
              <div 
                key={item._id} 
                className={`p-5 flex flex-col sm:flex-row gap-4 ${index !== items.length - 1 ? 'border-b border-gray-200' : ''}`}
              >
                {/* Product Image */}
                <div 
                  onClick={() => navigate(`/product/${item.product?._id}`)}
                  className="w-20 h-20 shrink-0 border border-gray-200 rounded-md bg-[#f7f8fa] flex items-center justify-center p-2 cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <img 
                    src={item.product?.images?.[0] || '/images/placeholder.svg'} 
                    alt={item.product?.title} 
                    className="max-w-full max-h-full object-contain mix-blend-multiply" 
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 
                    onClick={() => navigate(`/product/${item.product?._id}`)}
                    className="text-gray-900 font-medium mb-1 leading-snug cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    {item.product?.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-1">{item.properties || 'Standard variant'}</p>
                  <p className="text-gray-500 text-sm mb-3">Seller: {item.product?.supplier?.name || 'Store'}</p>
                  
                  <div className="flex gap-3">
                    <button 
                      onClick={() => onRemoveItem(item._id)}
                      className="text-red-500 border border-gray-200 hover:bg-red-50 bg-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm"
                    >
                      Remove
                    </button>
                    <button className="text-blue-600 border border-gray-200 hover:bg-blue-50 bg-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">
                      Save for later
                    </button>
                  </div>
                </div>

                {/* Price & Quantity */}
                <div className="flex flex-col items-end justify-start gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                  <span className="text-lg font-bold text-gray-900 leading-none">
                    ${(item.product?.price || 0).toFixed(2)}
                  </span>
                  
                  {/* Dynamic Quantity Selector */}
                  <select 
                    value={item.qty}
                    onChange={(e) => onUpdateQuantity(item._id, Number(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 outline-none focus:border-blue-500 bg-white cursor-pointer shadow-sm w-24"
                  >
                    {[...Array(Math.max(10, item.qty))].map((_, i) => (
                      <option key={i + 1} value={i + 1}>Qty: {i + 1}</option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-4 border-t border-gray-200 flex items-center justify-between">
            <button 
              onClick={() => navigate('/products')}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md transition-colors text-sm shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to shop
            </button>
            <button 
              onClick={onClearCart}
              className="text-blue-600 font-medium px-4 py-2 hover:bg-blue-50 rounded-md transition-colors text-sm border border-transparent hover:border-blue-100"
            >
              Remove all
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;