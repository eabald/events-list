/**
 * Exception class for handling http errors in responses.
 * @author Maciej Krawczyk
 * @class HttpException
 * @extends {Error}
 */
class HttpException extends Error {
  status: number;

  message: string;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpException;
