import express from 'express';
import data from '../data/data.json';

const app = express();
const PORT = process.env.NODE_ENV || 5000;

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api', (req, res) => {
  res.type('json').send(data);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
