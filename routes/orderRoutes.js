import express from "express";
import {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new order (requires user authentication)
router.post("/", authMiddleware, createOrder);

// Get a specific order by ID (requires authentication)
router.get("/:id", authMiddleware, getOrderById);

// Get all orders (Admin and Seller can view)
router.get("/", authMiddleware, getAllOrders);

// Update order status (Admin and Seller can update)
router.put("/:id/status", authMiddleware, updateOrderStatus);

// Delete an order (Admin only)
router.delete("/:id", authMiddleware, deleteOrder);

export default router;
