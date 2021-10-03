import { format, transports } from 'winston';
import expressWinston from 'express-winston';

/**
 * Wrapper creating RequestHandler for express-winston lib for usage as middleware.
 * @author Maciej Krawczyk
 */
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
