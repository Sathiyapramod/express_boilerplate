import Joi from "joi";

export const createProductSchema = Joi.object({
  product_name: Joi.string().required(),
  price: Joi.number().required(),
});

export const updateProductSchema = Joi.object({
  price: Joi.number().required(),
});
