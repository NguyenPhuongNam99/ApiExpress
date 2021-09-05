import { BoardModel } from "../models/board.model.js";

const createNew = async (data) =>{
    try{
        const result = await BoardModel.createNew(data)
        return result;
    }
    catch(error){
        throw new Error(error);
    }
}
export const BoardService = {createNew}