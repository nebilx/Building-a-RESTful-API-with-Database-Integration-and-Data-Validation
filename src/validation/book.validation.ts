import Joi from "joi";

export const BookShema= Joi.object({
    title: Joi.string().min(3).max(50).required(),
    author: Joi.string().min(3).max(50).required(),
    isbn: Joi.string().min(3).max(50).required(),
    publishedYear: Joi.date().required(),


}
).options({abortEarly:true})

export const idShema = Joi.object({
    id: Joi.string().min(3).max(50).required()
}).options({abortEarly:true})

