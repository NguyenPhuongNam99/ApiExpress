import expres from 'express'
import { HttpStatusCode } from '../../utilities/constants.js'
import { boardRouter } from './board.route.js'
import { columnRouter } from './column.route.js';
const router = expres.Router();

router.get('/status', ( req, res) => res.status(HttpStatusCode.OK).json({status: 'OK'}))

router.use('/boards', boardRouter)
router.use('/column', columnRouter);
export const apiV1= router;