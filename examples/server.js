import express from 'express';
import { blockBrowserIfNot } from '../src/index.js';
const app = express();

app.use(blockBrowserIfNot());

app.get('/hello', (req, res) => {
  res.send('world');
})

app.listen(3000);
