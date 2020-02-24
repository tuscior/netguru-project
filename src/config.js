require('dotenv').config();

const {
  API_KEY,
  DB_URL = 'mongodb://mongodb/',
  PORT = 3003,
  REQUEST_LIMIT = 25,
  ENV = 'development',
} = process.env;

const config = {
  PORT,
  REQUEST_LIMIT,
  DB_URL,
  SERVICE: 'netguru',
  VERSION: '1.0.0',
  ENV,
  KEY: API_KEY,
};

module.exports = config;
