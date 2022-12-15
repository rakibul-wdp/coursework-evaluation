const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const routes = require('./routes/route');
const port = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(routes);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dcaauoo.mongodb.net/?retryWrites=true&w=majority`)
.then(data => {
  console.log('Database connected');
  app.listen(port);
})
.catch(err => {
  console.log("Error occur in database", err);
});