import winston, { format, transports } from 'winston';

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: format.combine(
    format.timestamp(),
    format.metadata(),
    format.printf(
      ({ level, message, metadata }) => `${new Date(metadata.timestamp).toUTCString()} - ${level} - ${message}`
    )
  ),
  transports: [new transports.Console()],
});

export default logger;
