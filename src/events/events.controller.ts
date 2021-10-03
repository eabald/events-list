// External
import * as express from 'express';
// Interfaces
import Controller from '../utils/interfaces/controller.interface';
// Services
import EventsService from './events.service';
// DTO
import CreateEventDto from './dto/createEvent.dto';
import UpdateEventDto from './dto/updateEvent.dto';
// Middleware
import validationMiddleware from '../utils/middleware/validation.middleware';
// Exceptions
import HttpException from '../utils/exceptions/http.exception';

/**
 * Controller handling api call for Event model.
 * @class EventsController
 * @implements {Controller}
 */
class EventsController implements Controller {
  public path = '/events';

  public router = express.Router();

  private eventsService: EventsService;

  /**
   *Creates an instance of EventsController.
   * @memberof EventsController
   */
  constructor() {
    this.initializeRoutes();
    this.eventsService = new EventsService();
  }

  /**
   * Initialize all routes in this controller.
   * @private
   * @memberof EventsController
   */
  private initializeRoutes(): void {
    this.router.get(`${this.path}`, this.getEvents);
    this.router.post(`${this.path}`, validationMiddleware(CreateEventDto), this.createEvent);
    this.router.put(`${this.path}`, validationMiddleware(UpdateEventDto), this.updateEvent);
    this.router.delete(`${this.path}/:id`, this.deleteEvent);
  }

  /**
   * Endpoint returning all events.
   * @method GET
   * @private
   * @memberof EventsController
   */
  private getEvents = async (request: express.Request, response: express.Response) => {
    const events = await this.eventsService.getEvents();
    response.json(events);
  };

  /**
   * Endpoint responsible for creating new events.
   * @method POST
   * @private
   * @memberof EventsController
   */
  private createEvent = async (request: express.Request, response: express.Response) => {
    const eventData: CreateEventDto = request.body;
    const newEvent = await this.eventsService.createEvent(eventData);
    response.json(newEvent);
  };

  /**
   * Endpoint responsible for updating existing events.
   * @method PUT
   * @private
   * @memberof EventsController
   */
  private updateEvent = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
    const updateData: UpdateEventDto = request.body;
    const updatedEvent = await this.eventsService.updateEvent(updateData);
    if (!updatedEvent) {
      next(new HttpException(404, 'Event not found'));
    } else {
      response.json(updatedEvent);
    }
  };

  /**
   * Endpoint responsible for deleting events.
   * @method DELETE
   * @private
   * @memberof EventsController
   */
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
