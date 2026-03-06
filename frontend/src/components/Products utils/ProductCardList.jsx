import React from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useStore } from '../../store/AppContext'; // Adjust path if needed

const ProductCardList = ({ product }) => {
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
  const shippingText = product.shipping?.isFree ? 'Free Shipping' : (product.shipping?.type || 'Standard Shipping');

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
          qty: 1, // Defaulting to 1 item
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
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col md:flex-row gap-6 relative group hover:shadow-sm transition-shadow font-sans">
      
      {/* Product Image */}
      <div 
        onClick={() => navigate(`/product/${product._id}`)}
        className="w-full md:w-48 h-48 shrink-0 bg-white flex items-center justify-center p-2 rounded-md cursor-pointer"
      >
        <img src={imageUrl} alt={product.title} className="max-w-full max-h-full object-contain mix-blend-multiply" />
      </div>

      <div className="flex-1 flex flex-col py-1">
        {/* Title */}
        <h3 
          onClick={() => navigate(`/product/${product._id}`)}
          className="text-base font-medium text-gray-900 mb-2 pr-12 cursor-pointer hover:text-blue-600 transition-colors"
        >
          {product.title}
        </h3>
        
        {/* Pricing */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-xl font-bold text-gray-900">{displayPrice}</span>
          {displayOldPrice && (
            <span className="text-sm text-gray-400 line-through">{displayOldPrice}</span>
          )}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <div className="flex text-[#FF9017]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4" fill={i < Math.round(product.rating/2 || 0) ? "currentColor" : "none"} color="#FF9017" />
              ))}
            </div>
            <span className="text-[#FF9017] font-semibold">{product.rating || "0.0"}</span>
          </div>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{product.orders || 0} orders</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="text-green-600">{shippingText}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 w-full lg:w-4/5">
          {product.shortDescription || product.longDescription || "No description available."}
        </p>

        {/* Action Link */}
        <button 
          onClick={() => navigate(`/product/${product._id}`)} 
          className="text-blue-600 font-medium text-sm hover:underline mt-auto self-start"
        >
          View details
        </button>
      </div>

      <button 
        onClick={handleAddToCart}
        title="Add to Cart"
        className="absolute top-4 right-4 p-2 border border-gray-200 rounded-md text-blue-600 hover:bg-blue-50 hover:border-blue-200 transition-colors z-10 active:scale-95"
      >
        <Heart className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ProductCardList;