/* eslint-disable import/no-extraneous-dependencies */
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import cors from 'cors'


import mainRouter from './routes/index.js';

const app = express();

const logStream = fs.createWriteStream(path.join('log', 'app.log'), { flags: 'a' });

app.use(morgan('combined', { stream: logStream }));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res) => {
  const data = {
    name: 'Anton',
    id: 1,
    age: 10,
    address: {
      street: 'test',
      city: 'test',
      zip: 'test',
    },
  }
  return res.json(data);
})

app.use('/', mainRouter);

app.listen(8000, () => console.log('Listening on port 8000!'));
