import express from "express";
import rootRouter from "./src/routers/rootRouter.js";
import defineAssociations from "./src/models/model-associations.js";

const app = express();

app.use(express.json());
const PORT = 3000;

app.use(rootRouter);

defineAssociations();

app.listen(PORT, () => {
  console.log("Dự án chạy trên PORT 3000");
});
