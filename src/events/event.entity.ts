import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Typeorm entity for db interaction with events table.
 * @class Event
 */
@Entity('events')
class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'first_name', length: 128 })
  firstName: string;

  @Column({ name: 'last_name', length: 128 })
  lastName: string;

  @Column({ name: 'email', length: 128 })
  email: string;

  @Column({ name: 'event_date', type: 'date' })
  date: Date;
}

export default Event;
