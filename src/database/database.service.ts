import path from 'path';
import { Connection, createConnection, Repository, getRepository, EntityTarget } from 'typeorm';
import Event from '../events/event.entity';
import logger from '../utils/logger';

/**
 * Database connection handling service.
 * @author Maciej Krawczyk
 * @class DatabaseService
 */
class DatabaseService {
  databasePath = path.join(__dirname, '../../db.sqlite');

  /**
   * Create initial database connection.
   * @returns {(Promise<Connection | null>)}
   * @memberof DatabaseService
   */
  async connectToDatabase(): Promise<Connection | null> {
    try {
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
      return connection;
    } catch (error) {
      logger.error(error);
      return null;
    }
  }

  /**
   * Static method returning repository to interact with db.
   * @static
   * @param {EntityTarget<any>} entity
   * @returns {Repository<any>}
   * @memberof DatabaseService
   */
  public static getRepository(entity: EntityTarget<any>): Repository<any> {
    return getRepository(entity);
  }
}

export default DatabaseService;
