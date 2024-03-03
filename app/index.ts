import express from 'express';
import * as test from './data/access/test';
const app = express();

app.get('/', async function (req, res) {
  const response = await test.createTest({ name: 'test' });
  console.log(response);
  res.send(response);
})

app.listen(3000);