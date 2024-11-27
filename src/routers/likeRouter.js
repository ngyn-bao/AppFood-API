import express from "express";
import { likeController } from "../controllers/like.controller.js";

const likeRouter = express.Router();

// Tạo route CRUD

likeRouter.post("/like", likeController.like);

likeRouter.delete("/unlike", likeController.unlike);

likeRouter.get("/user/:id", likeController.getByUser);
likeRouter.get("/res/:id", likeController.getByRes);

export default likeRouter;
