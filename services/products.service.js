import { ObjectId } from "mongodb";
import { client, MONGO_DATABASE } from "../index.js";

/**
 *
 * @returns {products}
 */
const getAllProducts = async () => {
  return await client
    .db(MONGO_DATABASE)
    .collection("products")
    .find({})
    .toArray();
};

/**
 *
 * @param {*} id
 * @returns products
 */

const getProductById = async (id) => {
  const data = await client
    .db(MONGO_DATABASE)
    .collection("products")
    .findOne({ _id: new ObjectId(id) });
  if (data) return data;
  else return null;
};

/**
 *
 * @param {*} productData
 * @returns
 */
const createProduct = async (productData) => {
  //todo
};

/**
 *
 * @param {*} id
 * @param {*} updatedData
 * @returns
 */
const updateProduct = async (id, updatedData) => {
  //todo
};

/**
 *
 * @param {*} id
 * @returns
 */
const deleteProduct = async (id) => {
  //todo
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
