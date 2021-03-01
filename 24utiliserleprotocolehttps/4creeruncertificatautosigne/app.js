const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.json('Hello World');
})

// app.listen(80);// port par default http
// app.listen(443);// port pour le https
module.exports = app;
