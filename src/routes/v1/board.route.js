import express from 'express';
import { BoardController } from '../../controllers/board.controller.js';
import { BoardValidation } from '../../validation/board.validation.js';

const router = express.Router()

router.route('/')
    .get((req,res)=>res.send('getBoards'))
    .post(BoardValidation.createNew, BoardController.createNew)
export const boardRouter = router