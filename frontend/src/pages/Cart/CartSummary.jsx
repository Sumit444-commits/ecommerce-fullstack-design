import React from 'react';

const CartSummary = () => {
  return (
    <div className="w-full flex flex-col gap-4 font-sans mt-[52px]">
      
      {/* Coupon Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <label className="block text-gray-600 text-sm mb-2">Have a coupon?</label>
        <div className="flex">
          <input 
            type="text" 
            placeholder="Add coupon" 
            className="flex-1 border border-gray-300 rounded-l-md px-3 py-2 text-sm outline-none focus:border-blue-500 transition-colors"
          />
          <button className="bg-white hover:bg-gray-50 text-blue-600 border border-l-0 border-gray-300 rounded-r-md px-4 py-2 text-sm font-medium transition-colors">
            Apply
          </button>
        </div>
      </div>

      {/* Totals Section */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
        <div className="flex flex-col gap-2 mb-4 text-sm">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal:</span>
            <span className="font-medium text-gray-900">$1403.97</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Discount:</span>
            <span className="font-medium text-red-500">- $60.00</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Tax:</span>
            <span className="font-medium text-green-500">+ $14.00</span>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-3 mb-5">
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-semibold text-base">Total:</span>
            <span className="text-xl font-bold text-gray-900">$1357.97</span>
          </div>
        </div>

        <button className="w-full bg-[#00b517] hover:bg-[#009913] text-white font-medium py-3.5 rounded-md transition-colors text-lg shadow-sm mb-4">
          Checkout
        </button>

        {/* Payment Icons (Mockup) */}
        <div className="flex justify-center items-center gap-2 h-6">
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