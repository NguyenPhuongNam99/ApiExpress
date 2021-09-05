import { ColumModel } from "../models/column.model.js";

const createNew = async (data) =>{
    try{
        const result = await ColumModel.createNew(data)
        return result;
    }
    catch(error){
        throw new Error(error);
    }
}

const update = async (id,data) =>{
    try{
        const updateData ={
            ...data,
            updateAt: Date.now()
        }
        const result = await ColumModel.update(id,updateData)
        return result;
    }
    catch(error){
        throw new Error(error);
    }
}
export const columnService = {createNew,update}