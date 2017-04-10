import express from 'express';
import axios from 'axios';
import data from '../data/data.json';
import { Observable } from 'rxjs';

const app = express();
const PORT = process.env.NODE_ENV || 80;

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

app.get('/events', (req, res, next) => {
  const getEvents = Observable
    .fromPromise(axios.get('http://localhost:3350/events'));
  
  const subScr = getEvents.subscribe({
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

// 
// app.get('/events', (req, res) => {
//   const getEvents = Observable
//     .fromPromise(axios.get('http://localhost:3350/events'));
//   
//   const subScr = getEvents.subscribe(val => res.send(val));
//   
//   subScr.next();
// });


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
