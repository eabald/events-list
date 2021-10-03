// External
import { NextFunction, Request, Response } from 'express';
// Exceptions
import HttpException from '../exceptions/http.exception';

/**
 * RequestHandler to cache error and send it to client in json format.
 * @author Maciej Krawczyk
 * @param {HttpException} error
 * @param {Request} request
 * @param {Response} response
 * @param {NextFunction} next
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction): void {
  const status = error.status || 500;
  const message = error.message || 'Something went wrong';
  response.status(status).json({
    status,
    message,
  });
}

export default errorMiddleware;
