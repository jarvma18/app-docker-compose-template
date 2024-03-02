import express from 'express';
const app = express();
const test = require('./data/access/test');

app.get('/', async function (req, res) {
  const response = await test.createTest({ name: 'test' });
  res.send(response);
})

app.listen(3000);