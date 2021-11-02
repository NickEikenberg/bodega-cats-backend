const express = require('express');
const router = express.Router();
const Cats = require('../models/cats');

router.get('/', (req, res) => {
  Cats.find({}, (err, foundCats) => {
    res.json(foundCats);
  });
});

router.post('/', (req, res) => {
  Cats.create(req.body, (err, createdCat) => {
    res.json(createdCat);
  });
});

module.exports = router;
