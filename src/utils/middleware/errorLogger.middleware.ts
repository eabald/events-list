import { format, transports } from 'winston';
import expressWinston from 'express-winston';

const ErrorLogger = expressWinston.errorLogger({
  transports: [new transports.Console()],
  format: format.combine(
    format.timestamp(),
    format.metadata(),
    format.printf(
      ({ level, message, metadata }) => `${new Date(metadata.timestamp).toUTCString()} - ${level} - ${message}`
    )
  ),
});

export default ErrorLogger;
