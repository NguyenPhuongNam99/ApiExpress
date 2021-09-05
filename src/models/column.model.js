import Joi from 'joi'
import { getDB } from '../config/mongodb.js'
import { ObjectID } from 'bson'
const columCollectionName = 'boards'
const columCollectionSchema =Joi.object({
    boardId: Joi.string().required(),
    title: Joi.string().required().min(3).max(20),
    cardOrder: Joi.array().items(Joi.string().default([])),
    createAt: Joi.date().timestamp().default(Date.now()),
    updateAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) =>{
    return await columCollectionSchema.validateAsync(data, {abortEarly: false})
}

const createNew = async(data) =>{
    try {
        const value = await validateSchema(data)
        const result = await getDB().collection(columCollectionName).insertOne(value)
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}

const update = async(id,data) =>{
    try {
        // const value = await validateSchema(data)
        const result = await getDB().collection(columCollectionName).findOneAndUpdate(
            {_id:ObjectID(id)},
            {$set:data},
            {
                returnOriginal:false
            }
        )
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
export const ColumModel = {createNew,update}