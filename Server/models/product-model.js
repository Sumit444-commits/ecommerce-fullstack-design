import mongoose from "mongoose";

// Schema for wholesale tiered pricing (e.g., "$98.00 for 50-100 pcs")
const tieredPriceSchema = new mongoose.Schema({
  minQty: { type: Number, required: true },
  maxQty: { type: Number }, // Can be null/empty for "700+ pcs"
  price: { type: Number, required: true }
}, { _id: false });

// Schema for the detailed specs table (e.g., Model: #8786867, Size: 34mm...)
const specificationSchema = new mongoose.Schema({
  key: { type: String, required: true },
  value: { type: String, required: true }
}, { _id: false });

// Main Product Schema
const productSchema = new mongoose.Schema({
  // --- Basic Info ---
  title: { 
    type: String, 
    required: true, 
    trim: true 
  },
  shortDescription: { 
    type: String, 
    trim: true 
  }, // Used in the list view cards
  longDescription: { 
    type: String, 
    trim: true 
  }, // Used in the "Description" tab

  // --- Pricing ---
  price: { type: Number }, // Standard current price (fallback)
  oldPrice: { type: Number }, // For the crossed-out MSRP (e.g., $1128.00)
  discountPercentage: { type: Number }, // Used for the red "-25%" badges
  tieredPricing: [tieredPriceSchema], // Used for the 3-box pricing layout

  // --- Taxonomy & Filters ---
  category: { type: String, required: true, index: true },
  brand: { type: String, index: true },
  condition: { 
    type: String, 
    enum: ['Brand new', 'Refurbished', 'Old items', 'Any'],
    default: 'Brand new'
  },
  
  // Product Options (for the Cart properties: Size, Color, Material)
  options: [{
    name: { type: String }, // e.g., "Size", "Color"
    values: [{ type: String }] // e.g., ["Small", "Medium", "Large"]
  }],

  // --- Stock & Media ---
  inStock: { type: Boolean, default: true },
  images: [{ type: String }], // Array for the thumbnail gallery

  // --- Metrics & Social Proof ---
  rating: { type: Number, default: 0, min: 0 }, // e.g., 7.5 or 9.3
  reviewCount: { type: Number, default: 0 }, // e.g., "32 reviews"
  orders: { type: Number, default: 0 }, // e.g., "154 sold" / "154 orders"

  // --- Specifications & Features ---
  specifications: [specificationSchema],
  features: [{ type: String }], // For the checkmark list under the specs table

  // --- Supplier & Shipping (Right Sidebar) ---
  supplier: {
    name: { type: String }, // e.g., "Guanjoi Trading LLC"
    location: { type: String }, // e.g., "Germany, Berlin"
    countryCode: { type: String }, // For the flag emoji/icon
    isVerified: { type: Boolean, default: false }
  },
  shipping: {
    isFree: { type: Boolean, default: false },
    type: { type: String, default: "Worldwide shipping" }
  },

  // --- Policies ---
  policies: {
    warranty: { type: String }, // e.g., "2 years full warranty"
    protection: { type: String }, // e.g., "Refund Policy"
    customization: { type: String } // e.g., "Customized logo and design"
  }

}, { timestamps: true });

export const Product = mongoose.model("Product", productSchema);