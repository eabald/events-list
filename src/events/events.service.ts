// External
import { Service } from 'typedi';
// Entities
import Event from './event.entity';
// Services
import DatabaseService from '../database/database.service';
// DTO
import CreateEventDto from './dto/createEvent.dto';
import UpdateEventDto from './dto/updateEvent.dto';

/**
 * Service responsible for i/o operations for Events data.
 * @author Maciej Krawczyk
 * @class EventsService
 */
@Service()
class EventsService {
  /**
   *Creates an instance of EventsService.
   * @memberof EventsService
   */
  constructor(public databaseService: DatabaseService) {}

  /**
   * Retrieve all events from db.
   * @returns {Promise<Event[]>}
   * @memberof EventsService
   */
  public async getEvents(): Promise<Event[]> {
    const events = await this.databaseService.getEventsRepository().find();
    return events;
  }

  /**
   * Create new event in db.
   * @param {CreateEventDto} data
   * @returns {Promise<Event>}
   * @memberof EventsService
   */
  public async createEvent(data: CreateEventDto): Promise<Event> {
    const newEvent = await this.databaseService.getEventsRepository().create(data);
    await this.databaseService.getEventsRepository().save(newEvent);
    return newEvent;
  }

  /**
   * Update event in db.
   * @param {UpdateEventDto} data
   * @returns {(Promise<Event | null>)}
   * @memberof EventsService
   */
  public async updateEvent(data: UpdateEventDto): Promise<Event | null> {
    await this.databaseService.getEventsRepository().update(data.id, data);
    const updatedEvent = await this.databaseService.getEventsRepository().findOne(data.id);
    if (updatedEvent) {
      return updatedEvent;
    }
    return null;
  }

  /**
   * Delete event in db.
   * @param {number} id
   * @returns {Promise<number>}
   * @memberof EventsService
   */
  public async deleteEvent(id: number): Promise<number> {
    await this.databaseService.getEventsRepository().delete(id);
    return id;
  }
}

export default EventsService;
