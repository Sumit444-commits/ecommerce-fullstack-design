import React, { useState } from 'react';

const CartSummary = ({ items = [] }) => {
  // --- State for Coupon Logic ---
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // --- Dynamic Calculations ---
  // 1. Calculate Subtotal by multiplying each item's quantity by its price
  const subtotal = items.reduce((sum, item) => {
    // Fallback to tiered pricing if standard price doesn't exist
    const price = item.product?.price || item.product?.tieredPricing?.[0]?.price || 0;
    return sum + (price * (item.qty || 1));
  }, 0);

  // 2. Calculate Tax (Mocked at 5% of subtotal)
  const tax = subtotal * 0.05;

  // 3. Calculate Final Total
  const total = subtotal - discount + tax;

  // --- Coupon Handler ---
  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'DISCOUNT20') {
      setDiscount(20.00); // Apply a flat $20 discount
      setCouponCode('');
    } else {
      alert("Invalid coupon code. Try 'DISCOUNT20'");
    }
  };

  return (
    <div className="w-full flex flex-col gap-4 font-sans mt-[52px]">
      
      {/* Coupon Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <label className="block text-gray-600 text-sm mb-2">Have a coupon?</label>
        <div className="flex">
          <input 
            type="text" 
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            placeholder="Add coupon" 
            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
          />
          <button 
            onClick={handleApplyCoupon}
            disabled={items.length === 0}
            className={`bg-white text-blue-600 border border-l-0 border-gray-300 rounded-r-md px-4 py-2 text-sm font-medium transition-colors
              ${items.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            Apply
          </button>
        </div>
        {discount > 0 && (
          <p className="text-xs text-green-600 mt-2 mt-1">Coupon applied successfully!</p>
        )}
      </div>

      {/* Totals Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex flex-col gap-2 mb-4 text-sm">
          
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <span>Discount:</span>
            <span className="font-medium text-red-500">- ${discount.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-gray-600">
            <span>Tax (5%):</span>
            <span className="font-medium text-green-500">+ ${tax.toFixed(2)}</span>
          </div>

        </div>

        <div className="border-t border-gray-200 pt-3 mb-5">
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-semibold text-base">Total:</span>
            <span className="text-xl font-bold text-gray-900">${Math.max(0, total).toFixed(2)}</span>
          </div>
        </div>

        <button 
          disabled={items.length === 0}
          className={`w-full text-white font-medium py-3.5 rounded-md transition-colors text-lg shadow-sm mb-4
            ${items.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00b517] hover:bg-[#009913]'}`}
        >
          Checkout
        </button>

        {/* Payment Icons (Mockup) */}
        <div className="flex justify-center items-center gap-2 h-6 opacity-80">
          <div className="w-9 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-blue-700">AMEX</div>
          <div className="w-9 h-6 bg-gray-200 rounded flex items-center justify-center">
             <div className="w-3 h-3 bg-red-500 rounded-full -mr-1 mix-blend-multiply"></div>
             <div className="w-3 h-3 bg-yellow-400 rounded-full mix-blend-multiply"></div>
          </div>
          <div className="w-9 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-blue-500 italic">PayPal</div>
          <div className="w-9 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-blue-900">VISA</div>
          <div className="w-9 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-bold text-black">Pay</div>
        </div>
      </div>

    </div>
  );
};

export default CartSummary;