const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const msg = 'Hello World';
  res.send(msg);
});

module.exports = app;
