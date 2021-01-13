const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());

// Development Logging
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.get('/api', (req, res) => {
  res.status(200).send('Hello from the server!');
});

module.exports = app;
