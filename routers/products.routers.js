import express from "express";
import {
  getProducts,
  getProductsById,
  createProduct,
  updateProductById,
  deleteProductById,
} from "../controllers/products.controller.js";
import validateBody from "../middleware/validator.middleware.js";
import {
  createProductSchema,
  updateProductSchema,
} from "../schemas/products.schema.js";

const productsRouters = express.Router();

productsRouters.get("/", getProducts);
productsRouters.get("/:id", getProductsById);
productsRouters.post("/", validateBody(createProductSchema), createProduct);
productsRouters.put(
  "/:id",
  validateBody(updateProductSchema),
  updateProductById,
);
productsRouters.delete("/:id", deleteProductById);

export default productsRouters;
