import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", authController.Register);
authRouter.post("/login", () => {});

export default authRouter