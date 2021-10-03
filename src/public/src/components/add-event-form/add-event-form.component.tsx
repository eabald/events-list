// External
import React from 'react';
import { useDispatch } from 'react-redux';
// Redux
import { createEventStart } from '../../redux/events/events.actions';
// Components
import EventForm from '../event-form/event-form.component';

interface AddEventFormProps {
  clearHandler: () => void;
}

/**
 * Logic wrapper for adding new events, submitting and clearing form.
 * @author Maciej Krawczyk
 * @component
 * @param clearHandler method resetting form state and visibility
 */
const AddEventForm: React.FC<AddEventFormProps> = ({ clearHandler }) => {
  const dispatch = useDispatch();
  const submitHandler = (values: EventData) => {
    dispatch(createEventStart(values));
    clearHandler();
  };
  return (
    <EventForm
      initialValues={{ firstName: '', lastName: '', email: '', date: '' }}
      submitHandler={submitHandler}
      clearHandler={clearHandler}
    />
  );
};

export default AddEventForm;
