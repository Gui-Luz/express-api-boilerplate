import Joi from "joi";

const idSchema = Joi.object({
    id: Joi.number().integer().required()
  });

const userSchema = Joi.object({
  id: Joi.number().integer(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string(),
  userSince: Joi.date()
});

export default {
    idSchema,
    userSchema
}