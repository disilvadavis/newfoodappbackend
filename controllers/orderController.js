import Order from "../models/Order.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    const order = new Order({
      user: req.user.id,
      restaurant: req.body.restaurant,
      items: req.body.items,
      totalPrice: req.body.totalPrice,
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    order.status = req.body.status;
    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete an order
export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    await order.remove();
    res.json({ message: "Order deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
