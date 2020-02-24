const health = ({ getHealth }) => (req, res) => {
  const result = getHealth();
  res.status(200).json(result);
};

const version = ({ getVersion }) => (req, res) => {
  const result = getVersion();
  res.status(200).json(result);
};

const createStatusRouter = (Router, { status }) => {
  return Router({ mergeParams: true })
    .use('/health', health(status))
    .use('/version', version(status));
};

module.exports = {
  createStatusRouter,
};
