const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    date: Date,
  },
  { strict: true }
);

module.exports = mongoose.model('Comment', Comment);
