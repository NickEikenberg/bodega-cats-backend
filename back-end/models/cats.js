const mongoose = require('mongoose');

const catSchema = new mongoose.Schema(
  {
    date: String,
    image: String,
  },
  { timestamps: true }
);

const Cats = mongoose.model('Cat', catSchema);

module.exports = Cats;
