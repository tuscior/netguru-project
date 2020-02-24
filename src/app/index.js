const { getHealth, getVersion } = require('./health');
const { getMovies, createMovie } = require('./movies');
const { getComments, createComment } = require('./comments');

const createApp = (config, { comment, movie }) => ({
  status: { getHealth, getVersion: getVersion(config) },
  comments: {
    getAll: getComments(comment),
    create: createComment(comment),
  },
  movies: {
    getAll: getMovies(movie),
    create: createMovie(movie),
  },
});

module.exports = {
  createApp,
};
