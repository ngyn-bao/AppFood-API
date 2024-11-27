import express from "express";
import { rateController } from "../controllers/rate.controller.js";

const rateRouter = express.Router();

// Tạo route CRUD

rateRouter.post("/rate", rateController.uploadRate);

rateRouter.get("/user/:id", rateController.getByUser);
rateRouter.get("/res/:id", rateController.getByRes);

export default rateRouter;
