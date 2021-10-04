// External
import express from 'express';
import { createServer, Server } from 'http';
import path from 'path';
import { Connection, createConnection } from 'typeorm';
import helmet from 'helmet';
import { Service } from 'typedi';
// Controllers
import EventsController from './events/events.controller';
// Utils
import logger from './utils/logger';
// Middleware
import errorMiddleware from './utils/middleware/error.middleware';
import ErrorLogger from './utils/middleware/errorLogger.middleware';
// Entities
import Event from './events/event.entity';

/**
 * Application main controller and entrypoint
 *
 * @author Maciej Krawczyk
 * @class AppController
 */
@Service()
class AppController {
  public PORT: number;

  private databasePath = path.join(__dirname, '../../db.sqlite');

  public app: express.Application;

  public server: Server;

  public connection: Connection | null = null;

  private static = path.join(__dirname, './public');

  /**
   * Creates an instance of AppController.
   * @param {number} port
   * @memberof AppController
   */
  constructor(private eventsController: EventsController) {
    this.PORT = Number(process.env.PORT);
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
    const connection = await createConnection({
      type: 'sqlite',
      database: this.databasePath,
      logging: process.env.NODE_ENV === 'development',
      synchronize: process.env.NODE_ENV === 'development',
      entities: [Event],
    });
    logger.info(
      `Database connection success. Connection name: '${connection.name}' Database: '${connection.options.database}'`
    );
  }

  /**
   * Initialize application modules
   * @private
   * @memberof AppController
   */
  private initModules(): void {
    const controllers = [this.eventsController];
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
