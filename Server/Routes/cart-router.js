import express from "express";
import { 
  getCart, 
  addToCart, 
  updateCartItem, 
  removeCartItem, 
  clearCart 
} from "../controllers/cart-controller.js";

// Import your auth middleware (Adjust path as needed)
import authMiddleware from "../middleware/auth-middleware.js"; 

const router = express.Router();

// All cart routes should be protected, requiring a valid login token
router.use(authMiddleware);

// Routes
router.get("/", getCart);
router.post("/add", addToCart); // Used when clicking "Add to Cart" on a product page
router.put("/:id", updateCartItem); // Updates quantity
router.delete("/clear", clearCart); // Must be placed BEFORE /:id so Express doesn't think "clear" is an ID parameter
router.delete("/:id", removeCartItem); // Removes single item

export default router;