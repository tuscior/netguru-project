const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    title: String,
    id: String,
  },
  { strict: false }
);

module.exports = mongoose.model('Movie', Movie);
