const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const limitRequests = require('express-rate-limit');
const { registerRoutes } = require('./routes');
const logger = require('../util/logger');
const apiMetrics = require('prometheus-api-metrics');
const errorMiddleware = require('../middleware/errorHandler');

const createHttpApp = (config, netguruApp) => {
  const limit = limitRequests({
    windowMs: 60 * 1000, // 1 minute
    max: config.REQUEST_LIMIT,
  });
  const app = express();
  app.use(helmet());
  app.use(limit);
  app.use(apiMetrics());
  app.use(cors());
  app.use(morgan('combined'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(registerRoutes(express.Router(), netguruApp));
  app.use(errorMiddleware);
  return {
    app,
    startServer: startHttpServer(config, app),
  };
};

const startHttpServer = (config, app) => () => {
  const server = app.listen(config.PORT, () => {
    logger.info(`Server listening on port: ${config.PORT}`);
  });
  return {
    stopServer: stopHttpServer(server),
  };
};

const stopHttpServer = server => () => {
  return new Promise((resolve, reject) => {
    server.close(() => {
      logger.info('Closing service ...');
      resolve();
    });
  });
};

module.exports = {
  createHttpApp,
};
