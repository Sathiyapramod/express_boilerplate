import { Router } from "express";
import lettersController from "../controllers/letters.controller.js";

const lettersRouter = Router();

lettersRouter.post("/", lettersController.createLetter);

export default lettersRouter;
