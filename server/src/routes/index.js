import express from "express";
import { authRouter } from "./auth-routes.js";
import apiRouter from "./api/index.js";

const router = express.Router();

apiRouter.use("/auth", authRouter);
apiRouter.use("/api", apiRouter);

export default router;
