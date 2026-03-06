import jwt from "jsonwebtoken";
import { User } from "../models/user-model.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    
    if (!token) {
      // FIX 1: Must add 'return' so the function stops running here!
      return res.status(401).json({ message: "Unauthorized HTTP, Token not Provided" });
    }

    const jwtToken = token.replace("Bearer", "").trim();

    // FIX 2: Use jwt.verify synchronously. 
    // If it expires or is invalid, it automatically throws an error to the catch block.
    // Note: ensure your .env file matches the spelling of JWT_TOKEN_SECERT exactly
    const isVerified = jwt.verify(jwtToken, process.env.JWT_TOKEN_SECERT); 
  
    // FIX 3: Corrected .populate() syntax. 
    // (Only keep .populate("product") if your User schema actually has a "product" field)
    const userData = await User.findOne({ email: isVerified.email })
      .select({ password: 0 }); 
      // .populate("product"); // Uncomment if you have an array of products in the User schema

    // FIX 4: Ensure the user still exists in the database
    if (!userData) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Attach user data to the request so the controllers can use it
    req.user = userData;
    req.token = token;
    req.userId = userData._id;

    next(); // Move to the next middleware/controller
    
  } catch (error) {
    // Handle specific JWT errors cleanly
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired. Please log in again." });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token." });
    }

    console.error("Auth Middleware Error:", error);
    return res.status(500).json({ message: "Internal server error in middleware" });
  }
};

export default authMiddleware;