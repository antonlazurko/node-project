import express from 'express';

import {
  getUsersHandler,
  getUserByIdHandler,
  postUsersHandler,
} from '../controllers/usersController.js';

const usersRouter = express.Router();

usersRouter.route('/')
  .get(getUsersHandler)
  .post(postUsersHandler);

usersRouter.route('/:id')
  .get(getUserByIdHandler);

export default usersRouter;
