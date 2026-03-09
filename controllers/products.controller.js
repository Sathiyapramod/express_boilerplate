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
  // todo
};

const updateProductById = async (request, response) => {
  // todo
};

const deleteProductById = async (request, response) => {
  // todo
};

export {
  getProducts,
  getProductsById,
  createProductController as createProduct,
  updateProductById,
  deleteProductById,
};
