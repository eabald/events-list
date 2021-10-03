import api from '../root-api';

export async function getEventsRequest(): Promise<EventData[]> {
  const result = await api.get('/events');
  return result.data;
}

export async function deleteEventRequest(id: number): Promise<{ id: number }> {
  const result = await api.delete(`/events/${id}`);
  return result.data;
}

export async function createEventRequest(event: EventData): Promise<EventData> {
  const result = await api.post('/events', event);
  return result.data;
}

export async function updateEventRequest(event: EventData): Promise<EventData> {
  const result = await api.put('/events', event);
  return result.data;
}
