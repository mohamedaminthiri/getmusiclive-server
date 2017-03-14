import express from 'express';

const app = express();
const PORT = process.env.NODE_ENV || 5000;

app.get('*', (req, res) => {
  res.send('working');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
