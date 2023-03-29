import Joi from "joi";

const personSchema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required()
})

export default {
    personSchema
}