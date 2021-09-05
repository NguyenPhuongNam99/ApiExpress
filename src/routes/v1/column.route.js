import express from 'express';
import { ColumnController } from '../../controllers/column.controller.js';
import { ColumnValidation } from '../../validation/column.validation.js';

const router = express.Router()

router.route('/')
    .get((req,res)=>res.send('getBoards'))
    .post(ColumnValidation.createNew, ColumnController.createNew)
router.route('/:id')
    .put(ColumnValidation.update,ColumnController.update)
export const columnRouter = router