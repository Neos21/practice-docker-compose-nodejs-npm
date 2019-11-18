const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  console.log(new Date().toISOString(), '[/]');
  res.send('Hello World');
});

app.listen(8080, () => {
  console.log('Server Started');
});
