/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';

import rootRouter from './routes/index.js';

const app = express();

const logStream = fs.createWriteStream(path.join('log', 'app.log'), { flags: 'a' });

app.use(morgan('combined', { stream: logStream }));

app.use('/', rootRouter);

app.listen(8000, () => console.log('Listening on port 8000!'));
