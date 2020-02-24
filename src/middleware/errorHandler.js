const logger = require('../util/logger');

const errorMiddleware = async (err, req, res, next) => {
  logger.error(err, { url: req.originalUrl });
  res.status(err.httpStatusCode || 500).json({ error: err.message });
};

module.exports = errorMiddleware;
