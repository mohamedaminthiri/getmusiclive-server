import express from 'express';
import axios from 'axios';
import data from '../data/data.json';
import { Observable } from 'rxjs';

console.log(Observable);

const app = express();
const PORT = process.env.NODE_ENV || 5000;

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api', (req, res) => {
  res.type('json').send(data);
});

// app.get('/events', (req, res) => {
//   axios.get('http://localhost:3350/events')
//     .then(data => {
//       res.type('json').send(data.data);
//       
//     }).catch(err => {
//       if (err) console.error(err);
//     })
// });

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
