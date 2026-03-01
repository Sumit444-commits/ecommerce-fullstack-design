import React from 'react';

const PromoBanner = () => {
  return (
    <div className="w-full max-w-7xl mx-auto font-sans mb-10">
      <div className="relative bg-[#005ade] overflow-hidden rounded-lg flex flex-col md:flex-row items-center justify-between p-6 md:p-8">
        
        {/* Diagonal Background Overlay (Darker Blue) */}
        <div className="absolute top-0 right-0 bottom-0 w-[60%] md:w-[45%] bg-[#0047b3] -skew-x-12 translate-x-10 origin-bottom z-0 pointer-events-none"></div>

        {/* Left Side: Text Content */}
        <div className="relative z-10 flex flex-col mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-1 leading-tight">
            Super discount on more than 100 USD
          </h2>
          <p className="text-blue-200 text-sm font-light tracking-wide">
            Have you ever finally just write dummy info
          </p>
        </div>

        {/* Right Side: Call to Action Button */}
        <div className="relative z-10 shrink-0">
          <button className="bg-[#ff9017] hover:bg-[#e07a0e] text-white font-medium px-6 py-2.5 rounded shadow-sm transition-colors text-sm">
            Shop now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default PromoBanner;