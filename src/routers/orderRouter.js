import express from "express";
import { orderController } from "../controllers/order.controller.js";

const orderRouter = express.Router();

// Tạo route CRUD
orderRouter.post("/", orderController.order);

export default orderRouter;
