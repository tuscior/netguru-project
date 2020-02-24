const fetch = require('node-fetch');
const { buildQuery } = require('../util/functions');
const API_URL = 'http://omdbapi.com/?';
const config = require('../config');

const getMovies = Movies => async () => {
  const results = await Movies.getAll();
  return results;
};

const standardizeQueryParams = movie => ({
  t: movie.title,
  i: movie.id,
  type: movie.type,
  y: String(movie.year),
  plot: movie.plot,
  apikey: config.KEY,
});

// CHECK IF EXISTS IN DB, LATE RMAKE REQUEST

const createMovie = Movies => async movie => {
  const movieInDatabase = await Movies.getOne({ imdbID: movie.id });
  if (movieInDatabase) {
    return movieInDatabase;
  }
  const query = standardizeQueryParams(movie);
  const URL = API_URL + buildQuery(query);
  const response = await fetch(URL);
  const imdbMovie = await response.json();
  if (imdbMovie.Response !== 'False') {
    const created = await Movies.create(imdbMovie);
    return created;
  }
  return imdbMovie;
};

module.exports = {
  getMovies,
  createMovie,
};
