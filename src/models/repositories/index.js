// const { CommentRepository, MovieRepository } = require('./CRUD');
const CRUD = require('./CRUD');
const Comment = require('../Comment');
const Movie = require('../Movie');

const createRepositories = () => ({
  comment: new CRUD(Comment),
  movie: new CRUD(Movie),
});

module.exports = createRepositories;
