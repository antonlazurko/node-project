import express from 'express';
import usersRouter from './usersRouter.js';
import commentRouter from './commentRouter.js';
import rootRouter from './rootRouter.js';

const mainRouter = express.Router();

mainRouter.use('/users', usersRouter);
mainRouter.use('/comments', commentRouter);
mainRouter.use('/', rootRouter);

export default mainRouter;
