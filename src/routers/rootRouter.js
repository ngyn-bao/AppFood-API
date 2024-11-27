import express from "express";
import likeRouter from "./likeRouter.js";
import orderRouter from "./orderRouter.js";
import rateRouter from "./rateRouter.js";

const rootRouter = express.Router();

rootRouter.get("/", (req, res, next) => {
  res.json("Hello");
  next();
});

// Tạo route CRUD
rootRouter.use("/like-res", likeRouter);

rootRouter.use("/rate-res", rateRouter);

rootRouter.use("/order", orderRouter);

export default rootRouter;
