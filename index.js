/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import queryString from 'querystring';

import mainRouter from './routes/index.js';

const app = express();

const logStream = fs.createWriteStream(path.join('log', 'app.log'), { flags: 'a' });

app.use(express.json());
app.use(morgan('combined', { stream: logStream }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  if (req.headers['content-type'] === 'application/x-www-form-urlencoded') {
    let data = '';
    req.on('data', (chunk) => (data += chunk.toString()));
    req.on('end', () => {
      const parsedFormData = queryString.parse(data);
      console.log(parsedFormData);
      req.body = parsedFormData;
      next();
    });
  } else {
    console.log(req.body);
    next();
  }
});

app.use('/', mainRouter);

app.listen(8000, () => console.log('Listening on port 8000!'));
