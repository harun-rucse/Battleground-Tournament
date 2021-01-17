const express = require('express');
const morgan = require('morgan');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'tournament_db',
});

db.connect((err) => {
  if (err) console.log('db connect failed');
  else console.log('Success');
});
// Development Logging

app.get('/api', (req, res) => {
  res.status(200).send('Hello from the server!');
});

app.get('/create_table', (req, res) => {
  const sql =
    'CREATE TABLE users(id int AUTO_INCREMENT, name varchar(50) NOT NULL, email varchar(255) NOT NULL UNIQUE,PRIMARY KEY (id))';
  db.query(sql, (err, result) => {
    if (err) throw err;
    else console.log('Table created');
  });
  res.status(200).send('All table created');
});

app.post('/api/signup', (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
  };

  const sql = 'INSERT INTO users  SET ?';
  db.query(sql, req.body, (err, result) => {
    if (err) throw err;
    else console.log(result);
  });
  res.send('Added');
});

module.exports = app;
