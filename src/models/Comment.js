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

Comment.set('toJSON', {
  virtuals: true,
});

Comment.options.toJSON.transform = (_, ret) => {
  delete ret._id;
  delete ret.__v;
};

module.exports = mongoose.model('Comment', Comment);
