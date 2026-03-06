import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useStore } from '../../store/AppContext'; // Adjust path if needed

const ProductCardGrid = ({ product }) => {
  const navigate = useNavigate();
  const { Api, isLoggedIn } = useStore();

  // Pricing Logic
  const displayPrice = product.price 
    ? `$${product.price.toFixed(2)}` 
    : product.tieredPricing?.[0]?.price 
      ? `$${product.tieredPricing[0].price.toFixed(2)}` 
      : 'N/A';
      
  const displayOldPrice = product.oldPrice ? `$${product.oldPrice.toFixed(2)}` : null;
  const imageUrl = product.images?.[0] || '/images/placeholder.svg';

  // --- Add to Cart Handler ---
  const handleAddToCart = async (e) => {
    e.stopPropagation(); // Prevents the card's onClick (navigation) from firing

    if (!isLoggedIn) {
      toast.info("Please log in to add items to your cart");
      navigate("/auth?page=login");
      return;
    }

    try {
      const response = await fetch(`${Api}/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({
          productId: product._id,
          qty: 1, 
          properties: "Standard variant"
        })
      });

      if (response.ok) {
        toast.success("Added to cart successfully!");
      } else {
        const data = await response.json();
        toast.error(data.message || "Failed to add to cart");
      }
    } catch (error) {
      console.error("Cart Error:", error);
      toast.error("An error occurred while adding to cart");
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col relative group hover:shadow-sm transition-shadow font-sans h-full">
      
      <div 
        onClick={() => navigate(`/product/${product._id}`)} 
        className="w-full h-48 mb-4 bg-white flex items-center justify-center p-2 cursor-pointer"
      >
        <img src={imageUrl} alt={product.title} className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105" />
      </div>

      <div className="flex flex-col flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-lg font-bold text-gray-900">{displayPrice}</span>
          {displayOldPrice && (
            <span className="text-xs text-gray-400 line-through">{displayOldPrice}</span>
          )}
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <div className="flex text-[#FF9017]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5" fill={i < Math.round(product.rating/2 || 0) ? "currentColor" : "none"} color="#FF9017" />
            ))}
          </div>
          <span className="text-[#FF9017] font-medium">{product.rating || "0.0"}</span>
        </div>

        <h3 
          onClick={() => navigate(`/product/${product._id}`)}
          className="text-gray-600 text-sm leading-snug line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors"
        >
          {product.title}
        </h3>
      </div>

      <button 
        onClick={handleAddToCart}
        title="Add to Cart"
        className="absolute top-4 right-4 p-1.5 border border-gray-200 rounded-md text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors bg-white z-10 active:scale-95"
      >
        <Heart className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ProductCardGrid;