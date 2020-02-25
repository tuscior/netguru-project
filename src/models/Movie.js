const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Movie = new Schema(
  {
    title: String,
    id: String,
  },
  { strict: false }
);

Movie.set('toJSON', {
  virtuals: true,
});

Movie.options.toJSON.transform = (_, ret) => {
  delete ret._id;
  delete ret.__v;
};

module.exports = mongoose.model('Movie', Movie);
