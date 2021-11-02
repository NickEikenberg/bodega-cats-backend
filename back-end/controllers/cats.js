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

router.delete('/:id', (req, res) => {
  Cats.findByIdAndRemove(req.params.id, (err, deletedCat) => {
    res.json(deletedCat);
  });
});

router.put('/:id', (req, res) => {
  Cats.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedCat) => {
      res.json(updatedCat);
    }
  );
});

module.exports = router;
