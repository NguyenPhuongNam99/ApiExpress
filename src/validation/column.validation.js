import Joi from "joi";
import { HttpStatusCode } from "../utilities/constants.js";
const createNew = async(req,res,next) =>{
    const condition = Joi.object({
        boardId: Joi.string().required(),
        title: Joi.string().required().min(3).max(20)
    })
    try {
        await condition.validateAsync(req.body, {abortEarly: false})
        next()
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            error: new Error(error).message
        })
    }
}

const update = async(req,res,next) =>{
    const condition = Joi.object({
        title: Joi.string().min(3).max(20),
        allowUnknow: true
    })
    try {
        await condition.validateAsync(req.body, {abortEarly: false})
        next()
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({
            error: new Error(error).message
        })
    }
}
export const ColumnValidation = {createNew, update}