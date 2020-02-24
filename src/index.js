const { createApp } = require('./app');
const { createHttpApp } = require('./http/server');
const { version } = require('../package.json');
const config = require('./config.js');
const { startDatabase } = require('./db');
const mongoose = require('mongoose');
const createRepositories = require('./models/repositories');

const start = async () => {
  const netguruApp = createApp(
    Object.assign(config, { version }),
    createRepositories()
  );
  const { startServer } = createHttpApp(config, netguruApp);
  const stopDatabase = startDatabase(config.DB_URL, mongoose);
  const { stopServer } = startServer();

  process.on('SIGTERM', () => {
    console.log('Closing ... ');
    stopServer();
    stopDatabase();
  });
};

start();
