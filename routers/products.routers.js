import express from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../controllers/products.controller.js";
import { validateSchema } from "../middleware/validate.schema.js";
import { createProductSchema } from "../schemas/products.schema.js";
import verifyAuthToken from "../middleware/auth.middleware.js";

const productsRouters = express.Router();

productsRouters.get("/", verifyAuthToken, getProducts);
productsRouters.get("/:id", verifyAuthToken, getProductsById);

productsRouters.post("/", validateSchema(createProductSchema), createProduct);

productsRouters.put("/:id", updateProductById);
productsRouters.delete("/:id", deleteProductById);

export default productsRouters;
