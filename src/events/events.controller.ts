import * as express from 'express';
import Controller from '../utils/interfaces/controller.interface';
import EventsService from './events.service';
import CreateEventDto from './dto/createEvent.dto';
import UpdateEventDto from './dto/updateEvent.dto';
import validationMiddleware from '../utils/middleware/validation.middleware';
import HttpException from '../utils/exceptions/http.exception';

class EventsController implements Controller {
  public path = '/events';

  public router = express.Router();

  private eventsService: EventsService;

  constructor() {
    this.initializeRoutes();
    this.eventsService = new EventsService();
  }

  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.getEvents);
    this.router.post(`${this.path}`, validationMiddleware(CreateEventDto), this.createEvent);
    this.router.put(`${this.path}`, validationMiddleware(UpdateEventDto), this.updateEvent);
    this.router.delete(`${this.path}/:id`, this.deleteEvent);
  }

  private getEvents = async (request: express.Request, response: express.Response) => {
    const events = await this.eventsService.getEvents();
    response.json(events);
  };

  private createEvent = async (request: express.Request, response: express.Response) => {
    const eventData: CreateEventDto = request.body;
    const newEvent = await this.eventsService.createEvent(eventData);
    response.json(newEvent);
  };

  private updateEvent = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const updateData: UpdateEventDto = request.body;
    const updatedEvent = await this.eventsService.updateEvent(updateData);
    if (!updateData) {
      next(new HttpException(404, 'Event not found'));
    } else {
      response.json(updatedEvent);
    }
  };

  private deleteEvent = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    if (!request.params.id || !Number(request.params.id)) {
      next(new HttpException(400, 'Wrong event id'));
    } else {
      const deletedId = await this.eventsService.deleteEvent(Number(request.params.id));
      response.json({ id: deletedId });
    }
  };
}

export default EventsController;
