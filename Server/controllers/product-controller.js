import { Product } from "../models/product-model.js";
import mongoose from "mongoose";

// ****************** Create Product Logic ************************ //
const createProduct = async (req, res) => {
  try {
    // Mongoose automatically validates against your schema, 
    // so we can just pass req.body directly!
    const newProduct = await Product.create(req.body);

    res.status(201).json({ 
      message: "Product created successfully", 
      data: newProduct 
    });

  } catch (error) {
    console.error(`Error creating product: ${error.message}`);
    // If it's a validation error (e.g. missing required fields), send a 400 Bad Request
    if (error.name === "ValidationError") {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ****************** Fetch All Products Logic ************************ //
const getAllProducts = async (req, res) => {
  try {
    const productsData = await Product.find();
    
    // .find() returns an empty array [] if there are no products, which is truthy.
    // We check the length to see if the database is actually empty.
    if (productsData.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.status(200).json(productsData);

  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ****************** Fetch Product by Id Logic ************************ //
const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    // Check if the ID is a valid MongoDB ObjectId format before querying
    // (Prevents app crashes from Mongoose CastErrors)
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid Product ID format" });
    }

    // findById is the standard Mongoose method for this
    const productData = await Product.findById(id);

    if (!productData) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(productData);

  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Exporting with your original names if your routes are already using them, 
// though I highly recommend updating your routes to use the new names!
export { 
  createProduct as service, 
  getAllProducts as fetchingServices, 
  getProductById as getServiceById 
};