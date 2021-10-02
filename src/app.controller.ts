import express from 'express';
import { createServer, Server } from 'http';
import path from 'path';
import { Connection } from 'typeorm';
import DatabaseService from './database/database.service';
import EventsController from './events/events.controller';
import logger from './utils/logger';
import errorMiddleware from './utils/middleware/error.middleware';
import ErrorLogger from './utils/middleware/errorLogger.middleware';

class AppController {
  public PORT: number;

  public app: express.Application;

  public server: Server;

  public connection: Connection | null = null;

  private static = path.join(__dirname, './public');

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

  private async initDb(): Promise<void> {
    const databaseService = new DatabaseService();
    this.connection = await databaseService.connectToDatabase();
  }

  private initModules(): void {
    const controllers = [new EventsController()];
    controllers.forEach((controller) => {
      this.app.use('/api', controller.router);
    });
  }

  private initMiddleware(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initErrorMiddleware(): void {
    this.app.use(ErrorLogger);
    this.app.use(errorMiddleware);
  }

  private initializeStatic(): void {
    if (process.env.NODE_ENV === 'development') {
      this.app.get('*', (request: express.Request, response: express.Response) => {
        response.redirect('http://localhost:3000');
      });
    } else {
      this.app.use(express.static(this.static));
      this.app.get('*', (request: express.Request, response: express.Response) => {
        response.sendFile('index.html', { root: this.static });
      });
    }
  }

  public listen(): void {
    this.server.listen(this.PORT, () => logger.info(`App listening on the port ${this.PORT}`));
  }
}

export default AppController;
