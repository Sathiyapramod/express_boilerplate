import express from "express";
import productController from "../controllers/products.controller.js";
import { validateSchema } from "../middleware/validate.schema.js";
import { createProductSchema } from "../schemas/products.schema.js";

const productsRouters = express.Router();

productsRouters.get("/", productController.getProducts);
productsRouters.get("/:id", productController.getProductsById);

productsRouters.post(
  "/",
  validateSchema(createProductSchema),
  productController.createProduct,
);

productsRouters.put("/:id", productController.updateProductById);
productsRouters.delete("/:id", productController.deleteProductById);

export default productsRouters;
