// External
import { Repository, getRepository } from 'typeorm';
import { Service } from 'typedi';
import Event from '../events/event.entity';

/**
 * Database connection handling service.
 * @author Maciej Krawczyk
 * @class DatabaseService
 */
@Service()
class DatabaseService {
  /**
   * Method returning repository to interact with db.
   * @param {EntityTarget<any>} entity
   * @returns {Repository<any>}
   * @memberof DatabaseService
   */
  public getEventsRepository(): Repository<Event> {
    return getRepository(Event);
  }
}

export default DatabaseService;
