import { Cart } from "../models/cart-model.js";

// ****************** Get User Cart ************************ //
const getCart = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from your authMiddleware

    // Find the cart and populate the 'product' field with actual product data
    let cart = await Cart.findOne({ user: userId }).populate("items.product");

    // If the user doesn't have a cart yet, return an empty one
    if (!cart) {
      return res.status(200).json({ items: [] });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ****************** Add Item to Cart ************************ //
const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId, qty, properties } = req.body;

    let cart = await Cart.findOne({ user: userId });

    // If no cart exists for this user, create one
    if (!cart) {
      cart = await Cart.create({
        user: userId,
        items: [{ product: productId, qty: qty || 1, properties }]
      });
      return res.status(201).json(cart);
    }

    // Check if the product is already in the cart
    const existingItemIndex = cart.items.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingItemIndex > -1) {
      // If it exists, just update the quantity
      cart.items[existingItemIndex].qty += (qty || 1);
    } else {
      // If it's a new product, push it to the items array
      cart.items.push({ product: productId, qty: qty || 1, properties });
    }

    await cart.save();
    res.status(200).json({ message: "Item added to cart", cart });
  } catch (error) {
    console.error("Error adding to cart:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ****************** Update Item Quantity ************************ //
const updateCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const itemId = req.params.id; // This is the specific Cart Item _id
    const { qty } = req.body;

    if (qty < 1) {
      return res.status(400).json({ message: "Quantity cannot be less than 1" });
    }

    // Find the user's cart and update the specific item's quantity
    const cart = await Cart.findOneAndUpdate(
      { user: userId, "items._id": itemId },
      { $set: { "items.$.qty": qty } },
      { new: true } // Return the updated document
    ).populate("items.product");

    if (!cart) {
      return res.status(404).json({ message: "Cart or item not found" });
    }

    res.status(200).json({ message: "Quantity updated", cart });
  } catch (error) {
    console.error("Error updating cart item:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ****************** Remove Item from Cart ************************ //
const removeCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const itemId = req.params.id; // Cart Item _id

    // Pull (remove) the item from the items array
    const cart = await Cart.findOneAndUpdate(
      { user: userId },
      { $pull: { items: { _id: itemId } } },
      { new: true }
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ message: "Item removed successfully", cart });
  } catch (error) {
    console.error("Error removing cart item:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ****************** Clear Entire Cart ************************ //
const clearCart = async (req, res) => {
  try {
    const userId = req.userId;

    // Set the items array to empty
    await Cart.findOneAndUpdate(
      { user: userId },
      { $set: { items: [] } }
    );

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export { getCart, addToCart, updateCartItem, removeCartItem, clearCart };