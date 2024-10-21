import Restaurant from "../models/Restaurant.js";

// Create a new restaurant
export const createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant({
      name: req.body.name,
      address: req.body.address,
      cuisine: req.body.cuisine,
      owner: req.user.id,  // Assume the authenticated user is the owner
    });
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get restaurant by ID
export const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all restaurants
export const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update a restaurant
export const updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    restaurant.name = req.body.name || restaurant.name;
    restaurant.address = req.body.address || restaurant.address;
    restaurant.cuisine = req.body.cuisine || restaurant.cuisine;
    await restaurant.save();
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete a restaurant
export const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" });
    await restaurant.remove();
    res.json({ message: "Restaurant deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
