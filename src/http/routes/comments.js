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
    const comment = req.body;
    const result = await create(comment);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};

const createCommentsRouter = (Router, { comments }) =>
  Router({ mergeParams: true })
    .get('/', getAll(comments))
    .post('/', create(comments));

module.exports = {
  createCommentsRouter,
};
