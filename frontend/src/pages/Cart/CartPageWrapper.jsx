import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CartItems from "./CartItems";
import TrustFeatures from "./TrustFeatures";
import CartSummary from "./CartSummary";
import SavedForLater from "./SavedForLater";
import PromoBanner from "../../components/Products utils/PromoBanner";
import { useStore } from "../../store/AppContext";

const CartPageWrapper = () => {
  const { isLoggedIn, Api } = useStore();
  const navigate = useNavigate();

  // --- Cart State ---
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- Authentication Check ---
  useEffect(() => {
    if (!isLoggedIn) {
      toast.info("Please log in to view your cart.");
      navigate("/auth?page=login");
    }
  }, [isLoggedIn, navigate]);

  // --- Fetch Cart Data ---
  useEffect(() => {
    const fetchCart = async () => {
      if (!isLoggedIn) return;
      try {
        setLoading(true);
        // Replace this with your actual cart endpoint
        const response = await fetch(`${Api}/api/cart`, {
          headers: {
            // Assuming you use local storage for tokens
            Authorization: `Bearer ${localStorage.getItem("token")}` 
          }
        });
        
        if (response.ok) {
          const data = await response.json();
          setCartItems(data.items || []); // Adjust based on your backend response structure
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
        toast.error("Failed to load cart data.");
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [Api, isLoggedIn]);

  // --- Cart Handlers ---
  const handleUpdateQuantity = async (productId, newQty) => {
    // Optimistic UI update
    setCartItems(prev => prev.map(item => 
      item._id === productId ? { ...item, qty: newQty } : item
    ));

    try {
      // Send update to backend
      await fetch(`${Api}/api/cart/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ qty: newQty })
      });
    } catch (error) {
      toast.error("Failed to update quantity",error);
    }
  };

  const handleRemoveItem = async (productId) => {
    // Optimistic UI update
    setCartItems(prev => prev.filter(item => item._id !== productId));

    try {
      await fetch(`${Api}/api/cart/${productId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error("Failed to remove item",error);
    }
  };

  const handleClearCart = async () => {
    setCartItems([]);
    try {
      await fetch(`${Api}/api/cart/clear`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      toast.success("Cart cleared");
    } catch (error) {
      toast.error("Failed to clear cart",error);
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="bg-[#f7f9fa] min-h-screen py-10 px-4 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col">
            {/* Pass state and handlers to CartItems */}
            <CartItems 
              items={cartItems} 
              loading={loading}
              onUpdateQuantity={handleUpdateQuantity}
              onRemoveItem={handleRemoveItem}
              onClearCart={handleClearCart}
            />
            <TrustFeatures />
          </div>

          <div className="w-full lg:w-[280px] shrink-0">
            {/* Pass the items to CartSummary so it can calculate the total! */}
            <CartSummary items={cartItems} />
          </div>
        </div>

        <SavedForLater />
        <PromoBanner />
      </div>
    </div>
  );
};

export default CartPageWrapper;