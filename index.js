const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
require('dotenv').config();
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`User and Post API listening on port ${port}`)
})