import { columnService } from "../services/column.service.js";
import { HttpStatusCode } from "../utilities/constants.js";
const createNew = async(req,res) =>{
    try{
        const result = await columnService.createNew(req.body)
        console.log('da controller')
        res.status(HttpStatusCode.OK).json(result)
    }
    catch(error){
        res.status().json({
            error: error.message
        })
    }
}

const update = async(req,res) =>{
    try{
        const {id} = req.params;
        const result = await columnService.update(id,req.body)
        console.log('da controller')
        res.status(HttpStatusCode.OK).json(result)
    }
    catch(error){
        res.status().json({
            error: error.message
        })
    }
}
export const ColumnController = {createNew,update}