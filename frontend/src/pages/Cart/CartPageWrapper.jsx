import React from 'react';
import CartItems from './CartItems';
import TrustFeatures from './TrustFeatures';
import CartSummary from './CartSummary';
import SavedForLater from './SavedForLater';
import PromoBanner from '../../components/Products utils/PromoBanner';

const CartPageWrapper = () => {
  return (
    <div className="bg-[#f7f9fa] min-h-screen py-10 px-4 font-sans">
      
      {/* Main Centered Container for everything */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* --- Top Section: Cart Details & Summary --- */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Column (List + Trust Badges) */}
          <div className="flex-1 flex flex-col">
            <CartItems />
            <TrustFeatures />
          </div>
          
          {/* Right Column (Checkout Sidebar) */}
          <div className="w-full lg:w-[280px] shrink-0">
            <CartSummary />
          </div>
          
        </div>

        {/* --- Middle Section: Saved for Later --- */}
        {/* By placing it here, it aligns perfectly under the left and right columns */}
        <SavedForLater />

        {/* --- Bottom Section: Promo Banner --- */}
        <PromoBanner />
        
      </div>
      
    </div>
  );
};

export default CartPageWrapper;