import { Router } from 'express';
import { getAll } from '../controllers/user';

const userRouter = Router();

userRouter.get('/getAll', getAll);

export default userRouter;