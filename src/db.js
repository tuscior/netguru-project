const logger = require('./util/logger');

const startDatabase = (url, db) => {
  db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(ok => ok)
    .catch(err => console.log(err));
  db.connection.on('connected', function() {
    logger.info(`Mongoose connected to ${url}`);
  });

  db.connection.on('error', function(err) {
    logger.info(`Mongoose error: ${err}`);
  });
  return () =>
    db.connection
      .close()
      .catch(err => logger.error(`Error disconnecting from DB: ${err}`))
      .finally(() => logger.info('Disconnected from DB'));
};

module.exports = {
  startDatabase,
};
