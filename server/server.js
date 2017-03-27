import express from 'express';
import axios from 'axios';
import data from '../data/data.json';

const app = express();
const PORT = process.env.NODE_ENV || 5000;

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api', (req, res) => {
  res.type('json').send(data);
});

app.get('/events', (req, res) => {
  console.log('Call to events');
  axios.get('http://localhost:3350/events')
    .then(data => {
      console.log(data.data[0]);
      res.type('json').send(data.data);
      
    }).catch(err => {
      if (err) console.error(err);
    })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
