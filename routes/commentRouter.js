/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';

import {
  getCommentsHandler,
  postCommentsHandler,
  getCommentByIdHandler,
} from '../controllers/commentsController.js';

const commentRouter = express.Router();

commentRouter.route('/')
  .get(getCommentsHandler)
  .post(postCommentsHandler);

commentRouter.route('/:id')
  .get(getCommentByIdHandler);

export default commentRouter;
