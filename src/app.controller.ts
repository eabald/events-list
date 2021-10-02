import express from 'express';
import { createServer, Server } from 'http';
import logger from './utils/logger';

class AppController {
  public PORT: number;

  public app: express.Application;

  public server: Server;

  constructor(port: number) {
    this.PORT = port;
    this.app = express();
    this.server = createServer(this.app);
  }

  public listen(): void {
    this.server.listen(this.PORT, () => logger.info(`App listening on the port ${this.PORT}`));
  }
}

export default AppController;
