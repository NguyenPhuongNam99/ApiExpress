import { BoardService } from "../services/board.service.js";
import { HttpStatusCode } from "../utilities/constants.js";
const createNew = async(req,res) =>{
    try{
        const result = await BoardService.createNew(req.body)
        console.log('da controller')
        res.status(HttpStatusCode.OK).json(result)
    }
    catch(error){
        res.status().json({
            error: error.message
        })
    }
}
export const BoardController = {createNew}