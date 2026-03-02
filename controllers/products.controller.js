import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../services/products.service.js";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const getProducts = async (request, response) => {
  try {
    const products = await getAllProducts();
    response.status(StatusCodes.OK).json(products);
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const getProductsById = async (request, response) => {
  const { id } = request.params;
  try {
    const product = await getProductById(id);
    if (!product) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product not found" });
    }
    response.status(StatusCodes.OK).json(product);
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const createProductController = async (request, response) => {
  const { product_name, price, ...rest } = request.body;

  // Type Enforcement
  if (typeof product_name !== "string" || typeof price !== "number") {
    return response.status(StatusCodes.BAD_REQUEST).json({
      message:
        "Invalid data types: product_name (string) and price (number) are required.",
    });
  }

  const productData = {
    product_name,
    price,
    ...rest,
  };

  try {
    const result = await createProduct(productData);
    response
      .status(StatusCodes.OK)
      .json({ message: "Product created successfully", result });
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const updateProductById = async (request, response) => {
  const { id } = request.params;
  const { product_name, price } = request.body;

  // Validation
  if (product_name !== undefined && typeof product_name !== "string") {
    return response
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "product_name must be a string" });
  }
  if (price !== undefined && typeof price !== "number") {
    return response
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "price must be a number" });
  }

  const updatedData = { ...request.body };

  try {
    const result = await updateProduct(id, updatedData);
    if (result.matchedCount === 0) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product not found" });
    }
    response
      .status(StatusCodes.OK)
      .json({ message: "Product updated successfully", result });
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

const deleteProductById = async (request, response) => {
  const { id } = request.params;
  try {
    const result = await deleteProduct(id);
    if (result.deletedCount === 0) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .json({ message: "Product not found" });
    }
    response
      .status(StatusCodes.OK)
      .json({ message: "Product deleted successfully" });
  } catch (error) {
    response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      error: error.message,
    });
  }
};

export {
  getProducts,
  getProductsById,
  createProductController as createProduct,
  updateProductById,
  deleteProductById,
};
