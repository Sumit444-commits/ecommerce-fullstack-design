import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCardGrid = ({ product }) => {
   const navigate = useNavigate()
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col relative group hover:shadow-sm transition-shadow font-sans h-full">
      <div onClick={()=>{navigate("/product/xyz")}} className="w-full h-48 mb-4 bg-white flex items-center justify-center p-2">
        <img src={product.img} alt={product.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
          <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <div className="flex text-[#FF9017]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} color="#FF9017" />
            ))}
          </div>
          <span className="text-[#FF9017] font-medium">{product.rating}</span>
        </div>

        <p className="text-gray-500 text-sm leading-snug line-clamp-2">
          {product.title}
        </p>
      </div>

      <button className="absolute top-4 right-4 p-1.5 border border-gray-200 rounded-md text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors bg-white">
        <Heart className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ProductCardGrid;