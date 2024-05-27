// controllers/orderController.js
import Order from "../models/order.model.js";

// Create a new order
export const createOrder = async (req, res) => {
  try {
    // Retrieve order details from request body
    const { customer, items, totalPrice } = req.body;

    // Create new order instance
    const newOrder = new Order({
      customer,
      items,
      totalPrice,
    });

    // Save the order to the database
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve an order by ID
export const getOrdersByUser = async (req, res) => {
  try {
    // Retrieve user ID from request params
    const { userId } = req.params;

    // Find orders associated with the user ID
    const orders = await Order.find({ customer: userId }).populate("items.book");

    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update order status
export const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Find the order by ID and update its status
    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an order by ID
export const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;

    // Delete the order
    await Order.findByIdAndDelete(id);

    res.json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
