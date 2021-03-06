const http = require('http');
var guichetRouter = require('./routes/guichet.js');
const express = require('express');

const app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:19006');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/guichet', guichetRouter);

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});