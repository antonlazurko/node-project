/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import rootRouter from './routes/index.js';

const app = express();

app.use('/', rootRouter);

app.listen(8000, () => console.log('Listening on port 8000!'));
