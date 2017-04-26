import express from 'express';
import axios from 'axios';
import data from '../data/data.json';
import { Observable } from 'rxjs';

const app = express();

// Port must be 80 for docker-compose mapping
const PORT = process.env.NODE_ENV || 80;

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/api', (req, res) => {
  res.type('json').send(data);
});

app.get('/events', (req, res, next) => {
  const getEvents = Observable
    .fromPromise(axios.get('http://db-middleware/events'));

  const subScr =getEvents.subscribe({
    next: (x) => {
      // res.send(x);
      // console.log((x && x.data) || {});
      // console.log(Object.keys(x.da || {}));
      // next();
      res.send((x && x.data) || {});
      return x;
    },

    error: (err) => {
      next(err);
      console.log(err);
    },

    completed: () => {
      console.log('completed');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
