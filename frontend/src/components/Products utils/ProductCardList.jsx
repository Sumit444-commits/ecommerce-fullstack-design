import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCardList = ({ product }) => {
  const navigate = useNavigate()
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row gap-6 relative group hover:shadow-sm transition-shadow font-sans">
      <div className="w-full md:w-48 h-48 shrink-0 bg-white flex items-center justify-center p-2 rounded-md">
        <img src={product.img} alt={product.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
      </div>

      <div className="flex-1 flex flex-col py-1">
        <h3 className="text-base font-medium text-gray-900 mb-2 pr-12">
          {product.title}
        </h3>
        
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-xl font-bold text-gray-900">{product.price}</span>
          <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
          <div className="flex text-[#FF9017]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} color="#FF9017" />
            ))}
          </div>
          <span className="text-[#FF9017] font-semibold">{product.rating}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{product.orders} orders</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="text-green-600">{product.shipping}</span>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 w-full lg:w-4/5">
          {product.desc}
        </p>

        <button onClick={()=>{navigate("/product/xyz")}} className="text-blue-600 font-medium text-sm hover:underline mt-auto self-start">
          View details
        </button>
      </div>

      <button className="absolute top-4 right-4 p-2 border border-gray-200 rounded-md text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors">
        <Heart className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProductCardList;