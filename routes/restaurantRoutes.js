import express from "express";
import {
  createRestaurant,
  getRestaurantById,
  getAllRestaurants,
  updateRestaurant,
  deleteRestaurant,
} from "../controllers/restaurantController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create a new restaurant (Seller/Admin only)
router.post("/", authMiddleware, createRestaurant);

// Get a specific restaurant by ID
router.get("/:id", getRestaurantById);

// Get all restaurants
router.get("/", getAllRestaurants);

// Update a restaurant (Seller/Admin only)
router.put("/:id", authMiddleware, updateRestaurant);

// Delete a restaurant (Admin only)
router.delete("/:id", authMiddleware, deleteRestaurant);

export default router;
