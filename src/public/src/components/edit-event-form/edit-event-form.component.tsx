// External
import React from 'react';
import { useDispatch } from 'react-redux';
// Redux
import { updateEventStart } from '../../redux/events/events.actions';
// Components
import EventForm from '../event-form/event-form.component';

interface EditEventFormProps {
  eventData: EventData;
  clearHandler: () => void;
}

/**
 * Logic wrapper for updating events, submitting and clearing form.
 * @author Maciej Krawczyk
 * @component
 * @param eventData content of event to update
 * @param clearHandler method resetting form state and visibility
 */
const EditEventForm: React.FC<EditEventFormProps> = ({ eventData, clearHandler }) => {
  const dispatch = useDispatch();
  const submitHandler = (values: EventData) => {
    dispatch(updateEventStart(values));
    clearHandler();
  };
  return <EventForm initialValues={eventData} submitHandler={submitHandler} clearHandler={clearHandler} />;
};

export default EditEventForm;
