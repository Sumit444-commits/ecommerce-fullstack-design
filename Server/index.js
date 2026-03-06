import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import authRouter from "./Routes/auth-router.js";
import cartRouter from "./Routes/cart-router.js";
import productRouter from "./Routes/product-router.js";

import errorMiddleware from "./middleware/error-middleware.js";
import cors from "cors";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(cors());
app.use(express.json());

// routes middleware
app.use("/api/auth", authRouter);
app.use("/api/data", productRouter);
app.use("/api/cart", cartRouter);

// custom middleware
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("hello");
});

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
  });
});

export default app;
