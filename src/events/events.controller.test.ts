import express from 'express';
import request from 'supertest';
import EventsController from './events.controller';
import EventsService from './events.service';

describe('Events controller', () => {
  const FakeEventsService: EventsService = {
    databaseService: {
      getEventsRepository: jest.fn(),
    },
    getEvents: jest.fn(() => Promise.resolve([])),
    createEvent: jest.fn((data: any) => Promise.resolve(data)),
    updateEvent: jest.fn((data: any) => (data.id === 1 ? Promise.resolve(data) : Promise.resolve(null))),
    deleteEvent: jest.fn((id: number) => Promise.resolve(id)),
  };
  const eventsController = new EventsController(FakeEventsService);
  const app = express();
  app.use(express.json());
  app.use(eventsController.router);
  const testData = {
    firstName: 'John',
    lastName: 'Doe8',
    email: 'john.doe@test.com',
    date: '2021-10-02',
  };
  describe('GET /events', () => {
    it('responds 200', async () => {
      const result = await request(app).get('/events').send();
      expect(result.status).toBe(200);
    });
    it('responds with json', async () => {
      const result = await request(app).get('/events').send();
      expect(result.type).toEqual(expect.stringContaining('json'));
    });
    it('responds with []', async () => {
      const result = await request(app).get('/events').send();
      expect(result.body).toEqual([]);
    });
  });

  describe('POST /events', () => {
    it('responds 400 when no data', async () => {
      const result = await request(app).post('/events').send();
      expect(result.status).toBe(400);
    });
    it('responds 200 when correct data', async () => {
      const result = await request(app).post('/events').set('Accept', 'application/json').send(testData);
      expect(result.status).toBe(200);
    });
    it('responds with json', async () => {
      const result = await request(app).post('/events').set('Accept', 'application/json').send(testData);
      expect(result.type).toEqual(expect.stringContaining('json'));
    });
    it('responds with new event', async () => {
      const result = await request(app).post('/events').set('Accept', 'application/json').send(testData);
      expect(result.body).toEqual(testData);
    });
  });

  describe('PUT /events', () => {
    it('responds 400 when no data', async () => {
      const result = await request(app).put('/events').send();
      expect(result.status).toBe(400);
    });
    it('responds 200 when correct data', async () => {
      const result = await request(app)
        .put('/events')
        .set('Accept', 'application/json')
        .send({ ...testData, id: 1 });
      expect(result.status).toBe(200);
    });
    it('responds 404 when event not found', async () => {
      const result = await request(app)
        .put('/events')
        .set('Accept', 'application/json')
        .send({ ...testData, id: 5000 });
      expect(result.status).toBe(404);
    });
    it('responds with json', async () => {
      const result = await request(app)
        .put('/events')
        .set('Accept', 'application/json')
        .send({ ...testData, id: 1 });
      expect(result.type).toEqual(expect.stringContaining('json'));
    });
    it('responds with updated event', async () => {
      const result = await request(app)
        .put('/events')
        .set('Accept', 'application/json')
        .send({ ...testData, id: 1 });
      expect(result.body).toEqual({ ...testData, id: 1 });
    });
  });
  describe('DELETE /events', () => {
    it('responds 404 when no id', async () => {
      const result = await request(app).delete('/events').send();
      expect(result.status).toBe(404);
    });
    it('responds 400 when wrong id', async () => {
      const result = await request(app).delete('/events/abc').send();
      expect(result.status).toBe(400);
    });
    it('responds 200 when correct id', async () => {
      const result = await request(app).delete('/events/1').send();
      expect(result.status).toBe(200);
    });
    it('responds with json', async () => {
      const result = await request(app).delete('/events/1').send();
      expect(result.type).toEqual(expect.stringContaining('json'));
    });
    it('responds with deleted event id', async () => {
      const result = await request(app).delete('/events/1').send();
      expect(result.body).toEqual({ id: 1 });
    });
  });
});
