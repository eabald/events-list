import EventsService from './events.service';

describe('Events service', () => {
  const testData = {
    firstName: 'John',
    lastName: 'Doe8',
    email: 'john.doe@test.com',
    date: new Date('2021-10-02'),
  };
  const databaseService = {
    getEventsRepository: jest.fn(() => ({
      create: jest.fn((data: any) => Promise.resolve(data)),
      save: jest.fn(() => Promise.resolve()),
      update: jest.fn(() => Promise.resolve()),
      delete: jest.fn(() => Promise.resolve()),
      find: jest.fn(() => Promise.resolve([])),
      findOne: jest.fn((id: number) => (id === 1 ? Promise.resolve({ ...testData, id: 1 }) : Promise.resolve(null))),
    })),
  };
  const eventsService = new EventsService(databaseService as any);
  describe('getEvents method', () => {
    it('returns array', async () => {
      const eventsArray = await eventsService.getEvents();
      expect(eventsArray).toEqual([]);
    });
  });
  describe('createEvent method', () => {
    it('returns created event', async () => {
      const newEvent = await eventsService.createEvent(testData);
      expect(newEvent).toEqual(newEvent);
    });
  });
  describe('updateEvent method', () => {
    it('returns null when event not found', async () => {
      const updatedEvent = await eventsService.updateEvent({ ...testData, id: 5 });
      expect(updatedEvent).toEqual(null);
    });
    it('returns updated event', async () => {
      const updatedEvent = await eventsService.updateEvent({ ...testData, id: 1 });
      expect(updatedEvent).toEqual({ ...testData, id: 1 });
    });
  });
  describe('deleteEvent method', () => {
    it('returns id of deleted event', async () => {
      const newEvent = await eventsService.deleteEvent(1);
      expect(newEvent).toEqual(1);
    });
  });
});
