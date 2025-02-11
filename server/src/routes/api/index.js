import express from "express";
import { userRouter } from "./user-routes.js";
import { productRouter } from "./products-routes.js";

const apiRouter = express.Router();

apiRouter.use("/users", userRouter);
apiRouter.use("/products", productRouter);

export default apiRouter;
