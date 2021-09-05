import Joi from 'joi'
import { getDB } from '../config/mongodb.js'

const cardCollectionName = 'cards'
const cardCollectionSchema =Joi.object({
    boardId: Joi.string().required(),
    columId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20),
    cardOrder: Joi.array().items(Joi.string().default([])),
    createAt: Joi.date().timestamp().default(Date.now()),
    updateAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) =>{
    return await cardCollectionSchema.validateAsync(data, {abortEarly: false})
}

const createNew = async(data) =>{
    try {
        const value = await validateSchema(data)
        const result = await getDB().collection(cardCollectionName).insertOne(value)
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
export const CardModel = {createNew}