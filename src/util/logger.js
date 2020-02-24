const winston = require('winston');
const config = require('../config');
const { ENV, SERVICE, VERSION } = config;
const { format } = winston;

const formats = [
  format.timestamp(),
  format.json(),
  format.colorize(),
  format.simple(),
];

const logger = winston.createLogger({
  level: ENV === 'development' ? 'debug' : 'info',
  defaultMeta: {
    SERVICE,
    VERSION,
  },
  format: format.combine(...formats),
  transports: [new winston.transports.Console({ handleExceptions: true })],
  exitOnError: false,
});

module.exports = logger;
