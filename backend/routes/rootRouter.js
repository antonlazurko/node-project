import express from 'express';

import {
  getRootHandler,
} from '../controllers/rootControllers.js';

const rootRouter = express.Router();

rootRouter.route('/')
  .get(getRootHandler);

export default rootRouter;