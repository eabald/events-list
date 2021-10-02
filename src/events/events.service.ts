import { Repository } from 'typeorm';
import Event from './event.entity';
import DatabaseService from '../database/database.service';
import CreateEventDto from './dto/createEvent.dto';
import UpdateEventDto from './dto/updateEvent.dto';

class EventsService {
  private eventsRepository: Repository<Event>;

  constructor() {
    this.eventsRepository = DatabaseService.getRepository(Event);
  }

  public async getEvents(): Promise<Event[]> {
    const events = await this.eventsRepository.find();
    return events;
  }

  public async createEvent(data: CreateEventDto): Promise<Event> {
    const newEvent = await this.eventsRepository.create(data);
    await this.eventsRepository.save(newEvent);
    return newEvent;
  }

  public async updateEvent(data: UpdateEventDto): Promise<Event | null> {
    await this.eventsRepository.update(data.id, data);
    const updatedEvent = await this.eventsRepository.findOne(data.id);
    if (updatedEvent) {
      return updatedEvent;
    }
    return null;
  }

  public async deleteEvent(id: number): Promise<number> {
    await this.eventsRepository.delete(id);
    return id;
  }
}

export default EventsService;
