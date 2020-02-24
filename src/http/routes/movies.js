const getAll = ({ getAll }) => async (req, res, next) => {
  try {
    const result = await getAll();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
const create = ({ create }) => async (req, res, next) => {
  try {
    const movie = req.body;
    if (!movie.id && !movie.title) {
      res.status(422).send('Params id or title required in req.body');
    } else {
      const result = await create(movie);
      res.status(201).json(result);
    }
  } catch (err) {
    next(err);
  }
};
const createMoviesRouter = (Router, { movies }) =>
  Router({ mergeParams: true })
    .get('/', getAll(movies))
    .post('/', create(movies));

module.exports = {
  createMoviesRouter,
};
