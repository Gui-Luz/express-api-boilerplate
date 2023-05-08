import Joi from 'joi'

const idSchema = Joi.object({
  id: Joi.number().integer().required()
})

const userSchema = Joi.object({
  id: Joi.number().integer(),
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string(),
  createdAt: Joi.date()
})

export default {
  idSchema,
  userSchema
}
