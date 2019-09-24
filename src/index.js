const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

mongoose.connect('mongodb://localhost:27017/relicario', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
requireDir('./models');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(require('./routes'));

app.listen(3333);