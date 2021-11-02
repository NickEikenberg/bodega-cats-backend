const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const catsController = require('./controllers/cats');
app.use('/bodega-cats', catsController);

app.get('/', (req, res) => {
  res.redirect('/bodega-cats');
});

app.listen(3000, () => {
  console.log('Listening');
});

mongoose.connect('mongodb://localhost:27017/bodegacats');
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB...');
});
