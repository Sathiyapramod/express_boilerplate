import Joi from "joi";

export const cricketScoreSchema = Joi.object({
  name: Joi.string().required(),
  team: Joi.string().required(),
  runs: Joi.number().min(0).required(),
  balls: Joi.number().min(0).required(),
  sixes: Joi.number().min(0).optional(),
});
