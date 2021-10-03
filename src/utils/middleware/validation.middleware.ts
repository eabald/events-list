// External
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
// Exceptions
import HttpException from '../exceptions/http.exception';

/**
 * RequestHandler transforming and validating json input based on supplied DTO.
 * @author Maciej Krawczyk
 * @param {*} type
 * @returns {RequestHandler}
 */
function validationMiddleware(type: any): RequestHandler {
  return (req, res, next) => {
    const obj = plainToClass(type, req.body || {});
    validate(obj).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const message = errors.map((error: ValidationError) => Object.values(error.constraints ?? '')).join(', ');
        next(new HttpException(400, message));
      } else {
        next();
      }
    });
  };
}

export default validationMiddleware;
