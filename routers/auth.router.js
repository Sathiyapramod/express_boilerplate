import { Router } from "express";
import authController from "../controllers/auth.controller.js";


const authRouter = Router();

authRouter.post("/register", authController.Register);
authRouter.post("/login", authController.Login);

export default authRouter