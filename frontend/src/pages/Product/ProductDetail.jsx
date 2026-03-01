import React, { useState } from 'react';
import { 
  Check, 
  Star, 
  MessageSquare, 
  ShoppingBag, 
  Globe, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';

const ProductDetail = () => {
  // --- Functional State ---
  const [activeImage, setActiveImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  // --- Mock Data ---
  // Replace these URLs with your actual product images
  const images = [
    '/images/cloth/1.svg', // Main gray shirt
    '/images/cloth/2.svg', // White shirt
    '/images/cloth/1.svg', // Folded shirt
    '/images/cloth/1.svg', // Model wearing shirt
    '/images/cloth/1.svg', // Back of shirt
    '/images/cloth/1.svg', // Detail shot
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-4 font-sans text-gray-800">
      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* --- Column 1: Image Gallery --- */}
        <div className="w-full lg:w-[350px] shrink-0 flex flex-col">
          {/* Main Image View */}
          <div className="border border-gray-200 rounded-md p-4 flex items-center justify-center aspect-square mb-4 bg-white relative">
            <img 
              src={images[activeImage]} 
              alt="Product" 
              className="max-w-full max-h-full object-contain mix-blend-multiply"
            />
          </div>
          
          {/* Thumbnails */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(idx)}
                className={`w-14 h-14 shrink-0 rounded-md border p-1 transition-colors flex items-center justify-center bg-white ${
                  activeImage === idx ? 'border-gray-800 shadow-sm' : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="max-w-full max-h-full object-contain mix-blend-multiply" />
              </button>
            ))}
          </div>
        </div>

        {/* --- Column 2: Product Info --- */}
        <div className="flex-1 flex flex-col">
          
          {/* Stock & Title */}
          <div className="flex items-center text-green-600 text-sm font-medium mb-1">
            <Check className="w-4 h-4 mr-1" strokeWidth={3} />
            In stock
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </h1>
          
          {/* Ratings & Reviews */}
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1 text-[#FF9017]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill={i < 4 ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="font-semibold">9.3</span>
            </div>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              32 reviews
            </div>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <div className="flex items-center gap-1">
              <ShoppingBag className="w-4 h-4 text-gray-400" />
              154 sold
            </div>
          </div>

          {/* Pricing Box */}
          <div className="bg-[#fff0e5] flex items-center divide-x divide-orange-200 mb-6 w-full lg:w-[90%]">
            <div className="p-3 flex-1">
              <div className="text-red-500 font-bold text-xl leading-none mb-1">$98.00</div>
              <div className="text-gray-500 text-xs">50-100 pcs</div>
            </div>
            <div className="p-3 flex-1">
              <div className="text-gray-800 font-bold text-xl leading-none mb-1">$90.00</div>
              <div className="text-gray-500 text-xs">100-700 pcs</div>
            </div>
            <div className="p-3 flex-1">
              <div className="text-gray-800 font-bold text-xl leading-none mb-1">$78.00</div>
              <div className="text-gray-500 text-xs">700+ pcs</div>
            </div>
          </div>

          {/* Specifications Table */}
          <div className="grid grid-cols-[110px_1fr] gap-y-4 text-sm text-gray-600 w-full lg:w-[90%] border-b border-gray-200 pb-6 mb-4">
            <div className="text-gray-400">Price:</div>
            <div>Negotiable</div>
            
            <div className="text-gray-400">Type:</div>
            <div>Classic shoes</div>
            
            <div className="text-gray-400">Material:</div>
            <div>Plastic material</div>
            
            <div className="text-gray-400">Design:</div>
            <div>Modern nice</div>

            <div className="text-gray-400 pt-2">Customization:</div>
            <div className="pt-2">Customized logo and<br/>design custom packages</div>

            <div className="text-gray-400">Protection:</div>
            <div>Refund Policy</div>

            <div className="text-gray-400">Warranty:</div>
            <div>2 years full warranty</div>
          </div>
        </div>

        {/* --- Column 3: Supplier Card --- */}
        <div className="w-full lg:w-[280px] shrink-0">
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col">
            
            {/* Supplier Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-[#c6f0e9] text-[#2ba08a] font-bold text-xl flex items-center justify-center rounded-md shrink-0">
                R
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-800">Supplier</span>
                <span className="text-base font-medium text-gray-900 leading-tight">Guanjoi Trading LLC</span>
              </div>
            </div>

            {/* Supplier Features */}
            <div className="flex flex-col gap-3 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-lg leading-none w-5 text-center">🇩🇪</span>
                Germany, Berlin
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                Verified Seller
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                Worldwide shipping
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors text-sm shadow-sm">
                Send inquiry
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-blue-600 border border-gray-300 font-medium py-2 rounded-md transition-colors text-sm">
                Seller's profile
              </button>
            </div>

            {/* Save for Later Toggle */}
            <button 
              onClick={() => setIsSaved(!isSaved)}
              className="flex items-center justify-center gap-2 mt-5 text-sm font-medium transition-colors hover:text-blue-700 mx-auto"
              style={{ color: isSaved ? '#2563eb' : '#3b82f6' }}
            >
              <Heart 
                className="w-4 h-4 transition-all" 
                fill={isSaved ? "currentColor" : "none"} 
                strokeWidth={isSaved ? 0 : 2}
              />
              {isSaved ? 'Saved for later' : 'Save for later'}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;