// External
import express from 'express';
import { createServer, Server } from 'http';
import path from 'path';
import { Connection } from 'typeorm';
import helmet from 'helmet';
// Controllers
import EventsController from './events/events.controller';
// Service
import DatabaseService from './database/database.service';
// Utils
import logger from './utils/logger';
// Middleware
import errorMiddleware from './utils/middleware/error.middleware';
import ErrorLogger from './utils/middleware/errorLogger.middleware';

/**
 * Application main controller and entrypoint
 *
 * @author Maciej Krawczyk
 * @class AppController
 */
class AppController {
  public PORT: number;

  public app: express.Application;

  public server: Server;

  public connection: Connection | null = null;

  private static = path.join(__dirname, './public');

  /**
   * Creates an instance of AppController.
   * @param {number} port
   * @memberof AppController
   */
  constructor(port: number) {
    this.PORT = port;
    this.app = express();
    this.server = createServer(this.app);
    this.initDb()
      .then(() => {
        this.initMiddleware();
        this.initModules();
        this.initializeStatic();
        this.initErrorMiddleware();
      })
      .catch((err) => logger.error(err));
  }

  /**
   * Initialize database connection.
   * @private
   * @returns {Promise<void>}
   * @memberof AppController
   */
  private async initDb(): Promise<void> {
    const databaseService = new DatabaseService();
    this.connection = await databaseService.connectToDatabase();
  }

  /**
   * Initialize application modules
   * @private
   * @memberof AppController
   */
  private initModules(): void {
    const controllers = [new EventsController()];
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  }

  /**
   * Initialize external middleware.
   * @private
   * @memberof AppController
   */
  private initMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
  }

  /**
   * Initialize error handling middleware.
   * @private
   * @memberof AppController
   */
  private initErrorMiddleware(): void {
    this.app.use(ErrorLogger);
    this.app.use(errorMiddleware);
  }

  /**
   * Initialize static content - client app.
   * @private
   * @memberof AppController
   */
  private initializeStatic(): void {
    if (process.env.NODE_ENV === 'development') {
      this.app.get('*', (request: express.Request, response: express.Response) => {
        response.redirect(`http://localhost:3000/${request.path}`);
      });
    } else {
      this.app.use(express.static(this.static));
      this.app.get('*', (request: express.Request, response: express.Response) => {
        response.sendFile('index.html', { root: this.static });
      });
    }
  }

  /**
   * Start http listening on {PORT}
   * @memberof AppController
   */
  public listen(): void {
    this.server.listen(this.PORT, () => logger.info(`App listening on the port ${this.PORT}`));
  }
}

export default AppController;
