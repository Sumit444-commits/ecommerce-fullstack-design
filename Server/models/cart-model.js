import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product", // References your Product model
    required: true
  },
  qty: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  },
  properties: {
    type: String, // e.g., "Size: M, Color: Blue"
    default: "Standard variant"
  }
}); // Mongoose automatically assigns an _id to each item in this array

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // References your User model
    required: true,
    unique: true // One cart per user
  },
  items: [cartItemSchema]
}, { timestamps: true });

export const Cart = mongoose.model("Cart", cartSchema);