import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import cors

import authRoutes from './routes/auth.route.js';
import paymentRoutes from './routes/payment.route.js';
import couponRoutes from "./routes/coupon.route.js";
import analyticsRoutes from "./routes/analytics.route.js";
import productRoutes from "./routes/product.route.js"; // Import productRoutes
import { connectDB } from "./libs/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Use cors middleware
app.use(express.json()); // Add this line to parse JSON request bodies

app.use("/api/auth", authRoutes)
app.use("/api/payment", paymentRoutes)
app.use("/api/coupons", couponRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/products", productRoutes); // Use productRoutes


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

  connectDB();
});
