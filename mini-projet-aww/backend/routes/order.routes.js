// routes/orderRoutes.js
import express from "express";
import {
  createOrder,
  getAllOrders,
  getOrdersByUser,
  updateOrderStatus,
  deleteOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/createorder", createOrder);
router.get("/orders", getAllOrders);
router.get("/user/:userId", getOrdersByUser);
router.put("/orders/:id/update-status", updateOrderStatus);
router.delete("/orders/:id", deleteOrder);

export default router;
