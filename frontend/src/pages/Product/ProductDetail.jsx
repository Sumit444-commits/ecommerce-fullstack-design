import React, { useState } from 'react';
import { Check, Star, MessageSquare, ShoppingBag, Globe, ShieldCheck, Heart } from 'lucide-react';

const ProductDetail = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  // Fallback image in case DB array is empty
  const images = product?.images?.length > 0 
    ? product.images 
    : ['/images/placeholder.svg'];

  return (
    <div className="w-full max-w-7xl mx-auto py-4 font-sans text-gray-800">
      <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 flex flex-col lg:flex-row gap-6 lg:gap-8">
        
        {/* --- Column 1: Image Gallery --- */}
        <div className="w-full lg:w-[350px] shrink-0 flex flex-col">
          <div className="border border-gray-200 rounded-md p-4 flex items-center justify-center aspect-square mb-4 bg-white relative">
            <img 
              src={images[activeImage]} 
              alt={product?.title} 
              className="max-w-full max-h-full object-contain mix-blend-multiply"
            />
          </div>
          
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
          
          <div className="flex items-center text-green-600 text-sm font-medium mb-1">
            <Check className="w-4 h-4 mr-1" strokeWidth={3} />
            {product?.inStock ? 'In stock' : 'Out of stock'}
          </div>
          <h1 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
            {product?.title}
          </h1>
          
          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1 text-[#FF9017]">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill={i < Math.round(product?.rating/2 || 0) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="font-semibold">{product?.rating || "0.0"}</span>
            </div>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4 text-gray-400" />
              {product?.reviewCount || 0} reviews
            </div>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <div className="flex items-center gap-1">
              <ShoppingBag className="w-4 h-4 text-gray-400" />
              {product?.orders || 0} sold
            </div>
          </div>

          {/* Dynamic Tiered Pricing Box */}
          {product?.tieredPricing && product.tieredPricing.length > 0 ? (
            <div className="bg-[#fff0e5] flex items-center divide-x divide-orange-200 mb-6 w-full lg:w-[90%]">
              {product.tieredPricing.map((tier, idx) => (
                <div key={idx} className="p-3 flex-1">
                  <div className={`font-bold text-xl leading-none mb-1 ${idx === 0 ? 'text-red-500' : 'text-gray-800'}`}>
                    ${tier.price.toFixed(2)}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {tier.maxQty ? `${tier.minQty}-${tier.maxQty} pcs` : `${tier.minQty}+ pcs`}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-6">
              <span className="text-red-500 font-bold text-3xl">${product?.price?.toFixed(2)}</span>
            </div>
          )}

          {/* Specifications Table (Short Info) */}
          <div className="grid grid-cols-[110px_1fr] gap-y-4 text-sm text-gray-600 w-full lg:w-[90%] border-b border-gray-200 pb-6 mb-4">
            <div className="text-gray-400">Condition:</div>
            <div>{product?.condition || 'N/A'}</div>
            
            <div className="text-gray-400">Brand:</div>
            <div>{product?.brand || 'N/A'}</div>

            {product?.policies?.customization && (
              <>
                <div className="text-gray-400 pt-2">Customization:</div>
                <div className="pt-2">{product.policies.customization}</div>
              </>
            )}

            {product?.policies?.protection && (
              <>
                <div className="text-gray-400">Protection:</div>
                <div>{product.policies.protection}</div>
              </>
            )}

            {product?.policies?.warranty && (
              <>
                <div className="text-gray-400">Warranty:</div>
                <div>{product.policies.warranty}</div>
              </>
            )}
          </div>
        </div>

        {/* --- Column 3: Supplier Card --- */}
        <div className="w-full lg:w-[280px] shrink-0">
          <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white flex flex-col">
            
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
              <div className="w-12 h-12 bg-[#c6f0e9] text-[#2ba08a] font-bold text-xl flex items-center justify-center rounded-md shrink-0 uppercase">
                {product?.supplier?.name?.charAt(0) || 'S'}
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-800">Supplier</span>
                <span className="text-base font-medium text-gray-900 leading-tight">
                  {product?.supplier?.name || 'Unknown Supplier'}
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-lg leading-none w-5 text-center">
                  {/* Optional: Add a simple function to map countryCode to Emoji if you want dynamic flags */}
                  📍 
                </span>
                {product?.supplier?.location || 'Location N/A'}
              </div>
              
              {product?.supplier?.isVerified && (
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gray-400" />
                  Verified Seller
                </div>
              )}
              
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                {product?.shipping?.type || 'Standard Shipping'}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors text-sm shadow-sm">
                Send inquiry
              </button>
              <button className="w-full bg-white hover:bg-gray-50 text-blue-600 border border-gray-300 font-medium py-2 rounded-md transition-colors text-sm">
                Seller's profile
              </button>
            </div>

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